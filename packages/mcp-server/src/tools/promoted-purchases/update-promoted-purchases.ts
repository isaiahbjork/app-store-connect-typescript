// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'promoted_purchases',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/promotedPurchases/{id}',
  operationId: 'promotedPurchases_updateInstance',
};

export const tool: Tool = {
  name: 'update_promoted_purchases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['promotedPurchases'],
          },
          attributes: {
            type: 'object',
            properties: {
              enabled: {
                type: 'boolean',
              },
              visibleForAllUsers: {
                type: 'boolean',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.promotedPurchases.update(id, body));
};

export default { metadata, tool, handler };
