import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AzureStorageApi implements ICredentialType {
	name = 'azureStorageApi';
	displayName = 'Azure Blob Storage API';
	documentationUrl = 'https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal#view-account-access-keys';
	properties: INodeProperties[] = [
		{
			displayName: 'Connection string',
			name: 'connectionString',
			type: 'string',
			default: '',
		}
	];	
}
