// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_encryption_declarations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appEncryptionDeclarations',
  operationId: 'appEncryptionDeclarations_createInstance',
};

export const tool: Tool = {
  name: 'create_app_encryption_declarations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              appDescription: {
                type: 'string',
              },
              availableOnFrenchStore: {
                type: 'boolean',
              },
              containsProprietaryCryptography: {
                type: 'boolean',
              },
              containsThirdPartyCryptography: {
                type: 'boolean',
              },
            },
            required: [
              'appDescription',
              'availableOnFrenchStore',
              'containsProprietaryCryptography',
              'containsThirdPartyCryptography',
            ],
          },
          relationships: {
            type: 'object',
            properties: {
              app: {
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
                        enum: ['apps'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['appEncryptionDeclarations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appEncryptionDeclarations.create(body));
};

export default { metadata, tool, handler };
