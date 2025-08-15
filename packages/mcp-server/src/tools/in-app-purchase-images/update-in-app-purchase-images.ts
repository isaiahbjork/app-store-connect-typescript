// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchase_images',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/inAppPurchaseImages/{id}',
  operationId: 'inAppPurchaseImages_updateInstance',
};

export const tool: Tool = {
  name: 'update_in_app_purchase_images',
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
            enum: ['inAppPurchaseImages'],
          },
          attributes: {
            type: 'object',
            properties: {
              sourceFileChecksum: {
                type: 'string',
              },
              uploaded: {
                type: 'boolean',
              },
            },
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.inAppPurchaseImages.update(id, body));
};

export default { metadata, tool, handler };
