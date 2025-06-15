// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenge_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterChallengeVersions/{id}',
  operationId: 'gameCenterChallengeVersions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_challenge_versions',
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
      'limit[localizations]': {
        type: 'integer',
        description: 'maximum number of related localizations returned (when they are included)',
      },
      'limit[releases]': {
        type: 'integer',
        description: 'maximum number of related releases returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterChallengeVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
