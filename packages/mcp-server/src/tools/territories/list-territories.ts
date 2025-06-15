// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'territories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/territories',
  operationId: 'territories_getCollection',
};

export const tool: Tool = {
  name: 'list_territories',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[territories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territories',
        items: {
          type: 'string',
          enum: ['currency'],
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
  return asTextContentResult(await client.territories.list(body));
};

export default { metadata, tool, handler };
