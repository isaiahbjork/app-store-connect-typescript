// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionOfferCodes/{id}/oneTimeUseCodes',
  operationId: 'subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_one_time_use_codes_subscription_offer_codes',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
          enum: ['offerCode'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionOfferCodes.listOneTimeUseCodes(id, body));
};

export default { metadata, tool, handler };
