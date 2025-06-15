// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'territory_availabilities',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/territoryAvailabilities/{id}',
  operationId: 'territoryAvailabilities_updateInstance',
};

export const tool: Tool = {
  name: 'update_territory_availabilities',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['territoryAvailabilities'],
          },
          attributes: {
            type: 'object',
            properties: {
              available: {
                type: 'boolean',
              },
              preOrderEnabled: {
                type: 'boolean',
              },
              releaseDate: {
                type: 'string',
                format: 'date',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.territoryAvailabilities.update(id, body));
};

export default { metadata, tool, handler };
