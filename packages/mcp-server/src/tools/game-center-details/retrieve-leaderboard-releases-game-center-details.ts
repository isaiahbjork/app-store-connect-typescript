// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterDetails/{id}/leaderboardReleases',
  operationId: 'gameCenterDetails_leaderboardReleases_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_leaderboard_releases_game_center_details',
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
      'fields[gameCenterLeaderboardReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardReleases',
        items: {
          type: 'string',
          enum: ['live', 'gameCenterDetail', 'gameCenterLeaderboard'],
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
      'filter[gameCenterLeaderboard]': {
        type: 'array',
        description: "filter by id(s) of related 'gameCenterLeaderboard'",
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
          enum: ['gameCenterDetail', 'gameCenterLeaderboard'],
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
  return asTextContentResult(await client.gameCenterDetails.retrieveLeaderboardReleases(id, body));
};

export default { metadata, tool, handler };
