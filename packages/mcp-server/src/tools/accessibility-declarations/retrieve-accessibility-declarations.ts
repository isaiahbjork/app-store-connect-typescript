// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'accessibility_declarations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/accessibilityDeclarations/{id}',
  operationId: 'accessibilityDeclarations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_accessibility_declarations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[accessibilityDeclarations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type accessibilityDeclarations',
        items: {
          type: 'string',
          enum: [
            'deviceFamily',
            'state',
            'supportsAudioDescriptions',
            'supportsCaptions',
            'supportsDarkInterface',
            'supportsDifferentiateWithoutColorAlone',
            'supportsLargerText',
            'supportsReducedMotion',
            'supportsSufficientContrast',
            'supportsVoiceControl',
            'supportsVoiceover',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.accessibilityDeclarations.retrieve(id, body));
};

export default { metadata, tool, handler };
