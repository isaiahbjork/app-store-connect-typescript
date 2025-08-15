// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submission_items',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/reviewSubmissionItems',
  operationId: 'reviewSubmissionItems_createInstance',
};

export const tool: Tool = {
  name: 'create_review_submission_items',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              reviewSubmission: {
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
                        enum: ['reviewSubmissions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              appCustomProductPageVersion: {
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
                        enum: ['appCustomProductPageVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              appEvent: {
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
                        enum: ['appEvents'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              appStoreVersion: {
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
                        enum: ['appStoreVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              appStoreVersionExperiment: {
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
                        enum: ['appStoreVersionExperiments'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              appStoreVersionExperimentV2: {
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
                        enum: ['appStoreVersionExperiments'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
            },
            required: ['reviewSubmission'],
          },
          type: {
            type: 'string',
            enum: ['reviewSubmissionItems'],
          },
        },
        required: ['relationships', 'type'],
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.reviewSubmissionItems.create(body));
};

export default { metadata, tool, handler };
