// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_asset_version_internal_beta_releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/backgroundAssetVersionInternalBetaReleases/{id}',
  operationId: 'backgroundAssetVersionInternalBetaReleases_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_background_asset_version_internal_beta_releases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BackgroundAssetVersionInternalBetaReleaseResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/background_asset_version_internal_beta_release'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    },\n    included: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/background_asset_version'\n      }\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    background_asset_version_internal_beta_release: {\n      type: 'object',\n      title: 'BackgroundAssetVersionInternalBetaRelease',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'backgroundAssetVersionInternalBetaReleases'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            state: {\n              type: 'string',\n              enum: [                'READY_FOR_TESTING',\n                'SUPERSEDED'\n              ]\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            backgroundAssetVersion: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'backgroundAssetVersions'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    background_asset_version: {\n      type: 'object',\n      title: 'BackgroundAssetVersion',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'backgroundAssetVersions'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            platforms: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/platform'\n              }\n            },\n            state: {\n              type: 'string',\n              enum: [                'AWAITING_UPLOAD',\n                'PROCESSING',\n                'FAILED',\n                'COMPLETE'\n              ]\n            },\n            version: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            assetFile: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'backgroundAssetUploadFiles'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            },\n            backgroundAssetUploadFiles: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            internalBetaRelease: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'backgroundAssetVersionInternalBetaReleases'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            },\n            manifestFile: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'backgroundAssetUploadFiles'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    platform: {\n      type: 'string',\n      enum: [        'IOS',\n        'MAC_OS',\n        'TV_OS',\n        'VISION_OS'\n      ]\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[backgroundAssetVersionInternalBetaReleases]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type backgroundAssetVersionInternalBetaReleases',
        items: {
          type: 'string',
          enum: ['state', 'backgroundAssetVersion'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['backgroundAssetVersion'],
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.backgroundAssetVersionInternalBetaReleases.retrieve(id, body)),
  );
};

export default { metadata, tool, handler };
