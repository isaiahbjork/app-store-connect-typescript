// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_set_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSetLocalizations/{id}',
  operationId: 'gameCenterLeaderboardSetLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_set_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterLeaderboardSet', 'gameCenterLeaderboardSetImage'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardSetLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
