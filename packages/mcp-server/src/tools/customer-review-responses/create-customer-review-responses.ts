// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'customer_review_responses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customerReviewResponses',
  operationId: 'customerReviewResponses_createInstance',
};

export const tool: Tool = {
  name: 'create_customer_review_responses',
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
              responseBody: {
                type: 'string',
              },
            },
            required: ['responseBody'],
          },
          relationships: {
            type: 'object',
            properties: {
              review: {
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
                        enum: ['customerReviews'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['review'],
          },
          type: {
            type: 'string',
            enum: ['customerReviewResponses'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.customerReviewResponses.create(body));
};

export default { metadata, tool, handler };
