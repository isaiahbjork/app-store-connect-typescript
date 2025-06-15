// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'actors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/actors',
  operationId: 'actors_getCollection',
};

export const tool: Tool = {
  name: 'list_actors',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'fields[actors]': {
        type: 'array',
        description: 'the fields to include for returned resources of type actors',
        items: {
          type: 'string',
          enum: ['actorType', 'userFirstName', 'userLastName', 'userEmail', 'apiKeyId'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.actors.list(body));
};

export default { metadata, tool, handler };
