// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_availabilities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptionAvailabilities',
  operationId: 'subscriptionAvailabilities_createInstance',
};

export const tool: Tool = {
  name: 'create_subscription_availabilities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_availability_response',\n  $defs: {\n    subscription_availability_response: {\n      type: 'object',\n      title: 'SubscriptionAvailabilityResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/subscription_availability'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/territory'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    subscription_availability: {\n      type: 'object',\n      title: 'SubscriptionAvailability',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'subscriptionAvailabilities'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            availableInNewTerritories: {\n              type: 'boolean'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            availableTerritories: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'territories'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    territory: {\n      type: 'object',\n      title: 'Territory',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'territories'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            currency: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              availableInNewTerritories: {
                type: 'boolean',
              },
            },
            required: ['availableInNewTerritories'],
          },
          relationships: {
            type: 'object',
            properties: {
              availableTerritories: {
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
                          enum: ['territories'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
              subscription: {
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
                        enum: ['subscriptions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['availableTerritories', 'subscription'],
          },
          type: {
            type: 'string',
            enum: ['subscriptionAvailabilities'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.subscriptionAvailabilities.create(body)));
};

export default { metadata, tool, handler };
