// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_experiment_treatments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appStoreVersionExperimentTreatments',
  operationId: 'appStoreVersionExperimentTreatments_createInstance',
};

export const tool: Tool = {
  name: 'create_app_store_version_experiment_treatments',
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
              appIconName: {
                type: 'string',
              },
            },
            required: ['name'],
          },
          type: {
            type: 'string',
            enum: ['appStoreVersionExperimentTreatments'],
          },
          relationships: {
            type: 'object',
            properties: {
              appStoreVersionExperiment: {
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
                        enum: ['appStoreVersionExperiments'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              appStoreVersionExperimentV2: {
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
                        enum: ['appStoreVersionExperiments'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appStoreVersionExperimentTreatments.create(body));
};

export default { metadata, tool, handler };
