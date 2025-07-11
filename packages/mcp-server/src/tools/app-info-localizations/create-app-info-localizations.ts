// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_info_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appInfoLocalizations',
  operationId: 'appInfoLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_app_info_localizations',
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
              locale: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              privacyChoicesUrl: {
                type: 'string',
              },
              privacyPolicyText: {
                type: 'string',
              },
              privacyPolicyUrl: {
                type: 'string',
              },
              subtitle: {
                type: 'string',
              },
            },
            required: ['locale', 'name'],
          },
          relationships: {
            type: 'object',
            properties: {
              appInfo: {
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
                        enum: ['appInfos'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['appInfo'],
          },
          type: {
            type: 'string',
            enum: ['appInfoLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appInfoLocalizations.create(body));
};

export default { metadata, tool, handler };
