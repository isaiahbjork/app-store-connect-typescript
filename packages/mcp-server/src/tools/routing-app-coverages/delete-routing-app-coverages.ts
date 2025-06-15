// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'routing_app_coverages',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/routingAppCoverages/{id}',
  operationId: 'routingAppCoverages_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_routing_app_coverages',
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
  await client.routingAppCoverages.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
