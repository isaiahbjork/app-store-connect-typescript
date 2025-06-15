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
  httpPath: '/v1/backgroundAssetVersions/{id}/backgroundAssetUploadFiles',
  operationId: 'backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_upload_files_background_asset_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[backgroundAssetUploadFiles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type backgroundAssetUploadFiles',
        items: {
          type: 'string',
          enum: [
            'assetDeliveryState',
            'assetToken',
            'assetType',
            'fileName',
            'fileSize',
            'sourceFileChecksum',
            'uploadOperations',
          ],
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
  return asTextContentResult(await client.backgroundAssetVersions.listUploadFiles(id, body));
};

export default { metadata, tool, handler };
