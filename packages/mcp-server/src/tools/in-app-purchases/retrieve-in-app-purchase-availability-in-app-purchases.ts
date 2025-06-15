// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/inAppPurchases/{id}/inAppPurchaseAvailability',
  operationId: 'inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchase_availability_in_app_purchases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchaseAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseAvailabilities',
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
  return asTextContentResult(await client.inAppPurchases.retrieveInAppPurchaseAvailability(id, body));
};

export default { metadata, tool, handler };
