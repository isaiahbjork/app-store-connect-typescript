// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'users.relationships.visible_apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/users/{id}/relationships/visibleApps',
  operationId: 'users_visibleApps_getToManyRelationship',
};

export const tool: Tool = {
  name: 'get_relationships_users_visible_apps',
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
  return asTextContentResult(await client.users.relationships.visibleApps.get(id, body));
};

export default { metadata, tool, handler };
