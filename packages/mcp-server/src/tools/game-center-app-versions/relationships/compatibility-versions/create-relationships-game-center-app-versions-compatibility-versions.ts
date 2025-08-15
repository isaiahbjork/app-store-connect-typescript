// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_app_versions.relationships.compatibility_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions',
  operationId: 'gameCenterAppVersions_compatibilityVersions_createToManyRelationship',
};

export const tool: Tool = {
  name: 'create_relationships_game_center_app_versions_compatibility_versions',
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
              enum: ['gameCenterAppVersions'],
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
  const response = await client.gameCenterAppVersions.relationships.compatibilityVersions
    .create(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
