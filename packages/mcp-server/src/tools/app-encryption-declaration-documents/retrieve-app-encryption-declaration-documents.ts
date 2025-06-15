// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_encryption_declaration_documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appEncryptionDeclarationDocuments/{id}',
  operationId: 'appEncryptionDeclarationDocuments_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_encryption_declaration_documents',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appEncryptionDeclarationDocuments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEncryptionDeclarationDocuments',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'assetToken',
            'downloadUrl',
            'sourceFileChecksum',
            'uploadOperations',
            'assetDeliveryState',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appEncryptionDeclarationDocuments.retrieve(id, body));
};

export default { metadata, tool, handler };
