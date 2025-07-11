// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_set_member_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSetMemberLocalizations/{id}/gameCenterLeaderboard',
  operationId: 'gameCenterLeaderboardSetMemberLocalizations_gameCenterLeaderboard_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_game_center_leaderboard_set_member_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
            'groupLeaderboard',
            'gameCenterLeaderboardSets',
            'localizations',
            'releases',
            'activity',
            'challenge',
          ],
        },
      },
      'limit[gameCenterLeaderboardSets]': {
        type: 'integer',
        description: 'maximum number of related gameCenterLeaderboardSets returned (when they are included)',
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.gameCenterLeaderboardSetMemberLocalizations.retrieveGameCenterLeaderboard(id, body),
  );
};

export default { metadata, tool, handler };
