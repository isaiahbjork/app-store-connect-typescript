// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rules.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults',
  operationId: 'gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics',
};

export const tool: Tool = {
  name: 'retrieve_boolean_rule_results_game_center_matchmaking_rules_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          dataPoints: {\n            type: 'object',\n            properties: {\n              end: {\n                type: 'string',\n                format: 'date-time'\n              },\n              start: {\n                type: 'string',\n                format: 'date-time'\n              },\n              values: {\n                type: 'object',\n                properties: {\n                  count: {\n                    type: 'integer'\n                  }\n                },\n                required: []\n              }\n            },\n            required: []\n          },\n          dimensions: {\n            type: 'object',\n            properties: {\n              gameCenterMatchmakingQueue: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'string'\n                  },\n                  links: {\n                    type: 'object',\n                    properties: {\n                      groupBy: {\n                        type: 'string'\n                      },\n                      related: {\n                        type: 'string'\n                      }\n                    },\n                    required: []\n                  }\n                },\n                required: []\n              },\n              result: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'string'\n                  },\n                  links: {\n                    type: 'object',\n                    properties: {\n                      groupBy: {\n                        type: 'string'\n                      }\n                    },\n                    required: []\n                  }\n                },\n                required: []\n              }\n            },\n            required: []\n          },\n          granularity: {\n            type: 'string',\n            enum: [              'P1D',\n              'PT1H',\n              'PT15M'\n            ]\n          }\n        },\n        required: []\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
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
      'filter[gameCenterMatchmakingQueue]': {
        type: 'string',
        description: "filter by 'gameCenterMatchmakingQueue' relationship dimension",
      },
      'filter[result]': {
        type: 'string',
        description: "filter by 'result' attribute dimension",
      },
      groupBy: {
        type: 'array',
        description: 'the dimension by which to group the results',
        items: {
          type: 'string',
          enum: ['result', 'gameCenterMatchmakingQueue'],
        },
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
          enum: ['count', '-count'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.gameCenterMatchmakingRules.metrics.retrieveBooleanRuleResults(id, body),
    ),
  );
};

export default { metadata, tool, handler };
