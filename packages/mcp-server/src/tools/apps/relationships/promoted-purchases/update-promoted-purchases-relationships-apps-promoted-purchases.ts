// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps.relationships.promoted_purchases',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/apps/{id}/relationships/promotedPurchases',
  operationId: 'apps_promotedPurchases_replaceToManyRelationship',
};

export const tool: Tool = {
  name: 'update_promoted_purchases_relationships_apps_promoted_purchases',
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
              enum: ['promotedPurchases'],
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
  await client.apps.relationships.promotedPurchases.updatePromotedPurchases(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
