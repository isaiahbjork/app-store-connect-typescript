// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_player_achievement_submissions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterPlayerAchievementSubmissions',
  operationId: 'gameCenterPlayerAchievementSubmissions_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_player_achievement_submissions',
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
              bundleId: {
                type: 'string',
              },
              percentageAchieved: {
                type: 'integer',
              },
              scopedPlayerId: {
                type: 'string',
              },
              vendorIdentifier: {
                type: 'string',
              },
              challengeIds: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              submittedDate: {
                type: 'string',
                format: 'date-time',
              },
            },
            required: ['bundleId', 'percentageAchieved', 'scopedPlayerId', 'vendorIdentifier'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterPlayerAchievementSubmissions'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterPlayerAchievementSubmissions.create(body));
};

export default { metadata, tool, handler };
