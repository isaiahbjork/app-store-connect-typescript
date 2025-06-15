// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievement_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievementImage',
  operationId: 'gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_game_center_achievement_image_game_center_achievement_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterAchievementImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterAchievementImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
            'gameCenterAchievementLocalization',
          ],
        },
      },
      'fields[gameCenterAchievementLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type gameCenterAchievementLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'beforeEarnedDescription',
            'afterEarnedDescription',
            'gameCenterAchievement',
            'gameCenterAchievementImage',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterAchievementLocalization'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.gameCenterAchievementLocalizations.retrieveGameCenterAchievementImage(id, body),
  );
};

export default { metadata, tool, handler };
