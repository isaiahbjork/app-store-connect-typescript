// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_introductory_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptionIntroductoryOffers',
  operationId: 'subscriptionIntroductoryOffers_createInstance',
};

export const tool: Tool = {
  name: 'create_subscription_introductory_offers',
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
              duration: {
                $ref: '#/$defs/subscription_offer_duration',
              },
              numberOfPeriods: {
                type: 'integer',
              },
              offerMode: {
                $ref: '#/$defs/subscription_offer_mode',
              },
              endDate: {
                type: 'string',
                format: 'date',
              },
              startDate: {
                type: 'string',
                format: 'date',
              },
            },
            required: ['duration', 'numberOfPeriods', 'offerMode'],
          },
          relationships: {
            type: 'object',
            properties: {
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
            required: ['subscription'],
          },
          type: {
            type: 'string',
            enum: ['subscriptionIntroductoryOffers'],
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
              enum: ['subscriptionPricePoints'],
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
  return asTextContentResult(await client.subscriptionIntroductoryOffers.create(body));
};

export default { metadata, tool, handler };
