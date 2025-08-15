// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_package_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionPackageVersions/{id}',
  operationId: 'alternativeDistributionPackageVersions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_alternative_distribution_package_versions',
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
      'fields[alternativeDistributionPackageVariants]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type alternativeDistributionPackageVariants',
        items: {
          type: 'string',
          enum: ['url', 'urlExpirationDate', 'alternativeDistributionKeyBlob', 'fileChecksum'],
        },
      },
      'fields[alternativeDistributionPackageVersions]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type alternativeDistributionPackageVersions',
        items: {
          type: 'string',
          enum: [
            'url',
            'urlExpirationDate',
            'version',
            'fileChecksum',
            'state',
            'variants',
            'deltas',
            'alternativeDistributionPackage',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['variants', 'deltas', 'alternativeDistributionPackage'],
        },
      },
      'limit[deltas]': {
        type: 'integer',
        description: 'maximum number of related deltas returned (when they are included)',
      },
      'limit[variants]': {
        type: 'integer',
        description: 'maximum number of related variants returned (when they are included)',
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
  return asTextContentResult(await client.alternativeDistributionPackageVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
