// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionGroups/{id}',
  operationId: 'subscriptionGroups_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_groups',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionGroupLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionGroupLocalizations',
        items: {
          type: 'string',
          enum: ['name', 'customAppName', 'locale', 'state', 'subscriptionGroup'],
        },
      },
      'fields[subscriptionGroups]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionGroups',
        items: {
          type: 'string',
          enum: ['referenceName', 'subscriptions', 'subscriptionGroupLocalizations'],
        },
      },
      'fields[subscriptions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptions',
        items: {
          type: 'string',
          enum: [
            'name',
            'productId',
            'familySharable',
            'state',
            'subscriptionPeriod',
            'reviewNote',
            'groupLevel',
            'subscriptionLocalizations',
            'appStoreReviewScreenshot',
            'group',
            'introductoryOffers',
            'promotionalOffers',
            'offerCodes',
            'prices',
            'pricePoints',
            'promotedPurchase',
            'subscriptionAvailability',
            'winBackOffers',
            'images',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['subscriptions', 'subscriptionGroupLocalizations'],
        },
      },
      'limit[subscriptionGroupLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related subscriptionGroupLocalizations returned (when they are included)',
      },
      'limit[subscriptions]': {
        type: 'integer',
        description: 'maximum number of related subscriptions returned (when they are included)',
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
  return asTextContentResult(await client.subscriptionGroups.retrieve(id, body));
};

export default { metadata, tool, handler };
