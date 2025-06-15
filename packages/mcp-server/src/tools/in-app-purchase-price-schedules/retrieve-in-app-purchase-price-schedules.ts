// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchase_price_schedules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/inAppPurchasePriceSchedules/{id}',
  operationId: 'inAppPurchasePriceSchedules_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchase_price_schedules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchasePrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchasePrices',
        items: {
          type: 'string',
          enum: ['startDate', 'endDate', 'manual', 'inAppPurchasePricePoint', 'territory'],
        },
      },
      'fields[inAppPurchasePriceSchedules]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchasePriceSchedules',
        items: {
          type: 'string',
          enum: ['baseTerritory', 'manualPrices', 'automaticPrices'],
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
          enum: ['baseTerritory', 'manualPrices', 'automaticPrices'],
        },
      },
      'limit[automaticPrices]': {
        type: 'integer',
        description: 'maximum number of related automaticPrices returned (when they are included)',
      },
      'limit[manualPrices]': {
        type: 'integer',
        description: 'maximum number of related manualPrices returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.inAppPurchasePriceSchedules.retrieve(id, body));
};

export default { metadata, tool, handler };
