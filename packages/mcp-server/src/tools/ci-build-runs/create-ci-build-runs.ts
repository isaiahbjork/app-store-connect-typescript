// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_build_runs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/ciBuildRuns',
  operationId: 'ciBuildRuns_createInstance',
};

export const tool: Tool = {
  name: 'create_ci_build_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['ciBuildRuns'],
          },
          attributes: {
            type: 'object',
            properties: {
              clean: {
                type: 'boolean',
              },
            },
          },
          relationships: {
            type: 'object',
            properties: {
              buildRun: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['ciBuildRuns'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              pullRequest: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['scmPullRequests'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              sourceBranchOrTag: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['scmGitReferences'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              workflow: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['ciWorkflows'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
            },
          },
        },
        required: ['type'],
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ciBuildRuns.create(body));
};

export default { metadata, tool, handler };
