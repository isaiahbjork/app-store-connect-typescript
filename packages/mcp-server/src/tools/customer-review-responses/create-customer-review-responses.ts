// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'customer_review_responses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customerReviewResponses',
  operationId: 'customerReviewResponses_createInstance',
};

export const tool: Tool = {
  name: 'create_customer_review_responses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_review_response_v1_response',\n  $defs: {\n    customer_review_response_v1_response: {\n      type: 'object',\n      title: 'CustomerReviewResponseV1Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/customer_review_response_v1'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/customer_review'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    customer_review_response_v1: {\n      type: 'object',\n      title: 'CustomerReviewResponseV1',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'customerReviewResponses'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            lastModifiedDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            responseBody: {\n              type: 'string'\n            },\n            state: {\n              type: 'string',\n              enum: [                'PUBLISHED',\n                'PENDING_PUBLISH'\n              ]\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            review: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'customerReviews'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    customer_review: {\n      type: 'object',\n      title: 'CustomerReview',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'customerReviews'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            body: {\n              type: 'string'\n            },\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            rating: {\n              type: 'integer'\n            },\n            reviewerNickname: {\n              type: 'string'\n            },\n            territory: {\n              $ref: '#/$defs/territory_code'\n            },\n            title: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            response: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'customerReviewResponses'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    territory_code: {\n      type: 'string',\n      enum: [        'ABW',\n        'AFG',\n        'AGO',\n        'AIA',\n        'ALB',\n        'AND',\n        'ANT',\n        'ARE',\n        'ARG',\n        'ARM',\n        'ASM',\n        'ATG',\n        'AUS',\n        'AUT',\n        'AZE',\n        'BDI',\n        'BEL',\n        'BEN',\n        'BES',\n        'BFA',\n        'BGD',\n        'BGR',\n        'BHR',\n        'BHS',\n        'BIH',\n        'BLR',\n        'BLZ',\n        'BMU',\n        'BOL',\n        'BRA',\n        'BRB',\n        'BRN',\n        'BTN',\n        'BWA',\n        'CAF',\n        'CAN',\n        'CHE',\n        'CHL',\n        'CHN',\n        'CIV',\n        'CMR',\n        'COD',\n        'COG',\n        'COK',\n        'COL',\n        'COM',\n        'CPV',\n        'CRI',\n        'CUB',\n        'CUW',\n        'CXR',\n        'CYM',\n        'CYP',\n        'CZE',\n        'DEU',\n        'DJI',\n        'DMA',\n        'DNK',\n        'DOM',\n        'DZA',\n        'ECU',\n        'EGY',\n        'ERI',\n        'ESP',\n        'EST',\n        'ETH',\n        'FIN',\n        'FJI',\n        'FLK',\n        'FRA',\n        'FRO',\n        'FSM',\n        'GAB',\n        'GBR',\n        'GEO',\n        'GGY',\n        'GHA',\n        'GIB',\n        'GIN',\n        'GLP',\n        'GMB',\n        'GNB',\n        'GNQ',\n        'GRC',\n        'GRD',\n        'GRL',\n        'GTM',\n        'GUF',\n        'GUM',\n        'GUY',\n        'HKG',\n        'HND',\n        'HRV',\n        'HTI',\n        'HUN',\n        'IDN',\n        'IMN',\n        'IND',\n        'IRL',\n        'IRQ',\n        'ISL',\n        'ISR',\n        'ITA',\n        'JAM',\n        'JEY',\n        'JOR',\n        'JPN',\n        'KAZ',\n        'KEN',\n        'KGZ',\n        'KHM',\n        'KIR',\n        'KNA',\n        'KOR',\n        'KWT',\n        'LAO',\n        'LBN',\n        'LBR',\n        'LBY',\n        'LCA',\n        'LIE',\n        'LKA',\n        'LSO',\n        'LTU',\n        'LUX',\n        'LVA',\n        'MAC',\n        'MAR',\n        'MCO',\n        'MDA',\n        'MDG',\n        'MDV',\n        'MEX',\n        'MHL',\n        'MKD',\n        'MLI',\n        'MLT',\n        'MMR',\n        'MNE',\n        'MNG',\n        'MNP',\n        'MOZ',\n        'MRT',\n        'MSR',\n        'MTQ',\n        'MUS',\n        'MWI',\n        'MYS',\n        'MYT',\n        'NAM',\n        'NCL',\n        'NER',\n        'NFK',\n        'NGA',\n        'NIC',\n        'NIU',\n        'NLD',\n        'NOR',\n        'NPL',\n        'NRU',\n        'NZL',\n        'OMN',\n        'PAK',\n        'PAN',\n        'PER',\n        'PHL',\n        'PLW',\n        'PNG',\n        'POL',\n        'PRI',\n        'PRT',\n        'PRY',\n        'PSE',\n        'PYF',\n        'QAT',\n        'REU',\n        'ROU',\n        'RUS',\n        'RWA',\n        'SAU',\n        'SEN',\n        'SGP',\n        'SHN',\n        'SLB',\n        'SLE',\n        'SLV',\n        'SMR',\n        'SOM',\n        'SPM',\n        'SRB',\n        'SSD',\n        'STP',\n        'SUR',\n        'SVK',\n        'SVN',\n        'SWE',\n        'SWZ',\n        'SXM',\n        'SYC',\n        'TCA',\n        'TCD',\n        'TGO',\n        'THA',\n        'TJK',\n        'TKM',\n        'TLS',\n        'TON',\n        'TTO',\n        'TUN',\n        'TUR',\n        'TUV',\n        'TWN',\n        'TZA',\n        'UGA',\n        'UKR',\n        'UMI',\n        'URY',\n        'USA',\n        'UZB',\n        'VAT',\n        'VCT',\n        'VEN',\n        'VGB',\n        'VIR',\n        'VNM',\n        'VUT',\n        'WLF',\n        'WSM',\n        'YEM',\n        'ZAF',\n        'ZMB',\n        'ZWE'\n      ]\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              responseBody: {
                type: 'string',
              },
            },
            required: ['responseBody'],
          },
          relationships: {
            type: 'object',
            properties: {
              review: {
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
                        enum: ['customerReviews'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['review'],
          },
          type: {
            type: 'string',
            enum: ['customerReviewResponses'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.customerReviewResponses.create(body)));
};

export default { metadata, tool, handler };
