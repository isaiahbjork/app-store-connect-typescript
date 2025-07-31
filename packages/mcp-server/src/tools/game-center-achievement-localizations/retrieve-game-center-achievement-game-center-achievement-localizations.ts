// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievement_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievement',
  operationId: 'gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_game_center_achievement_game_center_achievement_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      'fields[gameCenterAchievementReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterAchievementReleases',
        items: {
          type: 'string',
          enum: ['live', 'gameCenterDetail', 'gameCenterAchievement'],
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
      'fields[gameCenterActivities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterActivities',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'vendorIdentifier',
            'playStyle',
            'minimumPlayersCount',
            'maximumPlayersCount',
            'supportsPartyCode',
            'archived',
            'properties',
            'gameCenterDetail',
            'gameCenterGroup',
            'achievements',
            'leaderboards',
            'versions',
          ],
        },
      },
      'fields[gameCenterDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterDetails',
        items: {
          type: 'string',
          enum: [
            'arcadeEnabled',
            'challengeEnabled',
            'app',
            'gameCenterAppVersions',
            'gameCenterGroup',
            'gameCenterLeaderboards',
            'gameCenterLeaderboardSets',
            'gameCenterAchievements',
            'gameCenterActivities',
            'gameCenterChallenges',
            'defaultLeaderboard',
            'defaultGroupLeaderboard',
            'achievementReleases',
            'activityReleases',
            'challengeReleases',
            'leaderboardReleases',
            'leaderboardSetReleases',
            'challengesMinimumPlatformVersions',
          ],
        },
      },
      'fields[gameCenterGroups]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterGroups',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'gameCenterDetails',
            'gameCenterLeaderboards',
            'gameCenterLeaderboardSets',
            'gameCenterAchievements',
            'gameCenterActivities',
            'gameCenterChallenges',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'gameCenterDetail',
            'gameCenterGroup',
            'groupAchievement',
            'localizations',
            'releases',
            'activity',
          ],
        },
      },
      'limit[localizations]': {
        type: 'integer',
        description: 'maximum number of related localizations returned (when they are included)',
      },
      'limit[releases]': {
        type: 'integer',
        description: 'maximum number of related releases returned (when they are included)',
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
  return asTextContentResult(
    await client.gameCenterAchievementLocalizations.retrieveGameCenterAchievement(id, body),
  );
};

export default { metadata, tool, handler };
