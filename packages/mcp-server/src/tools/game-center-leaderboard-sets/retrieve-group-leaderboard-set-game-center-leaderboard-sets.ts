// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSets/{id}/groupLeaderboardSet',
  operationId: 'gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_group_leaderboard_set_game_center_leaderboard_sets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      'fields[gameCenterLeaderboardSetLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'name', 'gameCenterLeaderboardSet', 'gameCenterLeaderboardSetImage'],
        },
      },
      'fields[gameCenterLeaderboardSetReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardSetReleases',
        items: {
          type: 'string',
          enum: ['live', 'gameCenterDetail', 'gameCenterLeaderboardSet'],
        },
      },
      'fields[gameCenterLeaderboardSets]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardSets',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'vendorIdentifier',
            'gameCenterDetail',
            'gameCenterGroup',
            'groupLeaderboardSet',
            'localizations',
            'gameCenterLeaderboards',
            'releases',
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
            'groupLeaderboardSet',
            'localizations',
            'gameCenterLeaderboards',
            'releases',
          ],
        },
      },
      'limit[gameCenterLeaderboards]': {
        type: 'integer',
        description: 'maximum number of related gameCenterLeaderboards returned (when they are included)',
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
  return asTextContentResult(await client.gameCenterLeaderboardSets.retrieveGroupLeaderboardSet(id, body));
};

export default { metadata, tool, handler };
