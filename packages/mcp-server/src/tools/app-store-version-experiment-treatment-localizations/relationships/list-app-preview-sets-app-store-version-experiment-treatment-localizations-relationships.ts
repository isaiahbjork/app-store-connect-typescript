// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiment_treatment_localizations.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/relationships/appPreviewSets',
  operationId: 'appStoreVersionExperimentTreatmentLocalizations_appPreviewSets_getToManyRelationship',
};

export const tool: Tool = {
  name: 'list_app_preview_sets_app_store_version_experiment_treatment_localizations_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.appStoreVersionExperimentTreatmentLocalizations.relationships.listAppPreviewSets(id, body),
  );
};

export default { metadata, tool, handler };
