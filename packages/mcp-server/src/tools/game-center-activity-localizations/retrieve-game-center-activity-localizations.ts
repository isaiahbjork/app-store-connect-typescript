// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_activity_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterActivityLocalizations/{id}',
  operationId: 'gameCenterActivityLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_activity_localizations',
  description: '',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['version', 'image'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterActivityLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
