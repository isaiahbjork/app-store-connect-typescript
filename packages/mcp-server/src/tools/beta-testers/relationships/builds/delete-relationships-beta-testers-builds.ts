// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_testers.relationships.builds',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/betaTesters/{id}/relationships/builds',
  operationId: 'betaTesters_builds_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'delete_relationships_beta_testers_builds',
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
  const response = await client.betaTesters.relationships.builds.delete(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
