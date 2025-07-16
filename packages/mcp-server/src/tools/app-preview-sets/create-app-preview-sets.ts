// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_preview_sets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appPreviewSets',
  operationId: 'appPreviewSets_createInstance',
};

export const tool: Tool = {
  name: 'create_app_preview_sets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              previewType: {
                $ref: '#/$defs/preview_type',
              },
            },
            required: ['previewType'],
          },
          type: {
            type: 'string',
            enum: ['appPreviewSets'],
          },
          relationships: {
            type: 'object',
            properties: {
              appCustomProductPageLocalization: {
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
                        enum: ['appCustomProductPageLocalizations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              appStoreVersionExperimentTreatmentLocalization: {
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
                        enum: ['appStoreVersionExperimentTreatmentLocalizations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              appStoreVersionLocalization: {
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
                        enum: ['appStoreVersionLocalizations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['attributes', 'type'],
      },
    },
    $defs: {
      preview_type: {
        type: 'string',
        enum: [
          'IPHONE_67',
          'IPHONE_61',
          'IPHONE_65',
          'IPHONE_58',
          'IPHONE_55',
          'IPHONE_47',
          'IPHONE_40',
          'IPHONE_35',
          'IPAD_PRO_3GEN_129',
          'IPAD_PRO_3GEN_11',
          'IPAD_PRO_129',
          'IPAD_105',
          'IPAD_97',
          'DESKTOP',
          'APPLE_TV',
          'APPLE_VISION_PRO',
        ],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appPreviewSets.create(body));
};

export default { metadata, tool, handler };
