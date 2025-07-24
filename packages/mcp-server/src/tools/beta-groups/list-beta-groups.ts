// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaGroups',
  operationId: 'betaGroups_getCollection',
};

export const tool: Tool = {
  name: 'list_beta_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
      'filter[app]': {
        type: 'array',
        description: "filter by id(s) of related 'app'",
        items: {
          type: 'string',
        },
      },
      'filter[builds]': {
        type: 'array',
        description: "filter by id(s) of related 'builds'",
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
      'filter[isInternalGroup]': {
        type: 'array',
        description: "filter by attribute 'isInternalGroup'",
        items: {
          type: 'string',
        },
      },
      'filter[name]': {
        type: 'array',
        description: "filter by attribute 'name'",
        items: {
          type: 'string',
        },
      },
      'filter[publicLink]': {
        type: 'array',
        description: "filter by attribute 'publicLink'",
        items: {
          type: 'string',
        },
      },
      'filter[publicLinkEnabled]': {
        type: 'array',
        description: "filter by attribute 'publicLinkEnabled'",
        items: {
          type: 'string',
        },
      },
      'filter[publicLinkLimitEnabled]': {
        type: 'array',
        description: "filter by attribute 'publicLinkLimitEnabled'",
        items: {
          type: 'string',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[betaTesters]': {
        type: 'integer',
        description: 'maximum number of related betaTesters returned (when they are included)',
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
          enum: [
            'name',
            '-name',
            'createdDate',
            '-createdDate',
            'publicLinkEnabled',
            '-publicLinkEnabled',
            'publicLinkLimit',
            '-publicLinkLimit',
          ],
        },
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaGroups.list(body));
};

export default { metadata, tool, handler };
