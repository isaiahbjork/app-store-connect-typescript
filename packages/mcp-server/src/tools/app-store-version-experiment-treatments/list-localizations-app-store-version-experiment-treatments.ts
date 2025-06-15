// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiment_treatments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersionExperimentTreatments/{id}/appStoreVersionExperimentTreatmentLocalizations',
  operationId:
    'appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_localizations_app_store_version_experiment_treatments',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      'fields[appStoreVersionExperimentTreatmentLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'appStoreVersionExperimentTreatment', 'appScreenshotSets', 'appPreviewSets'],
        },
      },
      'fields[appStoreVersionExperimentTreatments]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appStoreVersionExperimentTreatments',
        items: {
          type: 'string',
          enum: [
            'name',
            'appIcon',
            'appIconName',
            'promotedDate',
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appStoreVersionExperimentTreatmentLocalizations',
          ],
        },
      },
      'filter[locale]': {
        type: 'array',
        description: "filter by attribute 'locale'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appStoreVersionExperimentTreatment', 'appScreenshotSets', 'appPreviewSets'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
  return asTextContentResult(await client.appStoreVersionExperimentTreatments.listLocalizations(id, body));
};

export default { metadata, tool, handler };
