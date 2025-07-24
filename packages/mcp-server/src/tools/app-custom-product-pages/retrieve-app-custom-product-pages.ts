// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_pages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appCustomProductPages/{id}',
  operationId: 'appCustomProductPages_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_custom_product_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appCustomProductPages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCustomProductPages',
        items: {
          type: 'string',
          enum: ['name', 'url', 'visible', 'app', 'appCustomProductPageVersions'],
        },
      },
      'fields[appCustomProductPageVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCustomProductPageVersions',
        items: {
          type: 'string',
          enum: ['version', 'state', 'deepLink', 'appCustomProductPage', 'appCustomProductPageLocalizations'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'appCustomProductPageVersions'],
        },
      },
      'limit[appCustomProductPageVersions]': {
        type: 'integer',
        description:
          'maximum number of related appCustomProductPageVersions returned (when they are included)',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appCustomProductPages.retrieve(id, body));
};

export default { metadata, tool, handler };
