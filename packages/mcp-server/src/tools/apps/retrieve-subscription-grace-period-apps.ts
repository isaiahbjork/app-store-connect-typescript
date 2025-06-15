// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/subscriptionGracePeriod',
  operationId: 'apps_subscriptionGracePeriod_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_subscription_grace_period_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionGracePeriods]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionGracePeriods',
        items: {
          type: 'string',
          enum: ['optIn', 'sandboxOptIn', 'duration', 'renewalType'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveSubscriptionGracePeriod(id, body));
};

export default { metadata, tool, handler };
