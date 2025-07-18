// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/appInfos',
  operationId: 'apps_appInfos_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_infos_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ageRatingDeclarations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ageRatingDeclarations',
        items: {
          type: 'string',
          enum: [
            'alcoholTobaccoOrDrugUseOrReferences',
            'contests',
            'gambling',
            'gamblingSimulated',
            'kidsAgeBand',
            'lootBox',
            'medicalOrTreatmentInformation',
            'profanityOrCrudeHumor',
            'sexualContentGraphicAndNudity',
            'sexualContentOrNudity',
            'horrorOrFearThemes',
            'matureOrSuggestiveThemes',
            'unrestrictedWebAccess',
            'violenceCartoonOrFantasy',
            'violenceRealisticProlongedGraphicOrSadistic',
            'violenceRealistic',
            'koreaAgeRatingOverride',
          ],
        },
      },
      'fields[appCategories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCategories',
        items: {
          type: 'string',
          enum: ['platforms', 'subcategories', 'parent'],
        },
      },
      'fields[appInfoLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appInfoLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'subtitle',
            'privacyPolicyUrl',
            'privacyChoicesUrl',
            'privacyPolicyText',
            'appInfo',
          ],
        },
      },
      'fields[appInfos]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appInfos',
        items: {
          type: 'string',
          enum: [
            'appStoreState',
            'state',
            'appStoreAgeRating',
            'australiaAgeRating',
            'brazilAgeRating',
            'brazilAgeRatingV2',
            'franceAgeRating',
            'koreaAgeRating',
            'kidsAgeBand',
            'app',
            'ageRatingDeclaration',
            'appInfoLocalizations',
            'primaryCategory',
            'primarySubcategoryOne',
            'primarySubcategoryTwo',
            'secondaryCategory',
            'secondarySubcategoryOne',
            'secondarySubcategoryTwo',
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'app',
            'ageRatingDeclaration',
            'appInfoLocalizations',
            'primaryCategory',
            'primarySubcategoryOne',
            'primarySubcategoryTwo',
            'secondaryCategory',
            'secondarySubcategoryOne',
            'secondarySubcategoryTwo',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[appInfoLocalizations]': {
        type: 'integer',
        description: 'maximum number of related appInfoLocalizations returned (when they are included)',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveAppInfos(id, body));
};

export default { metadata, tool, handler };
