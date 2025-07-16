// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/subscriptionGracePeriod',
  operationId: 'apps_subscriptionGracePeriod_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_subscription_grace_period_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_grace_period_response',\n  $defs: {\n    subscription_grace_period_response: {\n      type: 'object',\n      title: 'SubscriptionGracePeriodResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/subscription_grace_period_details'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    subscription_grace_period_details: {\n      type: 'object',\n      title: 'SubscriptionGracePeriod',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'subscriptionGracePeriods'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            duration: {\n              $ref: '#/$defs/subscription_grace_period_duration'\n            },\n            optIn: {\n              type: 'boolean'\n            },\n            renewalType: {\n              type: 'string',\n              enum: [                'ALL_RENEWALS',\n                'PAID_TO_PAID_ONLY'\n              ]\n            },\n            sandboxOptIn: {\n              type: 'boolean'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    subscription_grace_period_duration: {\n      type: 'string',\n      enum: [        'THREE_DAYS',\n        'SIXTEEN_DAYS',\n        'TWENTY_EIGHT_DAYS'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionGracePeriods]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionGracePeriods',
        items: {
          type: 'string',
          enum: ['optIn', 'sandboxOptIn', 'duration', 'renewalType'],
        },
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
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.apps.retrieveSubscriptionGracePeriod(id, body)),
  );
};

export default { metadata, tool, handler };
