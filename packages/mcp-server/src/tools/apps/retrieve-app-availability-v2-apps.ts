// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/appAvailabilityV2',
  operationId: 'apps_appAvailabilityV2_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_availability_v2_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appAvailabilities',
        items: {
          type: 'string',
          enum: ['availableInNewTerritories', 'territoryAvailabilities'],
        },
      },
      'fields[territoryAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territoryAvailabilities',
        items: {
          type: 'string',
          enum: [
            'available',
            'releaseDate',
            'preOrderEnabled',
            'preOrderPublishDate',
            'contentStatuses',
            'territory',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['territoryAvailabilities'],
        },
      },
      'limit[territoryAvailabilities]': {
        type: 'integer',
        description: 'maximum number of related territoryAvailabilities returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveAppAvailabilityV2(id, body));
};

export default { metadata, tool, handler };
