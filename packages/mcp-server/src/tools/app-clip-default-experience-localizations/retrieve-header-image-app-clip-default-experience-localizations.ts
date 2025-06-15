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
  httpPath: '/v1/appClipDefaultExperienceLocalizations/{id}/appClipHeaderImage',
  operationId: 'appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_header_image_app_clip_default_experience_localizations',
  description: '',
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
          enum: ['appClipDefaultExperienceLocalization'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.appClipDefaultExperienceLocalizations.retrieveHeaderImage(id, body),
  );
};

export default { metadata, tool, handler };
