// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_advanced_experience_images',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appClipAdvancedExperienceImages',
  operationId: 'appClipAdvancedExperienceImages_createInstance',
};

export const tool: Tool = {
  name: 'create_app_clip_advanced_experience_images',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              fileName: {
                type: 'string',
              },
              fileSize: {
                type: 'integer',
              },
            },
            required: ['fileName', 'fileSize'],
          },
          type: {
            type: 'string',
            enum: ['appClipAdvancedExperienceImages'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appClipAdvancedExperienceImages.create(body));
};

export default { metadata, tool, handler };
