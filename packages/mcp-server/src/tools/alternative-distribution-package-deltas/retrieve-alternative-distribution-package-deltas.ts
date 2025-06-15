// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_package_deltas',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionPackageDeltas/{id}',
  operationId: 'alternativeDistributionPackageDeltas_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_alternative_distribution_package_deltas',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.alternativeDistributionPackageDeltas.retrieve(id, body));
};

export default { metadata, tool, handler };
