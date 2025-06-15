// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_images',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardImages/{id}',
  operationId: 'gameCenterLeaderboardImages_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_images',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterLeaderboardImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
            'gameCenterLeaderboardLocalization',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterLeaderboardLocalization'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardImages.retrieve(id, body));
};

export default { metadata, tool, handler };
