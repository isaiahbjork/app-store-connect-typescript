// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_price_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appPriceSchedules',
  operationId: 'appPriceSchedules_createInstance',
};

export const tool: Tool = {
  name: 'create_app_price_schedules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
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
              baseTerritory: {
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
                        enum: ['territories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              manualPrices: {
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
                          enum: ['appPrices'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
            },
            required: ['app', 'baseTerritory', 'manualPrices'],
          },
          type: {
            type: 'string',
            enum: ['appPriceSchedules'],
          },
        },
        required: ['relationships', 'type'],
      },
      included: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  enum: ['appPrices'],
                },
                id: {
                  type: 'string',
                },
              },
              required: ['type'],
            },
            {
              $ref: '#/$defs/territory_inline_create',
            },
          ],
        },
      },
    },
    $defs: {
      territory_inline_create: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['territories'],
          },
          id: {
            type: 'string',
          },
        },
        required: ['type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appPriceSchedules.create(body));
};

export default { metadata, tool, handler };
