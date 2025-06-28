// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submission_items',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/reviewSubmissionItems/{id}',
  operationId: 'reviewSubmissionItems_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_review_submission_items',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.reviewSubmissionItems.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
