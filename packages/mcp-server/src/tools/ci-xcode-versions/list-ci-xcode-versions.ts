// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_xcode_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciXcodeVersions',
  operationId: 'ciXcodeVersions_getCollection',
};

export const tool: Tool = {
  name: 'list_ci_xcode_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ci_xcode_versions',\n  $defs: {\n    ci_xcode_versions: {\n      type: 'object',\n      title: 'CiXcodeVersionsResponse',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/ci_xcode_version'\n          }\n        },\n        links: {\n          $ref: '#/$defs/paged_document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/ci_mac_os_version'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paging_information'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    ci_xcode_version: {\n      type: 'object',\n      title: 'CiXcodeVersion',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'ciXcodeVersions'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            },\n            testDestinations: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  availableRuntimes: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        runtimeIdentifier: {\n                          type: 'string'\n                        },\n                        runtimeName: {\n                          type: 'string'\n                        }\n                      }\n                    }\n                  },\n                  deviceTypeIdentifier: {\n                    type: 'string'\n                  },\n                  deviceTypeName: {\n                    type: 'string'\n                  },\n                  kind: {\n                    $ref: '#/$defs/ci_test_destination_kind'\n                  }\n                }\n              }\n            },\n            version: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            macOsVersions: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'ciMacOsVersions'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    ci_test_destination_kind: {\n      type: 'string',\n      enum: [        'SIMULATOR',\n        'MAC'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    ci_mac_os_version: {\n      type: 'object',\n      title: 'CiMacOsVersion',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'ciMacOsVersions'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            },\n            version: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            xcodeVersions: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'ciXcodeVersions'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'fields[ciMacOsVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciMacOsVersions',
        items: {
          type: 'string',
          enum: ['version', 'name', 'xcodeVersions'],
        },
      },
      'fields[ciXcodeVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciXcodeVersions',
        items: {
          type: 'string',
          enum: ['version', 'name', 'testDestinations', 'macOsVersions'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['macOsVersions'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[macOsVersions]': {
        type: 'integer',
        description: 'maximum number of related macOsVersions returned (when they are included)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ciXcodeVersions.list(body)));
};

export default { metadata, tool, handler };
