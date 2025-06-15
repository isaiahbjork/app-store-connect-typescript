// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/routingAppCoverage',
  operationId: 'appStoreVersions_routingAppCoverage_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_routing_app_coverage_app_store_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[routingAppCoverages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type routingAppCoverages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'uploadOperations',
            'assetDeliveryState',
            'appStoreVersion',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersions.retrieveRoutingAppCoverage(id, body));
};

export default { metadata, tool, handler };
