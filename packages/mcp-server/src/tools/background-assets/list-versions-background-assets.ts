// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/backgroundAssets/{id}/versions',
  operationId: 'backgroundAssets_versions_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_versions_background_assets',
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
      'fields[backgroundAssetVersionInternalBetaReleases]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type backgroundAssetVersionInternalBetaReleases',
        items: {
          type: 'string',
          enum: ['state', 'backgroundAssetVersion'],
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
      'filter[internalBetaRelease': {
        type: 'object',
        properties: {
          'state]': {
            type: 'array',
            description: "filter by attribute 'internalBetaRelease.state'",
            items: {
              type: 'string',
              enum: ['READY_FOR_TESTING', 'SUPERSEDED'],
            },
          },
        },
      },
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: ['AWAITING_UPLOAD', 'PROCESSING', 'FAILED', 'COMPLETE'],
        },
      },
      'filter[version]': {
        type: 'array',
        description: "filter by attribute 'version'",
        items: {
          type: 'string',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['version', '-version'],
        },
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
  return asTextContentResult(await client.backgroundAssets.listVersions(id, body));
};

export default { metadata, tool, handler };
