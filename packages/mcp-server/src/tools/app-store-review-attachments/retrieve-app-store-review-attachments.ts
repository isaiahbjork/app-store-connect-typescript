// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_review_attachments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreReviewAttachments/{id}',
  operationId: 'appStoreReviewAttachments_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_store_review_attachments',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appStoreReviewAttachments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreReviewAttachments',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'uploadOperations',
            'assetDeliveryState',
            'appStoreReviewDetail',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appStoreReviewDetail'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreReviewAttachments.retrieve(id, body));
};

export default { metadata, tool, handler };
