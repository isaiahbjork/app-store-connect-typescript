// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_page_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appCustomProductPageVersions',
  operationId: 'appCustomProductPageVersions_createInstance',
};

export const tool: Tool = {
  name: 'create_app_custom_product_page_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              appCustomProductPage: {
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
                        enum: ['appCustomProductPages'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              appCustomProductPageLocalizations: {
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
                          enum: ['appCustomProductPageLocalizations'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
            },
            required: ['appCustomProductPage'],
          },
          type: {
            type: 'string',
            enum: ['appCustomProductPageVersions'],
          },
          attributes: {
            type: 'object',
            properties: {
              deepLink: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appCustomProductPageVersions.create(body));
};

export default { metadata, tool, handler };
