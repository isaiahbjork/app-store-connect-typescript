// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}',
  operationId: 'appStoreVersions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_store_versions',
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
      'fields[alternativeDistributionPackages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type alternativeDistributionPackages',
        items: {
          type: 'string',
          enum: ['versions'],
        },
      },
      'fields[appClipDefaultExperiences]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipDefaultExperiences',
        items: {
          type: 'string',
          enum: [
            'action',
            'appClip',
            'releaseWithAppStoreVersion',
            'appClipDefaultExperienceLocalizations',
            'appClipAppStoreReviewDetail',
          ],
        },
      },
      'fields[appStoreReviewDetails]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreReviewDetails',
        items: {
          type: 'string',
          enum: [
            'contactFirstName',
            'contactLastName',
            'contactPhone',
            'contactEmail',
            'demoAccountName',
            'demoAccountPassword',
            'demoAccountRequired',
            'notes',
            'appStoreVersion',
            'appStoreReviewAttachments',
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
      'fields[appStoreVersionLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionLocalizations',
        items: {
          type: 'string',
          enum: [
            'description',
            'locale',
            'keywords',
            'marketingUrl',
            'promotionalText',
            'supportUrl',
            'whatsNew',
            'appStoreVersion',
            'appScreenshotSets',
            'appPreviewSets',
          ],
        },
      },
      'fields[appStoreVersionPhasedReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionPhasedReleases',
        items: {
          type: 'string',
          enum: ['phasedReleaseState', 'startDate', 'totalPauseDuration', 'currentDayNumber'],
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
      'fields[appStoreVersionSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionSubmissions',
        items: {
          type: 'string',
          enum: ['appStoreVersion'],
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
      'fields[gameCenterAppVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type gameCenterAppVersions',
        items: {
          type: 'string',
          enum: ['enabled', 'compatibilityVersions', 'appStoreVersion'],
        },
      },
      'fields[routingAppCoverages]': {
        type: 'array',
        description: 'the fields to include for returned resources of type routingAppCoverages',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'uploadOperations',
            'assetDeliveryState',
            'appStoreVersion',
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
            'alternativeDistributionPackage',
          ],
        },
      },
      'limit[appStoreVersionExperiments]': {
        type: 'integer',
        description: 'maximum number of related appStoreVersionExperiments returned (when they are included)',
      },
      'limit[appStoreVersionExperimentsV2]': {
        type: 'integer',
        description:
          'maximum number of related appStoreVersionExperimentsV2 returned (when they are included)',
      },
      'limit[appStoreVersionLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related appStoreVersionLocalizations returned (when they are included)',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
