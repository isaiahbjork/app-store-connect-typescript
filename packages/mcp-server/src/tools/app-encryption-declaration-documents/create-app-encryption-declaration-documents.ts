// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_encryption_declaration_documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appEncryptionDeclarationDocuments',
  operationId: 'appEncryptionDeclarationDocuments_createInstance',
};

export const tool: Tool = {
  name: 'create_app_encryption_declaration_documents',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              fileName: {
                type: 'string',
              },
              fileSize: {
                type: 'integer',
              },
            },
            required: ['fileName', 'fileSize'],
          },
          relationships: {
            type: 'object',
            properties: {
              appEncryptionDeclaration: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['appEncryptionDeclarations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['appEncryptionDeclaration'],
          },
          type: {
            type: 'string',
            enum: ['appEncryptionDeclarationDocuments'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appEncryptionDeclarationDocuments.create(body));
};

export default { metadata, tool, handler };
