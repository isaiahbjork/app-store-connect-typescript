// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'accessibility_declarations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/accessibilityDeclarations/{id}',
  operationId: 'accessibilityDeclarations_updateInstance',
};

export const tool: Tool = {
  name: 'update_accessibility_declarations',
  description: '',
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
            enum: ['accessibilityDeclarations'],
          },
          attributes: {
            type: 'object',
            properties: {
              publish: {
                type: 'boolean',
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
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.accessibilityDeclarations.update(id, body));
};

export default { metadata, tool, handler };
