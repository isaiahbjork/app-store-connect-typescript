// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievements.relationships.group_achievement',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterAchievements/{id}/relationships/groupAchievement',
  operationId: 'gameCenterAchievements_groupAchievement_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_game_center_achievements_group_achievement',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterAchievements.relationships.groupAchievement.retrieve(id));
};

export default { metadata, tool, handler };
