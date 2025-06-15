// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_grace_periods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionGracePeriods/{id}',
  operationId: 'subscriptionGracePeriods_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_grace_periods',
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
  return asTextContentResult(await client.subscriptionGracePeriods.retrieve(id, body));
};

export default { metadata, tool, handler };
