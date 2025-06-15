// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'marketplace_webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/marketplaceWebhooks',
  operationId: 'marketplaceWebhooks_createInstance',
};

export const tool: Tool = {
  name: 'create_marketplace_webhooks',
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
              endpointUrl: {
                type: 'string',
              },
              secret: {
                type: 'string',
              },
            },
            required: ['endpointUrl', 'secret'],
          },
          type: {
            type: 'string',
            enum: ['marketplaceWebhooks'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.marketplaceWebhooks.create(body));
};

export default { metadata, tool, handler };
