// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_asset_upload_files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/backgroundAssetUploadFiles',
  operationId: 'backgroundAssetUploadFiles_createInstance',
};

export const tool: Tool = {
  name: 'create_background_asset_upload_files',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              assetType: {
                type: 'string',
                enum: ['ASSET', 'MANIFEST'],
              },
              fileName: {
                type: 'string',
              },
              fileSize: {
                type: 'integer',
              },
            },
            required: ['assetType', 'fileName', 'fileSize'],
          },
          relationships: {
            type: 'object',
            properties: {
              backgroundAssetVersion: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['backgroundAssetVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['backgroundAssetVersion'],
          },
          type: {
            type: 'string',
            enum: ['backgroundAssetUploadFiles'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.backgroundAssetUploadFiles.create(body));
};

export default { metadata, tool, handler };
