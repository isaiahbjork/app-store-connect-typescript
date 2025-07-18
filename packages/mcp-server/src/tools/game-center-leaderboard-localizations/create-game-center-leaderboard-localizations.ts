// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboardLocalizations',
  operationId: 'gameCenterLeaderboardLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboard_localizations',
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
              locale: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              formatterOverride: {
                $ref: '#/$defs/leaderboard_formatter',
              },
              formatterSuffix: {
                type: 'string',
              },
              formatterSuffixSingular: {
                type: 'string',
              },
            },
            required: ['locale', 'name'],
          },
          relationships: {
            type: 'object',
            properties: {
              gameCenterLeaderboard: {
                type: 'object',
                properties: {
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
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['gameCenterLeaderboard'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    required: ['data'],
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
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardLocalizations.create(body));
};

export default { metadata, tool, handler };
