// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_app_review_submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaAppReviewSubmissions',
  operationId: 'betaAppReviewSubmissions_getCollection',
};

export const tool: Tool = {
  name: 'list_beta_app_review_submissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[build]': {
        type: 'array',
        description: "filter by id(s) of related 'build'",
        items: {
          type: 'string',
        },
      },
      'fields[betaAppReviewSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppReviewSubmissions',
        items: {
          type: 'string',
          enum: ['betaReviewState', 'submittedDate', 'build'],
        },
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
      'filter[betaReviewState]': {
        type: 'array',
        description: "filter by attribute 'betaReviewState'",
        items: {
          type: 'string',
          enum: ['WAITING_FOR_REVIEW', 'IN_REVIEW', 'REJECTED', 'APPROVED'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['build'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
    required: ['filter[build]'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaAppReviewSubmissions.list(body));
};

export default { metadata, tool, handler };
