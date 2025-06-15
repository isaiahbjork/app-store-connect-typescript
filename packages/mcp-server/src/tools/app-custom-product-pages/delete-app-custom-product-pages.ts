// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_pages',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/appCustomProductPages/{id}',
  operationId: 'appCustomProductPages_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_app_custom_product_pages',
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
  await client.appCustomProductPages.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
