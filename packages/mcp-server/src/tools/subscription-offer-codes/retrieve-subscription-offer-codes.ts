// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionOfferCodes/{id}',
  operationId: 'subscriptionOfferCodes_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_offer_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
      'fields[subscriptionOfferCodeOneTimeUseCodes]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes',
        items: {
          type: 'string',
          enum: ['numberOfCodes', 'createdDate', 'expirationDate', 'active', 'offerCode', 'values'],
        },
      },
      'fields[subscriptionOfferCodePrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionOfferCodePrices',
        items: {
          type: 'string',
          enum: ['territory', 'subscriptionPricePoint'],
        },
      },
      'fields[subscriptionOfferCodes]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionOfferCodes',
        items: {
          type: 'string',
          enum: [
            'name',
            'customerEligibilities',
            'offerEligibility',
            'duration',
            'offerMode',
            'numberOfPeriods',
            'active',
            'subscription',
            'oneTimeUseCodes',
            'customCodes',
            'prices',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['subscription', 'oneTimeUseCodes', 'customCodes', 'prices'],
        },
      },
      'limit[customCodes]': {
        type: 'integer',
        description: 'maximum number of related customCodes returned (when they are included)',
      },
      'limit[oneTimeUseCodes]': {
        type: 'integer',
        description: 'maximum number of related oneTimeUseCodes returned (when they are included)',
      },
      'limit[prices]': {
        type: 'integer',
        description: 'maximum number of related prices returned (when they are included)',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionOfferCodes.retrieve(id, body));
};

export default { metadata, tool, handler };
