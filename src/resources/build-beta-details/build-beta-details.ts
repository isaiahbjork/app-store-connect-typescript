// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveBuildResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as BuildsAPI from '../builds/builds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BuildBetaDetails extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: BuildBetaDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildBetaDetailResponse> {
    return this._client.get(path`/v1/buildBetaDetails/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BuildBetaDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BuildBetaDetailResponse> {
    return this._client.patch(path`/v1/buildBetaDetails/${id}`, { body, ...options });
  }

  list(
    query: BuildBetaDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildBetaDetailListResponse> {
    return this._client.get('/v1/buildBetaDetails', { query, ...options });
  }

  retrieveBuild(
    id: string,
    query: BuildBetaDetailRetrieveBuildParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildsAPI.BuildResponse> {
    return this._client.get(path`/v1/buildBetaDetails/${id}/build`, { query, ...options });
  }
}

export interface BuildBetaDetail {
  id: string;

  type: 'buildBetaDetails';

  attributes?: BuildBetaDetail.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BuildBetaDetail.Relationships;
}

export namespace BuildBetaDetail {
  export interface Attributes {
    autoNotifyEnabled?: boolean;

    externalBuildState?:
      | 'PROCESSING'
      | 'PROCESSING_EXCEPTION'
      | 'MISSING_EXPORT_COMPLIANCE'
      | 'READY_FOR_BETA_TESTING'
      | 'IN_BETA_TESTING'
      | 'EXPIRED'
      | 'READY_FOR_BETA_SUBMISSION'
      | 'IN_EXPORT_COMPLIANCE_REVIEW'
      | 'WAITING_FOR_BETA_REVIEW'
      | 'IN_BETA_REVIEW'
      | 'BETA_REJECTED'
      | 'BETA_APPROVED'
      | 'NOT_APPLICABLE';

    internalBuildState?:
      | 'PROCESSING'
      | 'PROCESSING_EXCEPTION'
      | 'MISSING_EXPORT_COMPLIANCE'
      | 'READY_FOR_BETA_TESTING'
      | 'IN_BETA_TESTING'
      | 'EXPIRED'
      | 'IN_EXPORT_COMPLIANCE_REVIEW';
  }

  export interface Relationships {
    build?: Relationships.Build;
  }

  export namespace Relationships {
    export interface Build {
      data?: Build.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Build {
      export interface Data {
        id: string;

        type: 'builds';
      }
    }
  }
}

export interface BuildBetaDetailResponse {
  data: BuildBetaDetail;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BuildsAPI.Build>;
}

export interface BuildBetaDetailListResponse {
  data: Array<BuildBetaDetail>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BuildsAPI.Build>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BuildBetaDetailRetrieveParams {
  /**
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
  >;

  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build'>;
}

export interface BuildBetaDetailUpdateParams {
  data: BuildBetaDetailUpdateParams.Data;
}

export namespace BuildBetaDetailUpdateParams {
  export interface Data {
    id: string;

    type: 'buildBetaDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      autoNotifyEnabled?: boolean;
    }
  }
}

export interface BuildBetaDetailListParams {
  /**
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
  >;

  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * filter by id(s) of related 'build'
   */
  'filter[build]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildBetaDetailRetrieveBuildParams {
  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;

  /**
   * the fields to include for returned resources of type apps
   */
  'fields[apps]'?: Array<
    | 'accessibilityUrl'
    | 'name'
    | 'bundleId'
    | 'sku'
    | 'primaryLocale'
    | 'isOrEverWasMadeForKids'
    | 'subscriptionStatusUrl'
    | 'subscriptionStatusUrlVersion'
    | 'subscriptionStatusUrlForSandbox'
    | 'subscriptionStatusUrlVersionForSandbox'
    | 'contentRightsDeclaration'
    | 'streamlinedPurchasingEnabled'
    | 'accessibilityDeclarations'
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaTesters'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'appPricePoints'
    | 'endUserLicenseAgreement'
    | 'appPriceSchedule'
    | 'appAvailabilityV2'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'perfPowerMetrics'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'customerReviews'
    | 'customerReviewSummarizations'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionKey'
    | 'analyticsReportRequests'
    | 'marketplaceSearchDetail'
    | 'backgroundAssets'
    | 'betaFeedbackScreenshotSubmissions'
    | 'betaFeedbackCrashSubmissions'
    | 'webhooks'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * the fields to include for returned resources of type betaAppReviewSubmissions
   */
  'fields[betaAppReviewSubmissions]'?: Array<'betaReviewState' | 'submittedDate' | 'build'>;

  /**
   * the fields to include for returned resources of type betaBuildLocalizations
   */
  'fields[betaBuildLocalizations]'?: Array<'whatsNew' | 'locale' | 'build'>;

  /**
   * the fields to include for returned resources of type betaGroups
   */
  'fields[betaGroups]'?: Array<
    | 'name'
    | 'createdDate'
    | 'isInternalGroup'
    | 'hasAccessToAllBuilds'
    | 'publicLinkEnabled'
    | 'publicLinkId'
    | 'publicLinkLimitEnabled'
    | 'publicLinkLimit'
    | 'publicLink'
    | 'feedbackEnabled'
    | 'iosBuildsAvailableForAppleSiliconMac'
    | 'iosBuildsAvailableForAppleVision'
    | 'app'
    | 'builds'
    | 'betaTesters'
    | 'betaRecruitmentCriteria'
    | 'betaRecruitmentCriterionCompatibleBuildCheck'
  >;

  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

  /**
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
  >;

  /**
   * the fields to include for returned resources of type buildBundles
   */
  'fields[buildBundles]'?: Array<
    | 'bundleId'
    | 'bundleType'
    | 'sdkBuild'
    | 'platformBuild'
    | 'fileName'
    | 'hasSirikit'
    | 'hasOnDemandResources'
    | 'hasPrerenderedIcon'
    | 'usesLocationServices'
    | 'isIosBuildMacAppStoreCompatible'
    | 'includesSymbols'
    | 'dSYMUrl'
    | 'supportedArchitectures'
    | 'requiredCapabilities'
    | 'deviceProtocols'
    | 'locales'
    | 'entitlements'
    | 'baDownloadAllowance'
    | 'baMaxInstallSize'
    | 'appClipDomainCacheStatus'
    | 'appClipDomainDebugStatus'
    | 'betaAppClipInvocations'
    | 'buildBundleFileSizes'
  >;

  /**
   * the fields to include for returned resources of type buildIcons
   */
  'fields[buildIcons]'?: Array<'iconAsset' | 'iconType' | 'name'>;

  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
  >;

  /**
   * maximum number of related betaBuildLocalizations returned (when they are
   * included)
   */
  'limit[betaBuildLocalizations]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related buildBundles returned (when they are included)
   */
  'limit[buildBundles]'?: number;

  /**
   * maximum number of related icons returned (when they are included)
   */
  'limit[icons]'?: number;

  /**
   * maximum number of related individualTesters returned (when they are included)
   */
  'limit[individualTesters]'?: number;
}

BuildBetaDetails.Relationships = RelationshipsAPIRelationships;

export declare namespace BuildBetaDetails {
  export {
    type BuildBetaDetail as BuildBetaDetail,
    type BuildBetaDetailResponse as BuildBetaDetailResponse,
    type BuildBetaDetailListResponse as BuildBetaDetailListResponse,
    type BuildBetaDetailRetrieveParams as BuildBetaDetailRetrieveParams,
    type BuildBetaDetailUpdateParams as BuildBetaDetailUpdateParams,
    type BuildBetaDetailListParams as BuildBetaDetailListParams,
    type BuildBetaDetailRetrieveBuildParams as BuildBetaDetailRetrieveBuildParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveBuildResponse as RelationshipRetrieveBuildResponse,
  };
}
