// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/inAppPurchases',
  operationId: 'inAppPurchasesV2_createInstance',
};

export const tool: Tool = {
  name: 'in_app_purchases_in_app_purchases',
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
              inAppPurchaseType: {
                $ref: '#/$defs/in_app_purchase_type',
              },
              name: {
                type: 'string',
              },
              productId: {
                type: 'string',
              },
              familySharable: {
                type: 'boolean',
              },
              reviewNote: {
                type: 'string',
              },
            },
            required: ['inAppPurchaseType', 'name', 'productId'],
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
            enum: ['inAppPurchases'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    required: ['data'],
    $defs: {
      in_app_purchase_type: {
        type: 'string',
        enum: ['CONSUMABLE', 'NON_CONSUMABLE', 'NON_RENEWING_SUBSCRIPTION'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.inAppPurchases.inAppPurchases(body));
};

export default { metadata, tool, handler };
