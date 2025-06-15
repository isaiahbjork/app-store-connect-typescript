// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_preview_sets.relationships.app_previews',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appPreviewSets/{id}/relationships/appPreviews',
  operationId: 'appPreviewSets_appPreviews_getToManyRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_app_preview_sets_app_previews',
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
  return asTextContentResult(await client.appPreviewSets.relationships.appPreviews.retrieve(id, body));
};

export default { metadata, tool, handler };
