// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appCategories',
  operationId: 'appCategories_getCollection',
};

export const tool: Tool = {
  name: 'list_app_categories',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'exists[parent]': {
        type: 'boolean',
        description: "filter by existence or non-existence of related 'parent'",
      },
      'fields[appCategories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCategories',
        items: {
          type: 'string',
          enum: ['platforms', 'subcategories', 'parent'],
        },
      },
      'filter[platforms]': {
        type: 'array',
        description: "filter by attribute 'platforms'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['subcategories', 'parent'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[subcategories]': {
        type: 'integer',
        description: 'maximum number of related subcategories returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appCategories.list(body));
};

export default { metadata, tool, handler };
