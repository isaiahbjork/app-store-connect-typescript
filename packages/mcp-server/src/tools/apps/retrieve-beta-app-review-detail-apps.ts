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
  httpPath: '/v1/apps/{id}/betaAppReviewDetail',
  operationId: 'apps_betaAppReviewDetail_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_app_review_detail_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BetaAppReviewDetailWithoutIncludesResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/beta_app_review_detail'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    beta_app_review_detail: {\n      type: 'object',\n      title: 'BetaAppReviewDetail',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'betaAppReviewDetails'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            contactEmail: {\n              type: 'string'\n            },\n            contactFirstName: {\n              type: 'string'\n            },\n            contactLastName: {\n              type: 'string'\n            },\n            contactPhone: {\n              type: 'string'\n            },\n            demoAccountName: {\n              type: 'string'\n            },\n            demoAccountPassword: {\n              type: 'string'\n            },\n            demoAccountRequired: {\n              type: 'boolean'\n            },\n            notes: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            app: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'apps'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaAppReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppReviewDetails',
        items: {
          type: 'string',
          enum: [
            'contactFirstName',
            'contactLastName',
            'contactPhone',
            'contactEmail',
            'demoAccountName',
            'demoAccountPassword',
            'demoAccountRequired',
            'notes',
            'app',
          ],
        },
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
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.apps.retrieveBetaAppReviewDetail(id, body)),
  );
};

export default { metadata, tool, handler };
