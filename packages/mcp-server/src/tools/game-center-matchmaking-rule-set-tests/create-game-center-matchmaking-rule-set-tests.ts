// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_matchmaking_rule_set_tests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/gameCenterMatchmakingRuleSetTests',
  operationId: 'gameCenterMatchmakingRuleSetTests_createInstance',
};

export const tool: Tool = {
  name: 'create_game_center_matchmaking_rule_set_tests',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              matchmakingRequests: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['gameCenterMatchmakingTestRequests'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: ['data'],
              },
              matchmakingRuleSet: {
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
            required: ['matchmakingRequests', 'matchmakingRuleSet'],
          },
          type: {
            type: 'string',
            enum: ['gameCenterMatchmakingRuleSetTests'],
          },
        },
        required: ['relationships', 'type'],
      },
      included: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                attributes: {
                  type: 'object',
                  properties: {
                    playerId: {
                      type: 'string',
                    },
                    properties: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          key: {
                            type: 'string',
                          },
                          value: {
                            type: 'string',
                          },
                        },
                        required: [],
                      },
                    },
                  },
                  required: ['playerId'],
                },
                type: {
                  type: 'string',
                  enum: ['gameCenterMatchmakingTestPlayerProperties'],
                },
                id: {
                  type: 'string',
                },
              },
              required: ['attributes', 'type'],
            },
            {
              type: 'object',
              properties: {
                attributes: {
                  type: 'object',
                  properties: {
                    appVersion: {
                      type: 'string',
                    },
                    bundleId: {
                      type: 'string',
                    },
                    platform: {
                      $ref: '#/$defs/platform',
                    },
                    requestName: {
                      type: 'string',
                    },
                    secondsInQueue: {
                      type: 'integer',
                    },
                    locale: {
                      type: 'string',
                      enum: [
                        'AR-SA',
                        'CA-ES',
                        'CS-CZ',
                        'DA-DK',
                        'DE-DE',
                        'EL-GR',
                        'EN-AU',
                        'EN-GB',
                        'EN-US',
                        'EN-KY',
                        'ES-ES',
                        'ES-MX',
                        'FI-FI',
                        'FR-CA',
                        'FR-FR',
                        'HI-IN',
                        'HR-HR',
                        'HU-HU',
                        'ID-ID',
                        'IT-IT',
                        'IW-IL',
                        'JA-JP',
                        'KO-KR',
                        'MS-MY',
                        'NL-NL',
                        'NO-NO',
                        'PL-PL',
                        'PT-BR',
                        'PT-PT',
                        'RO-RO',
                        'RU-RU',
                        'SK-SK',
                        'SV-SE',
                        'TH-TH',
                        'TR-TR',
                        'UK-UA',
                        'ZH-CN',
                        'ZH-TW',
                        'ZH-HK',
                      ],
                    },
                    location: {
                      type: 'object',
                      properties: {
                        latitude: {
                          type: 'number',
                        },
                        longitude: {
                          type: 'number',
                        },
                      },
                      required: [],
                    },
                    maxPlayers: {
                      type: 'integer',
                    },
                    minPlayers: {
                      type: 'integer',
                    },
                    playerCount: {
                      type: 'integer',
                    },
                  },
                  required: ['appVersion', 'bundleId', 'platform', 'requestName', 'secondsInQueue'],
                },
                type: {
                  type: 'string',
                  enum: ['gameCenterMatchmakingTestRequests'],
                },
                id: {
                  type: 'string',
                },
                relationships: {
                  type: 'object',
                  properties: {
                    matchmakingPlayerProperties: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              id: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                                enum: ['gameCenterMatchmakingTestPlayerProperties'],
                              },
                            },
                            required: ['id', 'type'],
                          },
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
              },
              required: ['attributes', 'type'],
            },
          ],
        },
      },
    },
    $defs: {
      platform: {
        type: 'string',
        enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gameCenterMatchmakingRuleSetTests.create(body));
};

export default { metadata, tool, handler };
