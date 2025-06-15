// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'analytics_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/analyticsReports/{id}/instances',
  operationId: 'analyticsReports_instances_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_instances_analytics_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[analyticsReportInstances]': {
        type: 'array',
        description: 'the fields to include for returned resources of type analyticsReportInstances',
        items: {
          type: 'string',
          enum: ['granularity', 'processingDate', 'segments'],
        },
      },
      'filter[granularity]': {
        type: 'array',
        description: "filter by attribute 'granularity'",
        items: {
          type: 'string',
          enum: ['DAILY', 'WEEKLY', 'MONTHLY'],
        },
      },
      'filter[processingDate]': {
        type: 'array',
        description: "filter by attribute 'processingDate'",
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
  return asTextContentResult(await client.analyticsReports.listInstances(id, body));
};

export default { metadata, tool, handler };
