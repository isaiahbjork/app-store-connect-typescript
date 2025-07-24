// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_clip_invocation_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaAppClipInvocationLocalizations',
  operationId: 'betaAppClipInvocationLocalizations_createInstance',
};

export const tool: Tool = {
  name: 'create_beta_app_clip_invocation_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/beta_app_clip_invocation_localization_response',\n  $defs: {\n    beta_app_clip_invocation_localization_response: {\n      type: 'object',\n      title: 'BetaAppClipInvocationLocalizationResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/beta_app_clip_invocation_localization'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    beta_app_clip_invocation_localization: {\n      type: 'object',\n      title: 'BetaAppClipInvocationLocalization',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'betaAppClipInvocationLocalizations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            locale: {\n              type: 'string'\n            },\n            title: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              locale: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
            },
            required: ['locale', 'title'],
          },
          relationships: {
            type: 'object',
            properties: {
              betaAppClipInvocation: {
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
                        enum: ['betaAppClipInvocations'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['betaAppClipInvocation'],
          },
          type: {
            type: 'string',
            enum: ['betaAppClipInvocationLocalizations'],
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
  return asTextContentResult(
    await maybeFilter(args, await client.betaAppClipInvocationLocalizations.create(body)),
  );
};

export default { metadata, tool, handler };
