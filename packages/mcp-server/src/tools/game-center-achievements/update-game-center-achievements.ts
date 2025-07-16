// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievements',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterAchievements/{id}',
  operationId: 'gameCenterAchievements_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_achievements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
            enum: ['gameCenterAchievements'],
          },
          attributes: {
            type: 'object',
            properties: {
              activityProperties: {
                type: 'object',
              },
              archived: {
                type: 'boolean',
              },
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
  return asTextContentResult(await client.gameCenterAchievements.update(id, body));
};

export default { metadata, tool, handler };
