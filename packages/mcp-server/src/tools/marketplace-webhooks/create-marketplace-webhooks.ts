// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'marketplace_webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/marketplaceWebhooks',
  operationId: 'marketplaceWebhooks_createInstance',
};

export const tool: Tool = {
  name: 'create_marketplace_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/marketplace_webhook_response',\n  $defs: {\n    marketplace_webhook_response: {\n      type: 'object',\n      title: 'MarketplaceWebhookResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/marketplace_webhook'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    marketplace_webhook: {\n      type: 'object',\n      title: 'MarketplaceWebhook',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'marketplaceWebhooks'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            endpointUrl: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              endpointUrl: {
                type: 'string',
              },
              secret: {
                type: 'string',
              },
            },
            required: ['endpointUrl', 'secret'],
          },
          type: {
            type: 'string',
            enum: ['marketplaceWebhooks'],
          },
        },
        required: ['attributes', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.marketplaceWebhooks.create(body)));
};

export default { metadata, tool, handler };
