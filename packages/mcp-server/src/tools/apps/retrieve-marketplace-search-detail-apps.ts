// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/marketplaceSearchDetail',
  operationId: 'apps_marketplaceSearchDetail_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_marketplace_search_detail_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[marketplaceSearchDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type marketplaceSearchDetails',
        items: {
          type: 'string',
          enum: ['catalogUrl'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveMarketplaceSearchDetail(id, body));
};

export default { metadata, tool, handler };
