// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingRuleSets',
  operationId: 'gameCenterMatchmakingRuleSets_getCollection',
};

export const tool: Tool = {
  name: 'list_game_center_matchmaking_rule_sets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      'fields[gameCenterMatchmakingQueues]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterMatchmakingQueues',
        items: {
          type: 'string',
          enum: ['referenceName', 'classicMatchmakingBundleIds', 'ruleSet', 'experimentRuleSet'],
        },
      },
      'fields[gameCenterMatchmakingRules]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterMatchmakingRules',
        items: {
          type: 'string',
          enum: ['referenceName', 'description', 'type', 'expression', 'weight'],
        },
      },
      'fields[gameCenterMatchmakingRuleSets]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterMatchmakingRuleSets',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'ruleLanguageVersion',
            'minPlayers',
            'maxPlayers',
            'teams',
            'rules',
            'matchmakingQueues',
          ],
        },
      },
      'fields[gameCenterMatchmakingTeams]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterMatchmakingTeams',
        items: {
          type: 'string',
          enum: ['referenceName', 'minPlayers', 'maxPlayers'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['teams', 'rules', 'matchmakingQueues'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[matchmakingQueues]': {
        type: 'integer',
        description: 'maximum number of related matchmakingQueues returned (when they are included)',
      },
      'limit[rules]': {
        type: 'integer',
        description: 'maximum number of related rules returned (when they are included)',
      },
      'limit[teams]': {
        type: 'integer',
        description: 'maximum number of related teams returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingRuleSets.list(body));
};

export default { metadata, tool, handler };
