// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipRetrieveAppStoreVersionResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterAppVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterAppVersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterAppVersionResponse> {
    return this._client.post('/v1/gameCenterAppVersions', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterAppVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAppVersionResponse> {
    return this._client.get(path`/v1/gameCenterAppVersions/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterAppVersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterAppVersionResponse> {
    return this._client.patch(path`/v1/gameCenterAppVersions/${id}`, { body, ...options });
  }

  listCompatibilityVersions(
    id: string,
    query: GameCenterAppVersionListCompatibilityVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAppVersionsResponse> {
    return this._client.get(path`/v1/gameCenterAppVersions/${id}/compatibilityVersions`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersion(
    id: string,
    query: GameCenterAppVersionRetrieveAppStoreVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.AppStoreVersionResponse> {
    return this._client.get(path`/v1/gameCenterAppVersions/${id}/appStoreVersion`, { query, ...options });
  }
}

export interface GameCenterAppVersion {
  id: string;

  type: 'gameCenterAppVersions';

  attributes?: GameCenterAppVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterAppVersion.Relationships;
}

export namespace GameCenterAppVersion {
  export interface Attributes {
    enabled?: boolean;
  }

  export interface Relationships {
    appStoreVersion?: Relationships.AppStoreVersion;

    compatibilityVersions?: Relationships.CompatibilityVersions;
  }

  export namespace Relationships {
    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface CompatibilityVersions {
      data?: Array<CompatibilityVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace CompatibilityVersions {
      export interface Data {
        id: string;

        type: 'gameCenterAppVersions';
      }
    }
  }
}

export interface GameCenterAppVersionResponse {
  data: GameCenterAppVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterAppVersion | AppStoreVersionsAPI.AppStoreVersionDetails>;
}

export interface GameCenterAppVersionsResponse {
  data: Array<GameCenterAppVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterAppVersion | AppStoreVersionsAPI.AppStoreVersionDetails>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterAppVersionCreateParams {
  data: GameCenterAppVersionCreateParams.Data;
}

export namespace GameCenterAppVersionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterAppVersions';
  }

  export namespace Data {
    export interface Relationships {
      appStoreVersion: Relationships.AppStoreVersion;
    }

    export namespace Relationships {
      export interface AppStoreVersion {
        data: AppStoreVersion.Data;
      }

      export namespace AppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }
    }
  }
}

export interface GameCenterAppVersionRetrieveParams {
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
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * maximum number of related compatibilityVersions returned (when they are
   * included)
   */
  'limit[compatibilityVersions]'?: number;
}

export interface GameCenterAppVersionUpdateParams {
  data: GameCenterAppVersionUpdateParams.Data;
}

export namespace GameCenterAppVersionUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      enabled?: boolean;
    }
  }
}

export interface GameCenterAppVersionListCompatibilityVersionsParams {
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
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * filter by attribute 'enabled'
   */
  'filter[enabled]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related compatibilityVersions returned (when they are
   * included)
   */
  'limit[compatibilityVersions]'?: number;
}

export interface GameCenterAppVersionRetrieveAppStoreVersionParams {
  /**
   * the fields to include for returned resources of type ageRatingDeclarations
   */
  'fields[ageRatingDeclarations]'?: Array<
    | 'alcoholTobaccoOrDrugUseOrReferences'
    | 'contests'
    | 'gambling'
    | 'gamblingSimulated'
    | 'kidsAgeBand'
    | 'lootBox'
    | 'medicalOrTreatmentInformation'
    | 'profanityOrCrudeHumor'
    | 'sexualContentGraphicAndNudity'
    | 'sexualContentOrNudity'
    | 'horrorOrFearThemes'
    | 'matureOrSuggestiveThemes'
    | 'unrestrictedWebAccess'
    | 'violenceCartoonOrFantasy'
    | 'violenceRealisticProlongedGraphicOrSadistic'
    | 'violenceRealistic'
    | 'koreaAgeRatingOverride'
  >;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackages
   */
  'fields[alternativeDistributionPackages]'?: Array<'versions'>;

  /**
   * the fields to include for returned resources of type appClipDefaultExperiences
   */
  'fields[appClipDefaultExperiences]'?: Array<
    | 'action'
    | 'appClip'
    | 'releaseWithAppStoreVersion'
    | 'appClipDefaultExperienceLocalizations'
    | 'appClipAppStoreReviewDetail'
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
   * the fields to include for returned resources of type appStoreReviewDetails
   */
  'fields[appStoreReviewDetails]'?: Array<
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'contactEmail'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
    | 'appStoreVersion'
    | 'appStoreReviewAttachments'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'appStoreVersion'
    | 'appStoreVersionExperimentTreatments'
    | 'platform'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionLocalizations
   */
  'fields[appStoreVersionLocalizations]'?: Array<
    | 'description'
    | 'locale'
    | 'keywords'
    | 'marketingUrl'
    | 'promotionalText'
    | 'supportUrl'
    | 'whatsNew'
    | 'appStoreVersion'
    | 'appScreenshotSets'
    | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionPhasedReleases
   */
  'fields[appStoreVersionPhasedReleases]'?: Array<
    'phasedReleaseState' | 'startDate' | 'totalPauseDuration' | 'currentDayNumber'
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
   * the fields to include for returned resources of type appStoreVersionSubmissions
   */
  'fields[appStoreVersionSubmissions]'?: Array<'appStoreVersion'>;

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
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * the fields to include for returned resources of type routingAppCoverages
   */
  'fields[routingAppCoverages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreVersion'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
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
    | 'alternativeDistributionPackage'
  >;

  /**
   * maximum number of related appStoreVersionExperiments returned (when they are
   * included)
   */
  'limit[appStoreVersionExperiments]'?: number;

  /**
   * maximum number of related appStoreVersionExperimentsV2 returned (when they are
   * included)
   */
  'limit[appStoreVersionExperimentsV2]'?: number;

  /**
   * maximum number of related appStoreVersionLocalizations returned (when they are
   * included)
   */
  'limit[appStoreVersionLocalizations]'?: number;
}

GameCenterAppVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterAppVersions {
  export {
    type GameCenterAppVersion as GameCenterAppVersion,
    type GameCenterAppVersionResponse as GameCenterAppVersionResponse,
    type GameCenterAppVersionsResponse as GameCenterAppVersionsResponse,
    type GameCenterAppVersionCreateParams as GameCenterAppVersionCreateParams,
    type GameCenterAppVersionRetrieveParams as GameCenterAppVersionRetrieveParams,
    type GameCenterAppVersionUpdateParams as GameCenterAppVersionUpdateParams,
    type GameCenterAppVersionListCompatibilityVersionsParams as GameCenterAppVersionListCompatibilityVersionsParams,
    type GameCenterAppVersionRetrieveAppStoreVersionParams as GameCenterAppVersionRetrieveAppStoreVersionParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppStoreVersionResponse as RelationshipRetrieveAppStoreVersionResponse,
  };
}
