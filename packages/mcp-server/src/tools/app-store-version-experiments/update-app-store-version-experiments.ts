// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiments',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appStoreVersionExperiments/{id}',
  operationId: 'appStoreVersionExperiments_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_store_version_experiments',
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
            enum: ['appStoreVersionExperiments'],
          },
          attributes: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              started: {
                type: 'boolean',
              },
              trafficProportion: {
                type: 'integer',
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
  return asTextContentResult(await client.appStoreVersionExperiments.update(id, body));
};

export default { metadata, tool, handler };
