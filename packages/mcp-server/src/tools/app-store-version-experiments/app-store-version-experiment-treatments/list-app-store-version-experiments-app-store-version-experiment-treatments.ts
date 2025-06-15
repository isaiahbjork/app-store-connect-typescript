// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiments.app_store_version_experiment_treatments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments',
  operationId: 'appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_app_store_version_experiments_app_store_version_experiment_treatments',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appStoreVersionExperiments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionExperiments',
        items: {
          type: 'string',
          enum: [
            'name',
            'trafficProportion',
            'state',
            'reviewRequired',
            'startDate',
            'endDate',
            'appStoreVersion',
            'appStoreVersionExperimentTreatments',
            'platform',
            'app',
            'latestControlVersion',
            'controlVersions',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appStoreVersionExperimentTreatmentLocalizations',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[appStoreVersionExperimentTreatmentLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.appStoreVersionExperiments.appStoreVersionExperimentTreatments.list(id, body),
  );
};

export default { metadata, tool, handler };
