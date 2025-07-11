// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/promotedPurchases',
  operationId: 'apps_promotedPurchases_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_promoted_purchases_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchases',
        items: {
          type: 'string',
          enum: [
            'name',
            'productId',
            'inAppPurchaseType',
            'state',
            'reviewNote',
            'familySharable',
            'contentHosting',
            'inAppPurchaseLocalizations',
            'pricePoints',
            'content',
            'appStoreReviewScreenshot',
            'promotedPurchase',
            'iapPriceSchedule',
            'inAppPurchaseAvailability',
            'images',
          ],
        },
      },
      'fields[promotedPurchases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type promotedPurchases',
        items: {
          type: 'string',
          enum: ['visibleForAllUsers', 'enabled', 'state', 'inAppPurchaseV2', 'subscription'],
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
          enum: ['inAppPurchaseV2', 'subscription'],
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
  return asTextContentResult(await client.apps.retrievePromotedPurchases(id, body));
};

export default { metadata, tool, handler };
