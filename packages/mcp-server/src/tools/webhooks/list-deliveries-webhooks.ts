// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/webhooks/{id}/deliveries',
  operationId: 'webhooks_deliveries_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_deliveries_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'WebhookDeliveriesResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/webhook_delivery'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    included: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/webhook_event'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    webhook_delivery: {\n      type: 'object',\n      title: 'WebhookDelivery',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'webhookDeliveries'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            deliveryState: {\n              type: 'string',\n              enum: [                'SUCCEEDED',\n                'FAILED',\n                'PENDING'\n              ]\n            },\n            errorMessage: {\n              type: 'string'\n            },\n            redelivery: {\n              type: 'boolean'\n            },\n            request: {\n              type: 'object',\n              properties: {\n                url: {\n                  type: 'string'\n                }\n              }\n            },\n            response: {\n              type: 'object',\n              properties: {\n                body: {\n                  type: 'string'\n                },\n                httpStatusCode: {\n                  type: 'integer'\n                }\n              }\n            },\n            sentDate: {\n              type: 'string',\n              format: 'date-time'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            event: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'webhookEvents'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    webhook_event: {\n      type: 'object',\n      title: 'WebhookEvent',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'webhookEvents'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            eventType: {\n              $ref: '#/$defs/webhook_event_type'\n            },\n            payload: {\n              type: 'string'\n            },\n            ping: {\n              type: 'boolean'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    webhook_event_type: {\n      type: 'string',\n      enum: [        'APP_STORE_VERSION_APP_VERSION_STATE_UPDATED',\n        'BETA_FEEDBACK_CRASH_SUBMISSION_CREATED',\n        'BETA_FEEDBACK_SCREENSHOT_SUBMISSION_CREATED'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[webhookDeliveries]': {
        type: 'array',
        description: 'the fields to include for returned resources of type webhookDeliveries',
        items: {
          type: 'string',
          enum: [
            'createdDate',
            'deliveryState',
            'errorMessage',
            'redelivery',
            'sentDate',
            'request',
            'response',
            'event',
          ],
        },
      },
      'fields[webhookEvents]': {
        type: 'array',
        description: 'the fields to include for returned resources of type webhookEvents',
        items: {
          type: 'string',
          enum: ['eventType', 'payload', 'ping', 'createdDate'],
        },
      },
      'filter[createdDateGreaterThanOrEqualTo]': {
        type: 'array',
        description: 'filter by createdDateGreaterThanOrEqualTo',
        items: {
          type: 'string',
        },
      },
      'filter[createdDateLessThan]': {
        type: 'array',
        description: 'filter by createdDateLessThan',
        items: {
          type: 'string',
        },
      },
      'filter[deliveryState]': {
        type: 'array',
        description: "filter by attribute 'deliveryState'",
        items: {
          type: 'string',
          enum: ['SUCCEEDED', 'FAILED', 'PENDING'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['event'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.webhooks.listDeliveries(id, body)));
};

export default { metadata, tool, handler };
