// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_screenshot_sets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appScreenshotSets',
  operationId: 'appScreenshotSets_createInstance',
};

export const tool: Tool = {
  name: 'create_app_screenshot_sets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              screenshotDisplayType: {
                $ref: '#/$defs/screenshot_display_type',
              },
            },
            required: ['screenshotDisplayType'],
          },
          type: {
            type: 'string',
            enum: ['appScreenshotSets'],
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
      screenshot_display_type: {
        type: 'string',
        enum: [
          'APP_IPHONE_67',
          'APP_IPHONE_61',
          'APP_IPHONE_65',
          'APP_IPHONE_58',
          'APP_IPHONE_55',
          'APP_IPHONE_47',
          'APP_IPHONE_40',
          'APP_IPHONE_35',
          'APP_IPAD_PRO_3GEN_129',
          'APP_IPAD_PRO_3GEN_11',
          'APP_IPAD_PRO_129',
          'APP_IPAD_105',
          'APP_IPAD_97',
          'APP_DESKTOP',
          'APP_WATCH_ULTRA',
          'APP_WATCH_SERIES_10',
          'APP_WATCH_SERIES_7',
          'APP_WATCH_SERIES_4',
          'APP_WATCH_SERIES_3',
          'APP_APPLE_TV',
          'APP_APPLE_VISION_PRO',
          'IMESSAGE_APP_IPHONE_67',
          'IMESSAGE_APP_IPHONE_61',
          'IMESSAGE_APP_IPHONE_65',
          'IMESSAGE_APP_IPHONE_58',
          'IMESSAGE_APP_IPHONE_55',
          'IMESSAGE_APP_IPHONE_47',
          'IMESSAGE_APP_IPHONE_40',
          'IMESSAGE_APP_IPAD_PRO_3GEN_129',
          'IMESSAGE_APP_IPAD_PRO_3GEN_11',
          'IMESSAGE_APP_IPAD_PRO_129',
          'IMESSAGE_APP_IPAD_105',
          'IMESSAGE_APP_IPAD_97',
        ],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appScreenshotSets.create(body));
};

export default { metadata, tool, handler };
