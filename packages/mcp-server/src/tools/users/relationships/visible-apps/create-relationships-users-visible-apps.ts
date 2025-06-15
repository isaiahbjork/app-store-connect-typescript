// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'users.relationships.visible_apps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/users/{id}/relationships/visibleApps',
  operationId: 'users_visibleApps_createToManyRelationship',
};

export const tool: Tool = {
  name: 'create_relationships_users_visible_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['apps'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.users.relationships.visibleApps.create(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
