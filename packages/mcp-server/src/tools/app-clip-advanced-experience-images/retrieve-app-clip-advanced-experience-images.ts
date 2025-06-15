// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_advanced_experience_images',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClipAdvancedExperienceImages/{id}',
  operationId: 'appClipAdvancedExperienceImages_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_advanced_experience_images',
  description: '',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClipAdvancedExperienceImages.retrieve(id, body));
};

export default { metadata, tool, handler };
