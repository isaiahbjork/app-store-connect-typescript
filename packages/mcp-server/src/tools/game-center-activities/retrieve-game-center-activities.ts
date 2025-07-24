// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_activities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterActivities/{id}',
  operationId: 'gameCenterActivities_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_activities',
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
      'fields[gameCenterActivityVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterActivityVersions',
        items: {
          type: 'string',
          enum: ['version', 'state', 'fallbackUrl', 'activity', 'localizations', 'defaultImage', 'releases'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterDetail', 'gameCenterGroup', 'achievements', 'leaderboards', 'versions'],
        },
      },
      'limit[achievements]': {
        type: 'integer',
        description: 'maximum number of related achievements returned (when they are included)',
      },
      'limit[leaderboards]': {
        type: 'integer',
        description: 'maximum number of related leaderboards returned (when they are included)',
      },
      'limit[versions]': {
        type: 'integer',
        description: 'maximum number of related versions returned (when they are included)',
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
  return asTextContentResult(await client.gameCenterActivities.retrieve(id, body));
};

export default { metadata, tool, handler };
