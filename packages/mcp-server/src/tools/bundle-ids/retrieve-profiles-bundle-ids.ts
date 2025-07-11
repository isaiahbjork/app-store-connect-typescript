// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bundleIds/{id}/profiles',
  operationId: 'bundleIds_profiles_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_profiles_bundle_ids',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ProfilesWithoutIncludesResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/profile'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    profile: {\n      type: 'object',\n      title: 'Profile',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'profiles'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            expirationDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            name: {\n              type: 'string'\n            },\n            platform: {\n              $ref: '#/$defs/bundle_id_platform'\n            },\n            profileContent: {\n              type: 'string'\n            },\n            profileState: {\n              type: 'string',\n              enum: [                'ACTIVE',\n                'INVALID'\n              ]\n            },\n            profileType: {\n              type: 'string',\n              enum: [                'IOS_APP_DEVELOPMENT',\n                'IOS_APP_STORE',\n                'IOS_APP_ADHOC',\n                'IOS_APP_INHOUSE',\n                'MAC_APP_DEVELOPMENT',\n                'MAC_APP_STORE',\n                'MAC_APP_DIRECT',\n                'TVOS_APP_DEVELOPMENT',\n                'TVOS_APP_STORE',\n                'TVOS_APP_ADHOC',\n                'TVOS_APP_INHOUSE',\n                'MAC_CATALYST_APP_DEVELOPMENT',\n                'MAC_CATALYST_APP_STORE',\n                'MAC_CATALYST_APP_DIRECT'\n              ]\n            },\n            uuid: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            bundleId: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'bundleIds'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            },\n            certificates: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'certificates'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              },\n              required: []\n            },\n            devices: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'devices'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    bundle_id_platform: {\n      type: 'string',\n      enum: [        'IOS',\n        'MAC_OS',\n        'UNIVERSAL'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[profiles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type profiles',
        items: {
          type: 'string',
          enum: [
            'name',
            'platform',
            'profileType',
            'profileState',
            'profileContent',
            'uuid',
            'createdDate',
            'expirationDate',
            'bundleId',
            'devices',
            'certificates',
          ],
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.bundleIDs.retrieveProfiles(id, body)));
};

export default { metadata, tool, handler };
