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
  httpPath: '/v1/ciWorkflows/{id}',
  operationId: 'ciWorkflows_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_workflows',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciWorkflows]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciWorkflows',
        items: {
          type: 'string',
          enum: [
            'name',
            'description',
            'branchStartCondition',
            'tagStartCondition',
            'pullRequestStartCondition',
            'scheduledStartCondition',
            'manualBranchStartCondition',
            'manualTagStartCondition',
            'manualPullRequestStartCondition',
            'actions',
            'isEnabled',
            'isLockedForEditing',
            'clean',
            'containerFilePath',
            'lastModifiedDate',
            'product',
            'repository',
            'xcodeVersion',
            'macOsVersion',
            'buildRuns',
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
          enum: ['product', 'repository', 'xcodeVersion', 'macOsVersion'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciWorkflows.retrieve(id, body));
};

export default { metadata, tool, handler };
