// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_app_store_review_screenshots',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptionAppStoreReviewScreenshots/{id}',
  operationId: 'subscriptionAppStoreReviewScreenshots_updateInstance',
};

export const tool: Tool = {
  name: 'update_subscription_app_store_review_screenshots',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['subscriptionAppStoreReviewScreenshots'],
          },
          attributes: {
            type: 'object',
            properties: {
              sourceFileChecksum: {
                type: 'string',
              },
              uploaded: {
                type: 'boolean',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionAppStoreReviewScreenshots.update(id, body));
};

export default { metadata, tool, handler };
