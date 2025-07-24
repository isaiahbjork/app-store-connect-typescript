// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciProducts/{id}/workflows',
  operationId: 'ciProducts_workflows_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_workflows_ci_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciMacOsVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciMacOsVersions',
        items: {
          type: 'string',
          enum: ['version', 'name', 'xcodeVersions'],
        },
      },
      'fields[ciProducts]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciProducts',
        items: {
          type: 'string',
          enum: [
            'name',
            'createdDate',
            'productType',
            'app',
            'bundleId',
            'workflows',
            'primaryRepositories',
            'additionalRepositories',
            'buildRuns',
          ],
        },
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
      'fields[ciXcodeVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciXcodeVersions',
        items: {
          type: 'string',
          enum: ['version', 'name', 'testDestinations', 'macOsVersions'],
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciProducts.listWorkflows(id, body));
};

export default { metadata, tool, handler };
