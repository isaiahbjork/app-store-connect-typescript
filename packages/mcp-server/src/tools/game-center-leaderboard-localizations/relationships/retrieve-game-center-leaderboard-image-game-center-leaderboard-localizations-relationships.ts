// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_localizations.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardLocalizations/{id}/relationships/gameCenterLeaderboardImage',
  operationId: 'gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_image_game_center_leaderboard_localizations_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.gameCenterLeaderboardLocalizations.relationships.retrieveGameCenterLeaderboardImage(id),
  );
};

export default { metadata, tool, handler };
