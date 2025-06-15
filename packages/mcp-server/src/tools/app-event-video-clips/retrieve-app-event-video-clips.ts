// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_event_video_clips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appEventVideoClips/{id}',
  operationId: 'appEventVideoClips_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_event_video_clips',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appEventVideoClips.retrieve(id, body));
};

export default { metadata, tool, handler };
