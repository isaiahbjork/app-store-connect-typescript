// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionOfferCodes/{id}/customCodes',
  operationId: 'subscriptionOfferCodes_customCodes_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_custom_codes_subscription_offer_codes',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionOfferCodes.listCustomCodes(id, body));
};

export default { metadata, tool, handler };
