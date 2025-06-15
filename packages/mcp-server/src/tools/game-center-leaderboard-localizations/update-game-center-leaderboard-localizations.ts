// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterLeaderboardLocalizations/{id}',
  operationId: 'gameCenterLeaderboardLocalizations_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_leaderboard_localizations',
  description: '',
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
            enum: ['gameCenterLeaderboardLocalizations'],
          },
          attributes: {
            type: 'object',
            properties: {
              formatterOverride: {
                $ref: '#/$defs/leaderboard_formatter',
              },
              formatterSuffix: {
                type: 'string',
              },
              formatterSuffixSingular: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
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
  return asTextContentResult(await client.gameCenterLeaderboardLocalizations.update(id, body));
};

export default { metadata, tool, handler };
