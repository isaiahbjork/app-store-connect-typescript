// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'marketplace_webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/marketplaceWebhooks/{id}',
  operationId: 'marketplaceWebhooks_updateInstance',
};

export const tool: Tool = {
  name: 'update_marketplace_webhooks',
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
            enum: ['marketplaceWebhooks'],
          },
          attributes: {
            type: 'object',
            properties: {
              endpointUrl: {
                type: 'string',
              },
              secret: {
                type: 'string',
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
  return asTextContentResult(await client.marketplaceWebhooks.update(id, body));
};

export default { metadata, tool, handler };
