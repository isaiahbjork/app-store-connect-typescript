// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/webhooks/{id}/deliveries',
  operationId: 'webhooks_deliveries_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_deliveries_webhooks',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[webhookDeliveries]': {
        type: 'array',
        description: 'the fields to include for returned resources of type webhookDeliveries',
        items: {
          type: 'string',
          enum: [
            'createdDate',
            'deliveryState',
            'errorMessage',
            'redelivery',
            'sentDate',
            'request',
            'response',
            'event',
          ],
        },
      },
      'fields[webhookEvents]': {
        type: 'array',
        description: 'the fields to include for returned resources of type webhookEvents',
        items: {
          type: 'string',
          enum: ['eventType', 'payload', 'ping', 'createdDate'],
        },
      },
      'filter[createdDateGreaterThanOrEqualTo]': {
        type: 'array',
        description: 'filter by createdDateGreaterThanOrEqualTo',
        items: {
          type: 'string',
        },
      },
      'filter[createdDateLessThan]': {
        type: 'array',
        description: 'filter by createdDateLessThan',
        items: {
          type: 'string',
        },
      },
      'filter[deliveryState]': {
        type: 'array',
        description: "filter by attribute 'deliveryState'",
        items: {
          type: 'string',
          enum: ['SUCCEEDED', 'FAILED', 'PENDING'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['event'],
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
  return asTextContentResult(await client.webhooks.listDeliveries(id, body));
};

export default { metadata, tool, handler };
