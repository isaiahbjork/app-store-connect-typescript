// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_event_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appEventLocalizations',
  operationId: 'appEventLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_app_event_localizations',
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
              longDescription: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              shortDescription: {
                type: 'string',
              },
            },
            required: ['locale'],
          },
          relationships: {
            type: 'object',
            properties: {
              appEvent: {
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
                        enum: ['appEvents'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['appEvent'],
          },
          type: {
            type: 'string',
            enum: ['appEventLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appEventLocalizations.create(body));
};

export default { metadata, tool, handler };
