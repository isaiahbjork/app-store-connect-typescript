// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'user_invitations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/userInvitations',
  operationId: 'userInvitations_createInstance',
};

export const tool: Tool = {
  name: 'create_user_invitations',
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
              email: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              roles: {
                type: 'array',
                items: {
                  $ref: '#/$defs/user_role',
                },
              },
              allAppsVisible: {
                type: 'boolean',
              },
              provisioningAllowed: {
                type: 'boolean',
              },
            },
            required: ['email', 'firstName', 'lastName', 'roles'],
          },
          type: {
            type: 'string',
            enum: ['userInvitations'],
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
        required: ['attributes', 'type'],
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
  const body = args as any;
  return asTextContentResult(await client.userInvitations.create(body));
};

export default { metadata, tool, handler };
