// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'customer_reviews',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customerReviews/{id}/response',
  operationId: 'customerReviews_response_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_response_customer_reviews',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[customerReviewResponses]': {
        type: 'array',
        description: 'the fields to include for returned resources of type customerReviewResponses',
        items: {
          type: 'string',
          enum: ['responseBody', 'lastModifiedDate', 'state', 'review'],
        },
      },
      'fields[customerReviews]': {
        type: 'array',
        description: 'the fields to include for returned resources of type customerReviews',
        items: {
          type: 'string',
          enum: ['rating', 'title', 'body', 'reviewerNickname', 'createdDate', 'territory', 'response'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['review'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.customerReviews.retrieveResponse(id, body));
};

export default { metadata, tool, handler };
