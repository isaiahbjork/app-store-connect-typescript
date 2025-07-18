// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_queues.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes',
  operationId: 'gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics',
};

export const tool: Tool = {
  name: 'get_experiment_queue_sizes_game_center_matchmaking_queues_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/queue_sizes_v1_metric_response',\n  $defs: {\n    queue_sizes_v1_metric_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              dataPoints: {\n                type: 'object',\n                properties: {\n                  end: {\n                    type: 'string',\n                    format: 'date-time'\n                  },\n                  start: {\n                    type: 'string',\n                    format: 'date-time'\n                  },\n                  values: {\n                    type: 'object',\n                    properties: {\n                      averageNumberOfRequests: {\n                        type: 'number'\n                      },\n                      count: {\n                        type: 'integer'\n                      },\n                      p50NumberOfRequests: {\n                        type: 'number'\n                      },\n                      p95NumberOfRequests: {\n                        type: 'number'\n                      }\n                    }\n                  }\n                }\n              },\n              granularity: {\n                type: 'string',\n                enum: [                  'P1D',\n                  'PT1H',\n                  'PT15M'\n                ]\n              }\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/paged_document_links'\n        },\n        meta: {\n          $ref: '#/$defs/paging_information'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      granularity: {
        type: 'string',
        description: 'the granularity of the per-group dataset',
        enum: ['P1D', 'PT1H', 'PT15M'],
      },
      limit: {
        type: 'integer',
        description: 'maximum number of groups to return per page',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; metrics will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'count',
            '-count',
            'averageNumberOfRequests',
            '-averageNumberOfRequests',
            'p50NumberOfRequests',
            '-p50NumberOfRequests',
            'p95NumberOfRequests',
            '-p95NumberOfRequests',
          ],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'granularity'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.gameCenterMatchmakingQueues.metrics.getExperimentQueueSizes(id, body),
    ),
  );
};

export default { metadata, tool, handler };
