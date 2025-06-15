// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingRuleSets/{id}/teams',
  operationId: 'gameCenterMatchmakingRuleSets_teams_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_teams_game_center_matchmaking_rule_sets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterMatchmakingTeams]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterMatchmakingTeams',
        items: {
          type: 'string',
          enum: ['referenceName', 'minPlayers', 'maxPlayers'],
        },
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
  return asTextContentResult(await client.gameCenterMatchmakingRuleSets.listTeams(id, body));
};

export default { metadata, tool, handler };
