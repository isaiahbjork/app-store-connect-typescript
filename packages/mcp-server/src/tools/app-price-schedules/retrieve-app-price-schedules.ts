// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_price_schedules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appPriceSchedules/{id}',
  operationId: 'appPriceSchedules_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_price_schedules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPrices',
        items: {
          type: 'string',
          enum: ['manual', 'startDate', 'endDate', 'appPricePoint', 'territory'],
        },
      },
      'fields[appPriceSchedules]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPriceSchedules',
        items: {
          type: 'string',
          enum: ['app', 'baseTerritory', 'manualPrices', 'automaticPrices'],
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
          enum: ['app', 'baseTerritory', 'manualPrices', 'automaticPrices'],
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
  return asTextContentResult(await client.appPriceSchedules.retrieve(id, body));
};

export default { metadata, tool, handler };
