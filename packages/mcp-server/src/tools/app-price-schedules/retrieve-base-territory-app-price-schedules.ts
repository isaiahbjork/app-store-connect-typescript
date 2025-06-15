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
  httpPath: '/v1/appPriceSchedules/{id}/baseTerritory',
  operationId: 'appPriceSchedules_baseTerritory_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_base_territory_app_price_schedules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[territories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territories',
        items: {
          type: 'string',
          enum: ['currency'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appPriceSchedules.retrieveBaseTerritory(id, body));
};

export default { metadata, tool, handler };
