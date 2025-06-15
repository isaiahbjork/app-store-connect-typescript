// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_details.relationships.game_center_leaderboards',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterDetails/{id}/relationships/gameCenterLeaderboards',
  operationId: 'gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship',
};

export const tool: Tool = {
  name: 'update_game_center_leaderboards_relationships_game_center_details_game_center_leaderboards',
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
              enum: ['gameCenterLeaderboards'],
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
  await client.gameCenterDetails.relationships.gameCenterLeaderboards.updateGameCenterLeaderboards(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
