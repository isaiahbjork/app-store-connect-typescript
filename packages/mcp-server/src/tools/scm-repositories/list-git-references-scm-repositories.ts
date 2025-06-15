// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'scm_repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/scmRepositories/{id}/gitReferences',
  operationId: 'scmRepositories_gitReferences_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_git_references_scm_repositories',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[scmGitReferences]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmGitReferences',
        items: {
          type: 'string',
          enum: ['name', 'canonicalName', 'isDeleted', 'kind', 'repository'],
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.scmRepositories.listGitReferences(id, body));
};

export default { metadata, tool, handler };
