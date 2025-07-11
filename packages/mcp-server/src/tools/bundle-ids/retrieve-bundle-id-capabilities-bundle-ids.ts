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
  httpPath: '/v1/bundleIds/{id}/bundleIdCapabilities',
  operationId: 'bundleIds_bundleIdCapabilities_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_bundle_id_capabilities_bundle_ids',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BundleIdCapabilitiesWithoutIncludesResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/bundle_id_capability'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    bundle_id_capability: {\n      type: 'object',\n      title: 'BundleIdCapability',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'bundleIdCapabilities'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            capabilityType: {\n              $ref: '#/$defs/capability_type'\n            },\n            settings: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/capability_setting'\n              }\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    capability_type: {\n      type: 'string',\n      enum: [        'ICLOUD',\n        'IN_APP_PURCHASE',\n        'GAME_CENTER',\n        'PUSH_NOTIFICATIONS',\n        'WALLET',\n        'INTER_APP_AUDIO',\n        'MAPS',\n        'ASSOCIATED_DOMAINS',\n        'PERSONAL_VPN',\n        'APP_GROUPS',\n        'HEALTHKIT',\n        'HOMEKIT',\n        'WIRELESS_ACCESSORY_CONFIGURATION',\n        'APPLE_PAY',\n        'DATA_PROTECTION',\n        'SIRIKIT',\n        'NETWORK_EXTENSIONS',\n        'MULTIPATH',\n        'HOT_SPOT',\n        'NFC_TAG_READING',\n        'CLASSKIT',\n        'AUTOFILL_CREDENTIAL_PROVIDER',\n        'ACCESS_WIFI_INFORMATION',\n        'NETWORK_CUSTOM_PROTOCOL',\n        'COREMEDIA_HLS_LOW_LATENCY',\n        'SYSTEM_EXTENSION_INSTALL',\n        'USER_MANAGEMENT',\n        'APPLE_ID_AUTH'\n      ]\n    },\n    capability_setting: {\n      type: 'object',\n      properties: {\n        allowedInstances: {\n          type: 'string',\n          enum: [            'ENTRY',\n            'SINGLE',\n            'MULTIPLE'\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        enabledByDefault: {\n          type: 'boolean'\n        },\n        key: {\n          type: 'string',\n          enum: [            'ICLOUD_VERSION',\n            'DATA_PROTECTION_PERMISSION_LEVEL',\n            'APPLE_ID_AUTH_APP_CONSENT'\n          ]\n        },\n        minInstances: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        options: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string'\n              },\n              enabled: {\n                type: 'boolean'\n              },\n              enabledByDefault: {\n                type: 'boolean'\n              },\n              key: {\n                type: 'string',\n                enum: [                  'XCODE_5',\n                  'XCODE_6',\n                  'COMPLETE_PROTECTION',\n                  'PROTECTED_UNLESS_OPEN',\n                  'PROTECTED_UNTIL_FIRST_USER_AUTH',\n                  'PRIMARY_APP_CONSENT'\n                ]\n              },\n              name: {\n                type: 'string'\n              },\n              supportsWildcard: {\n                type: 'boolean'\n              }\n            },\n            required: []\n          }\n        },\n        visible: {\n          type: 'boolean'\n        }\n      },\n      required: []\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[bundleIdCapabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type bundleIdCapabilities',
        items: {
          type: 'string',
          enum: ['capabilityType', 'settings'],
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
  return asTextContentResult(
    await maybeFilter(args, await client.bundleIDs.retrieveBundleIDCapabilities(id, body)),
  );
};

export default { metadata, tool, handler };
