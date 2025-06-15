// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_codes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptionOfferCodes',
  operationId: 'subscriptionOfferCodes_createInstance',
};

export const tool: Tool = {
  name: 'create_subscription_offer_codes',
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
              customerEligibilities: {
                type: 'array',
                items: {
                  $ref: '#/$defs/subscription_customer_eligibility',
                },
              },
              duration: {
                $ref: '#/$defs/subscription_offer_duration',
              },
              name: {
                type: 'string',
              },
              numberOfPeriods: {
                type: 'integer',
              },
              offerEligibility: {
                $ref: '#/$defs/subscription_offer_eligibility',
              },
              offerMode: {
                $ref: '#/$defs/subscription_offer_mode',
              },
            },
            required: [
              'customerEligibilities',
              'duration',
              'name',
              'numberOfPeriods',
              'offerEligibility',
              'offerMode',
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
                          enum: ['subscriptionOfferCodePrices'],
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
            enum: ['subscriptionOfferCodes'],
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
              enum: ['subscriptionOfferCodePrices'],
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
    $defs: {
      subscription_customer_eligibility: {
        type: 'string',
        enum: ['NEW', 'EXISTING', 'EXPIRED'],
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
      subscription_offer_eligibility: {
        type: 'string',
        enum: ['STACK_WITH_INTRO_OFFERS', 'REPLACE_INTRO_OFFERS'],
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
  return asTextContentResult(await client.subscriptionOfferCodes.create(body));
};

export default { metadata, tool, handler };
