// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_info_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appInfoLocalizations/{id}',
  operationId: 'appInfoLocalizations_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_info_localizations',
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
            enum: ['appInfoLocalizations'],
          },
          attributes: {
            type: 'object',
            properties: {
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
  return asTextContentResult(await client.appInfoLocalizations.update(id, body));
};

export default { metadata, tool, handler };
