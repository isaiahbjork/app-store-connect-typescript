// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaGroups/{id}',
  operationId: 'betaGroups_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_beta_groups',
  description: '',
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
      'fields[betaRecruitmentCriteria]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaRecruitmentCriteria',
        items: {
          type: 'string',
          enum: ['lastModifiedDate', 'deviceFamilyOsVersionFilters'],
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
          enum: ['app', 'builds', 'betaTesters', 'betaRecruitmentCriteria'],
        },
      },
      'limit[betaTesters]': {
        type: 'integer',
        description: 'maximum number of related betaTesters returned (when they are included)',
      },
      'limit[builds]': {
        type: 'integer',
        description: 'maximum number of related builds returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaGroups.retrieve(id, body));
};

export default { metadata, tool, handler };
