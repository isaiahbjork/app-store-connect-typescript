// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_package_variants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionPackageVariants/{id}',
  operationId: 'alternativeDistributionPackageVariants_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_alternative_distribution_package_variants',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.alternativeDistributionPackageVariants.retrieve(id, body));
};

export default { metadata, tool, handler };
