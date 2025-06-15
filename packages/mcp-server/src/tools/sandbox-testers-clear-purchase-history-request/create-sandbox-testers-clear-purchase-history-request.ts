// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'sandbox_testers_clear_purchase_history_request',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/sandboxTestersClearPurchaseHistoryRequest',
  operationId: 'sandboxTestersClearPurchaseHistoryRequestV2_createInstance',
};

export const tool: Tool = {
  name: 'create_sandbox_testers_clear_purchase_history_request',
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
              sandboxTesters: {
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
                          enum: ['sandboxTesters'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
            },
            required: ['sandboxTesters'],
          },
          type: {
            type: 'string',
            enum: ['sandboxTestersClearPurchaseHistoryRequest'],
          },
        },
        required: ['relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sandboxTestersClearPurchaseHistoryRequest.create(body));
};

export default { metadata, tool, handler };
