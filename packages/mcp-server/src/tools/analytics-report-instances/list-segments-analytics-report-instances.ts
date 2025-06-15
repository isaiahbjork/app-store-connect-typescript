// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'analytics_report_instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/analyticsReportInstances/{id}/segments',
  operationId: 'analyticsReportInstances_segments_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_segments_analytics_report_instances',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[analyticsReportSegments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type analyticsReportSegments',
        items: {
          type: 'string',
          enum: ['checksum', 'sizeInBytes', 'url'],
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
  return asTextContentResult(await client.analyticsReportInstances.listSegments(id, body));
};

export default { metadata, tool, handler };
