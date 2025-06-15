// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'pre_release_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/preReleaseVersions',
  operationId: 'preReleaseVersions_getCollection',
};

export const tool: Tool = {
  name: 'list_pre_release_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
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
      'fields[preReleaseVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type preReleaseVersions',
        items: {
          type: 'string',
          enum: ['version', 'platform', 'builds', 'app'],
        },
      },
      'filter[app]': {
        type: 'array',
        description: "filter by id(s) of related 'app'",
        items: {
          type: 'string',
        },
      },
      'filter[builds': {
        type: 'object',
        properties: {
          'buildAudienceType]': {
            type: 'array',
            description: "filter by attribute 'builds.buildAudienceType'",
            items: {
              type: 'string',
              enum: ['INTERNAL_ONLY', 'APP_STORE_ELIGIBLE'],
            },
          },
          'expired]': {
            type: 'array',
            description: "filter by attribute 'builds.expired'",
            items: {
              type: 'string',
            },
          },
          'processingState]': {
            type: 'array',
            description: "filter by attribute 'builds.processingState'",
            items: {
              type: 'string',
              enum: ['PROCESSING', 'FAILED', 'INVALID', 'VALID'],
            },
          },
          'version]': {
            type: 'array',
            description: "filter by attribute 'builds.version'",
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      'filter[builds]': {
        type: 'array',
        description: "filter by id(s) of related 'builds'",
        items: {
          type: 'string',
        },
      },
      'filter[platform]': {
        type: 'array',
        description: "filter by attribute 'platform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
        },
      },
      'filter[version]': {
        type: 'array',
        description: "filter by attribute 'version'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['builds', 'app'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[builds]': {
        type: 'integer',
        description: 'maximum number of related builds returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['version', '-version'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.preReleaseVersions.list(body));
};

export default { metadata, tool, handler };
