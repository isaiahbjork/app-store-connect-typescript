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
  httpPath: '/v2/inAppPurchases/{id}/relationships/inAppPurchaseLocalizations',
  operationId: 'inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchase_localizations_in_app_purchases_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return asTextContentResult(
    await client.inAppPurchases.relationships.retrieveInAppPurchaseLocalizations(id, body),
  );
};

export default { metadata, tool, handler };
