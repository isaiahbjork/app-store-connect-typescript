// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'analytics_report_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/analyticsReportRequests/{id}/reports',
  operationId: 'analyticsReportRequests_reports_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_reports_analytics_report_requests',
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
      'filter[category]': {
        type: 'array',
        description: "filter by attribute 'category'",
        items: {
          type: 'string',
          enum: ['APP_USAGE', 'APP_STORE_ENGAGEMENT', 'COMMERCE', 'FRAMEWORK_USAGE', 'PERFORMANCE'],
        },
      },
      'filter[name]': {
        type: 'array',
        description: "filter by attribute 'name'",
        items: {
          type: 'string',
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
  return asTextContentResult(await client.analyticsReportRequests.listReports(id, body));
};

export default { metadata, tool, handler };
