// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps.relationships',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/apps/{id}/relationships/betaTesters',
  operationId: 'apps_betaTesters_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'delete_beta_testers_apps_relationships',
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.apps.relationships.deleteBetaTesters(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
