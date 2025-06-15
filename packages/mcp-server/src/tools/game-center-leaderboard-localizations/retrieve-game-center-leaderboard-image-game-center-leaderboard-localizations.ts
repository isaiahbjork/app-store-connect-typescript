// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardLocalizations/{id}/gameCenterLeaderboardImage',
  operationId: 'gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_image_game_center_leaderboard_localizations',
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
      'fields[gameCenterLeaderboardLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type gameCenterLeaderboardLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'formatterOverride',
            'formatterSuffix',
            'formatterSuffixSingular',
            'gameCenterLeaderboard',
            'gameCenterLeaderboardImage',
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
  return asTextContentResult(
    await client.gameCenterLeaderboardLocalizations.retrieveGameCenterLeaderboardImage(id, body),
  );
};

export default { metadata, tool, handler };
