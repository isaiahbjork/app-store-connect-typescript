// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_infos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appInfos/{id}/secondarySubcategoryTwo',
  operationId: 'appInfos_secondarySubcategoryTwo_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_secondary_subcategory_two_app_infos',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['subcategories', 'parent'],
        },
      },
      'limit[subcategories]': {
        type: 'integer',
        description: 'maximum number of related subcategories returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appInfos.retrieveSecondarySubcategoryTwo(id, body));
};

export default { metadata, tool, handler };
