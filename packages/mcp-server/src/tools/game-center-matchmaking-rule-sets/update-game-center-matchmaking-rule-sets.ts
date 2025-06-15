// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_sets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterMatchmakingRuleSets/{id}',
  operationId: 'gameCenterMatchmakingRuleSets_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_matchmaking_rule_sets',
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
            enum: ['gameCenterMatchmakingRuleSets'],
          },
          attributes: {
            type: 'object',
            properties: {
              maxPlayers: {
                type: 'integer',
              },
              minPlayers: {
                type: 'integer',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingRuleSets.update(id, body));
};

export default { metadata, tool, handler };
