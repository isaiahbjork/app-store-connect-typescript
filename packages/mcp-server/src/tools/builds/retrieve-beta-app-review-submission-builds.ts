// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/builds/{id}/betaAppReviewSubmission',
  operationId: 'builds_betaAppReviewSubmission_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_app_review_submission_builds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaAppReviewSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppReviewSubmissions',
        items: {
          type: 'string',
          enum: ['betaReviewState', 'submittedDate', 'build'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.builds.retrieveBetaAppReviewSubmission(id, body));
};

export default { metadata, tool, handler };
