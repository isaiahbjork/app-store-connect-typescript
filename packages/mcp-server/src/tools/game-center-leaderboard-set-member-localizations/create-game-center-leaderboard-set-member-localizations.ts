// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_set_member_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboardSetMemberLocalizations',
  operationId: 'gameCenterLeaderboardSetMemberLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboard_set_member_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
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
              gameCenterLeaderboardSet: {
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
                        enum: ['gameCenterLeaderboardSets'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['gameCenterLeaderboard', 'gameCenterLeaderboardSet'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardSetMemberLocalizations'],
          },
          attributes: {
            type: 'object',
            properties: {
              locale: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardSetMemberLocalizations.create(body));
};

export default { metadata, tool, handler };
