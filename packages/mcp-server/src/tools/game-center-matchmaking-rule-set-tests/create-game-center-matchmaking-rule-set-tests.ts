// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'GameCenterMatchmakingRuleSetTestResponse',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'GameCenterMatchmakingRuleSetTest',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'gameCenterMatchmakingRuleSetTests'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            matchmakingResults: {\n              type: 'array',\n              items: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    requestName: {\n                      type: 'string'\n                    },\n                    teamAssignments: {\n                      type: 'array',\n                      items: {\n                        type: 'object',\n                        properties: {\n                          playerId: {\n                            type: 'string'\n                          },\n                          team: {\n                            type: 'string'\n                          }\n                        },\n                        required: []\n                      }\n                    }\n                  },\n                  required: []\n                }\n              }\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
  return asTextContentResult(
    await maybeFilter(args, await client.gameCenterMatchmakingRuleSetTests.create(body)),
  );
};

export default { metadata, tool, handler };
