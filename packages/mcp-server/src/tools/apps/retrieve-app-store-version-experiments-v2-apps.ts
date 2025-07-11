// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/appStoreVersionExperimentsV2',
  operationId: 'apps_appStoreVersionExperimentsV2_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_store_version_experiments_v2_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[apps]': {
        type: 'array',
        description: 'the fields to include for returned resources of type apps',
        items: {
          type: 'string',
          enum: [
            'accessibilityUrl',
            'name',
            'bundleId',
            'sku',
            'primaryLocale',
            'isOrEverWasMadeForKids',
            'subscriptionStatusUrl',
            'subscriptionStatusUrlVersion',
            'subscriptionStatusUrlForSandbox',
            'subscriptionStatusUrlVersionForSandbox',
            'contentRightsDeclaration',
            'streamlinedPurchasingEnabled',
            'accessibilityDeclarations',
            'appEncryptionDeclarations',
            'ciProduct',
            'betaTesters',
            'betaGroups',
            'appStoreVersions',
            'preReleaseVersions',
            'betaAppLocalizations',
            'builds',
            'betaLicenseAgreement',
            'betaAppReviewDetail',
            'appInfos',
            'appClips',
            'appPricePoints',
            'endUserLicenseAgreement',
            'appPriceSchedule',
            'appAvailabilityV2',
            'inAppPurchases',
            'subscriptionGroups',
            'gameCenterEnabledVersions',
            'perfPowerMetrics',
            'appCustomProductPages',
            'inAppPurchasesV2',
            'promotedPurchases',
            'appEvents',
            'reviewSubmissions',
            'subscriptionGracePeriod',
            'customerReviews',
            'customerReviewSummarizations',
            'gameCenterDetail',
            'appStoreVersionExperimentsV2',
            'alternativeDistributionKey',
            'analyticsReportRequests',
            'marketplaceSearchDetail',
            'backgroundAssets',
            'betaFeedbackScreenshotSubmissions',
            'betaFeedbackCrashSubmissions',
            'webhooks',
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
            'platform',
            'trafficProportion',
            'state',
            'reviewRequired',
            'startDate',
            'endDate',
            'app',
            'latestControlVersion',
            'controlVersions',
            'appStoreVersionExperimentTreatments',
          ],
        },
      },
      'fields[appStoreVersionExperimentTreatments]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type appStoreVersionExperimentTreatments',
        items: {
          type: 'string',
          enum: [
            'name',
            'appIcon',
            'appIconName',
            'promotedDate',
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appStoreVersionExperimentTreatmentLocalizations',
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
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: [
            'PREPARE_FOR_SUBMISSION',
            'READY_FOR_REVIEW',
            'WAITING_FOR_REVIEW',
            'IN_REVIEW',
            'ACCEPTED',
            'APPROVED',
            'REJECTED',
            'COMPLETED',
            'STOPPED',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'latestControlVersion', 'controlVersions', 'appStoreVersionExperimentTreatments'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[appStoreVersionExperimentTreatments]': {
        type: 'integer',
        description:
          'maximum number of related appStoreVersionExperimentTreatments returned (when they are included)',
      },
      'limit[controlVersions]': {
        type: 'integer',
        description: 'maximum number of related controlVersions returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveAppStoreVersionExperimentsV2(id, body));
};

export default { metadata, tool, handler };
