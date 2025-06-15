// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/betaAppReviewDetail',
  operationId: 'apps_betaAppReviewDetail_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_app_review_detail_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaAppReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppReviewDetails',
        items: {
          type: 'string',
          enum: [
            'contactFirstName',
            'contactLastName',
            'contactPhone',
            'contactEmail',
            'demoAccountName',
            'demoAccountPassword',
            'demoAccountRequired',
            'notes',
            'app',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveBetaAppReviewDetail(id, body));
};

export default { metadata, tool, handler };
