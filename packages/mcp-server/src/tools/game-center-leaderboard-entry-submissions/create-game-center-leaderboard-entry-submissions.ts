// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_entry_submissions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboardEntrySubmissions',
  operationId: 'gameCenterLeaderboardEntrySubmissions_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboard_entry_submissions',
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
              scopedPlayerId: {
                type: 'string',
              },
              score: {
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
              context: {
                type: 'string',
              },
              submittedDate: {
                type: 'string',
                format: 'date-time',
              },
            },
            required: ['bundleId', 'scopedPlayerId', 'score', 'vendorIdentifier'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardEntrySubmissions'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardEntrySubmissions.create(body));
};

export default { metadata, tool, handler };
