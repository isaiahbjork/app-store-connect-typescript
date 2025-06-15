// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievement_releases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterAchievementReleases',
  operationId: 'gameCenterAchievementReleases_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_achievement_releases',
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
              gameCenterAchievement: {
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
                        enum: ['gameCenterAchievements'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
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
                required: ['data'],
              },
            },
            required: ['gameCenterAchievement', 'gameCenterDetail'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterAchievementReleases'],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterAchievementReleases.create(body));
};

export default { metadata, tool, handler };
