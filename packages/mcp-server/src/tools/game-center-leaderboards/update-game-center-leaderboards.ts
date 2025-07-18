// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboards',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterLeaderboards/{id}',
  operationId: 'gameCenterLeaderboards_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_leaderboards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
            enum: ['gameCenterLeaderboards'],
          },
          attributes: {
            type: 'object',
            properties: {
              activityProperties: {
                type: 'object',
              },
              archived: {
                type: 'boolean',
              },
              defaultFormatter: {
                $ref: '#/$defs/leaderboard_formatter',
              },
              recurrenceDuration: {
                type: 'string',
              },
              recurrenceRule: {
                type: 'string',
              },
              recurrenceStartDate: {
                type: 'string',
                format: 'date-time',
              },
              referenceName: {
                type: 'string',
              },
              scoreRangeEnd: {
                type: 'string',
              },
              scoreRangeStart: {
                type: 'string',
              },
              scoreSortType: {
                type: 'string',
                enum: ['ASC', 'DESC'],
              },
              submissionType: {
                type: 'string',
                enum: ['BEST_SCORE', 'MOST_RECENT_SCORE'],
              },
              visibility: {
                type: 'string',
                enum: ['SHOW_FOR_ALL', 'HIDE_FOR_ALL'],
              },
            },
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
    $defs: {
      leaderboard_formatter: {
        type: 'string',
        enum: [
          'INTEGER',
          'DECIMAL_POINT_1_PLACE',
          'DECIMAL_POINT_2_PLACE',
          'DECIMAL_POINT_3_PLACE',
          'ELAPSED_TIME_CENTISECOND',
          'ELAPSED_TIME_MINUTE',
          'ELAPSED_TIME_SECOND',
          'MONEY_POUND_DECIMAL',
          'MONEY_POUND',
          'MONEY_DOLLAR_DECIMAL',
          'MONEY_DOLLAR',
          'MONEY_EURO_DECIMAL',
          'MONEY_EURO',
          'MONEY_FRANC_DECIMAL',
          'MONEY_FRANC',
          'MONEY_KRONER_DECIMAL',
          'MONEY_KRONER',
          'MONEY_YEN',
        ],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterLeaderboards.update(id, body));
};

export default { metadata, tool, handler };
