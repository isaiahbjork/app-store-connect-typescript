// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_price_schedules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appPriceSchedules/{id}/manualPrices',
  operationId: 'appPriceSchedules_manualPrices_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_manual_prices_app_price_schedules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appPricePoints]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPricePoints',
        items: {
          type: 'string',
          enum: ['customerPrice', 'proceeds', 'app', 'equalizations', 'territory'],
        },
      },
      'fields[appPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPrices',
        items: {
          type: 'string',
          enum: ['manual', 'startDate', 'endDate', 'appPricePoint', 'territory'],
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
      'filter[endDate]': {
        type: 'array',
        description: "filter by attribute 'endDate'",
        items: {
          type: 'string',
        },
      },
      'filter[startDate]': {
        type: 'array',
        description: "filter by attribute 'startDate'",
        items: {
          type: 'string',
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
          enum: ['appPricePoint', 'territory'],
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
  return asTextContentResult(await client.appPriceSchedules.listManualPrices(id, body));
};

export default { metadata, tool, handler };
