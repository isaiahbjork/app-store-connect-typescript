// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/reviewSubmissions/{id}/items',
  operationId: 'reviewSubmissions_items_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_items_review_submissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appCustomProductPageVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCustomProductPageVersions',
        items: {
          type: 'string',
          enum: ['version', 'state', 'deepLink', 'appCustomProductPage', 'appCustomProductPageLocalizations'],
        },
      },
      'fields[appEvents]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEvents',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'badge',
            'eventState',
            'deepLink',
            'purchaseRequirement',
            'primaryLocale',
            'priority',
            'purpose',
            'territorySchedules',
            'archivedTerritorySchedules',
            'localizations',
          ],
        },
      },
      'fields[appStoreVersionExperiments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionExperiments',
        items: {
          type: 'string',
          enum: [
            'name',
            'trafficProportion',
            'state',
            'reviewRequired',
            'startDate',
            'endDate',
            'appStoreVersion',
            'appStoreVersionExperimentTreatments',
            'platform',
            'app',
            'latestControlVersion',
            'controlVersions',
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
      'fields[reviewSubmissionItems]': {
        type: 'array',
        description: 'the fields to include for returned resources of type reviewSubmissionItems',
        items: {
          type: 'string',
          enum: [
            'state',
            'appStoreVersion',
            'appCustomProductPageVersion',
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appEvent',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'appStoreVersion',
            'appCustomProductPageVersion',
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appEvent',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.reviewSubmissions.listItems(id, body));
};

export default { metadata, tool, handler };
