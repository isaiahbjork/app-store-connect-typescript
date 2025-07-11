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
  httpPath: '/v1/buildBundles/{id}/appClipDomainDebugStatus',
  operationId: 'buildBundles_appClipDomainDebugStatus_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_domain_debug_status_build_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app_clip_domain_status',\n  $defs: {\n    app_clip_domain_status: {\n      type: 'object',\n      title: 'AppClipDomainStatusResponse',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'AppClipDomainStatus',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            type: {\n              type: 'string',\n              enum: [                'appClipDomainStatuses'\n              ]\n            },\n            attributes: {\n              type: 'object',\n              properties: {\n                domains: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      domain: {\n                        type: 'string'\n                      },\n                      errorCode: {\n                        type: 'string',\n                        enum: [                          'BAD_HTTP_RESPONSE',\n                          'BAD_JSON_CONTENT',\n                          'BAD_PKCS7_SIGNATURE',\n                          'CANNOT_REACH_AASA_FILE',\n                          'CROSS_SITE_REDIRECTS_FORBIDDEN',\n                          'DNS_ERROR',\n                          'INSECURE_REDIRECTS_FORBIDDEN',\n                          'INVALID_ENTITLEMENT_MISSING_SECTION',\n                          'INVALID_ENTITLEMENT_SYNTAX_ERROR',\n                          'INVALID_ENTITLEMENT_UNHANDLED_SECTION',\n                          'INVALID_ENTITLEMENT_UNKNOWN_ID',\n                          'NETWORK_ERROR',\n                          'NETWORK_ERROR_TEMPORARY',\n                          'OTHER_ERROR',\n                          'TIMEOUT',\n                          'TLS_ERROR',\n                          'TOO_MANY_REDIRECTS',\n                          'UNEXPECTED_ERROR'\n                        ]\n                      },\n                      isValid: {\n                        type: 'boolean'\n                      },\n                      lastUpdatedDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      }\n                    },\n                    required: []\n                  }\n                },\n                lastUpdatedDate: {\n                  type: 'string',\n                  format: 'date-time'\n                }\n              },\n              required: []\n            },\n            links: {\n              $ref: '#/$defs/resource_links'\n            }\n          },\n          required: [            'id',\n            'type'\n          ]\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appClipDomainStatuses]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipDomainStatuses',
        items: {
          type: 'string',
          enum: ['domains', 'lastUpdatedDate'],
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
    await maybeFilter(args, await client.buildBundles.retrieveAppClipDomainDebugStatus(id, body)),
  );
};

export default { metadata, tool, handler };
