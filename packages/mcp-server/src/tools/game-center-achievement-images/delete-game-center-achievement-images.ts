// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievement_images',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/gameCenterAchievementImages/{id}',
  operationId: 'gameCenterAchievementImages_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_game_center_achievement_images',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.gameCenterAchievementImages.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
