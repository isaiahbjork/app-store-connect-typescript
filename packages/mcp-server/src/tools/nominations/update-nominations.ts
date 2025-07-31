// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'nominations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/nominations/{id}',
  operationId: 'nominations_updateInstance',
};

export const tool: Tool = {
  name: 'update_nominations',
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
            enum: ['nominations'],
          },
          attributes: {
            type: 'object',
            properties: {
              archived: {
                type: 'boolean',
              },
              description: {
                type: 'string',
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
              name: {
                type: 'string',
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
              publishStartDate: {
                type: 'string',
                format: 'date-time',
              },
              submitted: {
                type: 'boolean',
              },
              supplementalMaterialsUris: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              type: {
                type: 'string',
                enum: ['APP_LAUNCH', 'APP_ENHANCEMENTS', 'NEW_CONTENT'],
              },
            },
          },
          relationships: {
            type: 'object',
            properties: {
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
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.nominations.update(id, body));
};

export default { metadata, tool, handler };
