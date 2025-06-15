// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_encryption_declarations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appEncryptionDeclarations',
  operationId: 'appEncryptionDeclarations_getCollection',
};

export const tool: Tool = {
  name: 'list_app_encryption_declarations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[appEncryptionDeclarationDocuments]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEncryptionDeclarationDocuments',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'assetToken',
            'downloadUrl',
            'sourceFileChecksum',
            'uploadOperations',
            'assetDeliveryState',
          ],
        },
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
      'filter[platform]': {
        type: 'array',
        description: "filter by attribute 'platform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'builds', 'appEncryptionDeclarationDocument'],
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appEncryptionDeclarations.list(body));
};

export default { metadata, tool, handler };
