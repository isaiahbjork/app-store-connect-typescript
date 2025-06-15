// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/accessibilityDeclarations',
  operationId: 'apps_accessibilityDeclarations_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_accessibility_declarations_apps',
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
      'filter[deviceFamily]': {
        type: 'array',
        description: "filter by attribute 'deviceFamily'",
        items: {
          type: 'string',
          enum: ['IPHONE', 'IPAD', 'APPLE_TV', 'APPLE_WATCH', 'MAC', 'VISION'],
        },
      },
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: ['DRAFT', 'PUBLISHED', 'REPLACED'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveAccessibilityDeclarations(id, body));
};

export default { metadata, tool, handler };
