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
  httpPath: '/v1/gameCenterChallengeVersions/{id}/localizations',
  operationId: 'gameCenterChallengeVersions_localizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_localizations_game_center_challenge_versions',
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
          enum: ['version', 'image'],
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
  return asTextContentResult(await client.gameCenterChallengeVersions.listLocalizations(id, body));
};

export default { metadata, tool, handler };
