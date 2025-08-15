// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/profiles',
  operationId: 'profiles_createInstance',
};

export const tool: Tool = {
  name: 'create_profiles',
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
              profileType: {
                type: 'string',
                enum: [
                  'IOS_APP_DEVELOPMENT',
                  'IOS_APP_STORE',
                  'IOS_APP_ADHOC',
                  'IOS_APP_INHOUSE',
                  'MAC_APP_DEVELOPMENT',
                  'MAC_APP_STORE',
                  'MAC_APP_DIRECT',
                  'TVOS_APP_DEVELOPMENT',
                  'TVOS_APP_STORE',
                  'TVOS_APP_ADHOC',
                  'TVOS_APP_INHOUSE',
                  'MAC_CATALYST_APP_DEVELOPMENT',
                  'MAC_CATALYST_APP_STORE',
                  'MAC_CATALYST_APP_DIRECT',
                ],
              },
            },
            required: ['name', 'profileType'],
          },
          relationships: {
            type: 'object',
            properties: {
              bundleId: {
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
                        enum: ['bundleIds'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              certificates: {
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
                          enum: ['certificates'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
              devices: {
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
                          enum: ['devices'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
              },
            },
            required: ['bundleId', 'certificates'],
          },
          type: {
            type: 'string',
            enum: ['profiles'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.profiles.create(body));
};

export default { metadata, tool, handler };
