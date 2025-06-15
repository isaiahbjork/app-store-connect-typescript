// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/webhooks/{id}',
  operationId: 'webhooks_updateInstance',
};

export const tool: Tool = {
  name: 'update_webhooks',
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
            enum: ['webhooks'],
          },
          attributes: {
            type: 'object',
            properties: {
              enabled: {
                type: 'boolean',
              },
              eventTypes: {
                type: 'array',
                items: {
                  $ref: '#/$defs/webhook_event_type',
                },
              },
              name: {
                type: 'string',
              },
              secret: {
                type: 'string',
              },
              url: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      webhook_event_type: {
        type: 'string',
        enum: [
          'APP_STORE_VERSION_APP_VERSION_STATE_UPDATED',
          'BETA_FEEDBACK_CRASH_SUBMISSION_CREATED',
          'BETA_FEEDBACK_SCREENSHOT_SUBMISSION_CREATED',
        ],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.webhooks.update(id, body));
};

export default { metadata, tool, handler };
