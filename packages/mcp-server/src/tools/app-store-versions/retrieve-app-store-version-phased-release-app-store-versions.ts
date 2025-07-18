// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/appStoreVersionPhasedRelease',
  operationId: 'appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_store_version_phased_release_app_store_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AppStoreVersionPhasedReleaseWithoutIncludesResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/app_store_version_phased_release'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    app_store_version_phased_release: {\n      type: 'object',\n      title: 'AppStoreVersionPhasedRelease',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'appStoreVersionPhasedReleases'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            currentDayNumber: {\n              type: 'integer'\n            },\n            phasedReleaseState: {\n              $ref: '#/$defs/phased_release_state'\n            },\n            startDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            totalPauseDuration: {\n              type: 'integer'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    phased_release_state: {\n      type: 'string',\n      enum: [        'INACTIVE',\n        'ACTIVE',\n        'PAUSED',\n        'COMPLETE'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appStoreVersionPhasedReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionPhasedReleases',
        items: {
          type: 'string',
          enum: ['phasedReleaseState', 'startDate', 'totalPauseDuration', 'currentDayNumber'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.appStoreVersions.retrieveAppStoreVersionPhasedRelease(id, body)),
  );
};

export default { metadata, tool, handler };
