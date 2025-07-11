// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'scm_repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/scmRepositories/{id}/pullRequests',
  operationId: 'scmRepositories_pullRequests_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_pull_requests_scm_repositories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ScmPullRequestsResponse',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/scm_pull_request'\n      }\n    },\n    links: {\n      $ref: '#/$defs/paged_document_links'\n    },\n    included: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/scm_repository_details'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/paging_information'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    scm_pull_request: {\n      type: 'object',\n      title: 'ScmPullRequest',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'scmPullRequests'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            destinationBranchName: {\n              type: 'string'\n            },\n            destinationRepositoryName: {\n              type: 'string'\n            },\n            destinationRepositoryOwner: {\n              type: 'string'\n            },\n            isClosed: {\n              type: 'boolean'\n            },\n            isCrossRepository: {\n              type: 'boolean'\n            },\n            number: {\n              type: 'integer'\n            },\n            sourceBranchName: {\n              type: 'string'\n            },\n            sourceRepositoryName: {\n              type: 'string'\n            },\n            sourceRepositoryOwner: {\n              type: 'string'\n            },\n            title: {\n              type: 'string'\n            },\n            webUrl: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            repository: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'scmRepositories'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    scm_repository_details: {\n      type: 'object',\n      title: 'ScmRepository',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'scmRepositories'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            httpCloneUrl: {\n              type: 'string'\n            },\n            lastAccessedDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            ownerName: {\n              type: 'string'\n            },\n            repositoryName: {\n              type: 'string'\n            },\n            sshCloneUrl: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            defaultBranch: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'scmGitReferences'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            },\n            gitReferences: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            },\n            pullRequests: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              },\n              required: []\n            },\n            scmProvider: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'scmProviders'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[scmPullRequests]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmPullRequests',
        items: {
          type: 'string',
          enum: [
            'title',
            'number',
            'webUrl',
            'sourceRepositoryOwner',
            'sourceRepositoryName',
            'sourceBranchName',
            'destinationRepositoryOwner',
            'destinationRepositoryName',
            'destinationBranchName',
            'isClosed',
            'isCrossRepository',
            'repository',
          ],
        },
      },
      'fields[scmRepositories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmRepositories',
        items: {
          type: 'string',
          enum: [
            'lastAccessedDate',
            'httpCloneUrl',
            'sshCloneUrl',
            'ownerName',
            'repositoryName',
            'scmProvider',
            'defaultBranch',
            'gitReferences',
            'pullRequests',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['repository'],
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
    await maybeFilter(args, await client.scmRepositories.listPullRequests(id, body)),
  );
};

export default { metadata, tool, handler };
