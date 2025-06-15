// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

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
  return asTextContentResult(await client.accessibilityDeclarations.create(body));
};

export default { metadata, tool, handler };
