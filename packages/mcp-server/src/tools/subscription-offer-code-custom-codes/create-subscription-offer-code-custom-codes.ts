// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_code_custom_codes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptionOfferCodeCustomCodes',
  operationId: 'subscriptionOfferCodeCustomCodes_createInstance',
};

export const tool: Tool = {
  name: 'create_subscription_offer_code_custom_codes',
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
              customCode: {
                type: 'string',
              },
              numberOfCodes: {
                type: 'integer',
              },
              expirationDate: {
                type: 'string',
                format: 'date',
              },
            },
            required: ['customCode', 'numberOfCodes'],
          },
          relationships: {
            type: 'object',
            properties: {
              offerCode: {
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
                        enum: ['subscriptionOfferCodes'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['offerCode'],
          },
          type: {
            type: 'string',
            enum: ['subscriptionOfferCodeCustomCodes'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscriptionOfferCodeCustomCodes.create(body));
};

export default { metadata, tool, handler };
