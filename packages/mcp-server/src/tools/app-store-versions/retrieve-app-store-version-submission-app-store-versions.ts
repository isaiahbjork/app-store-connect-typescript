// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/appStoreVersionSubmission',
  operationId: 'appStoreVersions_appStoreVersionSubmission_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_store_version_submission_app_store_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appStoreVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersions',
        items: {
          type: 'string',
          enum: [
            'platform',
            'versionString',
            'appStoreState',
            'appVersionState',
            'copyright',
            'reviewType',
            'releaseType',
            'earliestReleaseDate',
            'usesIdfa',
            'downloadable',
            'createdDate',
            'app',
            'ageRatingDeclaration',
            'appStoreVersionLocalizations',
            'build',
            'appStoreVersionPhasedRelease',
            'gameCenterAppVersion',
            'routingAppCoverage',
            'appStoreReviewDetail',
            'appStoreVersionSubmission',
            'appClipDefaultExperience',
            'appStoreVersionExperiments',
            'appStoreVersionExperimentsV2',
            'customerReviews',
            'alternativeDistributionPackage',
          ],
        },
      },
      'fields[appStoreVersionSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionSubmissions',
        items: {
          type: 'string',
          enum: ['appStoreVersion'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appStoreVersion'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersions.retrieveAppStoreVersionSubmission(id, body));
};

export default { metadata, tool, handler };
