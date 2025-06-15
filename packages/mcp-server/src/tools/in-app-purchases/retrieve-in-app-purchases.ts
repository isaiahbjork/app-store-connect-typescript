// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/inAppPurchases/{id}',
  operationId: 'inAppPurchasesV2_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchaseAppStoreReviewScreenshots]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots',
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
            'inAppPurchaseV2',
          ],
        },
      },
      'fields[inAppPurchaseAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseAvailabilities',
        items: {
          type: 'string',
          enum: ['availableInNewTerritories', 'availableTerritories'],
        },
      },
      'fields[inAppPurchaseContents]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseContents',
        items: {
          type: 'string',
          enum: ['fileName', 'fileSize', 'url', 'lastModifiedDate', 'inAppPurchaseV2'],
        },
      },
      'fields[inAppPurchaseImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseImages',
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
            'inAppPurchase',
          ],
        },
      },
      'fields[inAppPurchaseLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseLocalizations',
        items: {
          type: 'string',
          enum: ['name', 'locale', 'description', 'state', 'inAppPurchaseV2'],
        },
      },
      'fields[inAppPurchasePricePoints]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchasePricePoints',
        items: {
          type: 'string',
          enum: ['customerPrice', 'proceeds', 'territory', 'equalizations'],
        },
      },
      'fields[inAppPurchasePriceSchedules]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchasePriceSchedules',
        items: {
          type: 'string',
          enum: ['baseTerritory', 'manualPrices', 'automaticPrices'],
        },
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
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
      'limit[images]': {
        type: 'integer',
        description: 'maximum number of related images returned (when they are included)',
      },
      'limit[inAppPurchaseLocalizations]': {
        type: 'integer',
        description: 'maximum number of related inAppPurchaseLocalizations returned (when they are included)',
      },
      'limit[pricePoints]': {
        type: 'integer',
        description: 'maximum number of related pricePoints returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.inAppPurchases.retrieve(id, body));
};

export default { metadata, tool, handler };
