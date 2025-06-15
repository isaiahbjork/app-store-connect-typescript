// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_details.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterDetails/{id}/metrics/ruleBasedMatchmakingRequests',
  operationId: 'gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics',
};

export const tool: Tool = {
  name: 'retrieve_rule_based_matchmaking_requests_game_center_details_metrics',
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
      'filter[result]': {
        type: 'string',
        description: "filter by 'result' attribute dimension",
        enum: ['MATCHED', 'CANCELED', 'EXPIRED'],
      },
      groupBy: {
        type: 'array',
        description: 'the dimension by which to group the results',
        items: {
          type: 'string',
          enum: ['result'],
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
            'averageSecondsInQueue',
            '-averageSecondsInQueue',
            'p50SecondsInQueue',
            '-p50SecondsInQueue',
            'p95SecondsInQueue',
            '-p95SecondsInQueue',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.gameCenterDetails.metrics.retrieveRuleBasedMatchmakingRequests(id, body),
  );
};

export default { metadata, tool, handler };
