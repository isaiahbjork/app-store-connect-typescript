// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experiences',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appClipDefaultExperiences/{id}',
  operationId: 'appClipDefaultExperiences_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_clip_default_experiences',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
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
          attributes: {
            type: 'object',
            properties: {
              action: {
                $ref: '#/$defs/app_clip_action',
              },
            },
          },
          relationships: {
            type: 'object',
            properties: {
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
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClipDefaultExperiences.update(id, body));
};

export default { metadata, tool, handler };
