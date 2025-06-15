// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/{id}/winBackOffers',
  operationId: 'subscriptions_winBackOffers_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_win_back_offers_subscriptions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[winBackOfferPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type winBackOfferPrices',
        items: {
          type: 'string',
          enum: ['territory', 'subscriptionPricePoint'],
        },
      },
      'fields[winBackOffers]': {
        type: 'array',
        description: 'the fields to include for returned resources of type winBackOffers',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'offerId',
            'duration',
            'offerMode',
            'periodCount',
            'customerEligibilityPaidSubscriptionDurationInMonths',
            'customerEligibilityTimeSinceLastSubscribedInMonths',
            'customerEligibilityWaitBetweenOffersInMonths',
            'startDate',
            'endDate',
            'priority',
            'promotionIntent',
            'prices',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['prices'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[prices]': {
        type: 'integer',
        description: 'maximum number of related prices returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.listWinBackOffers(id, body));
};

export default { metadata, tool, handler };
