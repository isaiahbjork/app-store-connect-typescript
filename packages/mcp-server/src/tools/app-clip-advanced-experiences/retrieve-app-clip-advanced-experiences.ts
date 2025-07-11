// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_advanced_experiences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClipAdvancedExperiences/{id}',
  operationId: 'appClipAdvancedExperiences_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_advanced_experiences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appClip', 'headerImage', 'localizations'],
        },
      },
      'limit[localizations]': {
        type: 'integer',
        description: 'maximum number of related localizations returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClipAdvancedExperiences.retrieve(id, body));
};

export default { metadata, tool, handler };
