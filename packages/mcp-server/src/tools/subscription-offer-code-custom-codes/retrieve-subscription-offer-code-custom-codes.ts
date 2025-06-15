// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_code_custom_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionOfferCodeCustomCodes/{id}',
  operationId: 'subscriptionOfferCodeCustomCodes_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_offer_code_custom_codes',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionOfferCodeCustomCodes]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionOfferCodeCustomCodes',
        items: {
          type: 'string',
          enum: ['customCode', 'numberOfCodes', 'createdDate', 'expirationDate', 'active', 'offerCode'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['offerCode'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionOfferCodeCustomCodes.retrieve(id, body));
};

export default { metadata, tool, handler };
