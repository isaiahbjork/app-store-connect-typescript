// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appStoreVersions/{id}',
  operationId: 'appStoreVersions_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_store_versions',
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
            enum: ['appStoreVersions'],
          },
          attributes: {
            type: 'object',
            properties: {
              copyright: {
                type: 'string',
              },
              downloadable: {
                type: 'boolean',
              },
              earliestReleaseDate: {
                type: 'string',
                format: 'date-time',
              },
              releaseType: {
                type: 'string',
                enum: ['MANUAL', 'AFTER_APPROVAL', 'SCHEDULED'],
              },
              reviewType: {
                type: 'string',
                enum: ['APP_STORE', 'NOTARIZATION'],
              },
              usesIdfa: {
                type: 'boolean',
              },
              versionString: {
                type: 'string',
              },
            },
            required: [],
          },
          relationships: {
            type: 'object',
            properties: {
              appClipDefaultExperience: {
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
                        enum: ['appClipDefaultExperiences'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              build: {
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
                        enum: ['builds'],
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
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersions.update(id, body));
};

export default { metadata, tool, handler };
