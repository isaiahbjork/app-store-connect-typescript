// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'pass_type_ids',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/passTypeIds',
  operationId: 'passTypeIds_createInstance',
};

export const tool: Tool = {
  name: 'create_pass_type_ids',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              identifier: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
            },
            required: ['identifier', 'name'],
          },
          type: {
            type: 'string',
            enum: ['passTypeIds'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.passTypeIDs.create(body));
};

export default { metadata, tool, handler };
