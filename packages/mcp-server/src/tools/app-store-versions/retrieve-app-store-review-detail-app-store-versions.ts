// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/appStoreReviewDetail',
  operationId: 'appStoreVersions_appStoreReviewDetail_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_store_review_detail_app_store_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appStoreReviewAttachments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreReviewAttachments',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'uploadOperations',
            'assetDeliveryState',
            'appStoreReviewDetail',
          ],
        },
      },
      'fields[appStoreReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreReviewDetails',
        items: {
          type: 'string',
          enum: [
            'contactFirstName',
            'contactLastName',
            'contactPhone',
            'contactEmail',
            'demoAccountName',
            'demoAccountPassword',
            'demoAccountRequired',
            'notes',
            'appStoreVersion',
            'appStoreReviewAttachments',
          ],
        },
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appStoreVersion', 'appStoreReviewAttachments'],
        },
      },
      'limit[appStoreReviewAttachments]': {
        type: 'integer',
        description: 'maximum number of related appStoreReviewAttachments returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersions.retrieveAppStoreReviewDetail(id, body));
};

export default { metadata, tool, handler };
