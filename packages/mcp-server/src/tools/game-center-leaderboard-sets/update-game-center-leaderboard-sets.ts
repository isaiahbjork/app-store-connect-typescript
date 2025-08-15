// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_sets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterLeaderboardSets/{id}',
  operationId: 'gameCenterLeaderboardSets_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_leaderboard_sets',
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
          attributes: {
            type: 'object',
            properties: {
              referenceName: {
                type: 'string',
              },
            },
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
  return asTextContentResult(await client.gameCenterLeaderboardSets.update(id, body));
};

export default { metadata, tool, handler };
