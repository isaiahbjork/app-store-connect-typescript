// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups.relationships.beta_testers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaGroups/{id}/relationships/betaTesters',
  operationId: 'betaGroups_betaTesters_createToManyRelationship',
};

export const tool: Tool = {
  name: 'add_relationships_beta_groups_beta_testers',
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
              enum: ['betaTesters'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.betaGroups.relationships.betaTesters.add(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
