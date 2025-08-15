// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterChallenges/{id}/versions',
  operationId: 'gameCenterChallenges_versions_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_versions_game_center_challenges',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterChallengeImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterChallengeImages',
        items: {
          type: 'string',
          enum: ['fileSize', 'fileName', 'imageAsset', 'uploadOperations', 'assetDeliveryState'],
        },
      },
      'fields[gameCenterChallengeLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterChallengeLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'name', 'description', 'version', 'image'],
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
      'fields[gameCenterChallengeVersionReleases]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type gameCenterChallengeVersionReleases',
        items: {
          type: 'string',
          enum: ['version'],
        },
      },
      'fields[gameCenterChallengeVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterChallengeVersions',
        items: {
          type: 'string',
          enum: ['version', 'state', 'challenge', 'localizations', 'releases', 'defaultImage'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['challenge', 'localizations', 'releases', 'defaultImage'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterChallenges.listVersions(id, body));
};

export default { metadata, tool, handler };
