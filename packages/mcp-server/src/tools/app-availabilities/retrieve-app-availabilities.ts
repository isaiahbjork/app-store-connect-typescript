// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_availabilities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/appAvailabilities/{id}',
  operationId: 'appAvailabilitiesV2_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_availabilities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app_availability',\n  $defs: {\n    app_availability: {\n      type: 'object',\n      title: 'AppAvailabilityV2Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'AppAvailabilityV2',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            type: {\n              type: 'string',\n              enum: [                'appAvailabilities'\n              ]\n            },\n            attributes: {\n              type: 'object',\n              properties: {\n                availableInNewTerritories: {\n                  type: 'boolean'\n                }\n              }\n            },\n            links: {\n              $ref: '#/$defs/resource_links'\n            },\n            relationships: {\n              type: 'object',\n              properties: {\n                territoryAvailabilities: {\n                  type: 'object',\n                  properties: {\n                    data: {\n                      type: 'array',\n                      items: {\n                        type: 'object',\n                        properties: {\n                          id: {\n                            type: 'string'\n                          },\n                          type: {\n                            type: 'string',\n                            enum: [                              'territoryAvailabilities'\n                            ]\n                          }\n                        },\n                        required: [                          'id',\n                          'type'\n                        ]\n                      }\n                    },\n                    links: {\n                      $ref: '#/$defs/relationship_links'\n                    },\n                    meta: {\n                      $ref: '#/$defs/paging_information'\n                    }\n                  }\n                }\n              }\n            }\n          },\n          required: [            'id',\n            'type'\n          ]\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/territory_availability'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    territory_availability: {\n      type: 'object',\n      title: 'TerritoryAvailability',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'territoryAvailabilities'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            available: {\n              type: 'boolean'\n            },\n            contentStatuses: {\n              type: 'array',\n              items: {\n                type: 'string',\n                enum: [                  'AVAILABLE',\n                  'AVAILABLE_FOR_PREORDER_ON_DATE',\n                  'PROCESSING_TO_NOT_AVAILABLE',\n                  'PROCESSING_TO_AVAILABLE',\n                  'PROCESSING_TO_PRE_ORDER',\n                  'AVAILABLE_FOR_SALE_UNRELEASED_APP',\n                  'PREORDER_ON_UNRELEASED_APP',\n                  'AVAILABLE_FOR_PREORDER',\n                  'MISSING_RATING',\n                  'CANNOT_SELL_RESTRICTED_RATING',\n                  'BRAZIL_REQUIRED_TAX_ID',\n                  'MISSING_GRN',\n                  'UNVERIFIED_GRN',\n                  'ICP_NUMBER_INVALID',\n                  'ICP_NUMBER_MISSING',\n                  'TRADER_STATUS_NOT_PROVIDED',\n                  'TRADER_STATUS_VERIFICATION_FAILED',\n                  'TRADER_STATUS_VERIFICATION_STATUS_MISSING',\n                  'CANNOT_SELL_SEVENTEEN_PLUS_APPS',\n                  'CANNOT_SELL_SEXUALLY_EXPLICIT',\n                  'CANNOT_SELL_NON_IOS_GAMES',\n                  'CANNOT_SELL_SEVENTEEN_PLUS_GAMES',\n                  'CANNOT_SELL_CASINO',\n                  'CANNOT_SELL_CASINO_WITHOUT_GRAC',\n                  'CANNOT_SELL_CASINO_WITHOUT_AGE_VERIFICATION',\n                  'CANNOT_SELL_ADULT_ONLY',\n                  'CANNOT_SELL_GAMBLING_CONTESTS',\n                  'CANNOT_SELL_GAMBLING',\n                  'CANNOT_SELL_CONTESTS',\n                  'CANNOT_SELL'\n                ]\n              }\n            },\n            preOrderEnabled: {\n              type: 'boolean'\n            },\n            preOrderPublishDate: {\n              type: 'string',\n              format: 'date'\n            },\n            releaseDate: {\n              type: 'string',\n              format: 'date'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            territory: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'territories'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appAvailabilities',
        items: {
          type: 'string',
          enum: ['availableInNewTerritories', 'territoryAvailabilities'],
        },
      },
      'fields[territoryAvailabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territoryAvailabilities',
        items: {
          type: 'string',
          enum: [
            'available',
            'releaseDate',
            'preOrderEnabled',
            'preOrderPublishDate',
            'contentStatuses',
            'territory',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['territoryAvailabilities'],
        },
      },
      'limit[territoryAvailabilities]': {
        type: 'integer',
        description: 'maximum number of related territoryAvailabilities returned (when they are included)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.appAvailabilities.retrieve(id, body)));
};

export default { metadata, tool, handler };
