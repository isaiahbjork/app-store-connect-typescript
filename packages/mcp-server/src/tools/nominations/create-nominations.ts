// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'nominations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/nominations',
  operationId: 'nominations_createInstance',
};

export const tool: Tool = {
  name: 'create_nominations',
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
              description: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              publishStartDate: {
                type: 'string',
                format: 'date-time',
              },
              submitted: {
                type: 'boolean',
              },
              type: {
                type: 'string',
                enum: ['APP_LAUNCH', 'APP_ENHANCEMENTS', 'NEW_CONTENT'],
              },
              deviceFamilies: {
                type: 'array',
                items: {
                  $ref: '#/$defs/device_family',
                },
              },
              hasInAppEvents: {
                type: 'boolean',
              },
              launchInSelectMarketsFirst: {
                type: 'boolean',
              },
              locales: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              notes: {
                type: 'string',
              },
              preOrderEnabled: {
                type: 'boolean',
              },
              publishEndDate: {
                type: 'string',
                format: 'date-time',
              },
              supplementalMaterialsUris: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
            required: ['description', 'name', 'publishStartDate', 'submitted', 'type'],
          },
          relationships: {
            type: 'object',
            properties: {
              relatedApps: {
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
                          enum: ['apps'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
              inAppEvents: {
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
                          enum: ['appEvents'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
              },
              supportedTerritories: {
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
                          enum: ['territories'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
              },
            },
            required: ['relatedApps'],
          },
          type: {
            type: 'string',
            enum: ['nominations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    required: ['data'],
    $defs: {
      device_family: {
        type: 'string',
        enum: ['IPHONE', 'IPAD', 'APPLE_TV', 'APPLE_WATCH', 'MAC', 'VISION'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.nominations.create(body));
};

export default { metadata, tool, handler };
