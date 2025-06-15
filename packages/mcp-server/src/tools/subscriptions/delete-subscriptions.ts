// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/{id}',
  operationId: 'subscriptions_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_subscriptions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.subscriptions.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
