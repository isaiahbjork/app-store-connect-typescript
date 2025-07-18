// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_review_details',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appStoreReviewDetails',
  operationId: 'appStoreReviewDetails_createInstance',
};

export const tool: Tool = {
  name: 'create_app_store_review_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              appStoreVersion: {
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
                        enum: ['appStoreVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['appStoreVersion'],
          },
          type: {
            type: 'string',
            enum: ['appStoreReviewDetails'],
          },
          attributes: {
            type: 'object',
            properties: {
              contactEmail: {
                type: 'string',
              },
              contactFirstName: {
                type: 'string',
              },
              contactLastName: {
                type: 'string',
              },
              contactPhone: {
                type: 'string',
              },
              demoAccountName: {
                type: 'string',
              },
              demoAccountPassword: {
                type: 'string',
              },
              demoAccountRequired: {
                type: 'boolean',
              },
              notes: {
                type: 'string',
              },
            },
          },
        },
        required: ['relationships', 'type'],
      },
    },
    required: ['data'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appStoreReviewDetails.create(body));
};

export default { metadata, tool, handler };
