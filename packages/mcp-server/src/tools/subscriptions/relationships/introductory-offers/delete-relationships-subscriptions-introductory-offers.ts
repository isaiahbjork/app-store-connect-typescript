// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions.relationships.introductory_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/{id}/relationships/introductoryOffers',
  operationId: 'subscriptions_introductoryOffers_deleteToManyRelationship',
};

export const tool: Tool = {
  name: 'delete_relationships_subscriptions_introductory_offers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['subscriptionIntroductoryOffers'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.subscriptions.relationships.introductoryOffers.delete(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
