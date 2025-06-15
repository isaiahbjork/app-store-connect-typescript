// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSets/{id}/localizations',
  operationId: 'gameCenterLeaderboardSets_localizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_localizations_game_center_leaderboard_sets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterLeaderboardSetImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardSetImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
            'gameCenterLeaderboardSetLocalization',
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
          enum: ['gameCenterLeaderboardSet', 'gameCenterLeaderboardSetImage'],
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
  return asTextContentResult(await client.gameCenterLeaderboardSets.listLocalizations(id, body));
};

export default { metadata, tool, handler };
