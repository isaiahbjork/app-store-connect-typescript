// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenges',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterChallenges/{id}',
  operationId: 'gameCenterChallenges_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_challenges',
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
            enum: ['gameCenterChallenges'],
          },
          attributes: {
            type: 'object',
            properties: {
              allowedDurations: {
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['ONE_DAY', 'THREE_DAYS', 'ONE_WEEK'],
                },
              },
              archived: {
                type: 'boolean',
              },
              referenceName: {
                type: 'string',
              },
              repeatable: {
                type: 'boolean',
              },
            },
            required: [],
          },
          relationships: {
            type: 'object',
            properties: {
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
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterChallenges.update(id, body));
};

export default { metadata, tool, handler };
