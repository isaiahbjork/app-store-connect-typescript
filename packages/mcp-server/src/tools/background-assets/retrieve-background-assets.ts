// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/backgroundAssets/{id}',
  operationId: 'backgroundAssets_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_background_assets',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['internalBetaVersion'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.backgroundAssets.retrieve(id, body));
};

export default { metadata, tool, handler };
