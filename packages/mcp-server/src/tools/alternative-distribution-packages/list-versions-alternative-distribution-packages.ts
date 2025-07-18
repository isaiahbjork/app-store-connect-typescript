// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionPackages/{id}/versions',
  operationId: 'alternativeDistributionPackages_versions_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_versions_alternative_distribution_packages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
      'fields[alternativeDistributionPackages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type alternativeDistributionPackages',
        items: {
          type: 'string',
          enum: ['versions'],
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
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: ['COMPLETED', 'REPLACED'],
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.alternativeDistributionPackages.listVersions(id, body));
};

export default { metadata, tool, handler };
