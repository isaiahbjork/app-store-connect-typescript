// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'analytics_report_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/analyticsReportRequests/{id}',
  operationId: 'analyticsReportRequests_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_analytics_report_requests',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[analyticsReportRequests]': {
        type: 'array',
        description: 'the fields to include for returned resources of type analyticsReportRequests',
        items: {
          type: 'string',
          enum: ['accessType', 'stoppedDueToInactivity', 'reports'],
        },
      },
      'fields[analyticsReports]': {
        type: 'array',
        description: 'the fields to include for returned resources of type analyticsReports',
        items: {
          type: 'string',
          enum: ['name', 'category', 'instances'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['reports'],
        },
      },
      'limit[reports]': {
        type: 'integer',
        description: 'maximum number of related reports returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.analyticsReportRequests.retrieve(id, body));
};

export default { metadata, tool, handler };
