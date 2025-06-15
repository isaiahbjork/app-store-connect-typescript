// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'analytics_report_instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/analyticsReportInstances/{id}',
  operationId: 'analyticsReportInstances_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_analytics_report_instances',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.analyticsReportInstances.retrieve(id, body));
};

export default { metadata, tool, handler };
