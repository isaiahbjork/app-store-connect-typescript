// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_price_points',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionPricePoints/{id}',
  operationId: 'subscriptionPricePoints_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_price_points',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionPricePoints]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionPricePoints',
        items: {
          type: 'string',
          enum: ['customerPrice', 'proceeds', 'proceedsYear2', 'territory', 'equalizations'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['territory'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionPricePoints.retrieve(id, body));
};

export default { metadata, tool, handler };
