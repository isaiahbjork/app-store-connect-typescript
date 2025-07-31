// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appEvents',
  operationId: 'appEvents_createInstance',
};

export const tool: Tool = {
  name: 'create_app_events',
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
              referenceName: {
                type: 'string',
              },
              badge: {
                type: 'string',
                enum: [
                  'LIVE_EVENT',
                  'PREMIERE',
                  'CHALLENGE',
                  'COMPETITION',
                  'NEW_SEASON',
                  'MAJOR_UPDATE',
                  'SPECIAL_EVENT',
                ],
              },
              deepLink: {
                type: 'string',
              },
              primaryLocale: {
                type: 'string',
              },
              priority: {
                type: 'string',
                enum: ['HIGH', 'NORMAL'],
              },
              purchaseRequirement: {
                type: 'string',
              },
              purpose: {
                type: 'string',
                enum: [
                  'APPROPRIATE_FOR_ALL_USERS',
                  'ATTRACT_NEW_USERS',
                  'KEEP_ACTIVE_USERS_INFORMED',
                  'BRING_BACK_LAPSED_USERS',
                ],
              },
              territorySchedules: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    eventEnd: {
                      type: 'string',
                      format: 'date-time',
                    },
                    eventStart: {
                      type: 'string',
                      format: 'date-time',
                    },
                    publishStart: {
                      type: 'string',
                      format: 'date-time',
                    },
                    territories: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
            required: ['referenceName'],
          },
          relationships: {
            type: 'object',
            properties: {
              app: {
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
                        enum: ['apps'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['appEvents'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appEvents.create(body));
};

export default { metadata, tool, handler };
