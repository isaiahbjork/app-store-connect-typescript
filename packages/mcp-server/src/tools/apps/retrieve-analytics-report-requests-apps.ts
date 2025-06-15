// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/analyticsReportRequests',
  operationId: 'apps_analyticsReportRequests_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_analytics_report_requests_apps',
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
      'filter[accessType]': {
        type: 'array',
        description: "filter by attribute 'accessType'",
        items: {
          type: 'string',
          enum: ['ONE_TIME_SNAPSHOT', 'ONGOING'],
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
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
  return asTextContentResult(await client.apps.retrieveAnalyticsReportRequests(id, body));
};

export default { metadata, tool, handler };
