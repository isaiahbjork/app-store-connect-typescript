// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/reviewSubmissions/{id}',
  operationId: 'reviewSubmissions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_review_submissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[reviewSubmissionItems]': {
        type: 'array',
        description: 'the fields to include for returned resources of type reviewSubmissionItems',
        items: {
          type: 'string',
          enum: [
            'state',
            'appStoreVersion',
            'appCustomProductPageVersion',
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appEvent',
          ],
        },
      },
      'fields[reviewSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type reviewSubmissions',
        items: {
          type: 'string',
          enum: [
            'platform',
            'submittedDate',
            'state',
            'app',
            'items',
            'appStoreVersionForReview',
            'submittedByActor',
            'lastUpdatedByActor',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'items', 'appStoreVersionForReview', 'submittedByActor', 'lastUpdatedByActor'],
        },
      },
      'limit[items]': {
        type: 'integer',
        description: 'maximum number of related items returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.reviewSubmissions.retrieve(id, body));
};

export default { metadata, tool, handler };
