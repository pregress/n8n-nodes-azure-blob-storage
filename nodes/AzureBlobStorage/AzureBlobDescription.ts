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
				description: 'Create a container inside the storage account'
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'List all the containers in a storage account'
			}
		],

		default: 'getMany',
	},
	{
		displayName: 'Container name',
		name: 'container',
		type: 'string',
		noDataExpression: false,

		displayOptions: {
			show: {
				resource: ['container'],
				operation : ['create']
			},
		},
		default: ""
	},
];

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
				name: 'Upload blob',
				value: 'upload',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'List blobs inside a container'
			}
		],

		default: 'getMany',
	},
	{
		displayName: 'Container name',
		name: 'container',
		type: 'string',
		noDataExpression: false,

		displayOptions: {
			show: {
				resource: ['blob'],
			},
		},
		default: ""
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