// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/apps/{id}',
  operationId: 'apps_updateInstance',
};

export const tool: Tool = {
  name: 'update_apps',
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
            enum: ['apps'],
          },
          attributes: {
            type: 'object',
            properties: {
              accessibilityUrl: {
                type: 'string',
              },
              bundleId: {
                type: 'string',
              },
              contentRightsDeclaration: {
                type: 'string',
                enum: ['DOES_NOT_USE_THIRD_PARTY_CONTENT', 'USES_THIRD_PARTY_CONTENT'],
              },
              primaryLocale: {
                type: 'string',
              },
              streamlinedPurchasingEnabled: {
                type: 'boolean',
              },
              subscriptionStatusUrl: {
                type: 'string',
              },
              subscriptionStatusUrlForSandbox: {
                type: 'string',
              },
              subscriptionStatusUrlVersion: {
                $ref: '#/$defs/subscription_status_url_version',
              },
              subscriptionStatusUrlVersionForSandbox: {
                $ref: '#/$defs/subscription_status_url_version',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      subscription_status_url_version: {
        type: 'string',
        enum: ['V1', 'V2'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.update(id, body));
};

export default { metadata, tool, handler };
