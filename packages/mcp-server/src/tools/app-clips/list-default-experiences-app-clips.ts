// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClips/{id}/appClipDefaultExperiences',
  operationId: 'appClips_appClipDefaultExperiences_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_default_experiences_app_clips',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'exists[releaseWithAppStoreVersion]': {
        type: 'boolean',
        description: "filter by existence or non-existence of related 'releaseWithAppStoreVersion'",
      },
      'fields[appClipAppStoreReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipAppStoreReviewDetails',
        items: {
          type: 'string',
          enum: ['invocationUrls', 'appClipDefaultExperience'],
        },
      },
      'fields[appClipDefaultExperienceLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appClipDefaultExperienceLocalizations',
        items: {
          type: 'string',
          enum: ['locale', 'subtitle', 'appClipDefaultExperience', 'appClipHeaderImage'],
        },
      },
      'fields[appClipDefaultExperiences]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipDefaultExperiences',
        items: {
          type: 'string',
          enum: [
            'action',
            'appClip',
            'releaseWithAppStoreVersion',
            'appClipDefaultExperienceLocalizations',
            'appClipAppStoreReviewDetail',
          ],
        },
      },
      'fields[appClips]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClips',
        items: {
          type: 'string',
          enum: ['bundleId', 'app', 'appClipDefaultExperiences', 'appClipAdvancedExperiences'],
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
          enum: [
            'appClip',
            'releaseWithAppStoreVersion',
            'appClipDefaultExperienceLocalizations',
            'appClipAppStoreReviewDetail',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[appClipDefaultExperienceLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClips.listDefaultExperiences(id, body));
};

export default { metadata, tool, handler };
