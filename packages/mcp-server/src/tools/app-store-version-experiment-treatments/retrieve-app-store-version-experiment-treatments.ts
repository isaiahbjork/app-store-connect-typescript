// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiment_treatments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersionExperimentTreatments/{id}',
  operationId: 'appStoreVersionExperimentTreatments_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_store_version_experiment_treatments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return asTextContentResult(await client.appStoreVersionExperimentTreatments.retrieve(id, body));
};

export default { metadata, tool, handler };
