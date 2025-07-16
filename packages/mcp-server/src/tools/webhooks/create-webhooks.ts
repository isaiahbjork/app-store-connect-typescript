// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/webhooks',
  operationId: 'webhooks_createInstance',
};

export const tool: Tool = {
  name: 'create_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
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
            required: ['enabled', 'eventTypes', 'name', 'secret', 'url'],
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
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['webhooks'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
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
  const body = args as any;
  return asTextContentResult(await client.webhooks.create(body));
};

export default { metadata, tool, handler };
