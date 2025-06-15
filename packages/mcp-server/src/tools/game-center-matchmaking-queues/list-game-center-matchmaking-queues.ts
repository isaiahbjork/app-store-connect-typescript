// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_queues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingQueues',
  operationId: 'gameCenterMatchmakingQueues_getCollection',
};

export const tool: Tool = {
  name: 'list_game_center_matchmaking_queues',
  description: '',
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
  const body = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingQueues.list(body));
};

export default { metadata, tool, handler };
