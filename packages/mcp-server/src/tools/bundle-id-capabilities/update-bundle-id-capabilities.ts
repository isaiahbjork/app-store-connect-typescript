// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_id_capabilities',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/bundleIdCapabilities/{id}',
  operationId: 'bundleIdCapabilities_updateInstance',
};

export const tool: Tool = {
  name: 'update_bundle_id_capabilities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bundle_id_capability_response',\n  $defs: {\n    bundle_id_capability_response: {\n      type: 'object',\n      title: 'BundleIdCapabilityResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/bundle_id_capability'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    bundle_id_capability: {\n      type: 'object',\n      title: 'BundleIdCapability',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'bundleIdCapabilities'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            capabilityType: {\n              $ref: '#/$defs/capability_type'\n            },\n            settings: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/capability_setting'\n              }\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    capability_type: {\n      type: 'string',\n      enum: [        'ICLOUD',\n        'IN_APP_PURCHASE',\n        'GAME_CENTER',\n        'PUSH_NOTIFICATIONS',\n        'WALLET',\n        'INTER_APP_AUDIO',\n        'MAPS',\n        'ASSOCIATED_DOMAINS',\n        'PERSONAL_VPN',\n        'APP_GROUPS',\n        'HEALTHKIT',\n        'HOMEKIT',\n        'WIRELESS_ACCESSORY_CONFIGURATION',\n        'APPLE_PAY',\n        'DATA_PROTECTION',\n        'SIRIKIT',\n        'NETWORK_EXTENSIONS',\n        'MULTIPATH',\n        'HOT_SPOT',\n        'NFC_TAG_READING',\n        'CLASSKIT',\n        'AUTOFILL_CREDENTIAL_PROVIDER',\n        'ACCESS_WIFI_INFORMATION',\n        'NETWORK_CUSTOM_PROTOCOL',\n        'COREMEDIA_HLS_LOW_LATENCY',\n        'SYSTEM_EXTENSION_INSTALL',\n        'USER_MANAGEMENT',\n        'APPLE_ID_AUTH'\n      ]\n    },\n    capability_setting: {\n      type: 'object',\n      properties: {\n        allowedInstances: {\n          type: 'string',\n          enum: [            'ENTRY',\n            'SINGLE',\n            'MULTIPLE'\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        enabledByDefault: {\n          type: 'boolean'\n        },\n        key: {\n          type: 'string',\n          enum: [            'ICLOUD_VERSION',\n            'DATA_PROTECTION_PERMISSION_LEVEL',\n            'APPLE_ID_AUTH_APP_CONSENT'\n          ]\n        },\n        minInstances: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        options: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string'\n              },\n              enabled: {\n                type: 'boolean'\n              },\n              enabledByDefault: {\n                type: 'boolean'\n              },\n              key: {\n                type: 'string',\n                enum: [                  'XCODE_5',\n                  'XCODE_6',\n                  'COMPLETE_PROTECTION',\n                  'PROTECTED_UNLESS_OPEN',\n                  'PROTECTED_UNTIL_FIRST_USER_AUTH',\n                  'PRIMARY_APP_CONSENT'\n                ]\n              },\n              name: {\n                type: 'string'\n              },\n              supportsWildcard: {\n                type: 'boolean'\n              }\n            }\n          }\n        },\n        visible: {\n          type: 'boolean'\n        }\n      }\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['bundleIdCapabilities'],
          },
          attributes: {
            type: 'object',
            properties: {
              capabilityType: {
                $ref: '#/$defs/capability_type',
              },
              settings: {
                type: 'array',
                items: {
                  $ref: '#/$defs/capability_setting',
                },
              },
            },
          },
        },
        required: ['id', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'data'],
    $defs: {
      capability_type: {
        type: 'string',
        enum: [
          'ICLOUD',
          'IN_APP_PURCHASE',
          'GAME_CENTER',
          'PUSH_NOTIFICATIONS',
          'WALLET',
          'INTER_APP_AUDIO',
          'MAPS',
          'ASSOCIATED_DOMAINS',
          'PERSONAL_VPN',
          'APP_GROUPS',
          'HEALTHKIT',
          'HOMEKIT',
          'WIRELESS_ACCESSORY_CONFIGURATION',
          'APPLE_PAY',
          'DATA_PROTECTION',
          'SIRIKIT',
          'NETWORK_EXTENSIONS',
          'MULTIPATH',
          'HOT_SPOT',
          'NFC_TAG_READING',
          'CLASSKIT',
          'AUTOFILL_CREDENTIAL_PROVIDER',
          'ACCESS_WIFI_INFORMATION',
          'NETWORK_CUSTOM_PROTOCOL',
          'COREMEDIA_HLS_LOW_LATENCY',
          'SYSTEM_EXTENSION_INSTALL',
          'USER_MANAGEMENT',
          'APPLE_ID_AUTH',
        ],
      },
      capability_setting: {
        type: 'object',
        properties: {
          allowedInstances: {
            type: 'string',
            enum: ['ENTRY', 'SINGLE', 'MULTIPLE'],
          },
          description: {
            type: 'string',
          },
          enabledByDefault: {
            type: 'boolean',
          },
          key: {
            type: 'string',
            enum: ['ICLOUD_VERSION', 'DATA_PROTECTION_PERMISSION_LEVEL', 'APPLE_ID_AUTH_APP_CONSENT'],
          },
          minInstances: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
          options: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                enabled: {
                  type: 'boolean',
                },
                enabledByDefault: {
                  type: 'boolean',
                },
                key: {
                  type: 'string',
                  enum: [
                    'XCODE_5',
                    'XCODE_6',
                    'COMPLETE_PROTECTION',
                    'PROTECTED_UNLESS_OPEN',
                    'PROTECTED_UNTIL_FIRST_USER_AUTH',
                    'PRIMARY_APP_CONSENT',
                  ],
                },
                name: {
                  type: 'string',
                },
                supportsWildcard: {
                  type: 'boolean',
                },
              },
            },
          },
          visible: {
            type: 'boolean',
          },
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.bundleIDCapabilities.update(id, body)));
};

export default { metadata, tool, handler };
