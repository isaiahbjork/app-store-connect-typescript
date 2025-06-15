// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/metrics/betaTesterUsages',
  operationId: 'apps_betaTesterUsages_getMetrics',
};

export const tool: Tool = {
  name: 'retrieve_beta_tester_usages_apps_metrics',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'filter[betaTesters]': {
        type: 'string',
        description: "filter by 'betaTesters' relationship dimension",
      },
      groupBy: {
        type: 'array',
        description: 'the dimension by which to group the results',
        items: {
          type: 'string',
          enum: ['betaTesters'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum number of groups to return per page',
      },
      period: {
        type: 'string',
        description: 'the duration of the reporting period',
        enum: ['P7D', 'P30D', 'P90D', 'P365D'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.metrics.retrieveBetaTesterUsages(id, body));
};

export default { metadata, tool, handler };
