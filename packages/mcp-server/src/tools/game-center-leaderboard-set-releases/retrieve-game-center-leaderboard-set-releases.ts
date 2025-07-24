// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_set_releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardSetReleases/{id}',
  operationId: 'gameCenterLeaderboardSetReleases_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_set_releases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterLeaderboardSetReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardSetReleases',
        items: {
          type: 'string',
          enum: ['live', 'gameCenterDetail', 'gameCenterLeaderboardSet'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterDetail', 'gameCenterLeaderboardSet'],
        },
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
  return asTextContentResult(await client.gameCenterLeaderboardSetReleases.retrieve(id, body));
};

export default { metadata, tool, handler };
