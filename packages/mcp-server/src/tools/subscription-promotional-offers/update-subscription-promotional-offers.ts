// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_promotional_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptionPromotionalOffers/{id}',
  operationId: 'subscriptionPromotionalOffers_updateInstance',
};

export const tool: Tool = {
  name: 'update_subscription_promotional_offers',
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
            enum: ['subscriptionPromotionalOffers'],
          },
          relationships: {
            type: 'object',
            properties: {
              prices: {
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
                          enum: ['subscriptionPromotionalOfferPrices'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
              },
            },
          },
        },
        required: ['id', 'type'],
      },
      included: {
        type: 'array',
        items: {
          $ref: '#/$defs/subscription_promotional_offer_price_inline_create',
        },
      },
    },
    required: ['id', 'data'],
    $defs: {
      subscription_promotional_offer_price_inline_create: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['subscriptionPromotionalOfferPrices'],
          },
          id: {
            type: 'string',
          },
          relationships: {
            type: 'object',
            properties: {
              subscriptionPricePoint: {
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
                        enum: ['subscriptionPricePoints'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              territory: {
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
              },
            },
          },
        },
        required: ['type'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionPromotionalOffers.update(id, body));
};

export default { metadata, tool, handler };
