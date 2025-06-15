// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterGroups/{id}/gameCenterChallenges',
  operationId: 'gameCenterGroups_gameCenterChallenges_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_game_center_challenges_game_center_groups',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterChallenges]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterChallenges',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'vendorIdentifier',
            'allowedDurations',
            'archived',
            'challengeType',
            'repeatable',
            'gameCenterDetail',
            'gameCenterGroup',
            'versions',
            'leaderboard',
          ],
        },
      },
      'fields[gameCenterChallengeVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterChallengeVersions',
        items: {
          type: 'string',
          enum: ['version', 'state', 'challenge', 'localizations', 'releases', 'defaultImage'],
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
      'fields[gameCenterLeaderboards]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboards',
        items: {
          type: 'string',
          enum: [
            'defaultFormatter',
            'referenceName',
            'vendorIdentifier',
            'submissionType',
            'scoreSortType',
            'scoreRangeStart',
            'scoreRangeEnd',
            'recurrenceStartDate',
            'recurrenceDuration',
            'recurrenceRule',
            'archived',
            'activityProperties',
            'visibility',
            'gameCenterDetail',
            'gameCenterGroup',
            'groupLeaderboard',
            'gameCenterLeaderboardSets',
            'localizations',
            'releases',
            'activity',
            'challenge',
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
          enum: ['gameCenterDetail', 'gameCenterGroup', 'versions', 'leaderboard'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[versions]': {
        type: 'integer',
        description: 'maximum number of related versions returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterGroups.listGameCenterChallenges(id, body));
};

export default { metadata, tool, handler };
