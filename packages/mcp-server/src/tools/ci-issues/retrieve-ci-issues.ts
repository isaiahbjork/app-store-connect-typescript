// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_issues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciIssues/{id}',
  operationId: 'ciIssues_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_issues',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'CiIssueResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/ci_issue'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    ci_issue: {\n      type: 'object',\n      title: 'CiIssue',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'ciIssues'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            category: {\n              type: 'string'\n            },\n            fileSource: {\n              $ref: '#/$defs/file_location'\n            },\n            issueType: {\n              type: 'string',\n              enum: [                'ANALYZER_WARNING',\n                'ERROR',\n                'TEST_FAILURE',\n                'WARNING'\n              ]\n            },\n            message: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    file_location: {\n      type: 'object',\n      properties: {\n        lineNumber: {\n          type: 'integer'\n        },\n        path: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciIssues]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciIssues',
        items: {
          type: 'string',
          enum: ['issueType', 'message', 'fileSource', 'category'],
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
  return asTextContentResult(await maybeFilter(args, await client.ciIssues.retrieve(id, body)));
};

export default { metadata, tool, handler };
