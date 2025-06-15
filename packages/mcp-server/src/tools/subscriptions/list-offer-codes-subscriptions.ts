// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/{id}/offerCodes',
  operationId: 'subscriptions_offerCodes_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_offer_codes_subscriptions',
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
      'filter[territory]': {
        type: 'array',
        description: 'filter by territory',
        items: {
          type: 'string',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.listOfferCodes(id, body));
};

export default { metadata, tool, handler };
