// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AnalyticsReportsResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/analytics_report'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    analytics_report: {\n      type: 'object',\n      title: 'AnalyticsReport',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'analyticsReports'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            category: {\n              type: 'string',\n              enum: [                'APP_USAGE',\n                'APP_STORE_ENGAGEMENT',\n                'COMMERCE',\n                'FRAMEWORK_USAGE',\n                'PERFORMANCE'\n              ]\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            instances: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
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
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.analyticsReportRequests.listReports(id, body)),
  );
};

export default { metadata, tool, handler };
