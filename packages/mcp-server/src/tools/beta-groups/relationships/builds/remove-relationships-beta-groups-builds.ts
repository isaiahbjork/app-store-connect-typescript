// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups.relationships.builds',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/betaGroups/{id}/relationships/builds',
  operationId: 'betaGroups_builds_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'remove_relationships_beta_groups_builds',
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
              enum: ['builds'],
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
  await client.betaGroups.relationships.builds.remove(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
