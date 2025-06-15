// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'actors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/actors/{id}',
  operationId: 'actors_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_actors',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[actors]': {
        type: 'array',
        description: 'the fields to include for returned resources of type actors',
        items: {
          type: 'string',
          enum: ['actorType', 'userFirstName', 'userLastName', 'userEmail', 'apiKeyId'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.actors.retrieve(id, body));
};

export default { metadata, tool, handler };
