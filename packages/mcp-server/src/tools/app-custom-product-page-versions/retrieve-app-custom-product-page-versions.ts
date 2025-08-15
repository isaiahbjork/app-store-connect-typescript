// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_page_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appCustomProductPageVersions/{id}',
  operationId: 'appCustomProductPageVersions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_custom_product_page_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appCustomProductPageLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCustomProductPageLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'promotionalText',
            'appCustomProductPageVersion',
            'appScreenshotSets',
            'appPreviewSets',
          ],
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
          enum: ['appCustomProductPage', 'appCustomProductPageLocalizations'],
        },
      },
      'limit[appCustomProductPageLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related appCustomProductPageLocalizations returned (when they are included)',
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
  return asTextContentResult(await client.appCustomProductPageVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
