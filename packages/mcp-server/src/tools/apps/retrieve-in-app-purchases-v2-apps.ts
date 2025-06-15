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
  httpPath: '/v1/apps/{id}/inAppPurchasesV2',
  operationId: 'apps_inAppPurchasesV2_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchases_v2_apps',
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
      'filter[inAppPurchaseType]': {
        type: 'array',
        description: "filter by attribute 'inAppPurchaseType'",
        items: {
          type: 'string',
          enum: ['CONSUMABLE', 'NON_CONSUMABLE', 'NON_RENEWING_SUBSCRIPTION'],
        },
      },
      'filter[name]': {
        type: 'array',
        description: "filter by attribute 'name'",
        items: {
          type: 'string',
        },
      },
      'filter[productId]': {
        type: 'array',
        description: "filter by attribute 'productId'",
        items: {
          type: 'string',
        },
      },
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: [
            'MISSING_METADATA',
            'WAITING_FOR_UPLOAD',
            'PROCESSING_CONTENT',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'inAppPurchaseLocalizations',
            'content',
            'appStoreReviewScreenshot',
            'promotedPurchase',
            'iapPriceSchedule',
            'inAppPurchaseAvailability',
            'images',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[images]': {
        type: 'integer',
        description: 'maximum number of related images returned (when they are included)',
      },
      'limit[inAppPurchaseLocalizations]': {
        type: 'integer',
        description: 'maximum number of related inAppPurchaseLocalizations returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['name', '-name', 'inAppPurchaseType', '-inAppPurchaseType'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveInAppPurchasesV2(id, body));
};

export default { metadata, tool, handler };
