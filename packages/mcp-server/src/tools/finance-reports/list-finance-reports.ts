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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.financeReports.list(body));
};

export default { metadata, tool, handler };
