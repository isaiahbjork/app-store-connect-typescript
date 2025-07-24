// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_preview_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appPreviewSets/{id}/appPreviews',
  operationId: 'appPreviewSets_appPreviews_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_app_previews_app_preview_sets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appPreviews]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPreviews',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'previewFrameTimeCode',
            'mimeType',
            'videoUrl',
            'previewFrameImage',
            'previewImage',
            'uploadOperations',
            'assetDeliveryState',
            'videoDeliveryState',
            'appPreviewSet',
          ],
        },
      },
      'fields[appPreviewSets]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPreviewSets',
        items: {
          type: 'string',
          enum: [
            'previewType',
            'appStoreVersionLocalization',
            'appCustomProductPageLocalization',
            'appStoreVersionExperimentTreatmentLocalization',
            'appPreviews',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appPreviewSet'],
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
  return asTextContentResult(await client.appPreviewSets.listAppPreviews(id, body));
};

export default { metadata, tool, handler };
