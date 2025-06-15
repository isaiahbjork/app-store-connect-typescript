// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/builds/{id}',
  operationId: 'builds_updateInstance',
};

export const tool: Tool = {
  name: 'update_builds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['builds'],
          },
          attributes: {
            type: 'object',
            properties: {
              expired: {
                type: 'boolean',
              },
              usesNonExemptEncryption: {
                type: 'boolean',
              },
            },
            required: [],
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
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.builds.update(id, body));
};

export default { metadata, tool, handler };
