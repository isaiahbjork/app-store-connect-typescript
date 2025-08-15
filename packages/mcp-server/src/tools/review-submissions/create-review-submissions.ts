// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submissions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/reviewSubmissions',
  operationId: 'reviewSubmissions_createInstance',
};

export const tool: Tool = {
  name: 'create_review_submissions',
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
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['reviewSubmissions'],
          },
          attributes: {
            type: 'object',
            properties: {
              platform: {
                $ref: '#/$defs/platform',
              },
            },
          },
        },
        required: ['relationships', 'type'],
      },
    },
    required: ['data'],
    $defs: {
      platform: {
        type: 'string',
        enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.reviewSubmissions.create(body));
};

export default { metadata, tool, handler };
