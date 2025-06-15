// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'pass_type_ids',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/passTypeIds/{id}',
  operationId: 'passTypeIds_updateInstance',
};

export const tool: Tool = {
  name: 'update_pass_type_ids',
  description: '',
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
            enum: ['passTypeIds'],
          },
          attributes: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
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
  return asTextContentResult(await client.passTypeIDs.update(id, body));
};

export default { metadata, tool, handler };
