// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_activity_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterActivityVersions/{id}/localizations',
  operationId: 'gameCenterActivityVersions_localizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_localizations_game_center_activity_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterActivityImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterActivityImages',
        items: {
          type: 'string',
          enum: ['fileSize', 'fileName', 'imageAsset', 'uploadOperations', 'assetDeliveryState'],
        },
      },
      'fields[gameCenterActivityLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterActivityLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'name', 'description', 'version', 'image'],
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
  return asTextContentResult(await client.gameCenterActivityVersions.listLocalizations(id, body));
};

export default { metadata, tool, handler };
