// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experience_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClipDefaultExperienceLocalizations/{id}',
  operationId: 'appClipDefaultExperienceLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_default_experience_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appClipDefaultExperienceLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appClipDefaultExperienceLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'subtitle', 'appClipDefaultExperience', 'appClipHeaderImage'],
        },
      },
      'fields[appClipHeaderImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipHeaderImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
            'appClipDefaultExperienceLocalization',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appClipDefaultExperience', 'appClipHeaderImage'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClipDefaultExperienceLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
