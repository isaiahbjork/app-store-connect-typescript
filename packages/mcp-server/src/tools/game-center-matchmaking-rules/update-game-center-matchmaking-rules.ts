// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/gameCenterMatchmakingRules/{id}',
  operationId: 'gameCenterMatchmakingRules_updateInstance',
};

export const tool: Tool = {
  name: 'update_game_center_matchmaking_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/matchmaking_rule_response',\n  $defs: {\n    matchmaking_rule_response: {\n      type: 'object',\n      title: 'GameCenterMatchmakingRuleResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/matchmaking_rule'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    matchmaking_rule: {\n      type: 'object',\n      title: 'GameCenterMatchmakingRule',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'gameCenterMatchmakingRules'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            description: {\n              type: 'string'\n            },\n            expression: {\n              type: 'string'\n            },\n            referenceName: {\n              type: 'string'\n            },\n            type: {\n              type: 'string',\n              enum: [                'COMPATIBLE',\n                'DISTANCE',\n                'MATCH',\n                'TEAM'\n              ]\n            },\n            weight: {\n              type: 'number'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['gameCenterMatchmakingRules'],
          },
          attributes: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
              },
              expression: {
                type: 'string',
              },
              weight: {
                type: 'number',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
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
    await maybeFilter(args, await client.gameCenterMatchmakingRules.update(id, body)),
  );
};

export default { metadata, tool, handler };
