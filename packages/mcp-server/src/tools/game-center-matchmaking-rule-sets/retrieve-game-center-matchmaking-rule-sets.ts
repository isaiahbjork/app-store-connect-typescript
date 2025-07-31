// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingRuleSets/{id}',
  operationId: 'gameCenterMatchmakingRuleSets_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_matchmaking_rule_sets',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingRuleSets.retrieve(id, body));
};

export default { metadata, tool, handler };
