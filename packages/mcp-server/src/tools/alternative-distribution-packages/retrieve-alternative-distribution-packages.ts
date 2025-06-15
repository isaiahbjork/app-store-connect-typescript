// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionPackages/{id}',
  operationId: 'alternativeDistributionPackages_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_alternative_distribution_packages',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[alternativeDistributionPackages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type alternativeDistributionPackages',
        items: {
          type: 'string',
          enum: ['versions'],
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
          enum: ['versions'],
        },
      },
      'limit[versions]': {
        type: 'integer',
        description: 'maximum number of related versions returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.alternativeDistributionPackages.retrieve(id, body));
};

export default { metadata, tool, handler };
