// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchase_availabilities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/inAppPurchaseAvailabilities',
  operationId: 'inAppPurchaseAvailabilities_createInstance',
};

export const tool: Tool = {
  name: 'create_in_app_purchase_availabilities',
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
              availableInNewTerritories: {
                type: 'boolean',
              },
            },
            required: ['availableInNewTerritories'],
          },
          relationships: {
            type: 'object',
            properties: {
              availableTerritories: {
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
                          enum: ['territories'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
              inAppPurchase: {
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
                        enum: ['inAppPurchases'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['availableTerritories', 'inAppPurchase'],
          },
          type: {
            type: 'string',
            enum: ['inAppPurchaseAvailabilities'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.inAppPurchaseAvailabilities.create(body));
};

export default { metadata, tool, handler };
