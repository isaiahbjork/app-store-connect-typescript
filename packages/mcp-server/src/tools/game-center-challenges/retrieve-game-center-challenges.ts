// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterChallenges/{id}',
  operationId: 'gameCenterChallenges_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_challenges',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
          enum: ['gameCenterDetail', 'gameCenterGroup', 'versions', 'leaderboard'],
        },
      },
      'limit[versions]': {
        type: 'integer',
        description: 'maximum number of related versions returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterChallenges.retrieve(id, body));
};

export default { metadata, tool, handler };
