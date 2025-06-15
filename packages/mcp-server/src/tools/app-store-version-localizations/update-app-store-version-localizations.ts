// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appStoreVersionLocalizations/{id}',
  operationId: 'appStoreVersionLocalizations_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_store_version_localizations',
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
            enum: ['appStoreVersionLocalizations'],
          },
          attributes: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
              },
              keywords: {
                type: 'string',
              },
              marketingUrl: {
                type: 'string',
              },
              promotionalText: {
                type: 'string',
              },
              supportUrl: {
                type: 'string',
              },
              whatsNew: {
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
  return asTextContentResult(await client.appStoreVersionLocalizations.update(id, body));
};

export default { metadata, tool, handler };
