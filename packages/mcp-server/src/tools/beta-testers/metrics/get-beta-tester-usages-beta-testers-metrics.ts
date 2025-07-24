// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_testers.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaTesters/{id}/metrics/betaTesterUsages',
  operationId: 'betaTesters_betaTesterUsages_getMetrics',
};

export const tool: Tool = {
  name: 'get_beta_tester_usages_beta_testers_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          dataPoints: {\n            type: 'object',\n            properties: {\n              end: {\n                type: 'string',\n                format: 'date-time'\n              },\n              start: {\n                type: 'string',\n                format: 'date-time'\n              },\n              values: {\n                type: 'object',\n                properties: {\n                  crashCount: {\n                    type: 'integer'\n                  },\n                  feedbackCount: {\n                    type: 'integer'\n                  },\n                  sessionCount: {\n                    type: 'integer'\n                  }\n                }\n              }\n            }\n          },\n          dimensions: {\n            type: 'object',\n            properties: {\n              apps: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'string'\n                  },\n                  links: {\n                    type: 'object',\n                    properties: {\n                      groupBy: {\n                        type: 'string'\n                      },\n                      related: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'filter[apps]': {
        type: 'string',
        description: "filter by 'apps' relationship dimension",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'filter[apps]'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.betaTesters.metrics.getBetaTesterUsages(id, body)),
  );
};

export default { metadata, tool, handler };
