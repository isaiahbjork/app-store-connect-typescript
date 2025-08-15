// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClips/{id}',
  operationId: 'appClips_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_clips',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      'fields[appClips]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClips',
        items: {
          type: 'string',
          enum: ['bundleId', 'app', 'appClipDefaultExperiences', 'appClipAdvancedExperiences'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'appClipDefaultExperiences'],
        },
      },
      'limit[appClipDefaultExperiences]': {
        type: 'integer',
        description: 'maximum number of related appClipDefaultExperiences returned (when they are included)',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClips.retrieve(id, body));
};

export default { metadata, tool, handler };
