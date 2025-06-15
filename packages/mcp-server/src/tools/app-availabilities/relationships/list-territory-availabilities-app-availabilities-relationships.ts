// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_availabilities.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/appAvailabilities/{id}/relationships/territoryAvailabilities',
  operationId: 'appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship',
};

export const tool: Tool = {
  name: 'list_territory_availabilities_app_availabilities_relationships',
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
    await client.appAvailabilities.relationships.listTerritoryAvailabilities(id, body),
  );
};

export default { metadata, tool, handler };
