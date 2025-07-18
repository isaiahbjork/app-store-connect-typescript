// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersionLocalizations/{id}/appPreviewSets',
  operationId: 'appStoreVersionLocalizations_appPreviewSets_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_app_preview_sets_app_store_version_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appCustomProductPageLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCustomProductPageLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'promotionalText',
            'appCustomProductPageVersion',
            'appScreenshotSets',
            'appPreviewSets',
          ],
        },
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
      'fields[appStoreVersionExperimentTreatmentLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'appStoreVersionExperimentTreatment', 'appScreenshotSets', 'appPreviewSets'],
        },
      },
      'fields[appStoreVersionLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionLocalizations',
        items: {
          type: 'string',
          enum: [
            'description',
            'locale',
            'keywords',
            'marketingUrl',
            'promotionalText',
            'supportUrl',
            'whatsNew',
            'appStoreVersion',
            'appScreenshotSets',
            'appPreviewSets',
          ],
        },
      },
      'filter[appCustomProductPageLocalization]': {
        type: 'array',
        description: "filter by id(s) of related 'appCustomProductPageLocalization'",
        items: {
          type: 'string',
        },
      },
      'filter[appStoreVersionExperimentTreatmentLocalization]': {
        type: 'array',
        description: "filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'",
        items: {
          type: 'string',
        },
      },
      'filter[previewType]': {
        type: 'array',
        description: "filter by attribute 'previewType'",
        items: {
          type: 'string',
          enum: [
            'IPHONE_67',
            'IPHONE_61',
            'IPHONE_65',
            'IPHONE_58',
            'IPHONE_55',
            'IPHONE_47',
            'IPHONE_40',
            'IPHONE_35',
            'IPAD_PRO_3GEN_129',
            'IPAD_PRO_3GEN_11',
            'IPAD_PRO_129',
            'IPAD_105',
            'IPAD_97',
            'DESKTOP',
            'APPLE_TV',
            'APPLE_VISION_PRO',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'appStoreVersionLocalization',
            'appCustomProductPageLocalization',
            'appStoreVersionExperimentTreatmentLocalization',
            'appPreviews',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[appPreviews]': {
        type: 'integer',
        description: 'maximum number of related appPreviews returned (when they are included)',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersionLocalizations.listAppPreviewSets(id, body));
};

export default { metadata, tool, handler };
