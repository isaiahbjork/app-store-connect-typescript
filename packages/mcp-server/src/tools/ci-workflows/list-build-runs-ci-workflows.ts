// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciWorkflows/{id}/buildRuns',
  operationId: 'ciWorkflows_buildRuns_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_build_runs_ci_workflows',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[builds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type builds',
        items: {
          type: 'string',
          enum: [
            'version',
            'uploadedDate',
            'expirationDate',
            'expired',
            'minOsVersion',
            'lsMinimumSystemVersion',
            'computedMinMacOsVersion',
            'computedMinVisionOsVersion',
            'iconAssetToken',
            'processingState',
            'buildAudienceType',
            'usesNonExemptEncryption',
            'preReleaseVersion',
            'individualTesters',
            'betaGroups',
            'betaBuildLocalizations',
            'appEncryptionDeclaration',
            'betaAppReviewSubmission',
            'app',
            'buildBetaDetail',
            'appStoreVersion',
            'icons',
            'buildBundles',
            'perfPowerMetrics',
            'diagnosticSignatures',
          ],
        },
      },
      'fields[ciBuildRuns]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciBuildRuns',
        items: {
          type: 'string',
          enum: [
            'number',
            'createdDate',
            'startedDate',
            'finishedDate',
            'sourceCommit',
            'destinationCommit',
            'isPullRequestBuild',
            'issueCounts',
            'executionProgress',
            'completionStatus',
            'startReason',
            'cancelReason',
            'builds',
            'workflow',
            'product',
            'sourceBranchOrTag',
            'destinationBranch',
            'actions',
            'pullRequest',
          ],
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
      'fields[scmGitReferences]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmGitReferences',
        items: {
          type: 'string',
          enum: ['name', 'canonicalName', 'isDeleted', 'kind', 'repository'],
        },
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
      'filter[builds]': {
        type: 'array',
        description: "filter by id(s) of related 'builds'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['builds', 'workflow', 'product', 'sourceBranchOrTag', 'destinationBranch', 'pullRequest'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[builds]': {
        type: 'integer',
        description: 'maximum number of related builds returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['number', '-number'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciWorkflows.listBuildRuns(id, body));
};

export default { metadata, tool, handler };
