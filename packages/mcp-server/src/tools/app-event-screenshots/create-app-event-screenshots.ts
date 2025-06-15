// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_event_screenshots',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appEventScreenshots',
  operationId: 'appEventScreenshots_createInstance',
};

export const tool: Tool = {
  name: 'create_app_event_screenshots',
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
              appEventAssetType: {
                $ref: '#/$defs/app_event_asset_type',
              },
              fileName: {
                type: 'string',
              },
              fileSize: {
                type: 'integer',
              },
            },
            required: ['appEventAssetType', 'fileName', 'fileSize'],
          },
          relationships: {
            type: 'object',
            properties: {
              appEventLocalization: {
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
                        enum: ['appEventLocalizations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['appEventLocalization'],
          },
          type: {
            type: 'string',
            enum: ['appEventScreenshots'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    $defs: {
      app_event_asset_type: {
        type: 'string',
        enum: ['EVENT_CARD', 'EVENT_DETAILS_PAGE'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appEventScreenshots.create(body));
};

export default { metadata, tool, handler };
