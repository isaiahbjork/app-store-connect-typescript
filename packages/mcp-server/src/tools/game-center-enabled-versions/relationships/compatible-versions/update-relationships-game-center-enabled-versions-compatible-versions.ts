// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_enabled_versions.relationships.compatible_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions',
  operationId: 'gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_game_center_enabled_versions_compatible_versions',
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
              enum: ['gameCenterEnabledVersions'],
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
  const response = await client.gameCenterEnabledVersions.relationships.compatibleVersions
    .update(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
