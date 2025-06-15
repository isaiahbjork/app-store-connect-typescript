// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_clip_invocations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/betaAppClipInvocations/{id}',
  operationId: 'betaAppClipInvocations_updateInstance',
};

export const tool: Tool = {
  name: 'update_beta_app_clip_invocations',
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
            enum: ['betaAppClipInvocations'],
          },
          attributes: {
            type: 'object',
            properties: {
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaAppClipInvocations.update(id, body));
};

export default { metadata, tool, handler };
