// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'merchant_ids',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/merchantIds/{id}',
  operationId: 'merchantIds_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_merchant_ids',
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
  const response = await client.merchantIDs.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
