// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submissions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/reviewSubmissions/{id}',
  operationId: 'reviewSubmissions_updateInstance',
};

export const tool: Tool = {
  name: 'update_review_submissions',
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
            enum: ['reviewSubmissions'],
          },
          attributes: {
            type: 'object',
            properties: {
              canceled: {
                type: 'boolean',
              },
              platform: {
                $ref: '#/$defs/platform',
              },
              submitted: {
                type: 'boolean',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.reviewSubmissions.update(id, body));
};

export default { metadata, tool, handler };
