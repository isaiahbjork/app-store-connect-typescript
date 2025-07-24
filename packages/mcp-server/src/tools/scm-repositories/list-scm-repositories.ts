// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'scm_repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/scmRepositories',
  operationId: 'scmRepositories_getCollection',
};

export const tool: Tool = {
  name: 'list_scm_repositories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/scm_repositories',\n  $defs: {\n    scm_repositories: {\n      type: 'object',\n      title: 'ScmRepositoriesResponse',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/scm_repository_details'\n          }\n        },\n        links: {\n          $ref: '#/$defs/paged_document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                $ref: '#/$defs/scm_provider'\n              },\n              {\n                $ref: '#/$defs/scm_git_reference'\n              }\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paging_information'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    scm_repository_details: {\n      type: 'object',\n      title: 'ScmRepository',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'scmRepositories'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            httpCloneUrl: {\n              type: 'string'\n            },\n            lastAccessedDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            ownerName: {\n              type: 'string'\n            },\n            repositoryName: {\n              type: 'string'\n            },\n            sshCloneUrl: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            defaultBranch: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'scmGitReferences'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            },\n            gitReferences: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            pullRequests: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            scmProvider: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'scmProviders'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paged_document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        },\n        first: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    scm_provider: {\n      type: 'object',\n      title: 'ScmProvider',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'scmProviders'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            scmProviderType: {\n              type: 'object',\n              properties: {\n                displayName: {\n                  type: 'string'\n                },\n                isOnPremise: {\n                  type: 'boolean'\n                },\n                kind: {\n                  type: 'string',\n                  enum: [                    'BITBUCKET_CLOUD',\n                    'BITBUCKET_SERVER',\n                    'GITHUB_CLOUD',\n                    'GITHUB_ENTERPRISE',\n                    'GITLAB_CLOUD',\n                    'GITLAB_SELF_MANAGED'\n                  ]\n                }\n              }\n            },\n            url: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            repositories: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    scm_git_reference: {\n      type: 'object',\n      title: 'ScmGitReference',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'scmGitReferences'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            canonicalName: {\n              type: 'string'\n            },\n            isDeleted: {\n              type: 'boolean'\n            },\n            kind: {\n              type: 'string',\n              enum: [                'BRANCH',\n                'TAG'\n              ]\n            },\n            name: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            repository: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'scmRepositories'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['scmProvider', 'defaultBranch'],
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
  return asTextContentResult(await maybeFilter(args, await client.scmRepositories.list(body)));
};

export default { metadata, tool, handler };
