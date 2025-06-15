// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_asset_version_internal_beta_releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/backgroundAssetVersionInternalBetaReleases/{id}',
  operationId: 'backgroundAssetVersionInternalBetaReleases_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_background_asset_version_internal_beta_releases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[backgroundAssetVersionInternalBetaReleases]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type backgroundAssetVersionInternalBetaReleases',
        items: {
          type: 'string',
          enum: ['state', 'backgroundAssetVersion'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['backgroundAssetVersion'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.backgroundAssetVersionInternalBetaReleases.retrieve(id, body));
};

export default { metadata, tool, handler };
