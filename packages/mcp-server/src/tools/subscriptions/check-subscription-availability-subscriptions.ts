// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/{id}/subscriptionAvailability',
  operationId: 'subscriptions_subscriptionAvailability_getToOneRelated',
};

export const tool: Tool = {
  name: 'check_subscription_availability_subscriptions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionAvailabilities',
        items: {
          type: 'string',
          enum: ['availableInNewTerritories', 'availableTerritories'],
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['availableTerritories'],
        },
      },
      'limit[availableTerritories]': {
        type: 'integer',
        description: 'maximum number of related availableTerritories returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.checkSubscriptionAvailability(id, body));
};

export default { metadata, tool, handler };
