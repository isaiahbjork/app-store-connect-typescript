// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_images',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboardImages',
  operationId: 'gameCenterLeaderboardImages_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboard_images',
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
              fileName: {
                type: 'string',
              },
              fileSize: {
                type: 'integer',
              },
            },
            required: ['fileName', 'fileSize'],
          },
          relationships: {
            type: 'object',
            properties: {
              gameCenterLeaderboardLocalization: {
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
                        enum: ['gameCenterLeaderboardLocalizations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['gameCenterLeaderboardLocalization'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardImages'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardImages.create(body));
};

export default { metadata, tool, handler };
