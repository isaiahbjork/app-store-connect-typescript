// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenges.relationships',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterChallenges/{id}/relationships/leaderboard',
  operationId: 'gameCenterChallenges_leaderboard_updateToOneRelationship',
};

export const tool: Tool = {
  name: 'update_leaderboard_game_center_challenges_relationships',
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
            enum: ['gameCenterLeaderboards'],
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.gameCenterChallenges.relationships.updateLeaderboard(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
