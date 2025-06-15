// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_page_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appCustomProductPageLocalizations/{id}/appScreenshotSets',
  operationId: 'appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_app_screenshot_sets_app_custom_product_page_localizations',
  description: '',
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
      'fields[appScreenshots]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appScreenshots',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'imageAsset',
            'assetToken',
            'assetType',
            'uploadOperations',
            'assetDeliveryState',
            'appScreenshotSet',
          ],
        },
      },
      'fields[appScreenshotSets]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appScreenshotSets',
        items: {
          type: 'string',
          enum: [
            'screenshotDisplayType',
            'appStoreVersionLocalization',
            'appCustomProductPageLocalization',
            'appStoreVersionExperimentTreatmentLocalization',
            'appScreenshots',
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
      'filter[appStoreVersionExperimentTreatmentLocalization]': {
        type: 'array',
        description: "filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'",
        items: {
          type: 'string',
        },
      },
      'filter[appStoreVersionLocalization]': {
        type: 'array',
        description: "filter by id(s) of related 'appStoreVersionLocalization'",
        items: {
          type: 'string',
        },
      },
      'filter[screenshotDisplayType]': {
        type: 'array',
        description: "filter by attribute 'screenshotDisplayType'",
        items: {
          type: 'string',
          enum: [
            'APP_IPHONE_67',
            'APP_IPHONE_61',
            'APP_IPHONE_65',
            'APP_IPHONE_58',
            'APP_IPHONE_55',
            'APP_IPHONE_47',
            'APP_IPHONE_40',
            'APP_IPHONE_35',
            'APP_IPAD_PRO_3GEN_129',
            'APP_IPAD_PRO_3GEN_11',
            'APP_IPAD_PRO_129',
            'APP_IPAD_105',
            'APP_IPAD_97',
            'APP_DESKTOP',
            'APP_WATCH_ULTRA',
            'APP_WATCH_SERIES_10',
            'APP_WATCH_SERIES_7',
            'APP_WATCH_SERIES_4',
            'APP_WATCH_SERIES_3',
            'APP_APPLE_TV',
            'APP_APPLE_VISION_PRO',
            'IMESSAGE_APP_IPHONE_67',
            'IMESSAGE_APP_IPHONE_61',
            'IMESSAGE_APP_IPHONE_65',
            'IMESSAGE_APP_IPHONE_58',
            'IMESSAGE_APP_IPHONE_55',
            'IMESSAGE_APP_IPHONE_47',
            'IMESSAGE_APP_IPHONE_40',
            'IMESSAGE_APP_IPAD_PRO_3GEN_129',
            'IMESSAGE_APP_IPAD_PRO_3GEN_11',
            'IMESSAGE_APP_IPAD_PRO_129',
            'IMESSAGE_APP_IPAD_105',
            'IMESSAGE_APP_IPAD_97',
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
            'appScreenshots',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[appScreenshots]': {
        type: 'integer',
        description: 'maximum number of related appScreenshots returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appCustomProductPageLocalizations.listAppScreenshotSets(id, body));
};

export default { metadata, tool, handler };
