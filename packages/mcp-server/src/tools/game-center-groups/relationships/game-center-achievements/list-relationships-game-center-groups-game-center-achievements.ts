// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_groups.relationships.game_center_achievements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterGroups/{id}/relationships/gameCenterAchievements',
  operationId: 'gameCenterGroups_gameCenterAchievements_getToManyRelationship',
};

export const tool: Tool = {
  name: 'list_relationships_game_center_groups_game_center_achievements',
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
    await client.gameCenterGroups.relationships.gameCenterAchievements.list(id, body),
  );
};

export default { metadata, tool, handler };
