// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_package_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionPackageVersions/{id}/deltas',
  operationId: 'alternativeDistributionPackageVersions_deltas_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_deltas_alternative_distribution_package_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[alternativeDistributionPackageDeltas]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type alternativeDistributionPackageDeltas',
        items: {
          type: 'string',
          enum: ['url', 'urlExpirationDate', 'alternativeDistributionKeyBlob', 'fileChecksum'],
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
  return asTextContentResult(await client.alternativeDistributionPackageVersions.listDeltas(id, body));
};

export default { metadata, tool, handler };
