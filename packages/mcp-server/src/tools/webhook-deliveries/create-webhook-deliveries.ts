// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'webhook_deliveries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/webhookDeliveries',
  operationId: 'webhookDeliveries_createInstance',
};

export const tool: Tool = {
  name: 'create_webhook_deliveries',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              template: {
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
                        enum: ['webhookDeliveries'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['template'],
          },
          type: {
            type: 'string',
            enum: ['webhookDeliveries'],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.webhookDeliveries.create(body));
};

export default { metadata, tool, handler };
