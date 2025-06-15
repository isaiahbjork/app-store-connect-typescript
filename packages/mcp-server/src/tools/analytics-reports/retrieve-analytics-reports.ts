// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'analytics_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/analyticsReports/{id}',
  operationId: 'analyticsReports_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_analytics_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[analyticsReports]': {
        type: 'array',
        description: 'the fields to include for returned resources of type analyticsReports',
        items: {
          type: 'string',
          enum: ['name', 'category', 'instances'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.analyticsReports.retrieve(id, body));
};

export default { metadata, tool, handler };
