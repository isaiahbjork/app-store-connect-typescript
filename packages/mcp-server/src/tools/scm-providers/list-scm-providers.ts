// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'scm_providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/scmProviders',
  operationId: 'scmProviders_getCollection',
};

export const tool: Tool = {
  name: 'list_scm_providers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[scmProviders]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmProviders',
        items: {
          type: 'string',
          enum: ['scmProviderType', 'url', 'repositories'],
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
  const body = args as any;
  return asTextContentResult(await client.scmProviders.list(body));
};

export default { metadata, tool, handler };
