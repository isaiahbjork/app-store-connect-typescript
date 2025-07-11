// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaAppLocalizations',
  operationId: 'betaAppLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_beta_app_localizations',
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
              description: {
                type: 'string',
              },
              feedbackEmail: {
                type: 'string',
              },
              marketingUrl: {
                type: 'string',
              },
              privacyPolicyUrl: {
                type: 'string',
              },
              tvOsPrivacyPolicy: {
                type: 'string',
              },
            },
            required: ['locale'],
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
            enum: ['betaAppLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaAppLocalizations.create(body));
};

export default { metadata, tool, handler };
