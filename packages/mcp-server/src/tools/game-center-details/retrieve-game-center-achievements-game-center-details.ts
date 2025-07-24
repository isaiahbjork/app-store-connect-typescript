// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterDetails/{id}/gameCenterAchievements',
  operationId: 'gameCenterDetails_gameCenterAchievements_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_game_center_achievements_game_center_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
      'filter[archived]': {
        type: 'array',
        description: "filter by attribute 'archived'",
        items: {
          type: 'string',
        },
      },
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'filter[referenceName]': {
        type: 'array',
        description: "filter by attribute 'referenceName'",
        items: {
          type: 'string',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
  return asTextContentResult(await client.gameCenterDetails.retrieveGameCenterAchievements(id, body));
};

export default { metadata, tool, handler };
