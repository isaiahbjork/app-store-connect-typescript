// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaGroups',
  operationId: 'betaGroups_createInstance',
};

export const tool: Tool = {
  name: 'create_beta_groups',
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
              feedbackEnabled: {
                type: 'boolean',
              },
              hasAccessToAllBuilds: {
                type: 'boolean',
              },
              isInternalGroup: {
                type: 'boolean',
              },
              publicLinkEnabled: {
                type: 'boolean',
              },
              publicLinkLimit: {
                type: 'integer',
              },
              publicLinkLimitEnabled: {
                type: 'boolean',
              },
            },
            required: ['name'],
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
              betaTesters: {
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
                          enum: ['betaTesters'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
              builds: {
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
                          enum: ['builds'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['betaGroups'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaGroups.create(body));
};

export default { metadata, tool, handler };
