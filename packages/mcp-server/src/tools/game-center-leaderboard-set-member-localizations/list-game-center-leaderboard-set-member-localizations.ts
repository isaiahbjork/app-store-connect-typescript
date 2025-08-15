// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_set_member_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSetMemberLocalizations',
  operationId: 'gameCenterLeaderboardSetMemberLocalizations_getCollection',
};

export const tool: Tool = {
  name: 'list_game_center_leaderboard_set_member_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'filter[gameCenterLeaderboard]': {
        type: 'array',
        description: "filter by id(s) of related 'gameCenterLeaderboard'",
        items: {
          type: 'string',
        },
      },
      'filter[gameCenterLeaderboardSet]': {
        type: 'array',
        description: "filter by id(s) of related 'gameCenterLeaderboardSet'",
        items: {
          type: 'string',
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
      'fields[gameCenterLeaderboardSetMemberLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type gameCenterLeaderboardSetMemberLocalizations',
        items: {
          type: 'string',
          enum: ['name', 'locale', 'gameCenterLeaderboardSet', 'gameCenterLeaderboard'],
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
          enum: ['gameCenterLeaderboardSet', 'gameCenterLeaderboard'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
    required: ['filter[gameCenterLeaderboard]', 'filter[gameCenterLeaderboardSet]'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardSetMemberLocalizations.list(body));
};

export default { metadata, tool, handler };
