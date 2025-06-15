// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/subscriptionGroups',
  operationId: 'apps_subscriptionGroups_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_subscription_groups_apps',
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
      'filter[referenceName]': {
        type: 'array',
        description: "filter by attribute 'referenceName'",
        items: {
          type: 'string',
        },
      },
      'filter[subscriptions': {
        type: 'object',
        properties: {
          'state]': {
            type: 'array',
            description: "filter by attribute 'subscriptions.state'",
            items: {
              type: 'string',
              enum: [
                'MISSING_METADATA',
                'READY_TO_SUBMIT',
                'WAITING_FOR_REVIEW',
                'IN_REVIEW',
                'DEVELOPER_ACTION_NEEDED',
                'PENDING_BINARY_APPROVAL',
                'APPROVED',
                'DEVELOPER_REMOVED_FROM_SALE',
                'REMOVED_FROM_SALE',
                'REJECTED',
              ],
            },
          },
        },
        required: [],
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['subscriptions', 'subscriptionGroupLocalizations'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['referenceName', '-referenceName'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveSubscriptionGroups(id, body));
};

export default { metadata, tool, handler };
