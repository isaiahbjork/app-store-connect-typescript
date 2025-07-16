// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'diagnostic_signatures',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/diagnosticSignatures/{id}/logs',
  operationId: 'diagnosticSignatures_logs_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_logs_diagnostic_signatures',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    productData: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          diagnosticInsights: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                insightsCategory: {\n                  type: 'string'\n                },\n                insightsString: {\n                  type: 'string'\n                },\n                insightsURL: {\n                  type: 'string'\n                }\n              },\n              required: []\n            }\n          },\n          diagnosticLogs: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                callStackTree: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      callStackPerThread: {\n                        type: 'boolean'\n                      },\n                      callStacks: {\n                        type: 'array',\n                        items: {\n                          type: 'object',\n                          properties: {\n                            callStackRootFrames: {\n                              type: 'array',\n                              items: {\n                                $ref: '#/$defs/diagnostic_log_call_stack_node'\n                              }\n                            }\n                          },\n                          required: []\n                        }\n                      }\n                    },\n                    required: []\n                  }\n                },\n                diagnosticMetaData: {\n                  type: 'object',\n                  properties: {\n                    appVersion: {\n                      type: 'string'\n                    },\n                    buildVersion: {\n                      type: 'string'\n                    },\n                    bundleId: {\n                      type: 'string'\n                    },\n                    deviceType: {\n                      type: 'string'\n                    },\n                    event: {\n                      type: 'string'\n                    },\n                    eventDetail: {\n                      type: 'string'\n                    },\n                    osVersion: {\n                      type: 'string'\n                    },\n                    platformArchitecture: {\n                      type: 'string'\n                    },\n                    writesCaused: {\n                      type: 'string'\n                    }\n                  },\n                  required: []\n                }\n              },\n              required: []\n            }\n          },\n          signatureId: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    },\n    version: {\n      type: 'string'\n    }\n  },\n  required: [],\n  $defs: {\n    diagnostic_log_call_stack_node: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        binaryName: {\n          type: 'string'\n        },\n        binaryUUID: {\n          type: 'string'\n        },\n        fileName: {\n          type: 'string'\n        },\n        insightsCategory: {\n          type: 'string'\n        },\n        isBlameFrame: {\n          type: 'boolean'\n        },\n        lineNumber: {\n          type: 'string'\n        },\n        offsetIntoBinaryTextSegment: {\n          type: 'string'\n        },\n        offsetIntoSymbol: {\n          type: 'string'\n        },\n        rawFrame: {\n          type: 'string'\n        },\n        sampleCount: {\n          type: 'integer'\n        },\n        subFrames: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/diagnostic_log_call_stack_node'\n          }\n        },\n        symbolName: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
    await maybeFilter(args, await client.diagnosticSignatures.retrieveLogs(id, body)),
  );
};

export default { metadata, tool, handler };
