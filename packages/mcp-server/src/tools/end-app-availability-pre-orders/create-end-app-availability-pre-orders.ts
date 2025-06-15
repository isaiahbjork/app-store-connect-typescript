// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'end_app_availability_pre_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/endAppAvailabilityPreOrders',
  operationId: 'endAppAvailabilityPreOrders_createInstance',
};

export const tool: Tool = {
  name: 'create_end_app_availability_pre_orders',
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
              territoryAvailabilities: {
                type: 'object',
                properties: {
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
                          enum: ['territoryAvailabilities'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
            },
            required: ['territoryAvailabilities'],
          },
          type: {
            type: 'string',
            enum: ['endAppAvailabilityPreOrders'],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.endAppAvailabilityPreOrders.create(body));
};

export default { metadata, tool, handler };
