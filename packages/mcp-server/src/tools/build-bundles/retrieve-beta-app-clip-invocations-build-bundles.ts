// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'build_bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/buildBundles/{id}/betaAppClipInvocations',
  operationId: 'buildBundles_betaAppClipInvocations_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_app_clip_invocations_build_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BetaAppClipInvocationsResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/beta_app_clip_invocation'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    included: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/beta_app_clip_invocation_localization'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    beta_app_clip_invocation: {\n      type: 'object',\n      title: 'BetaAppClipInvocation',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'betaAppClipInvocations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            url: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            betaAppClipInvocationLocalizations: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'betaAppClipInvocationLocalizations'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    beta_app_clip_invocation_localization: {\n      type: 'object',\n      title: 'BetaAppClipInvocationLocalization',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'betaAppClipInvocationLocalizations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            locale: {\n              type: 'string'\n            },\n            title: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaAppClipInvocationLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type betaAppClipInvocationLocalizations',
        items: {
          type: 'string',
          enum: ['title', 'locale'],
        },
      },
      'fields[betaAppClipInvocations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppClipInvocations',
        items: {
          type: 'string',
          enum: ['url', 'betaAppClipInvocationLocalizations'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['betaAppClipInvocationLocalizations'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[betaAppClipInvocationLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related betaAppClipInvocationLocalizations returned (when they are included)',
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
    await maybeFilter(args, await client.buildBundles.retrieveBetaAppClipInvocations(id, body)),
  );
};

export default { metadata, tool, handler };
