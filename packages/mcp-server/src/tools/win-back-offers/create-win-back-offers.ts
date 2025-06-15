// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'win_back_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/winBackOffers',
  operationId: 'winBackOffers_createInstance',
};

export const tool: Tool = {
  name: 'create_win_back_offers',
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
              customerEligibilityPaidSubscriptionDurationInMonths: {
                type: 'integer',
              },
              customerEligibilityTimeSinceLastSubscribedInMonths: {
                $ref: '#/$defs/integer_range',
              },
              duration: {
                $ref: '#/$defs/subscription_offer_duration',
              },
              offerId: {
                type: 'string',
              },
              offerMode: {
                $ref: '#/$defs/subscription_offer_mode',
              },
              periodCount: {
                type: 'integer',
              },
              priority: {
                type: 'string',
                enum: ['HIGH', 'NORMAL'],
              },
              referenceName: {
                type: 'string',
              },
              startDate: {
                type: 'string',
                format: 'date',
              },
              customerEligibilityWaitBetweenOffersInMonths: {
                type: 'integer',
              },
              endDate: {
                type: 'string',
                format: 'date',
              },
              promotionIntent: {
                type: 'string',
                enum: ['NOT_PROMOTED', 'USE_AUTO_GENERATED_ASSETS'],
              },
            },
            required: [
              'customerEligibilityPaidSubscriptionDurationInMonths',
              'customerEligibilityTimeSinceLastSubscribedInMonths',
              'duration',
              'offerId',
              'offerMode',
              'periodCount',
              'priority',
              'referenceName',
              'startDate',
            ],
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
                          enum: ['winBackOfferPrices'],
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
            enum: ['winBackOffers'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
      included: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['winBackOfferPrices'],
            },
            id: {
              type: 'string',
            },
          },
          required: ['type'],
        },
      },
    },
    $defs: {
      integer_range: {
        type: 'object',
        properties: {
          maximum: {
            type: 'integer',
          },
          minimum: {
            type: 'integer',
          },
        },
        required: [],
      },
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.winBackOffers.create(body));
};

export default { metadata, tool, handler };
