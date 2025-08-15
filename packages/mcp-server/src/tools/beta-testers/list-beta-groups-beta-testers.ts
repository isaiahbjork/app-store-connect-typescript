// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_testers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaTesters/{id}/betaGroups',
  operationId: 'betaTesters_betaGroups_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_beta_groups_beta_testers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/beta_groups_without_includes_response',\n  $defs: {\n    beta_groups_without_includes_response: {\n      type: 'object',\n      title: 'BetaGroupsWithoutIncludesResponse',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/beta_group'\n          }\n        },\n        links: {\n          $ref: '#/$defs/paged_document_links'\n        },\n        meta: {\n          $ref: '#/$defs/paging_information'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    beta_group: {\n      type: 'object',\n      title: 'BetaGroup',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'betaGroups'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            feedbackEnabled: {\n              type: 'boolean'\n            },\n            hasAccessToAllBuilds: {\n              type: 'boolean'\n            },\n            iosBuildsAvailableForAppleSiliconMac: {\n              type: 'boolean'\n            },\n            iosBuildsAvailableForAppleVision: {\n              type: 'boolean'\n            },\n            isInternalGroup: {\n              type: 'boolean'\n            },\n            name: {\n              type: 'string'\n            },\n            publicLink: {\n              type: 'string'\n            },\n            publicLinkEnabled: {\n              type: 'boolean'\n            },\n            publicLinkId: {\n              type: 'string'\n            },\n            publicLinkLimit: {\n              type: 'integer'\n            },\n            publicLinkLimitEnabled: {\n              type: 'boolean'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            app: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'apps'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            betaRecruitmentCriteria: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'betaRecruitmentCriteria'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            betaRecruitmentCriterionCompatibleBuildCheck: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            betaTesters: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'betaTesters'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            },\n            builds: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'builds'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaGroups]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaGroups',
        items: {
          type: 'string',
          enum: [
            'name',
            'createdDate',
            'isInternalGroup',
            'hasAccessToAllBuilds',
            'publicLinkEnabled',
            'publicLinkId',
            'publicLinkLimitEnabled',
            'publicLinkLimit',
            'publicLink',
            'feedbackEnabled',
            'iosBuildsAvailableForAppleSiliconMac',
            'iosBuildsAvailableForAppleVision',
            'app',
            'builds',
            'betaTesters',
            'betaRecruitmentCriteria',
            'betaRecruitmentCriterionCompatibleBuildCheck',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.betaTesters.listBetaGroups(id, body)));
};

export default { metadata, tool, handler };
