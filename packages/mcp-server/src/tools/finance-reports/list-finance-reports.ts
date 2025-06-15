// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'finance_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/financeReports',
  operationId: 'financeReports_getCollection',
};

export const tool: Tool = {
  name: 'list_finance_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'filter[regionCode]': {
        type: 'array',
        description: "filter by attribute 'regionCode'",
        items: {
          type: 'string',
        },
      },
      'filter[reportDate]': {
        type: 'array',
        description: "filter by attribute 'reportDate'",
        items: {
          type: 'string',
        },
      },
      'filter[reportType]': {
        type: 'array',
        description: "filter by attribute 'reportType'",
        items: {
          type: 'string',
          enum: ['FINANCIAL', 'FINANCE_DETAIL'],
        },
      },
      'filter[vendorNumber]': {
        type: 'array',
        description: "filter by attribute 'vendorNumber'",
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.financeReports.list(body));
};

export default { metadata, tool, handler };
