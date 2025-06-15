// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_clip_invocation_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaAppClipInvocationLocalizations',
  operationId: 'betaAppClipInvocationLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_beta_app_clip_invocation_localizations',
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
              title: {
                type: 'string',
              },
            },
            required: ['locale', 'title'],
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
                required: ['data'],
              },
            },
            required: ['betaAppClipInvocation'],
          },
          type: {
            type: 'string',
            enum: ['betaAppClipInvocationLocalizations'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaAppClipInvocationLocalizations.create(body));
};

export default { metadata, tool, handler };
