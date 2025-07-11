// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_build_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaBuildLocalizations/{id}',
  operationId: 'betaBuildLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_beta_build_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaBuildLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaBuildLocalizations',
        items: {
          type: 'string',
          enum: ['whatsNew', 'locale', 'build'],
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['build'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaBuildLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
