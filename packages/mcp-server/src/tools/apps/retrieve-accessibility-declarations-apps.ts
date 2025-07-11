// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AccessibilityDeclarationsResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/accessibility_declaration'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    accessibility_declaration: {\n      type: 'object',\n      title: 'AccessibilityDeclaration',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'accessibilityDeclarations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            deviceFamily: {\n              $ref: '#/$defs/device_family'\n            },\n            state: {\n              type: 'string',\n              enum: [                'DRAFT',\n                'PUBLISHED',\n                'REPLACED'\n              ]\n            },\n            supportsAudioDescriptions: {\n              type: 'boolean'\n            },\n            supportsCaptions: {\n              type: 'boolean'\n            },\n            supportsDarkInterface: {\n              type: 'boolean'\n            },\n            supportsDifferentiateWithoutColorAlone: {\n              type: 'boolean'\n            },\n            supportsLargerText: {\n              type: 'boolean'\n            },\n            supportsReducedMotion: {\n              type: 'boolean'\n            },\n            supportsSufficientContrast: {\n              type: 'boolean'\n            },\n            supportsVoiceControl: {\n              type: 'boolean'\n            },\n            supportsVoiceover: {\n              type: 'boolean'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    device_family: {\n      type: 'string',\n      enum: [        'IPHONE',\n        'IPAD',\n        'APPLE_TV',\n        'APPLE_WATCH',\n        'MAC',\n        'VISION'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(args, await client.apps.retrieveAccessibilityDeclarations(id, body)),
  );
};

export default { metadata, tool, handler };
