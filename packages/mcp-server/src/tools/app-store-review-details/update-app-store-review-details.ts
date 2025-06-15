// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_review_details',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appStoreReviewDetails/{id}',
  operationId: 'appStoreReviewDetails_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_store_review_details',
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
            enum: ['appStoreReviewDetails'],
          },
          attributes: {
            type: 'object',
            properties: {
              contactEmail: {
                type: 'string',
              },
              contactFirstName: {
                type: 'string',
              },
              contactLastName: {
                type: 'string',
              },
              contactPhone: {
                type: 'string',
              },
              demoAccountName: {
                type: 'string',
              },
              demoAccountPassword: {
                type: 'string',
              },
              demoAccountRequired: {
                type: 'boolean',
              },
              notes: {
                type: 'string',
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
  return asTextContentResult(await client.appStoreReviewDetails.update(id, body));
};

export default { metadata, tool, handler };
