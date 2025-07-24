// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'sandbox_testers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/sandboxTesters',
  operationId: 'sandboxTestersV2_getCollection',
};

export const tool: Tool = {
  name: 'list_sandbox_testers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SandboxTestersV2Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/sandbox_tester_v2'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    sandbox_tester_v2: {\n      type: 'object',\n      title: 'SandboxTesterV2',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'sandboxTesters'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            acAccountName: {\n              type: 'string'\n            },\n            applePayCompatible: {\n              type: 'boolean'\n            },\n            firstName: {\n              type: 'string'\n            },\n            interruptPurchases: {\n              type: 'boolean'\n            },\n            lastName: {\n              type: 'string'\n            },\n            subscriptionRenewalRate: {\n              type: 'string',\n              enum: [                'MONTHLY_RENEWAL_EVERY_ONE_HOUR',\n                'MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES',\n                'MONTHLY_RENEWAL_EVERY_FIFTEEN_MINUTES',\n                'MONTHLY_RENEWAL_EVERY_FIVE_MINUTES',\n                'MONTHLY_RENEWAL_EVERY_THREE_MINUTES'\n              ]\n            },\n            territory: {\n              $ref: '#/$defs/territory_code'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    territory_code: {\n      type: 'string',\n      enum: [        'ABW',\n        'AFG',\n        'AGO',\n        'AIA',\n        'ALB',\n        'AND',\n        'ANT',\n        'ARE',\n        'ARG',\n        'ARM',\n        'ASM',\n        'ATG',\n        'AUS',\n        'AUT',\n        'AZE',\n        'BDI',\n        'BEL',\n        'BEN',\n        'BES',\n        'BFA',\n        'BGD',\n        'BGR',\n        'BHR',\n        'BHS',\n        'BIH',\n        'BLR',\n        'BLZ',\n        'BMU',\n        'BOL',\n        'BRA',\n        'BRB',\n        'BRN',\n        'BTN',\n        'BWA',\n        'CAF',\n        'CAN',\n        'CHE',\n        'CHL',\n        'CHN',\n        'CIV',\n        'CMR',\n        'COD',\n        'COG',\n        'COK',\n        'COL',\n        'COM',\n        'CPV',\n        'CRI',\n        'CUB',\n        'CUW',\n        'CXR',\n        'CYM',\n        'CYP',\n        'CZE',\n        'DEU',\n        'DJI',\n        'DMA',\n        'DNK',\n        'DOM',\n        'DZA',\n        'ECU',\n        'EGY',\n        'ERI',\n        'ESP',\n        'EST',\n        'ETH',\n        'FIN',\n        'FJI',\n        'FLK',\n        'FRA',\n        'FRO',\n        'FSM',\n        'GAB',\n        'GBR',\n        'GEO',\n        'GGY',\n        'GHA',\n        'GIB',\n        'GIN',\n        'GLP',\n        'GMB',\n        'GNB',\n        'GNQ',\n        'GRC',\n        'GRD',\n        'GRL',\n        'GTM',\n        'GUF',\n        'GUM',\n        'GUY',\n        'HKG',\n        'HND',\n        'HRV',\n        'HTI',\n        'HUN',\n        'IDN',\n        'IMN',\n        'IND',\n        'IRL',\n        'IRQ',\n        'ISL',\n        'ISR',\n        'ITA',\n        'JAM',\n        'JEY',\n        'JOR',\n        'JPN',\n        'KAZ',\n        'KEN',\n        'KGZ',\n        'KHM',\n        'KIR',\n        'KNA',\n        'KOR',\n        'KWT',\n        'LAO',\n        'LBN',\n        'LBR',\n        'LBY',\n        'LCA',\n        'LIE',\n        'LKA',\n        'LSO',\n        'LTU',\n        'LUX',\n        'LVA',\n        'MAC',\n        'MAR',\n        'MCO',\n        'MDA',\n        'MDG',\n        'MDV',\n        'MEX',\n        'MHL',\n        'MKD',\n        'MLI',\n        'MLT',\n        'MMR',\n        'MNE',\n        'MNG',\n        'MNP',\n        'MOZ',\n        'MRT',\n        'MSR',\n        'MTQ',\n        'MUS',\n        'MWI',\n        'MYS',\n        'MYT',\n        'NAM',\n        'NCL',\n        'NER',\n        'NFK',\n        'NGA',\n        'NIC',\n        'NIU',\n        'NLD',\n        'NOR',\n        'NPL',\n        'NRU',\n        'NZL',\n        'OMN',\n        'PAK',\n        'PAN',\n        'PER',\n        'PHL',\n        'PLW',\n        'PNG',\n        'POL',\n        'PRI',\n        'PRT',\n        'PRY',\n        'PSE',\n        'PYF',\n        'QAT',\n        'REU',\n        'ROU',\n        'RUS',\n        'RWA',\n        'SAU',\n        'SEN',\n        'SGP',\n        'SHN',\n        'SLB',\n        'SLE',\n        'SLV',\n        'SMR',\n        'SOM',\n        'SPM',\n        'SRB',\n        'SSD',\n        'STP',\n        'SUR',\n        'SVK',\n        'SVN',\n        'SWE',\n        'SWZ',\n        'SXM',\n        'SYC',\n        'TCA',\n        'TCD',\n        'TGO',\n        'THA',\n        'TJK',\n        'TKM',\n        'TLS',\n        'TON',\n        'TTO',\n        'TUN',\n        'TUR',\n        'TUV',\n        'TWN',\n        'TZA',\n        'UGA',\n        'UKR',\n        'UMI',\n        'URY',\n        'USA',\n        'UZB',\n        'VAT',\n        'VCT',\n        'VEN',\n        'VGB',\n        'VIR',\n        'VNM',\n        'VUT',\n        'WLF',\n        'WSM',\n        'YEM',\n        'ZAF',\n        'ZMB',\n        'ZWE'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'fields[sandboxTesters]': {
        type: 'array',
        description: 'the fields to include for returned resources of type sandboxTesters',
        items: {
          type: 'string',
          enum: [
            'firstName',
            'lastName',
            'acAccountName',
            'territory',
            'applePayCompatible',
            'interruptPurchases',
            'subscriptionRenewalRate',
          ],
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.sandboxTesters.list(body)));
};

export default { metadata, tool, handler };
