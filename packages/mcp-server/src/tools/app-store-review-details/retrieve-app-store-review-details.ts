// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_review_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreReviewDetails/{id}',
  operationId: 'appStoreReviewDetails_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_store_review_details',
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
      'fields[appStoreReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreReviewDetails',
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
            'appStoreVersion',
            'appStoreReviewAttachments',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appStoreVersion', 'appStoreReviewAttachments'],
        },
      },
      'limit[appStoreReviewAttachments]': {
        type: 'integer',
        description: 'maximum number of related appStoreReviewAttachments returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreReviewDetails.retrieve(id, body));
};

export default { metadata, tool, handler };
