// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboards',
  operationId: 'gameCenterLeaderboards_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboards',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              defaultFormatter: {
                $ref: '#/$defs/leaderboard_formatter',
              },
              referenceName: {
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
              vendorIdentifier: {
                type: 'string',
              },
              activityProperties: {
                type: 'object',
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
              scoreRangeEnd: {
                type: 'string',
              },
              scoreRangeStart: {
                type: 'string',
              },
              visibility: {
                type: 'string',
                enum: ['SHOW_FOR_ALL', 'HIDE_FOR_ALL'],
              },
            },
            required: [
              'defaultFormatter',
              'referenceName',
              'scoreSortType',
              'submissionType',
              'vendorIdentifier',
            ],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboards'],
          },
          relationships: {
            type: 'object',
            properties: {
              gameCenterDetail: {
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
                        enum: ['gameCenterDetails'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              gameCenterGroup: {
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
                        enum: ['gameCenterGroups'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              gameCenterLeaderboardSets: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['gameCenterLeaderboardSets'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['attributes', 'type'],
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
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboards.create(body));
};

export default { metadata, tool, handler };
