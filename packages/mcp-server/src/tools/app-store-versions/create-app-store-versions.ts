// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appStoreVersions',
  operationId: 'appStoreVersions_createInstance',
};

export const tool: Tool = {
  name: 'create_app_store_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              platform: {
                $ref: '#/$defs/platform',
              },
              versionString: {
                type: 'string',
              },
              copyright: {
                type: 'string',
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
            },
            required: ['platform', 'versionString'],
          },
          relationships: {
            type: 'object',
            properties: {
              app: {
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
                        enum: ['apps'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              appStoreVersionLocalizations: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['appStoreVersionLocalizations'],
                        },
                      },
                      required: ['id', 'type'],
                    },
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
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['appStoreVersions'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    $defs: {
      platform: {
        type: 'string',
        enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appStoreVersions.create(body));
};

export default { metadata, tool, handler };
