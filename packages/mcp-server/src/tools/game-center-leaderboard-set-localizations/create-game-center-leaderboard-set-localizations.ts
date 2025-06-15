// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_set_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboardSetLocalizations',
  operationId: 'gameCenterLeaderboardSetLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboard_set_localizations',
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
              locale: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
            },
            required: ['locale', 'name'],
          },
          relationships: {
            type: 'object',
            properties: {
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
            required: ['gameCenterLeaderboardSet'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardSetLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardSetLocalizations.create(body));
};

export default { metadata, tool, handler };
