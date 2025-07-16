// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterLeaderboardLocalizations/{id}',
  operationId: 'gameCenterLeaderboardLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_leaderboard_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterLeaderboardImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterLeaderboardImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
            'gameCenterLeaderboardLocalization',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterLeaderboard', 'gameCenterLeaderboardImage'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterLeaderboardLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
