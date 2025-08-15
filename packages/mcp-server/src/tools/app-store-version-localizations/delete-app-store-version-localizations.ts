// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/appStoreVersionLocalizations/{id}',
  operationId: 'appStoreVersionLocalizations_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_app_store_version_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.appStoreVersionLocalizations.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
