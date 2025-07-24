// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experiences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClipDefaultExperiences/{id}',
  operationId: 'appClipDefaultExperiences_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_default_experiences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      'limit[appClipDefaultExperienceLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)',
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
  return asTextContentResult(await client.appClipDefaultExperiences.retrieve(id, body));
};

export default { metadata, tool, handler };
