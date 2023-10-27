![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-azure-blob-storage

![Build](https://github.com/pregress/n8n-nodes-azure-blob-storage/actions/workflows/build.yml/badge.svg)
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]

[npm-url]: https://npmjs.org/package/n8n-nodes-azure-blob-storage
[npm-version-image]: https://img.shields.io/npm/v/n8n-nodes-azure-blob-storage.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/n8n-nodes-azure-blob-storage.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/n8n-nodes-azure-blob-storage?minimal=true


This is an n8n community node. It lets you use Azure blob storage in your n8n workflows.

Azure Blob Storage is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Containers
    - List
    - Create
    - Delete
- Blobs
    - List
    - Upload
    - Get
    - Delete


More to come.

## Credentials

To use this node you need an azure account, and you need to create a storage account.

## Compatibility

Tested on: 0.209.4

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Azure blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/)

## Version history

- __0.1.0__ Updated crypto.js https://github.com/pregress/n8n-nodes-azure-blob-storage/pull/4
- __0.0.2__ Added: Get Blob, Delete Blob, Delete Container
- __0.0.1__ Inital version


____
## Build and Run

In the nodes directory:
```
npm run build
npm link
```

In `~/.n8n/nodes`
```
npm link n8n-nodes-azure-blob-storage
n8n start
```
