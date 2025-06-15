// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appStoreVersionExperiments',
  operationId: 'appStoreVersionExperiments_createInstance',
};

export const tool: Tool = {
  name: 'create_app_store_version_experiments',
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
              name: {
                type: 'string',
              },
              trafficProportion: {
                type: 'integer',
              },
            },
            required: ['name', 'trafficProportion'],
          },
          relationships: {
            type: 'object',
            properties: {
              appStoreVersion: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['appStoreVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['appStoreVersion'],
          },
          type: {
            type: 'string',
            enum: ['appStoreVersionExperiments'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appStoreVersionExperiments.create(body));
};

export default { metadata, tool, handler };
