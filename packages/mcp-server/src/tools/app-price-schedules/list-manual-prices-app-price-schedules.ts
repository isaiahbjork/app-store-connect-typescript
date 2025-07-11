// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_price_schedules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appPriceSchedules/{id}/manualPrices',
  operationId: 'appPriceSchedules_manualPrices_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_manual_prices_app_price_schedules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app_prices_v2',\n  $defs: {\n    app_prices_v2: {\n      type: 'object',\n      title: 'AppPricesV2Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/app_price_v2'\n          }\n        },\n        links: {\n          $ref: '#/$defs/paged_document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                $ref: '#/$defs/app_price_point'\n              },\n              {\n                $ref: '#/$defs/territory'\n              }\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paging_information'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    app_price_v2: {\n      type: 'object',\n      title: 'AppPriceV2',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'appPrices'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            endDate: {\n              type: 'string',\n              format: 'date'\n            },\n            manual: {\n              type: 'boolean'\n            },\n            startDate: {\n              type: 'string',\n              format: 'date'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            appPricePoint: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'appPricePoints'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            },\n            territory: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'territories'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    app_price_point: {\n      type: 'object',\n      title: 'AppPricePointV3',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'appPricePoints'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            customerPrice: {\n              type: 'string'\n            },\n            proceeds: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            app: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'apps'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            },\n            equalizations: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            },\n            territory: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'territories'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    territory: {\n      type: 'object',\n      title: 'Territory',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'territories'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            currency: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appPricePoints]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPricePoints',
        items: {
          type: 'string',
          enum: ['customerPrice', 'proceeds', 'app', 'equalizations', 'territory'],
        },
      },
      'fields[appPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPrices',
        items: {
          type: 'string',
          enum: ['manual', 'startDate', 'endDate', 'appPricePoint', 'territory'],
        },
      },
      'fields[territories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territories',
        items: {
          type: 'string',
          enum: ['currency'],
        },
      },
      'filter[endDate]': {
        type: 'array',
        description: "filter by attribute 'endDate'",
        items: {
          type: 'string',
        },
      },
      'filter[startDate]': {
        type: 'array',
        description: "filter by attribute 'startDate'",
        items: {
          type: 'string',
        },
      },
      'filter[territory]': {
        type: 'array',
        description: "filter by id(s) of related 'territory'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appPricePoint', 'territory'],
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
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.appPriceSchedules.listManualPrices(id, body)),
  );
};

export default { metadata, tool, handler };
