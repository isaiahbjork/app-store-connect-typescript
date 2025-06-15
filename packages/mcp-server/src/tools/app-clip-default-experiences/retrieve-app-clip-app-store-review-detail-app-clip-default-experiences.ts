// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experiences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClipDefaultExperiences/{id}/appClipAppStoreReviewDetail',
  operationId: 'appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_app_store_review_detail_app_clip_default_experiences',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appClipAppStoreReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipAppStoreReviewDetails',
        items: {
          type: 'string',
          enum: ['invocationUrls', 'appClipDefaultExperience'],
        },
      },
      'fields[appClipDefaultExperiences]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipDefaultExperiences',
        items: {
          type: 'string',
          enum: [
            'action',
            'appClip',
            'releaseWithAppStoreVersion',
            'appClipDefaultExperienceLocalizations',
            'appClipAppStoreReviewDetail',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appClipDefaultExperience'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.appClipDefaultExperiences.retrieveAppClipAppStoreReviewDetail(id, body),
  );
};

export default { metadata, tool, handler };
