// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_leaderboard_entry_submissions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterLeaderboardEntrySubmissions',
  operationId: 'gameCenterLeaderboardEntrySubmissions_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_leaderboard_entry_submissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'GameCenterLeaderboardEntrySubmissionResponse',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'GameCenterLeaderboardEntrySubmission',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'gameCenterLeaderboardEntrySubmissions'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            bundleId: {\n              type: 'string'\n            },\n            challengeIds: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            context: {\n              type: 'string'\n            },\n            scopedPlayerId: {\n              type: 'string'\n            },\n            score: {\n              type: 'string'\n            },\n            submittedDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            vendorIdentifier: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              bundleId: {
                type: 'string',
              },
              scopedPlayerId: {
                type: 'string',
              },
              score: {
                type: 'string',
              },
              vendorIdentifier: {
                type: 'string',
              },
              challengeIds: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              context: {
                type: 'string',
              },
              submittedDate: {
                type: 'string',
                format: 'date-time',
              },
            },
            required: ['bundleId', 'scopedPlayerId', 'score', 'vendorIdentifier'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterLeaderboardEntrySubmissions'],
          },
        },
        required: ['attributes', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['data'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gameCenterLeaderboardEntrySubmissions.create(body)),
  );
};

export default { metadata, tool, handler };
