// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions.relationships.prices',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/{id}/relationships/prices',
  operationId: 'subscriptions_prices_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'delete_relationships_subscriptions_prices',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['subscriptionPrices'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
    required: ['id', 'data'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.subscriptions.relationships.prices.delete(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
