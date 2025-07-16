// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_build_runs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciBuildRuns/{id}',
  operationId: 'ciBuildRuns_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_build_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
  return asTextContentResult(await client.ciBuildRuns.retrieve(id, body));
};

export default { metadata, tool, handler };
