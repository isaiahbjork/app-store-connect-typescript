// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/betaAppLocalizations/{id}',
  operationId: 'betaAppLocalizations_updateInstance',
};

export const tool: Tool = {
  name: 'update_beta_app_localizations',
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
            enum: ['betaAppLocalizations'],
          },
          attributes: {
            type: 'object',
            properties: {
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
  return asTextContentResult(await client.betaAppLocalizations.update(id, body));
};

export default { metadata, tool, handler };
