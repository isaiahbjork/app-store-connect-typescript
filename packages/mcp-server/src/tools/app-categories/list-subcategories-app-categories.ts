// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appCategories/{id}/subcategories',
  operationId: 'appCategories_subcategories_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_subcategories_app_categories',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appCategories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCategories',
        items: {
          type: 'string',
          enum: ['platforms', 'subcategories', 'parent'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appCategories.listSubcategories(id, body));
};

export default { metadata, tool, handler };
