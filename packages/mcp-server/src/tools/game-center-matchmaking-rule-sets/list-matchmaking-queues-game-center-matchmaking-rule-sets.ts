// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingRuleSets/{id}/matchmakingQueues',
  operationId: 'gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_matchmaking_queues_game_center_matchmaking_rule_sets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterMatchmakingQueues]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterMatchmakingQueues',
        items: {
          type: 'string',
          enum: ['referenceName', 'classicMatchmakingBundleIds', 'ruleSet', 'experimentRuleSet'],
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['ruleSet', 'experimentRuleSet'],
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
  return asTextContentResult(await client.gameCenterMatchmakingRuleSets.listMatchmakingQueues(id, body));
};

export default { metadata, tool, handler };
