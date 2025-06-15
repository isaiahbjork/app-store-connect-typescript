// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_infos',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appInfos/{id}',
  operationId: 'appInfos_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_infos',
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
            enum: ['appInfos'],
          },
          relationships: {
            type: 'object',
            properties: {
              primaryCategory: {
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
                        enum: ['appCategories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              primarySubcategoryOne: {
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
                        enum: ['appCategories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              primarySubcategoryTwo: {
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
                        enum: ['appCategories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              secondaryCategory: {
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
                        enum: ['appCategories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              secondarySubcategoryOne: {
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
                        enum: ['appCategories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              secondarySubcategoryTwo: {
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
                        enum: ['appCategories'],
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
  return asTextContentResult(await client.appInfos.update(id, body));
};

export default { metadata, tool, handler };
