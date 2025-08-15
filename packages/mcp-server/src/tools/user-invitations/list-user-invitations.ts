// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'user_invitations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/userInvitations',
  operationId: 'userInvitations_getCollection',
};

export const tool: Tool = {
  name: 'list_user_invitations',
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
      'fields[userInvitations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type userInvitations',
        items: {
          type: 'string',
          enum: [
            'email',
            'firstName',
            'lastName',
            'expirationDate',
            'roles',
            'allAppsVisible',
            'provisioningAllowed',
            'visibleApps',
          ],
        },
      },
      'filter[email]': {
        type: 'array',
        description: "filter by attribute 'email'",
        items: {
          type: 'string',
        },
      },
      'filter[roles]': {
        type: 'array',
        description: "filter by attribute 'roles'",
        items: {
          type: 'string',
          enum: [
            'ADMIN',
            'FINANCE',
            'ACCOUNT_HOLDER',
            'SALES',
            'MARKETING',
            'APP_MANAGER',
            'DEVELOPER',
            'ACCESS_TO_REPORTS',
            'CUSTOMER_SUPPORT',
            'CREATE_APPS',
            'CLOUD_MANAGED_DEVELOPER_ID',
            'CLOUD_MANAGED_APP_DISTRIBUTION',
            'GENERATE_INDIVIDUAL_KEYS',
          ],
        },
      },
      'filter[visibleApps]': {
        type: 'array',
        description: "filter by id(s) of related 'visibleApps'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['visibleApps'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[visibleApps]': {
        type: 'integer',
        description: 'maximum number of related visibleApps returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['email', '-email', 'lastName', '-lastName'],
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
  return asTextContentResult(await client.userInvitations.list(body));
};

export default { metadata, tool, handler };
