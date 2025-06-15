// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_activity_images',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterActivityImages/{id}',
  operationId: 'gameCenterActivityImages_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_activity_images',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.gameCenterActivityImages.retrieve(id, body));
};

export default { metadata, tool, handler };
