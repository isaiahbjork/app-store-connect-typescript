// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_asset_versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/backgroundAssetVersions',
  operationId: 'backgroundAssetVersions_createInstance',
};

export const tool: Tool = {
  name: 'create_background_asset_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              backgroundAsset: {
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
                        enum: ['backgroundAssets'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['backgroundAsset'],
          },
          type: {
            type: 'string',
            enum: ['backgroundAssetVersions'],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.backgroundAssetVersions.create(body));
};

export default { metadata, tool, handler };
