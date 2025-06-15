// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/relationships/appStoreVersionExperimentsV2',
  operationId: 'apps_appStoreVersionExperimentsV2_getToManyRelationship',
};

export const tool: Tool = {
  name: 'retrieve_app_store_version_experiments_v2_apps_relationships',
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
  return asTextContentResult(await client.apps.relationships.retrieveAppStoreVersionExperimentsV2(id, body));
};

export default { metadata, tool, handler };
