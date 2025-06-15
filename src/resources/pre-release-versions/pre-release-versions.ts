// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppEncryptionDeclarationsAPI from '../app-encryption-declarations/app-encryption-declarations';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as AppsAPI from '../apps/apps';
import * as BuildsAPI from '../builds/builds';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListBuildsParams,
  RelationshipListBuildsResponse,
  RelationshipRetrieveAppResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PreReleaseVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: PreReleaseVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreReleaseVersionRetrieveResponse> {
    return this._client.get(path`/v1/preReleaseVersions/${id}`, { query, ...options });
  }

  list(
    query: PreReleaseVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreReleaseVersionListResponse> {
    return this._client.get('/v1/preReleaseVersions', { query, ...options });
  }

  listBuilds(
    id: string,
    query: PreReleaseVersionListBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.BuildsWithoutIncludesResponse> {
    return this._client.get(path`/v1/preReleaseVersions/${id}/builds`, { query, ...options });
  }

  retrieveApp(
    id: string,
    query: PreReleaseVersionRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/preReleaseVersions/${id}/app`, { query, ...options });
  }
}

export interface PrereleaseVersion {
  id: string;

  type: 'preReleaseVersions';

  attributes?: PrereleaseVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: PrereleaseVersion.Relationships;
}

export namespace PrereleaseVersion {
  export interface Attributes {
    platform?: AppStoreVersionExperimentsAPI.Platform;

    version?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    builds?: Relationships.Builds;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface Builds {
      data?: Array<Builds.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Builds {
      export interface Data {
        id: string;

        type: 'builds';
      }
    }
  }
}

export interface PreReleaseVersionRetrieveResponse {
  data: PrereleaseVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BuildsAPI.Build | AppsAPI.App>;
}

export interface PreReleaseVersionListResponse {
  data: Array<PrereleaseVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BuildsAPI.Build | AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface PreReleaseVersionRetrieveParams {
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
  include?: Array<'builds' | 'app'>;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface PreReleaseVersionListParams {
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
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  'filter[builds'?: PreReleaseVersionListParams.FilterBuilds;

  /**
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'version'
   */
  'filter[version]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'builds' | 'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'version' | '-version'>;
}

export namespace PreReleaseVersionListParams {
  export interface FilterBuilds {
    /**
     * filter by attribute 'builds.buildAudienceType'
     */
    'buildAudienceType]'?: Array<'INTERNAL_ONLY' | 'APP_STORE_ELIGIBLE'>;

    /**
     * filter by attribute 'builds.expired'
     */
    'expired]'?: Array<string>;

    /**
     * filter by attribute 'builds.processingState'
     */
    'processingState]'?: Array<'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID'>;

    /**
     * filter by attribute 'builds.version'
     */
    'version]'?: Array<string>;
  }
}

export interface PreReleaseVersionListBuildsParams {
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
   * maximum resources per page
   */
  limit?: number;
}

export interface PreReleaseVersionRetrieveAppParams {
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
}

PreReleaseVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace PreReleaseVersions {
  export {
    type PrereleaseVersion as PrereleaseVersion,
    type PreReleaseVersionRetrieveResponse as PreReleaseVersionRetrieveResponse,
    type PreReleaseVersionListResponse as PreReleaseVersionListResponse,
    type PreReleaseVersionRetrieveParams as PreReleaseVersionRetrieveParams,
    type PreReleaseVersionListParams as PreReleaseVersionListParams,
    type PreReleaseVersionListBuildsParams as PreReleaseVersionListBuildsParams,
    type PreReleaseVersionRetrieveAppParams as PreReleaseVersionRetrieveAppParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListBuildsResponse as RelationshipListBuildsResponse,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipListBuildsParams as RelationshipListBuildsParams,
  };
}
