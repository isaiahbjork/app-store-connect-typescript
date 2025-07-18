// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterGroups',
  operationId: 'gameCenterGroups_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['gameCenterGroups'],
          },
          attributes: {
            type: 'object',
            properties: {
              referenceName: {
                type: 'string',
              },
            },
          },
        },
        required: ['type'],
      },
    },
    required: ['data'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterGroups.create(body));
};

export default { metadata, tool, handler };
