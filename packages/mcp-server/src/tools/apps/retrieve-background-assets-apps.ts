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
  httpPath: '/v1/apps/{id}/backgroundAssets',
  operationId: 'apps_backgroundAssets_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_background_assets_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[backgroundAssets]': {
        type: 'array',
        description: 'the fields to include for returned resources of type backgroundAssets',
        items: {
          type: 'string',
          enum: ['assetPackIdentifier', 'createdDate', 'versions', 'internalBetaVersion'],
        },
      },
      'fields[backgroundAssetVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type backgroundAssetVersions',
        items: {
          type: 'string',
          enum: [
            'createdDate',
            'platforms',
            'state',
            'version',
            'internalBetaRelease',
            'assetFile',
            'manifestFile',
            'backgroundAssetUploadFiles',
          ],
        },
      },
      'filter[assetPackIdentifier]': {
        type: 'array',
        description: "filter by attribute 'assetPackIdentifier'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['internalBetaVersion'],
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
  return asTextContentResult(await client.apps.retrieveBackgroundAssets(id, body));
};

export default { metadata, tool, handler };
