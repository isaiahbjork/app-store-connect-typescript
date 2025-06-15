// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_asset_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/backgroundAssetVersions/{id}',
  operationId: 'backgroundAssetVersions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_background_asset_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['internalBetaRelease', 'assetFile', 'manifestFile'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.backgroundAssetVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
