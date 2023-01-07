import { INodeProperties } from 'n8n-workflow';

// When the resource `container` is selected, this `operation` parameter will be shown.
export const containerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['container'],
			},
		},

		options: [
			{
				name: 'Create Container',
				value: 'create',
				description: 'Create a container inside the storage account',
				action: 'Create a container in a storage account',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'List all the containers in a storage account',
				action: 'Get many containers',
			},
		],

		default: 'getMany',
	},
	{
		displayName: 'Container Name',
		name: 'container',
		type: 'string',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['container'],
				operation: ['create'],
			},
		},
		default: '',
	},
];

// When the resource `blob` is selected, this `operation` parameter will be shown.
export const blobOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['blob'],
			},
		},

		options: [
			{
				name: 'Upload Blob',
				value: 'upload',
				description: 'Upload a file to blob storage inside the specified container',
				action: 'Upload a blob',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'List blobs inside a container',
				action: 'Get many blobs',
			},
		],

		default: 'getMany',
	},
	{
		displayName: 'Container Name',
		name: 'container',
		type: 'string',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['blob'],
			},
		},
		default: '',
		description: 'The name of the storage container',
	},
	{
		displayName: 'Blob Name',
		name: 'blobName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['blob'],
				operation: ['upload'],
			},
		},
		description:
			'Name of the blob that will be created. You can create folders like this: my-folder/my-file.txt.',
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		required: true,
		default: 'data',
		displayOptions: {
			show: {
				resource: ['blob'],
				operation: ['upload'],
			},
		},
		description: 'Name of the binary property to which to write the data of the read file',
	},
];
