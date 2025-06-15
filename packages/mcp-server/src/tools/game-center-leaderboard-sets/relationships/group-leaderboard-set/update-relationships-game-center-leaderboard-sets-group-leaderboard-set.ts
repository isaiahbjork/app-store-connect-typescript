// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_sets.relationships.group_leaderboard_set',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet',
  operationId: 'gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_game_center_leaderboard_sets_group_leaderboard_set',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardSets'],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.gameCenterLeaderboardSets.relationships.groupLeaderboardSet.update(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
