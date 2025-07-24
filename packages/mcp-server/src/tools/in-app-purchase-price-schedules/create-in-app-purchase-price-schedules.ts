// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchase_price_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/inAppPurchasePriceSchedules',
  operationId: 'inAppPurchasePriceSchedules_createInstance',
};

export const tool: Tool = {
  name: 'create_in_app_purchase_price_schedules',
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
                          enum: ['inAppPurchasePrices'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
            },
            required: ['baseTerritory', 'inAppPurchase', 'manualPrices'],
          },
          type: {
            type: 'string',
            enum: ['inAppPurchasePriceSchedules'],
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
                  enum: ['inAppPurchasePrices'],
                },
                id: {
                  type: 'string',
                },
                attributes: {
                  type: 'object',
                  properties: {
                    endDate: {
                      type: 'string',
                      format: 'date',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date',
                    },
                  },
                },
                relationships: {
                  type: 'object',
                  properties: {
                    inAppPurchasePricePoint: {
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
                              enum: ['inAppPurchasePricePoints'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                    },
                    inAppPurchaseV2: {
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
                    },
                  },
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
    required: ['data'],
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
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.inAppPurchasePriceSchedules.create(body));
};

export default { metadata, tool, handler };
