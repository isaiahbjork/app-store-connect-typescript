// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'game_center_achievement_images',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/gameCenterAchievementImages/{id}',
  operationId: 'gameCenterAchievementImages_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_game_center_achievement_images',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/game_center_achievement_image_response',\n  $defs: {\n    game_center_achievement_image_response: {\n      type: 'object',\n      title: 'GameCenterAchievementImageResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/game_center_achievement_image'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/achievement_localization'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    game_center_achievement_image: {\n      type: 'object',\n      title: 'GameCenterAchievementImage',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'gameCenterAchievementImages'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            assetDeliveryState: {\n              $ref: '#/$defs/app_media_asset_state'\n            },\n            fileName: {\n              type: 'string'\n            },\n            fileSize: {\n              type: 'integer'\n            },\n            imageAsset: {\n              $ref: '#/$defs/image_asset'\n            },\n            uploadOperations: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/upload_operation'\n              }\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            gameCenterAchievementLocalization: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'gameCenterAchievementLocalizations'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    app_media_asset_state: {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/app_media_state_error'\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'AWAITING_UPLOAD',\n            'UPLOAD_COMPLETE',\n            'COMPLETE',\n            'FAILED'\n          ]\n        },\n        warnings: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/app_media_state_error'\n          }\n        }\n      },\n      required: []\n    },\n    app_media_state_error: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    image_asset: {\n      type: 'object',\n      properties: {\n        height: {\n          type: 'integer'\n        },\n        templateUrl: {\n          type: 'string'\n        },\n        width: {\n          type: 'integer'\n        }\n      },\n      required: []\n    },\n    upload_operation: {\n      type: 'object',\n      properties: {\n        length: {\n          type: 'integer'\n        },\n        method: {\n          type: 'string'\n        },\n        offset: {\n          type: 'integer'\n        },\n        requestHeaders: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/http_header'\n          }\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    http_header: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        value: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    achievement_localization: {\n      type: 'object',\n      title: 'GameCenterAchievementLocalization',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'gameCenterAchievementLocalizations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            afterEarnedDescription: {\n              type: 'string'\n            },\n            beforeEarnedDescription: {\n              type: 'string'\n            },\n            locale: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            gameCenterAchievement: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'gameCenterAchievements'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            },\n            gameCenterAchievementImage: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'gameCenterAchievementImages'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[gameCenterAchievementImages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterAchievementImages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'imageAsset',
            'uploadOperations',
            'assetDeliveryState',
            'gameCenterAchievementLocalization',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['gameCenterAchievementLocalization'],
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
  return asTextContentResult(
    await maybeFilter(args, await client.gameCenterAchievementImages.retrieve(id, body)),
  );
};

export default { metadata, tool, handler };
