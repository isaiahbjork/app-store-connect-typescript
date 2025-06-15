// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_build_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciBuildActions/{id}/buildRun',
  operationId: 'ciBuildActions_buildRun_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_build_run_ci_build_actions',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['builds', 'workflow', 'product', 'sourceBranchOrTag', 'destinationBranch', 'pullRequest'],
        },
      },
      'limit[builds]': {
        type: 'integer',
        description: 'maximum number of related builds returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciBuildActions.retrieveBuildRun(id, body));
};

export default { metadata, tool, handler };
