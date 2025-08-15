// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_page_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appCustomProductPageLocalizations/{id}',
  operationId: 'appCustomProductPageLocalizations_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_custom_product_page_localizations',
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
            enum: ['appCustomProductPageLocalizations'],
          },
          attributes: {
            type: 'object',
            properties: {
              promotionalText: {
                type: 'string',
              },
            },
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appCustomProductPageLocalizations.update(id, body));
};

export default { metadata, tool, handler };
