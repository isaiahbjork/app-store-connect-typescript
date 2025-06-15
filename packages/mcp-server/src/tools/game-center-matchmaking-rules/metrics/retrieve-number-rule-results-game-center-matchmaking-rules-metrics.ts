// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rules.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults',
  operationId: 'gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics',
};

export const tool: Tool = {
  name: 'retrieve_number_rule_results_game_center_matchmaking_rules_metrics',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      granularity: {
        type: 'string',
        description: 'the granularity of the per-group dataset',
        enum: ['P1D', 'PT1H', 'PT15M'],
      },
      'filter[gameCenterMatchmakingQueue]': {
        type: 'string',
        description: "filter by 'gameCenterMatchmakingQueue' relationship dimension",
      },
      groupBy: {
        type: 'array',
        description: 'the dimension by which to group the results',
        items: {
          type: 'string',
          enum: ['gameCenterMatchmakingQueue'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum number of groups to return per page',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; metrics will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'count',
            '-count',
            'averageResult',
            '-averageResult',
            'p50Result',
            '-p50Result',
            'p95Result',
            '-p95Result',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.gameCenterMatchmakingRules.metrics.retrieveNumberRuleResults(id, body),
  );
};

export default { metadata, tool, handler };
