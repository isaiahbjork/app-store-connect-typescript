// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_sets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterMatchmakingRuleSets',
  operationId: 'gameCenterMatchmakingRuleSets_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_matchmaking_rule_sets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              maxPlayers: {
                type: 'integer',
              },
              minPlayers: {
                type: 'integer',
              },
              referenceName: {
                type: 'string',
              },
              ruleLanguageVersion: {
                type: 'integer',
              },
            },
            required: ['maxPlayers', 'minPlayers', 'referenceName', 'ruleLanguageVersion'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterMatchmakingRuleSets'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
    required: ['data'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingRuleSets.create(body));
};

export default { metadata, tool, handler };
