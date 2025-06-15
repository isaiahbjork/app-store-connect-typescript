// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_id_capabilities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bundleIdCapabilities',
  operationId: 'bundleIdCapabilities_createInstance',
};

export const tool: Tool = {
  name: 'create_bundle_id_capabilities',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
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
            required: ['capabilityType'],
          },
          relationships: {
            type: 'object',
            properties: {
              bundleId: {
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
                        enum: ['bundleIds'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['bundleId'],
          },
          type: {
            type: 'string',
            enum: ['bundleIdCapabilities'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
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
              required: [],
            },
          },
          visible: {
            type: 'boolean',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bundleIDCapabilities.create(body));
};

export default { metadata, tool, handler };
