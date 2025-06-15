// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_page_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appCustomProductPageLocalizations/{id}',
  operationId: 'appCustomProductPageLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_custom_product_page_localizations',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appCustomProductPageVersion', 'appScreenshotSets', 'appPreviewSets'],
        },
      },
      'limit[appPreviewSets]': {
        type: 'integer',
        description: 'maximum number of related appPreviewSets returned (when they are included)',
      },
      'limit[appScreenshotSets]': {
        type: 'integer',
        description: 'maximum number of related appScreenshotSets returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appCustomProductPageLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
