// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClips/{id}/appClipAdvancedExperiences',
  operationId: 'appClips_appClipAdvancedExperiences_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_advanced_experiences_app_clips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appClipAdvancedExperienceImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipAdvancedExperienceImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
          ],
        },
      },
      'fields[appClipAdvancedExperienceLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appClipAdvancedExperienceLocalizations',
        items: {
          type: 'string',
          enum: ['language', 'title', 'subtitle'],
        },
      },
      'fields[appClipAdvancedExperiences]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipAdvancedExperiences',
        items: {
          type: 'string',
          enum: [
            'link',
            'version',
            'status',
            'action',
            'isPoweredBy',
            'place',
            'placeStatus',
            'businessCategory',
            'defaultLanguage',
            'appClip',
            'headerImage',
            'localizations',
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
      'filter[action]': {
        type: 'array',
        description: "filter by attribute 'action'",
        items: {
          type: 'string',
          enum: ['OPEN', 'VIEW', 'PLAY'],
        },
      },
      'filter[placeStatus]': {
        type: 'array',
        description: "filter by attribute 'placeStatus'",
        items: {
          type: 'string',
          enum: ['PENDING', 'MATCHED', 'NO_MATCH'],
        },
      },
      'filter[status]': {
        type: 'array',
        description: "filter by attribute 'status'",
        items: {
          type: 'string',
          enum: ['RECEIVED', 'DEACTIVATED', 'APP_TRANSFER_IN_PROGRESS'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appClip', 'headerImage', 'localizations'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[localizations]': {
        type: 'integer',
        description: 'maximum number of related localizations returned (when they are included)',
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
  return asTextContentResult(await client.appClips.listAdvancedExperiences(id, body));
};

export default { metadata, tool, handler };
