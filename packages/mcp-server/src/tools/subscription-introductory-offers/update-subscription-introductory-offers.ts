// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_introductory_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptionIntroductoryOffers/{id}',
  operationId: 'subscriptionIntroductoryOffers_updateInstance',
};

export const tool: Tool = {
  name: 'update_subscription_introductory_offers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
            enum: ['subscriptionIntroductoryOffers'],
          },
          attributes: {
            type: 'object',
            properties: {
              endDate: {
                type: 'string',
                format: 'date',
              },
            },
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionIntroductoryOffers.update(id, body));
};

export default { metadata, tool, handler };
