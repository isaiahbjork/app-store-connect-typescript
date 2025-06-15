// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/alternativeDistributionKeys',
  operationId: 'alternativeDistributionKeys_getCollection',
};

export const tool: Tool = {
  name: 'list_alternative_distribution_keys',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'exists[app]': {
        type: 'boolean',
        description: "filter by existence or non-existence of related 'app'",
      },
      'fields[alternativeDistributionKeys]': {
        type: 'array',
        description: 'the fields to include for returned resources of type alternativeDistributionKeys',
        items: {
          type: 'string',
          enum: ['publicKey'],
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
  const body = args as any;
  return asTextContentResult(await client.alternativeDistributionKeys.list(body));
};

export default { metadata, tool, handler };
