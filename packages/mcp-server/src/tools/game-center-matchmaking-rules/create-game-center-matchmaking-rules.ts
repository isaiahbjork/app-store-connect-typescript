// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterMatchmakingRules',
  operationId: 'gameCenterMatchmakingRules_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_matchmaking_rules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
              },
              expression: {
                type: 'string',
              },
              referenceName: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['COMPATIBLE', 'DISTANCE', 'MATCH', 'TEAM'],
              },
              weight: {
                type: 'number',
              },
            },
            required: ['description', 'expression', 'referenceName', 'type'],
          },
          relationships: {
            type: 'object',
            properties: {
              ruleSet: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['gameCenterMatchmakingRuleSets'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['ruleSet'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterMatchmakingRules'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingRules.create(body));
};

export default { metadata, tool, handler };
