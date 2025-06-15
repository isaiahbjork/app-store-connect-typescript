// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_queues.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions',
  operationId: 'gameCenterMatchmakingQueues_matchmakingSessions_getMetrics',
};

export const tool: Tool = {
  name: 'get_sessions_game_center_matchmaking_queues_metrics',
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
            'averagePlayerCount',
            '-averagePlayerCount',
            'p50PlayerCount',
            '-p50PlayerCount',
            'p95PlayerCount',
            '-p95PlayerCount',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingQueues.metrics.getSessions(id, body));
};

export default { metadata, tool, handler };
