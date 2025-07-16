// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/perfPowerMetrics',
  operationId: 'apps_perfPowerMetrics_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_perf_power_metrics_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/xcode_metrics',\n  $defs: {\n    xcode_metrics: {\n      type: 'object',\n      properties: {\n        insights: {\n          type: 'object',\n          properties: {\n            regressions: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/metrics_insight'\n              }\n            },\n            trendingUp: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/metrics_insight'\n              }\n            }\n          },\n          required: []\n        },\n        productData: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              metricCategories: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    identifier: {\n                      $ref: '#/$defs/metric_category'\n                    },\n                    metrics: {\n                      type: 'array',\n                      items: {\n                        type: 'object',\n                        properties: {\n                          datasets: {\n                            type: 'array',\n                            items: {\n                              type: 'object',\n                              properties: {\n                                filterCriteria: {\n                                  type: 'object',\n                                  properties: {\n                                    device: {\n                                      type: 'string'\n                                    },\n                                    deviceMarketingName: {\n                                      type: 'string'\n                                    },\n                                    percentile: {\n                                      type: 'string'\n                                    }\n                                  },\n                                  required: []\n                                },\n                                points: {\n                                  type: 'array',\n                                  items: {\n                                    type: 'object',\n                                    properties: {\n                                      errorMargin: {\n                                        type: 'number'\n                                      },\n                                      goal: {\n                                        type: 'string'\n                                      },\n                                      percentageBreakdown: {\n                                        type: 'object',\n                                        properties: {\n                                          subSystemLabel: {\n                                            type: 'string'\n                                          },\n                                          value: {\n                                            type: 'number'\n                                          }\n                                        },\n                                        required: []\n                                      },\n                                      value: {\n                                        type: 'number'\n                                      },\n                                      version: {\n                                        type: 'string'\n                                      }\n                                    },\n                                    required: []\n                                  }\n                                },\n                                recommendedMetricGoal: {\n                                  type: 'object',\n                                  properties: {\n                                    detail: {\n                                      type: 'string'\n                                    },\n                                    value: {\n                                      type: 'number'\n                                    }\n                                  },\n                                  required: []\n                                }\n                              },\n                              required: []\n                            }\n                          },\n                          goalKeys: {\n                            type: 'array',\n                            items: {\n                              type: 'object',\n                              properties: {\n                                goalKey: {\n                                  type: 'string'\n                                },\n                                lowerBound: {\n                                  type: 'integer'\n                                },\n                                upperBound: {\n                                  type: 'integer'\n                                }\n                              },\n                              required: []\n                            }\n                          },\n                          identifier: {\n                            type: 'string'\n                          },\n                          unit: {\n                            type: 'object',\n                            properties: {\n                              displayName: {\n                                type: 'string'\n                              },\n                              identifier: {\n                                type: 'string'\n                              }\n                            },\n                            required: []\n                          }\n                        },\n                        required: []\n                      }\n                    }\n                  },\n                  required: []\n                }\n              },\n              platform: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        version: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    metrics_insight: {\n      type: 'object',\n      properties: {\n        highImpact: {\n          type: 'boolean'\n        },\n        latestVersion: {\n          type: 'string'\n        },\n        maxLatestVersionValue: {\n          type: 'number'\n        },\n        metric: {\n          type: 'string'\n        },\n        metricCategory: {\n          $ref: '#/$defs/metric_category'\n        },\n        populations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              deltaPercentage: {\n                type: 'number'\n              },\n              device: {\n                type: 'string'\n              },\n              latestVersionValue: {\n                type: 'number'\n              },\n              percentile: {\n                type: 'string'\n              },\n              referenceAverageValue: {\n                type: 'number'\n              },\n              summaryString: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        referenceVersions: {\n          type: 'string'\n        },\n        subSystemLabel: {\n          type: 'string'\n        },\n        summaryString: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    metric_category: {\n      type: 'string',\n      enum: [        'HANG',\n        'LAUNCH',\n        'MEMORY',\n        'DISK',\n        'BATTERY',\n        'TERMINATION',\n        'ANIMATION'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.apps.retrievePerfPowerMetrics(id, body)));
};

export default { metadata, tool, handler };
