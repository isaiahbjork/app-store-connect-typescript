// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experiences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appClipDefaultExperiences',
  operationId: 'appClipDefaultExperiences_createInstance',
};

export const tool: Tool = {
  name: 'create_app_clip_default_experiences',
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
              appClip: {
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
                        enum: ['appClips'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              appClipDefaultExperienceTemplate: {
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
                        enum: ['appClipDefaultExperiences'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              releaseWithAppStoreVersion: {
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
            },
            required: ['appClip'],
          },
          type: {
            type: 'string',
            enum: ['appClipDefaultExperiences'],
          },
          attributes: {
            type: 'object',
            properties: {
              action: {
                $ref: '#/$defs/app_clip_action',
              },
            },
          },
        },
        required: ['relationships', 'type'],
      },
    },
    required: ['data'],
    $defs: {
      app_clip_action: {
        type: 'string',
        enum: ['OPEN', 'VIEW', 'PLAY'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appClipDefaultExperiences.create(body));
};

export default { metadata, tool, handler };
