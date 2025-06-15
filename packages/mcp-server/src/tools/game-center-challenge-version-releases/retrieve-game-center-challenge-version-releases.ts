// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_challenge_version_releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterChallengeVersionReleases/{id}',
  operationId: 'gameCenterChallengeVersionReleases_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_challenge_version_releases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['version'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterChallengeVersionReleases.retrieve(id, body));
};

export default { metadata, tool, handler };
