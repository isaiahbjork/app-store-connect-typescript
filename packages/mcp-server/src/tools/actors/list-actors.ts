// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'actors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/actors',
  operationId: 'actors_getCollection',
};

export const tool: Tool = {
  name: 'list_actors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ActorsResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/actor'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    actor: {\n      type: 'object',\n      title: 'Actor',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'actors'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            actorType: {\n              type: 'string',\n              enum: [                'USER',\n                'API_KEY',\n                'XCODE_CLOUD',\n                'APPLE'\n              ]\n            },\n            apiKeyId: {\n              type: 'string'\n            },\n            userEmail: {\n              type: 'string'\n            },\n            userFirstName: {\n              type: 'string'\n            },\n            userLastName: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'fields[actors]': {
        type: 'array',
        description: 'the fields to include for returned resources of type actors',
        items: {
          type: 'string',
          enum: ['actorType', 'userFirstName', 'userLastName', 'userEmail', 'apiKeyId'],
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
    required: ['filter[id]'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.actors.list(body)));
};

export default { metadata, tool, handler };
