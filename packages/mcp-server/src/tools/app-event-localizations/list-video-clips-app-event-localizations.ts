// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_event_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appEventLocalizations/{id}/appEventVideoClips',
  operationId: 'appEventLocalizations_appEventVideoClips_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_video_clips_app_event_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appEventLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEventLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'shortDescription',
            'longDescription',
            'appEvent',
            'appEventScreenshots',
            'appEventVideoClips',
          ],
        },
      },
      'fields[appEventVideoClips]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEventVideoClips',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'previewFrameTimeCode',
            'videoUrl',
            'previewFrameImage',
            'previewImage',
            'uploadOperations',
            'assetDeliveryState',
            'videoDeliveryState',
            'appEventAssetType',
            'appEventLocalization',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appEventLocalization'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
  return asTextContentResult(await client.appEventLocalizations.listVideoClips(id, body));
};

export default { metadata, tool, handler };
