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
  httpPath: '/v1/builds/{id}/perfPowerMetrics',
  operationId: 'builds_perfPowerMetrics_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_perf_power_metrics_builds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'filter[deviceType]': {
        type: 'array',
        description: "filter by attribute 'deviceType'",
        items: {
          type: 'string',
        },
      },
      'filter[metricType]': {
        type: 'array',
        description: "filter by attribute 'metricType'",
        items: {
          type: 'string',
          enum: ['DISK', 'HANG', 'BATTERY', 'LAUNCH', 'MEMORY', 'ANIMATION', 'TERMINATION'],
        },
      },
      'filter[platform]': {
        type: 'array',
        description: "filter by attribute 'platform'",
        items: {
          type: 'string',
          enum: ['IOS'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.builds.retrievePerfPowerMetrics(id, body));
};

export default { metadata, tool, handler };
