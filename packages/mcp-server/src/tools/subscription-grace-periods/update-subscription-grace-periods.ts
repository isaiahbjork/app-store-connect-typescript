// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_grace_periods',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptionGracePeriods/{id}',
  operationId: 'subscriptionGracePeriods_updateInstance',
};

export const tool: Tool = {
  name: 'update_subscription_grace_periods',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['subscriptionGracePeriods'],
          },
          attributes: {
            type: 'object',
            properties: {
              duration: {
                $ref: '#/$defs/subscription_grace_period_duration',
              },
              optIn: {
                type: 'boolean',
              },
              renewalType: {
                type: 'string',
                enum: ['ALL_RENEWALS', 'PAID_TO_PAID_ONLY'],
              },
              sandboxOptIn: {
                type: 'boolean',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      subscription_grace_period_duration: {
        type: 'string',
        enum: ['THREE_DAYS', 'SIXTEEN_DAYS', 'TWENTY_EIGHT_DAYS'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionGracePeriods.update(id, body));
};

export default { metadata, tool, handler };
