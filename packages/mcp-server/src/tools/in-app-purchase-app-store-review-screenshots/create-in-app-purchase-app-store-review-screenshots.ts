// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchase_app_store_review_screenshots',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/inAppPurchaseAppStoreReviewScreenshots',
  operationId: 'inAppPurchaseAppStoreReviewScreenshots_createInstance',
};

export const tool: Tool = {
  name: 'create_in_app_purchase_app_store_review_screenshots',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              fileName: {
                type: 'string',
              },
              fileSize: {
                type: 'integer',
              },
            },
            required: ['fileName', 'fileSize'],
          },
          relationships: {
            type: 'object',
            properties: {
              inAppPurchaseV2: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['inAppPurchases'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['inAppPurchaseV2'],
          },
          type: {
            type: 'string',
            enum: ['inAppPurchaseAppStoreReviewScreenshots'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.inAppPurchaseAppStoreReviewScreenshots.create(body));
};

export default { metadata, tool, handler };
