// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_activities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterActivities',
  operationId: 'gameCenterActivities_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_activities',
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
              referenceName: {
                type: 'string',
              },
              vendorIdentifier: {
                type: 'string',
              },
              maximumPlayersCount: {
                type: 'integer',
              },
              minimumPlayersCount: {
                type: 'integer',
              },
              playStyle: {
                type: 'string',
                enum: ['ASYNCHRONOUS', 'SYNCHRONOUS'],
              },
              properties: {
                type: 'object',
              },
              supportsPartyCode: {
                type: 'boolean',
              },
            },
            required: ['referenceName', 'vendorIdentifier'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterActivities'],
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
  return asTextContentResult(await client.gameCenterActivities.create(body));
};

export default { metadata, tool, handler };
