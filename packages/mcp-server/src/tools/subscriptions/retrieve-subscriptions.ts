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
  httpPath: '/v1/subscriptions/{id}',
  operationId: 'subscriptions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscriptions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[promotedPurchases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type promotedPurchases',
        items: {
          type: 'string',
          enum: ['visibleForAllUsers', 'enabled', 'state', 'inAppPurchaseV2', 'subscription'],
        },
      },
      'fields[subscriptionAppStoreReviewScreenshots]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'imageAsset',
            'assetToken',
            'assetType',
            'uploadOperations',
            'assetDeliveryState',
            'subscription',
          ],
        },
      },
      'fields[subscriptionAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionAvailabilities',
        items: {
          type: 'string',
          enum: ['availableInNewTerritories', 'availableTerritories'],
        },
      },
      'fields[subscriptionImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'assetToken',
            'imageAsset',
            'uploadOperations',
            'state',
            'subscription',
          ],
        },
      },
      'fields[subscriptionIntroductoryOffers]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionIntroductoryOffers',
        items: {
          type: 'string',
          enum: [
            'startDate',
            'endDate',
            'duration',
            'offerMode',
            'numberOfPeriods',
            'subscription',
            'territory',
            'subscriptionPricePoint',
          ],
        },
      },
      'fields[subscriptionLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionLocalizations',
        items: {
          type: 'string',
          enum: ['name', 'locale', 'description', 'state', 'subscription'],
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
      'fields[subscriptionPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionPrices',
        items: {
          type: 'string',
          enum: ['startDate', 'preserved', 'territory', 'subscriptionPricePoint'],
        },
      },
      'fields[subscriptionPromotionalOffers]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionPromotionalOffers',
        items: {
          type: 'string',
          enum: ['duration', 'name', 'numberOfPeriods', 'offerCode', 'offerMode', 'subscription', 'prices'],
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
          enum: [
            'subscriptionLocalizations',
            'appStoreReviewScreenshot',
            'group',
            'introductoryOffers',
            'promotionalOffers',
            'offerCodes',
            'prices',
            'promotedPurchase',
            'subscriptionAvailability',
            'winBackOffers',
            'images',
          ],
        },
      },
      'limit[images]': {
        type: 'integer',
        description: 'maximum number of related images returned (when they are included)',
      },
      'limit[introductoryOffers]': {
        type: 'integer',
        description: 'maximum number of related introductoryOffers returned (when they are included)',
      },
      'limit[offerCodes]': {
        type: 'integer',
        description: 'maximum number of related offerCodes returned (when they are included)',
      },
      'limit[prices]': {
        type: 'integer',
        description: 'maximum number of related prices returned (when they are included)',
      },
      'limit[promotionalOffers]': {
        type: 'integer',
        description: 'maximum number of related promotionalOffers returned (when they are included)',
      },
      'limit[subscriptionLocalizations]': {
        type: 'integer',
        description: 'maximum number of related subscriptionLocalizations returned (when they are included)',
      },
      'limit[winBackOffers]': {
        type: 'integer',
        description: 'maximum number of related winBackOffers returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.retrieve(id, body));
};

export default { metadata, tool, handler };
