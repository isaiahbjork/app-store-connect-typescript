// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterChallenges',
  operationId: 'gameCenterChallenges_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_challenges',
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
              challengeType: {
                type: 'string',
                enum: ['LEADERBOARD'],
              },
              referenceName: {
                type: 'string',
              },
              vendorIdentifier: {
                type: 'string',
              },
              allowedDurations: {
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['ONE_DAY', 'THREE_DAYS', 'ONE_WEEK'],
                },
              },
              repeatable: {
                type: 'boolean',
              },
            },
            required: ['challengeType', 'referenceName', 'vendorIdentifier'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterChallenges'],
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
              leaderboard: {
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
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterChallenges.create(body));
};

export default { metadata, tool, handler };
