// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_testers.relationships.beta_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/betaTesters/{id}/relationships/betaGroups',
  operationId: 'betaTesters_betaGroups_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'delete_relationships_beta_testers_beta_groups',
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
              enum: ['betaGroups'],
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
  await client.betaTesters.relationships.betaGroups.delete(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
