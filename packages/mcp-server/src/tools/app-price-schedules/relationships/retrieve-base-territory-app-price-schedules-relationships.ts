// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_price_schedules.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appPriceSchedules/{id}/relationships/baseTerritory',
  operationId: 'appPriceSchedules_baseTerritory_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_base_territory_app_price_schedules_relationships',
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
  return asTextContentResult(await client.appPriceSchedules.relationships.retrieveBaseTerritory(id));
};

export default { metadata, tool, handler };
