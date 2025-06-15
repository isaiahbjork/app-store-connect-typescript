// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/builds/{id}/icons',
  operationId: 'builds_icons_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_icons_builds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[buildIcons]': {
        type: 'array',
        description: 'the fields to include for returned resources of type buildIcons',
        items: {
          type: 'string',
          enum: ['iconAsset', 'iconType', 'name'],
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
  return asTextContentResult(await client.builds.retrieveIcons(id, body));
};

export default { metadata, tool, handler };
