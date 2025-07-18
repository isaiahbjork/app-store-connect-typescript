// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_recruitment_criteria',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/betaRecruitmentCriteria/{id}',
  operationId: 'betaRecruitmentCriteria_updateInstance',
};

export const tool: Tool = {
  name: 'update_beta_recruitment_criteria',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/beta_recruitment_criterion_response',\n  $defs: {\n    beta_recruitment_criterion_response: {\n      type: 'object',\n      title: 'BetaRecruitmentCriterionResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/beta_recruitment_criterion'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    beta_recruitment_criterion: {\n      type: 'object',\n      title: 'BetaRecruitmentCriterion',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'betaRecruitmentCriteria'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            deviceFamilyOsVersionFilters: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/device_family_os_version_filter'\n              }\n            },\n            lastModifiedDate: {\n              type: 'string',\n              format: 'date-time'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    device_family_os_version_filter: {\n      type: 'object',\n      properties: {\n        deviceFamily: {\n          $ref: '#/$defs/device_family'\n        },\n        maximumOsInclusive: {\n          type: 'string'\n        },\n        minimumOsInclusive: {\n          type: 'string'\n        }\n      }\n    },\n    device_family: {\n      type: 'string',\n      enum: [        'IPHONE',\n        'IPAD',\n        'APPLE_TV',\n        'APPLE_WATCH',\n        'MAC',\n        'VISION'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
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
            enum: ['betaRecruitmentCriteria'],
          },
          attributes: {
            type: 'object',
            properties: {
              deviceFamilyOsVersionFilters: {
                type: 'array',
                items: {
                  $ref: '#/$defs/device_family_os_version_filter',
                },
              },
            },
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
    required: ['id', 'data'],
    $defs: {
      device_family_os_version_filter: {
        type: 'object',
        properties: {
          deviceFamily: {
            $ref: '#/$defs/device_family',
          },
          maximumOsInclusive: {
            type: 'string',
          },
          minimumOsInclusive: {
            type: 'string',
          },
        },
      },
      device_family: {
        type: 'string',
        enum: ['IPHONE', 'IPAD', 'APPLE_TV', 'APPLE_WATCH', 'MAC', 'VISION'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.betaRecruitmentCriteria.update(id, body)));
};

export default { metadata, tool, handler };
