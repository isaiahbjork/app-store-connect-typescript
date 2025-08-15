// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_activities',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterActivities/{id}',
  operationId: 'gameCenterActivities_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_activities',
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
            enum: ['gameCenterActivities'],
          },
          attributes: {
            type: 'object',
            properties: {
              archived: {
                type: 'boolean',
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
                additionalProperties: true,
              },
              referenceName: {
                type: 'string',
              },
              supportsPartyCode: {
                type: 'boolean',
              },
            },
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterActivities.update(id, body));
};

export default { metadata, tool, handler };
