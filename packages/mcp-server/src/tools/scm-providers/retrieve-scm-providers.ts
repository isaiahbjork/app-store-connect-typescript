// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'scm_providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/scmProviders/{id}',
  operationId: 'scmProviders_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_scm_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ScmProviderResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/scm_provider'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    scm_provider: {\n      type: 'object',\n      title: 'ScmProvider',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'scmProviders'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            scmProviderType: {\n              type: 'object',\n              properties: {\n                displayName: {\n                  type: 'string'\n                },\n                isOnPremise: {\n                  type: 'boolean'\n                },\n                kind: {\n                  type: 'string',\n                  enum: [                    'BITBUCKET_CLOUD',\n                    'BITBUCKET_SERVER',\n                    'GITHUB_CLOUD',\n                    'GITHUB_ENTERPRISE',\n                    'GITLAB_CLOUD',\n                    'GITLAB_SELF_MANAGED'\n                  ]\n                }\n              },\n              required: []\n            },\n            url: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            repositories: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[scmProviders]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmProviders',
        items: {
          type: 'string',
          enum: ['scmProviderType', 'url', 'repositories'],
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
  return asTextContentResult(await maybeFilter(args, await client.scmProviders.retrieve(id, body)));
};

export default { metadata, tool, handler };
