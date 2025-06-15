// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptionLocalizations',
  operationId: 'subscriptionLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_subscription_localizations',
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
              locale: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
            },
            required: ['locale', 'name'],
          },
          relationships: {
            type: 'object',
            properties: {
              subscription: {
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
                        enum: ['subscriptions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['subscription'],
          },
          type: {
            type: 'string',
            enum: ['subscriptionLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscriptionLocalizations.create(body));
};

export default { metadata, tool, handler };
