// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_promotional_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptionPromotionalOffers',
  operationId: 'subscriptionPromotionalOffers_createInstance',
};

export const tool: Tool = {
  name: 'create_subscription_promotional_offers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              duration: {
                $ref: '#/$defs/subscription_offer_duration',
              },
              name: {
                type: 'string',
              },
              numberOfPeriods: {
                type: 'integer',
              },
              offerCode: {
                type: 'string',
              },
              offerMode: {
                $ref: '#/$defs/subscription_offer_mode',
              },
            },
            required: ['duration', 'name', 'numberOfPeriods', 'offerCode', 'offerMode'],
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
                required: ['data'],
              },
              subscription: {
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
                        enum: ['subscriptions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['prices', 'subscription'],
          },
          type: {
            type: 'string',
            enum: ['subscriptionPromotionalOffers'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
      included: {
        type: 'array',
        items: {
          $ref: '#/$defs/subscription_promotional_offer_price_inline_create',
        },
      },
    },
    $defs: {
      subscription_offer_duration: {
        type: 'string',
        enum: [
          'THREE_DAYS',
          'ONE_WEEK',
          'TWO_WEEKS',
          'ONE_MONTH',
          'TWO_MONTHS',
          'THREE_MONTHS',
          'SIX_MONTHS',
          'ONE_YEAR',
        ],
      },
      subscription_offer_mode: {
        type: 'string',
        enum: ['PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL'],
      },
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
                required: [],
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
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscriptionPromotionalOffers.create(body));
};

export default { metadata, tool, handler };
