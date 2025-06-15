// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchases.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/inAppPurchases/{id}/relationships/inAppPurchaseAvailability',
  operationId: 'inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchase_availability_in_app_purchases_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.inAppPurchases.relationships.retrieveInAppPurchaseAvailability(id));
};

export default { metadata, tool, handler };
