// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_artifacts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciArtifacts/{id}',
  operationId: 'ciArtifacts_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_artifacts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'CiArtifactResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/ci_artifact'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    ci_artifact: {\n      type: 'object',\n      title: 'CiArtifact',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'ciArtifacts'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            downloadUrl: {\n              type: 'string'\n            },\n            fileName: {\n              type: 'string'\n            },\n            fileSize: {\n              type: 'integer'\n            },\n            fileType: {\n              type: 'string',\n              enum: [                'ARCHIVE',\n                'ARCHIVE_EXPORT',\n                'LOG_BUNDLE',\n                'RESULT_BUNDLE',\n                'TEST_PRODUCTS',\n                'XCODEBUILD_PRODUCTS',\n                'STAPLED_NOTARIZED_ARCHIVE'\n              ]\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciArtifacts]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciArtifacts',
        items: {
          type: 'string',
          enum: ['fileType', 'fileName', 'fileSize', 'downloadUrl'],
        },
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
  return asTextContentResult(await maybeFilter(args, await client.ciArtifacts.retrieve(id, body)));
};

export default { metadata, tool, handler };
