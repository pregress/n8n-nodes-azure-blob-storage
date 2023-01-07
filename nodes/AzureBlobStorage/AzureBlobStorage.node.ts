import { IDataObject, IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { containerOperations, blobOperations } from './AzureBlobDescription';

export class AzureBlobStorage implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Blob Storage',
		name: 'azureBlobStorage',
		icon: 'file:azureBlobStorage.svg',
		group: ['data'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Azure Blob Storage, containers and blobs.',
		defaults: {
			name: 'Azure Blob Storage',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'azureStorageApi',
				required: true,
			},
		],
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Container',
						value: 'container',
					},
					{
						name: 'Blob',
						value: 'blob',
					},
				],
				default: 'container',
			},

			...containerOperations,
			...blobOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		//Get credentials the user provided for this node
		const credentials = await this.getCredentials('azureStorageApi') as IDataObject;
		const { BlobServiceClient } = require("@azure/storage-blob");
		const blobServiceClient = BlobServiceClient.fromConnectionString(credentials.connectionString);

		if (resource === 'container') {
			if (operation === 'getMany') {
				let i = 1;
				let containers = blobServiceClient.listContainers();
				let arr: any[] = [];
				for await (const container of containers) {
					console.log(`Container ${i++}: ${container.name}`);
					arr.push(container);
				}
				return [this.helpers.returnJsonArray(arr)];
			}
			if(operation === 'create'){				
				const containerName = this.getNodeParameter('container', 0) as string;
				const containerClient = blobServiceClient.getContainerClient(containerName);
  				const createContainerResponse = await containerClient.create();
				return [this.helpers.returnJsonArray(createContainerResponse)];
			}
		}
		else if (resource === 'blob') {
			const containerName = this.getNodeParameter('container', 0) as string;
			const containerClient = blobServiceClient.getContainerClient(containerName);
			if (operation === 'getMany') {
				let i = 1;
				let blobs = containerClient.listBlobsFlat();
				let arr: any[] = [];
				for await (const blob of blobs) {
					console.log(`Blob ${i++}: ${blob.name}`);
					arr.push(blob);
				}
				return [this.helpers.returnJsonArray(arr)];
			}
			if(operation === 'upload'){
				
			}
		}

		return [this.helpers.returnJsonArray([])];
	}
}
