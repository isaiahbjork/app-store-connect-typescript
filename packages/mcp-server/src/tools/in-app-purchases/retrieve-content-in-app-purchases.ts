// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/inAppPurchases/{id}/content',
  operationId: 'inAppPurchasesV2_content_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_content_in_app_purchases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchaseContents]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseContents',
        items: {
          type: 'string',
          enum: ['fileName', 'fileSize', 'url', 'lastModifiedDate', 'inAppPurchaseV2'],
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['inAppPurchaseV2'],
        },
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
  return asTextContentResult(await client.inAppPurchases.retrieveContent(id, body));
};

export default { metadata, tool, handler };
