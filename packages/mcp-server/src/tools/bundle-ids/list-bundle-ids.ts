// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bundleIds',
  operationId: 'bundleIds_getCollection',
};

export const tool: Tool = {
  name: 'list_bundle_ids',
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
      'fields[bundleIdCapabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type bundleIdCapabilities',
        items: {
          type: 'string',
          enum: ['capabilityType', 'settings'],
        },
      },
      'fields[bundleIds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type bundleIds',
        items: {
          type: 'string',
          enum: ['name', 'platform', 'identifier', 'seedId', 'profiles', 'bundleIdCapabilities', 'app'],
        },
      },
      'fields[profiles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type profiles',
        items: {
          type: 'string',
          enum: [
            'name',
            'platform',
            'profileType',
            'profileState',
            'profileContent',
            'uuid',
            'createdDate',
            'expirationDate',
            'bundleId',
            'devices',
            'certificates',
          ],
        },
      },
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'filter[identifier]': {
        type: 'array',
        description: "filter by attribute 'identifier'",
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
      'filter[platform]': {
        type: 'array',
        description: "filter by attribute 'platform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'UNIVERSAL'],
        },
      },
      'filter[seedId]': {
        type: 'array',
        description: "filter by attribute 'seedId'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['profiles', 'bundleIdCapabilities', 'app'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[bundleIdCapabilities]': {
        type: 'integer',
        description: 'maximum number of related bundleIdCapabilities returned (when they are included)',
      },
      'limit[profiles]': {
        type: 'integer',
        description: 'maximum number of related profiles returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'name',
            '-name',
            'platform',
            '-platform',
            'identifier',
            '-identifier',
            'seedId',
            '-seedId',
            'id',
            '-id',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bundleIDs.list(body));
};

export default { metadata, tool, handler };
