// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterDetails/{id}/activityReleases',
  operationId: 'gameCenterDetails_activityReleases_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_activity_releases_game_center_details',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterActivityVersionReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterActivityVersionReleases',
        items: {
          type: 'string',
          enum: ['version'],
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
          enum: ['version'],
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
  return asTextContentResult(await client.gameCenterDetails.retrieveActivityReleases(id, body));
};

export default { metadata, tool, handler };
