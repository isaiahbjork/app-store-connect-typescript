// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'alternative_distribution_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/alternativeDistributionDomains',
  operationId: 'alternativeDistributionDomains_createInstance',
};

export const tool: Tool = {
  name: 'create_alternative_distribution_domains',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              domain: {
                type: 'string',
              },
              referenceName: {
                type: 'string',
              },
            },
            required: ['domain', 'referenceName'],
          },
          type: {
            type: 'string',
            enum: ['alternativeDistributionDomains'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.alternativeDistributionDomains.create(body));
};

export default { metadata, tool, handler };
