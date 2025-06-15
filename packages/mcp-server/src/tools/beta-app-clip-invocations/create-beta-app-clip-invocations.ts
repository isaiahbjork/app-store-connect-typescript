// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_clip_invocations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaAppClipInvocations',
  operationId: 'betaAppClipInvocations_createInstance',
};

export const tool: Tool = {
  name: 'create_beta_app_clip_invocations',
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
              url: {
                type: 'string',
              },
            },
            required: ['url'],
          },
          relationships: {
            type: 'object',
            properties: {
              betaAppClipInvocationLocalizations: {
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
                          enum: ['betaAppClipInvocationLocalizations'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
              buildBundle: {
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
                        enum: ['buildBundles'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['betaAppClipInvocationLocalizations', 'buildBundle'],
          },
          type: {
            type: 'string',
            enum: ['betaAppClipInvocations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
      included: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            attributes: {
              type: 'object',
              properties: {
                locale: {
                  type: 'string',
                },
                title: {
                  type: 'string',
                },
              },
              required: ['locale', 'title'],
            },
            type: {
              type: 'string',
              enum: ['betaAppClipInvocationLocalizations'],
            },
            id: {
              type: 'string',
            },
            relationships: {
              type: 'object',
              properties: {
                betaAppClipInvocation: {
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
                          enum: ['betaAppClipInvocations'],
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaAppClipInvocations.create(body));
};

export default { metadata, tool, handler };
