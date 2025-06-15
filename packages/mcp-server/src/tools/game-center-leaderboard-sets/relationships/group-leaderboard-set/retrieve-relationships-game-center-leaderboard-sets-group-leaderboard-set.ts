// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_sets.relationships.group_leaderboard_set',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet',
  operationId: 'gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_game_center_leaderboard_sets_group_leaderboard_set',
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
  return asTextContentResult(
    await client.gameCenterLeaderboardSets.relationships.groupLeaderboardSet.retrieve(id),
  );
};

export default { metadata, tool, handler };
