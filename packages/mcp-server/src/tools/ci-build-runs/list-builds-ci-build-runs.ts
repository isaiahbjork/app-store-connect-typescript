// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_build_runs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciBuildRuns/{id}/builds',
  operationId: 'ciBuildRuns_builds_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_builds_ci_build_runs',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'exists[usesNonExemptEncryption]': {
        type: 'boolean',
        description: "filter by attribute 'usesNonExemptEncryption'",
      },
      'fields[appEncryptionDeclarations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEncryptionDeclarations',
        items: {
          type: 'string',
          enum: [
            'appDescription',
            'createdDate',
            'usesEncryption',
            'exempt',
            'containsProprietaryCryptography',
            'containsThirdPartyCryptography',
            'availableOnFrenchStore',
            'platform',
            'uploadedDate',
            'documentUrl',
            'documentName',
            'documentType',
            'appEncryptionDeclarationState',
            'codeValue',
            'app',
            'builds',
            'appEncryptionDeclarationDocument',
          ],
        },
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
      'fields[betaAppReviewSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppReviewSubmissions',
        items: {
          type: 'string',
          enum: ['betaReviewState', 'submittedDate', 'build'],
        },
      },
      'fields[betaBuildLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaBuildLocalizations',
        items: {
          type: 'string',
          enum: ['whatsNew', 'locale', 'build'],
        },
      },
      'fields[betaGroups]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaGroups',
        items: {
          type: 'string',
          enum: [
            'name',
            'createdDate',
            'isInternalGroup',
            'hasAccessToAllBuilds',
            'publicLinkEnabled',
            'publicLinkId',
            'publicLinkLimitEnabled',
            'publicLinkLimit',
            'publicLink',
            'feedbackEnabled',
            'iosBuildsAvailableForAppleSiliconMac',
            'iosBuildsAvailableForAppleVision',
            'app',
            'builds',
            'betaTesters',
            'betaRecruitmentCriteria',
            'betaRecruitmentCriterionCompatibleBuildCheck',
          ],
        },
      },
      'fields[betaTesters]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaTesters',
        items: {
          type: 'string',
          enum: ['firstName', 'lastName', 'email', 'inviteType', 'state', 'apps', 'betaGroups', 'builds'],
        },
      },
      'fields[buildBetaDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type buildBetaDetails',
        items: {
          type: 'string',
          enum: ['autoNotifyEnabled', 'internalBuildState', 'externalBuildState', 'build'],
        },
      },
      'fields[buildBundles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type buildBundles',
        items: {
          type: 'string',
          enum: [
            'bundleId',
            'bundleType',
            'sdkBuild',
            'platformBuild',
            'fileName',
            'hasSirikit',
            'hasOnDemandResources',
            'hasPrerenderedIcon',
            'usesLocationServices',
            'isIosBuildMacAppStoreCompatible',
            'includesSymbols',
            'dSYMUrl',
            'supportedArchitectures',
            'requiredCapabilities',
            'deviceProtocols',
            'locales',
            'entitlements',
            'baDownloadAllowance',
            'baMaxInstallSize',
            'appClipDomainCacheStatus',
            'appClipDomainDebugStatus',
            'betaAppClipInvocations',
            'buildBundleFileSizes',
          ],
        },
      },
      'fields[buildIcons]': {
        type: 'array',
        description: 'the fields to include for returned resources of type buildIcons',
        items: {
          type: 'string',
          enum: ['iconAsset', 'iconType', 'name'],
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
      'filter[appStoreVersion]': {
        type: 'array',
        description: "filter by id(s) of related 'appStoreVersion'",
        items: {
          type: 'string',
        },
      },
      'filter[betaAppReviewSubmission': {
        type: 'object',
        properties: {
          'betaReviewState]': {
            type: 'array',
            description: "filter by attribute 'betaAppReviewSubmission.betaReviewState'",
            items: {
              type: 'string',
              enum: ['WAITING_FOR_REVIEW', 'IN_REVIEW', 'REJECTED', 'APPROVED'],
            },
          },
        },
        required: [],
      },
      'filter[betaGroups]': {
        type: 'array',
        description: "filter by id(s) of related 'betaGroups'",
        items: {
          type: 'string',
        },
      },
      'filter[buildAudienceType]': {
        type: 'array',
        description: "filter by attribute 'buildAudienceType'",
        items: {
          type: 'string',
          enum: ['INTERNAL_ONLY', 'APP_STORE_ELIGIBLE'],
        },
      },
      'filter[expired]': {
        type: 'array',
        description: "filter by attribute 'expired'",
        items: {
          type: 'string',
        },
      },
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'filter[preReleaseVersion': {
        type: 'object',
        properties: {
          'platform]': {
            type: 'array',
            description: "filter by attribute 'preReleaseVersion.platform'",
            items: {
              type: 'string',
              enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
            },
          },
          'version]': {
            type: 'array',
            description: "filter by attribute 'preReleaseVersion.version'",
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      'filter[preReleaseVersion]': {
        type: 'array',
        description: "filter by id(s) of related 'preReleaseVersion'",
        items: {
          type: 'string',
        },
      },
      'filter[processingState]': {
        type: 'array',
        description: "filter by attribute 'processingState'",
        items: {
          type: 'string',
          enum: ['PROCESSING', 'FAILED', 'INVALID', 'VALID'],
        },
      },
      'filter[usesNonExemptEncryption]': {
        type: 'array',
        description: "filter by attribute 'usesNonExemptEncryption'",
        items: {
          type: 'string',
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
          enum: [
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
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[betaBuildLocalizations]': {
        type: 'integer',
        description: 'maximum number of related betaBuildLocalizations returned (when they are included)',
      },
      'limit[betaGroups]': {
        type: 'integer',
        description: 'maximum number of related betaGroups returned (when they are included)',
      },
      'limit[buildBundles]': {
        type: 'integer',
        description: 'maximum number of related buildBundles returned (when they are included)',
      },
      'limit[icons]': {
        type: 'integer',
        description: 'maximum number of related icons returned (when they are included)',
      },
      'limit[individualTesters]': {
        type: 'integer',
        description: 'maximum number of related individualTesters returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'version',
            '-version',
            'uploadedDate',
            '-uploadedDate',
            'preReleaseVersion',
            '-preReleaseVersion',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciBuildRuns.listBuilds(id, body));
};

export default { metadata, tool, handler };
