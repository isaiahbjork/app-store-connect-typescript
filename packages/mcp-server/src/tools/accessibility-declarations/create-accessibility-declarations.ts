// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'accessibility_declarations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/accessibilityDeclarations',
  operationId: 'accessibilityDeclarations_createInstance',
};

export const tool: Tool = {
  name: 'create_accessibility_declarations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/accessibility_declaration_response',\n  $defs: {\n    accessibility_declaration_response: {\n      type: 'object',\n      title: 'AccessibilityDeclarationResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/accessibility_declaration'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    accessibility_declaration: {\n      type: 'object',\n      title: 'AccessibilityDeclaration',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'accessibilityDeclarations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            deviceFamily: {\n              $ref: '#/$defs/device_family'\n            },\n            state: {\n              type: 'string',\n              enum: [                'DRAFT',\n                'PUBLISHED',\n                'REPLACED'\n              ]\n            },\n            supportsAudioDescriptions: {\n              type: 'boolean'\n            },\n            supportsCaptions: {\n              type: 'boolean'\n            },\n            supportsDarkInterface: {\n              type: 'boolean'\n            },\n            supportsDifferentiateWithoutColorAlone: {\n              type: 'boolean'\n            },\n            supportsLargerText: {\n              type: 'boolean'\n            },\n            supportsReducedMotion: {\n              type: 'boolean'\n            },\n            supportsSufficientContrast: {\n              type: 'boolean'\n            },\n            supportsVoiceControl: {\n              type: 'boolean'\n            },\n            supportsVoiceover: {\n              type: 'boolean'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    device_family: {\n      type: 'string',\n      enum: [        'IPHONE',\n        'IPAD',\n        'APPLE_TV',\n        'APPLE_WATCH',\n        'MAC',\n        'VISION'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              deviceFamily: {
                $ref: '#/$defs/device_family',
              },
              supportsAudioDescriptions: {
                type: 'boolean',
              },
              supportsCaptions: {
                type: 'boolean',
              },
              supportsDarkInterface: {
                type: 'boolean',
              },
              supportsDifferentiateWithoutColorAlone: {
                type: 'boolean',
              },
              supportsLargerText: {
                type: 'boolean',
              },
              supportsReducedMotion: {
                type: 'boolean',
              },
              supportsSufficientContrast: {
                type: 'boolean',
              },
              supportsVoiceControl: {
                type: 'boolean',
              },
              supportsVoiceover: {
                type: 'boolean',
              },
            },
            required: ['deviceFamily'],
          },
          relationships: {
            type: 'object',
            properties: {
              app: {
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
                        enum: ['apps'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['accessibilityDeclarations'],
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
    $defs: {
      device_family: {
        type: 'string',
        enum: ['IPHONE', 'IPAD', 'APPLE_TV', 'APPLE_WATCH', 'MAC', 'VISION'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.accessibilityDeclarations.create(body)));
};

export default { metadata, tool, handler };
