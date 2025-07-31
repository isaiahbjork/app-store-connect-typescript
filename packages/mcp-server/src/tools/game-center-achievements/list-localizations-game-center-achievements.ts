// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterAchievements/{id}/localizations',
  operationId: 'gameCenterAchievements_localizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_localizations_game_center_achievements',
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
      'fields[gameCenterAchievements]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterAchievements',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'vendorIdentifier',
            'points',
            'showBeforeEarned',
            'repeatable',
            'archived',
            'activityProperties',
            'gameCenterDetail',
            'gameCenterGroup',
            'groupAchievement',
            'localizations',
            'releases',
            'activity',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterAchievement', 'gameCenterAchievementImage'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterAchievements.listLocalizations(id, body));
};

export default { metadata, tool, handler };
