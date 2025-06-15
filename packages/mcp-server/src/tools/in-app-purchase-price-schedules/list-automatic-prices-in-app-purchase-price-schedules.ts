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
  httpPath: '/v1/inAppPurchasePriceSchedules/{id}/automaticPrices',
  operationId: 'inAppPurchasePriceSchedules_automaticPrices_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_automatic_prices_in_app_purchase_price_schedules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchasePricePoints]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchasePricePoints',
        items: {
          type: 'string',
          enum: ['customerPrice', 'proceeds', 'territory', 'equalizations'],
        },
      },
      'fields[inAppPurchasePrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchasePrices',
        items: {
          type: 'string',
          enum: ['startDate', 'endDate', 'manual', 'inAppPurchasePricePoint', 'territory'],
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
      'filter[territory]': {
        type: 'array',
        description: "filter by id(s) of related 'territory'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['inAppPurchasePricePoint', 'territory'],
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
  return asTextContentResult(await client.inAppPurchasePriceSchedules.listAutomaticPrices(id, body));
};

export default { metadata, tool, handler };
