// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_preview_sets.relationships.app_previews',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appPreviewSets/{id}/relationships/appPreviews',
  operationId: 'appPreviewSets_appPreviews_replaceToManyRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_app_preview_sets_app_previews',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['appPreviews'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.appPreviewSets.relationships.appPreviews.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
