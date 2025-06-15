// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/{id}/prices',
  operationId: 'subscriptions_prices_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_prices_subscriptions',
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
      'fields[subscriptionPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionPrices',
        items: {
          type: 'string',
          enum: ['startDate', 'preserved', 'territory', 'subscriptionPricePoint'],
        },
      },
      'fields[territories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territories',
        items: {
          type: 'string',
          enum: ['currency'],
        },
      },
      'filter[subscriptionPricePoint]': {
        type: 'array',
        description: "filter by id(s) of related 'subscriptionPricePoint'",
        items: {
          type: 'string',
        },
      },
      'filter[territory]': {
        type: 'array',
        description: "filter by id(s) of related 'territory'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['territory', 'subscriptionPricePoint'],
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
  return asTextContentResult(await client.subscriptions.listPrices(id, body));
};

export default { metadata, tool, handler };
