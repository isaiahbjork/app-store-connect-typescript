// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_events',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appEvents/{id}',
  operationId: 'appEvents_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
            enum: ['appEvents'],
          },
          attributes: {
            type: 'object',
            properties: {
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
              referenceName: {
                type: 'string',
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
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appEvents.update(id, body));
};

export default { metadata, tool, handler };
