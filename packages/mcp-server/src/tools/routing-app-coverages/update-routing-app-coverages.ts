// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'routing_app_coverages',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/routingAppCoverages/{id}',
  operationId: 'routingAppCoverages_updateInstance',
};

export const tool: Tool = {
  name: 'update_routing_app_coverages',
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
            enum: ['routingAppCoverages'],
          },
          attributes: {
            type: 'object',
            properties: {
              sourceFileChecksum: {
                type: 'string',
              },
              uploaded: {
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
  return asTextContentResult(await client.routingAppCoverages.update(id, body));
};

export default { metadata, tool, handler };
