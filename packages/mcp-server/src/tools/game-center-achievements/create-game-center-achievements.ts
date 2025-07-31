// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterAchievements',
  operationId: 'gameCenterAchievements_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_achievements',
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
              points: {
                type: 'integer',
              },
              referenceName: {
                type: 'string',
              },
              repeatable: {
                type: 'boolean',
              },
              showBeforeEarned: {
                type: 'boolean',
              },
              vendorIdentifier: {
                type: 'string',
              },
              activityProperties: {
                type: 'object',
              },
            },
            required: ['points', 'referenceName', 'repeatable', 'showBeforeEarned', 'vendorIdentifier'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterAchievements'],
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
              },
            },
          },
        },
        required: ['attributes', 'type'],
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterAchievements.create(body));
};

export default { metadata, tool, handler };
