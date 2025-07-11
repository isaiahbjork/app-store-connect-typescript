// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/users/{id}',
  operationId: 'users_updateInstance',
};

export const tool: Tool = {
  name: 'update_users',
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
            enum: ['users'],
          },
          attributes: {
            type: 'object',
            properties: {
              allAppsVisible: {
                type: 'boolean',
              },
              provisioningAllowed: {
                type: 'boolean',
              },
              roles: {
                type: 'array',
                items: {
                  $ref: '#/$defs/user_role',
                },
              },
            },
            required: [],
          },
          relationships: {
            type: 'object',
            properties: {
              visibleApps: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
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
                },
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      user_role: {
        type: 'string',
        enum: [
          'ADMIN',
          'FINANCE',
          'ACCOUNT_HOLDER',
          'SALES',
          'MARKETING',
          'APP_MANAGER',
          'DEVELOPER',
          'ACCESS_TO_REPORTS',
          'CUSTOMER_SUPPORT',
          'CREATE_APPS',
          'CLOUD_MANAGED_DEVELOPER_ID',
          'CLOUD_MANAGED_APP_DISTRIBUTION',
          'GENERATE_INDIVIDUAL_KEYS',
        ],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.users.update(id, body));
};

export default { metadata, tool, handler };
