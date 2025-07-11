// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'sales_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/salesReports',
  operationId: 'salesReports_getCollection',
};

export const tool: Tool = {
  name: 'list_sales_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[frequency]': {
        type: 'array',
        description: "filter by attribute 'frequency'",
        items: {
          type: 'string',
          enum: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'],
        },
      },
      'filter[reportSubType]': {
        type: 'array',
        description: "filter by attribute 'reportSubType'",
        items: {
          type: 'string',
          enum: ['SUMMARY', 'DETAILED', 'SUMMARY_INSTALL_TYPE', 'SUMMARY_TERRITORY', 'SUMMARY_CHANNEL'],
        },
      },
      'filter[reportType]': {
        type: 'array',
        description: "filter by attribute 'reportType'",
        items: {
          type: 'string',
          enum: [
            'SALES',
            'PRE_ORDER',
            'NEWSSTAND',
            'SUBSCRIPTION',
            'SUBSCRIPTION_EVENT',
            'SUBSCRIBER',
            'SUBSCRIPTION_OFFER_CODE_REDEMPTION',
            'INSTALLS',
            'FIRST_ANNUAL',
            'WIN_BACK_ELIGIBILITY',
          ],
        },
      },
      'filter[vendorNumber]': {
        type: 'array',
        description: "filter by attribute 'vendorNumber'",
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
      'filter[version]': {
        type: 'array',
        description: "filter by attribute 'version'",
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
  return asBinaryContentResult(await client.salesReports.list(body));
};

export default { metadata, tool, handler };
