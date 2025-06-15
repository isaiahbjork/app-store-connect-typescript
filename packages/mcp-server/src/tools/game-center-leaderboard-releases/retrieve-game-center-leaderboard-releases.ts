// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardReleases/{id}',
  operationId: 'gameCenterLeaderboardReleases_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_releases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterLeaderboardReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardReleases',
        items: {
          type: 'string',
          enum: ['live', 'gameCenterDetail', 'gameCenterLeaderboard'],
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardReleases.retrieve(id, body));
};

export default { metadata, tool, handler };
