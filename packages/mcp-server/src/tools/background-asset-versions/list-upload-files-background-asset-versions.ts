// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'background_asset_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/backgroundAssetVersions/{id}/backgroundAssetUploadFiles',
  operationId: 'backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_upload_files_background_asset_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BackgroundAssetUploadFilesResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/background_asset_upload_file'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    background_asset_upload_file: {\n      type: 'object',\n      title: 'BackgroundAssetUploadFile',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'backgroundAssetUploadFiles'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            assetDeliveryState: {\n              $ref: '#/$defs/app_media_asset_state'\n            },\n            assetToken: {\n              type: 'string'\n            },\n            assetType: {\n              type: 'string',\n              enum: [                'ASSET',\n                'MANIFEST'\n              ]\n            },\n            fileName: {\n              type: 'string'\n            },\n            fileSize: {\n              type: 'integer'\n            },\n            sourceFileChecksum: {\n              type: 'string'\n            },\n            uploadOperations: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  entityTag: {\n                    type: 'string'\n                  },\n                  expiration: {\n                    type: 'string',\n                    format: 'date-time'\n                  },\n                  length: {\n                    type: 'integer'\n                  },\n                  method: {\n                    type: 'string'\n                  },\n                  offset: {\n                    type: 'integer'\n                  },\n                  partNumber: {\n                    type: 'integer'\n                  },\n                  requestHeaders: {\n                    type: 'array',\n                    items: {\n                      $ref: '#/$defs/http_header'\n                    }\n                  },\n                  url: {\n                    type: 'string'\n                  }\n                }\n              }\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    app_media_asset_state: {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/app_media_state_error'\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'AWAITING_UPLOAD',\n            'UPLOAD_COMPLETE',\n            'COMPLETE',\n            'FAILED'\n          ]\n        },\n        warnings: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/app_media_state_error'\n          }\n        }\n      }\n    },\n    app_media_state_error: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        }\n      }\n    },\n    http_header: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        value: {\n          type: 'string'\n        }\n      }\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[backgroundAssetUploadFiles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type backgroundAssetUploadFiles',
        items: {
          type: 'string',
          enum: [
            'assetDeliveryState',
            'assetToken',
            'assetType',
            'fileName',
            'fileSize',
            'sourceFileChecksum',
            'uploadOperations',
          ],
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.backgroundAssetVersions.listUploadFiles(id, body)),
  );
};

export default { metadata, tool, handler };
