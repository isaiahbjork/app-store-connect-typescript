// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciWorkflows/{id}/repository',
  operationId: 'ciWorkflows_repository_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_repository_ci_workflows',
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
      'fields[scmProviders]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmProviders',
        items: {
          type: 'string',
          enum: ['scmProviderType', 'url', 'repositories'],
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
          enum: ['scmProvider', 'defaultBranch'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciWorkflows.retrieveRepository(id, body));
};

export default { metadata, tool, handler };
