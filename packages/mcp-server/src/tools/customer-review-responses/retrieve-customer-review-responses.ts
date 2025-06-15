// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'customer_review_responses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customerReviewResponses/{id}',
  operationId: 'customerReviewResponses_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_customer_review_responses',
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
  return asTextContentResult(await client.customerReviewResponses.retrieve(id, body));
};

export default { metadata, tool, handler };
