// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_app_versions.relationships.compatibility_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions',
  operationId: 'gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'delete_relationships_game_center_app_versions_compatibility_versions',
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.gameCenterAppVersions.relationships.compatibilityVersions.delete(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
