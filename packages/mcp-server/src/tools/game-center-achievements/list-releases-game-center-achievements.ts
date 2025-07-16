// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterAchievements/{id}/releases',
  operationId: 'gameCenterAchievements_releases_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_releases_game_center_achievements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      'filter[gameCenterDetail]': {
        type: 'array',
        description: "filter by id(s) of related 'gameCenterDetail'",
        items: {
          type: 'string',
        },
      },
      'filter[live]': {
        type: 'array',
        description: "filter by attribute 'live'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterDetail', 'gameCenterAchievement'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterAchievements.listReleases(id, body));
};

export default { metadata, tool, handler };
