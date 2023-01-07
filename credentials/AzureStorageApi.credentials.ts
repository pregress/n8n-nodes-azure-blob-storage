import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AzureStorageApi implements ICredentialType {
	name = 'azureStorageApi';
	displayName = 'Azure Blob Storage API';
	documentationUrl = '<your-docs-url>';
	properties: INodeProperties[] = [
		{
			displayName: 'Connection string',
			name: 'connectionString',
			type: 'string',
			default: '',
		}
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {				
				Authorization: '={{"SharedKey " + $credentials.Account + ":" + $credentials.sharedKey}}',
				Date: '={{new Date().toGMTString().replace("UTC", "GMT");}}'
			}
		},
	};

	
}
