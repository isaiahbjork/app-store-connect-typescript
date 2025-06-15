// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AgeRatingDeclarationsAPI from '../age-rating-declarations';
import * as AppStoreVersionPhasedReleasesAPI from '../app-store-version-phased-releases';
import * as CustomerReviewResponsesAPI from '../customer-review-responses';
import * as RoutingAppCoveragesAPI from '../routing-app-coverages';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AlternativeDistributionPackagesAPI from '../alternative-distribution-packages/alternative-distribution-packages';
import * as AppClipDefaultExperiencesAPI from '../app-clip-default-experiences/app-clip-default-experiences';
import * as AppInfosAPI from '../app-infos/app-infos';
import * as AppPreviewSetsAPI from '../app-preview-sets/app-preview-sets';
import * as AppScreenshotSetsAPI from '../app-screenshot-sets/app-screenshot-sets';
import * as AppStoreReviewDetailsAPI from '../app-store-review-details/app-store-review-details';
import * as AppStoreVersionExperimentTreatmentsAPI from '../app-store-version-experiment-treatments/app-store-version-experiment-treatments';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as AppStoreVersionLocalizationsAPI from '../app-store-version-localizations/app-store-version-localizations';
import * as AppsAPI from '../apps/apps';
import * as BuildsAPI from '../builds/builds';
import * as CustomerReviewsAPI from '../customer-reviews/customer-reviews';
import * as GameCenterAppVersionsAPI from '../game-center-app-versions/game-center-app-versions';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipRetrieveAgeRatingDeclarationResponse,
  RelationshipRetrieveAlternativeDistributionPackageResponse,
  RelationshipRetrieveAppStoreReviewDetailResponse,
  RelationshipRetrieveAppStoreVersionExperimentsParams,
  RelationshipRetrieveAppStoreVersionExperimentsResponse,
  RelationshipRetrieveAppStoreVersionExperimentsV2Params,
  RelationshipRetrieveAppStoreVersionExperimentsV2Response,
  RelationshipRetrieveAppStoreVersionLocalizationsParams,
  RelationshipRetrieveAppStoreVersionLocalizationsResponse,
  RelationshipRetrieveAppStoreVersionPhasedReleaseResponse,
  RelationshipRetrieveAppStoreVersionSubmissionResponse,
  RelationshipRetrieveCustomerReviewsParams,
  RelationshipRetrieveCustomerReviewsResponse,
  RelationshipRetrieveGameCenterAppVersionResponse,
  RelationshipRetrieveRoutingAppCoverageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppStoreVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: AppStoreVersionCreateParams, options?: RequestOptions): APIPromise<AppStoreVersionResponse> {
    return this._client.post('/v1/appStoreVersions', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppStoreVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppStoreVersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionResponse> {
    return this._client.patch(path`/v1/appStoreVersions/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appStoreVersions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @deprecated
   */
  retrieveAgeRatingDeclaration(
    id: string,
    query: AppStoreVersionRetrieveAgeRatingDeclarationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionRetrieveAgeRatingDeclarationResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/ageRatingDeclaration`, { query, ...options });
  }

  retrieveAlternativeDistributionPackage(
    id: string,
    query: AppStoreVersionRetrieveAlternativeDistributionPackageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackagesAPI.AlternativeDistributionPackageResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/alternativeDistributionPackage`, {
      query,
      ...options,
    });
  }

  retrieveAppClipDefaultExperience(
    id: string,
    query: AppStoreVersionRetrieveAppClipDefaultExperienceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperiencesAPI.AppClipDefaultExperienceResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appClipDefaultExperience`, { query, ...options });
  }

  retrieveAppStoreReviewDetail(
    id: string,
    query: AppStoreVersionRetrieveAppStoreReviewDetailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewDetailsAPI.AppStoreReviewDetailResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appStoreReviewDetail`, { query, ...options });
  }

  /**
   * @deprecated
   */
  retrieveAppStoreVersionExperiments(
    id: string,
    query: AppStoreVersionRetrieveAppStoreVersionExperimentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionRetrieveAppStoreVersionExperimentsResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appStoreVersionExperiments`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersionExperimentsV2(
    id: string,
    query: AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentsV2> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appStoreVersionExperimentsV2`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersionLocalizations(
    id: string,
    query: AppStoreVersionRetrieveAppStoreVersionLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appStoreVersionLocalizations`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersionPhasedRelease(
    id: string,
    query: AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appStoreVersionPhasedRelease`, {
      query,
      ...options,
    });
  }

  /**
   * @deprecated
   */
  retrieveAppStoreVersionSubmission(
    id: string,
    query: AppStoreVersionRetrieveAppStoreVersionSubmissionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionRetrieveAppStoreVersionSubmissionResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/appStoreVersionSubmission`, {
      query,
      ...options,
    });
  }

  retrieveBuild(
    id: string,
    query: AppStoreVersionRetrieveBuildParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildWithoutIncludes> {
    return this._client.get(path`/v1/appStoreVersions/${id}/build`, { query, ...options });
  }

  retrieveCustomerReviews(
    id: string,
    query: AppStoreVersionRetrieveCustomerReviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReviews> {
    return this._client.get(path`/v1/appStoreVersions/${id}/customerReviews`, { query, ...options });
  }

  retrieveGameCenterAppVersion(
    id: string,
    query: AppStoreVersionRetrieveGameCenterAppVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAppVersionsAPI.GameCenterAppVersionResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/gameCenterAppVersion`, { query, ...options });
  }

  retrieveRoutingAppCoverage(
    id: string,
    query: AppStoreVersionRetrieveRoutingAppCoverageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionRetrieveRoutingAppCoverageResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/routingAppCoverage`, { query, ...options });
  }
}

export interface AppStoreVersionDetails {
  id: string;

  type: 'appStoreVersions';

  attributes?: AppStoreVersionDetails.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreVersionDetails.Relationships;
}

export namespace AppStoreVersionDetails {
  export interface Attributes {
    /**
     * @deprecated
     */
    appStoreState?: AppInfosAPI.AppStoreVersionState;

    appVersionState?:
      | 'ACCEPTED'
      | 'DEVELOPER_REJECTED'
      | 'IN_REVIEW'
      | 'INVALID_BINARY'
      | 'METADATA_REJECTED'
      | 'PENDING_APPLE_RELEASE'
      | 'PENDING_DEVELOPER_RELEASE'
      | 'PREPARE_FOR_SUBMISSION'
      | 'PROCESSING_FOR_DISTRIBUTION'
      | 'READY_FOR_DISTRIBUTION'
      | 'READY_FOR_REVIEW'
      | 'REJECTED'
      | 'REPLACED_WITH_NEW_VERSION'
      | 'WAITING_FOR_EXPORT_COMPLIANCE'
      | 'WAITING_FOR_REVIEW';

    copyright?: string;

    createdDate?: string;

    downloadable?: boolean;

    earliestReleaseDate?: string;

    platform?: AppStoreVersionExperimentsAPI.Platform;

    releaseType?: 'MANUAL' | 'AFTER_APPROVAL' | 'SCHEDULED';

    reviewType?: 'APP_STORE' | 'NOTARIZATION';

    /**
     * @deprecated
     */
    usesIdfa?: boolean;

    versionString?: string;
  }

  export interface Relationships {
    /**
     * @deprecated
     */
    ageRatingDeclaration?: Relationships.AgeRatingDeclaration;

    alternativeDistributionPackage?: Relationships.AlternativeDistributionPackage;

    app?: Relationships.App;

    appClipDefaultExperience?: Relationships.AppClipDefaultExperience;

    appStoreReviewDetail?: Relationships.AppStoreReviewDetail;

    appStoreVersionExperiments?: Relationships.AppStoreVersionExperiments;

    appStoreVersionExperimentsV2?: Relationships.AppStoreVersionExperimentsV2;

    appStoreVersionLocalizations?: Relationships.AppStoreVersionLocalizations;

    appStoreVersionPhasedRelease?: Relationships.AppStoreVersionPhasedRelease;

    appStoreVersionSubmission?: Relationships.AppStoreVersionSubmission;

    build?: Relationships.Build;

    customerReviews?: Relationships.CustomerReviews;

    gameCenterAppVersion?: Relationships.GameCenterAppVersion;

    routingAppCoverage?: Relationships.RoutingAppCoverage;
  }

  export namespace Relationships {
    /**
     * @deprecated
     */
    export interface AgeRatingDeclaration {
      data?: AgeRatingDeclaration.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AgeRatingDeclaration {
      export interface Data {
        id: string;

        type: 'ageRatingDeclarations';
      }
    }

    export interface AlternativeDistributionPackage {
      data?: AlternativeDistributionPackage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AlternativeDistributionPackage {
      export interface Data {
        id: string;

        type: 'alternativeDistributionPackages';
      }
    }

    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface AppClipDefaultExperience {
      data?: AppClipDefaultExperience.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppClipDefaultExperience {
      export interface Data {
        id: string;

        type: 'appClipDefaultExperiences';
      }
    }

    export interface AppStoreReviewDetail {
      data?: AppStoreReviewDetail.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreReviewDetail {
      export interface Data {
        id: string;

        type: 'appStoreReviewDetails';
      }
    }

    export interface AppStoreVersionExperiments {
      data?: Array<AppStoreVersionExperiments.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionExperiments {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }

    export interface AppStoreVersionExperimentsV2 {
      data?: Array<AppStoreVersionExperimentsV2.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionExperimentsV2 {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }

    export interface AppStoreVersionLocalizations {
      data?: Array<AppStoreVersionLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionLocalizations {
      export interface Data {
        id: string;

        type: 'appStoreVersionLocalizations';
      }
    }

    export interface AppStoreVersionPhasedRelease {
      data?: AppStoreVersionPhasedRelease.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreVersionPhasedRelease {
      export interface Data {
        id: string;

        type: 'appStoreVersionPhasedReleases';
      }
    }

    export interface AppStoreVersionSubmission {
      data?: AppStoreVersionSubmission.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreVersionSubmission {
      export interface Data {
        id: string;

        type: 'appStoreVersionSubmissions';
      }
    }

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

    export interface CustomerReviews {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface GameCenterAppVersion {
      data?: GameCenterAppVersion.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterAppVersion {
      export interface Data {
        id: string;

        type: 'gameCenterAppVersions';
      }
    }

    export interface RoutingAppCoverage {
      data?: RoutingAppCoverage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace RoutingAppCoverage {
      export interface Data {
        id: string;

        type: 'routingAppCoverages';
      }
    }
  }
}

export interface AppStoreVersionExperimentsV2 {
  data: Array<AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppsAPI.App
    | AppStoreVersionDetails
    | AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatment
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreVersionResponse {
  data: AppStoreVersionDetails;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppsAPI.App
    | AgeRatingDeclarationsAPI.AgeRatingDeclaration
    | AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization
    | BuildsAPI.Build
    | AppStoreVersionPhasedReleasesAPI.AppStoreVersionPhasedRelease
    | GameCenterAppVersionsAPI.GameCenterAppVersion
    | RoutingAppCoveragesAPI.RoutingAppCoverage
    | AppStoreReviewDetailsAPI.AppStoreReviewDetail
    | AppStoreVersionSubmission
    | AppClipDefaultExperiencesAPI.AppClipDefaultExperience
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperiment
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
    | AlternativeDistributionPackagesAPI.AlternativeDistributionPackage
  >;
}

/**
 * @deprecated
 */
export interface AppStoreVersionSubmission {
  id: string;

  type: 'appStoreVersionSubmissions';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreVersionSubmission.Relationships;
}

export namespace AppStoreVersionSubmission {
  export interface Relationships {
    appStoreVersion?: Relationships.AppStoreVersion;
  }

  export namespace Relationships {
    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }
  }
}

export interface BuildWithoutIncludes {
  data: BuildsAPI.Build;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface CustomerReviews {
  data: Array<CustomerReviewsAPI.CustomerReview>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<CustomerReviewResponsesAPI.CustomerReviewResponseV1>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreVersionRetrieveAgeRatingDeclarationResponse {
  data: AgeRatingDeclarationsAPI.AgeRatingDeclaration;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

/**
 * @deprecated
 */
export interface AppStoreVersionRetrieveAppStoreVersionExperimentsResponse {
  data: Array<AppStoreVersionExperimentsAPI.AppStoreVersionExperiment>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    AppStoreVersionDetails | AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatment
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse {
  data: Array<AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    AppStoreVersionDetails | AppScreenshotSetsAPI.AppScreenshotSet | AppPreviewSetsAPI.AppPreviewSet
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse {
  data: AppStoreVersionPhasedReleasesAPI.AppStoreVersionPhasedRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

/**
 * @deprecated
 */
export interface AppStoreVersionRetrieveAppStoreVersionSubmissionResponse {
  /**
   * @deprecated
   */
  data: AppStoreVersionSubmission;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppStoreVersionDetails>;
}

export interface AppStoreVersionRetrieveRoutingAppCoverageResponse {
  data: RoutingAppCoveragesAPI.RoutingAppCoverage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppStoreVersionCreateParams {
  data: AppStoreVersionCreateParams.Data;
}

export namespace AppStoreVersionCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appStoreVersions';
  }

  export namespace Data {
    export interface Attributes {
      platform: AppStoreVersionExperimentsAPI.Platform;

      versionString: string;

      copyright?: string;

      earliestReleaseDate?: string;

      releaseType?: 'MANUAL' | 'AFTER_APPROVAL' | 'SCHEDULED';

      reviewType?: 'APP_STORE' | 'NOTARIZATION';

      /**
       * @deprecated
       */
      usesIdfa?: boolean;
    }

    export interface Relationships {
      app: Relationships.App;

      appStoreVersionLocalizations?: Relationships.AppStoreVersionLocalizations;

      build?: Relationships.Build;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }

      export interface AppStoreVersionLocalizations {
        data?: Array<AppStoreVersionLocalizations.Data>;
      }

      export namespace AppStoreVersionLocalizations {
        export interface Data {
          id: string;

          type: 'appStoreVersionLocalizations';
        }
      }

      export interface Build {
        data?: Build.Data;
      }

      export namespace Build {
        export interface Data {
          id: string;

          type: 'builds';
        }
      }
    }
  }
}

export interface AppStoreVersionRetrieveParams {
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

export interface AppStoreVersionUpdateParams {
  data: AppStoreVersionUpdateParams.Data;
}

export namespace AppStoreVersionUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreVersions';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      copyright?: string;

      downloadable?: boolean;

      earliestReleaseDate?: string;

      releaseType?: 'MANUAL' | 'AFTER_APPROVAL' | 'SCHEDULED';

      reviewType?: 'APP_STORE' | 'NOTARIZATION';

      /**
       * @deprecated
       */
      usesIdfa?: boolean;

      versionString?: string;
    }

    export interface Relationships {
      appClipDefaultExperience?: Relationships.AppClipDefaultExperience;

      build?: Relationships.Build;
    }

    export namespace Relationships {
      export interface AppClipDefaultExperience {
        data?: AppClipDefaultExperience.Data;
      }

      export namespace AppClipDefaultExperience {
        export interface Data {
          id: string;

          type: 'appClipDefaultExperiences';
        }
      }

      export interface Build {
        data?: Build.Data;
      }

      export namespace Build {
        export interface Data {
          id: string;

          type: 'builds';
        }
      }
    }
  }
}

export interface AppStoreVersionRetrieveAgeRatingDeclarationParams {
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
}

export interface AppStoreVersionRetrieveAlternativeDistributionPackageParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackages
   */
  'fields[alternativeDistributionPackages]'?: Array<'versions'>;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageVersions
   */
  'fields[alternativeDistributionPackageVersions]'?: Array<
    | 'url'
    | 'urlExpirationDate'
    | 'version'
    | 'fileChecksum'
    | 'state'
    | 'variants'
    | 'deltas'
    | 'alternativeDistributionPackage'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'versions'>;

  /**
   * maximum number of related versions returned (when they are included)
   */
  'limit[versions]'?: number;
}

export interface AppStoreVersionRetrieveAppClipDefaultExperienceParams {
  /**
   * the fields to include for returned resources of type
   * appClipAppStoreReviewDetails
   */
  'fields[appClipAppStoreReviewDetails]'?: Array<'invocationUrls' | 'appClipDefaultExperience'>;

  /**
   * the fields to include for returned resources of type
   * appClipDefaultExperienceLocalizations
   */
  'fields[appClipDefaultExperienceLocalizations]'?: Array<
    'locale' | 'subtitle' | 'appClipDefaultExperience' | 'appClipHeaderImage'
  >;

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
   * the fields to include for returned resources of type appClips
   */
  'fields[appClips]'?: Array<'bundleId' | 'app' | 'appClipDefaultExperiences' | 'appClipAdvancedExperiences'>;

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
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appClip'
    | 'releaseWithAppStoreVersion'
    | 'appClipDefaultExperienceLocalizations'
    | 'appClipAppStoreReviewDetail'
  >;

  /**
   * maximum number of related appClipDefaultExperienceLocalizations returned (when
   * they are included)
   */
  'limit[appClipDefaultExperienceLocalizations]'?: number;
}

export interface AppStoreVersionRetrieveAppStoreReviewDetailParams {
  /**
   * the fields to include for returned resources of type appStoreReviewAttachments
   */
  'fields[appStoreReviewAttachments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreReviewDetail'
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
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion' | 'appStoreReviewAttachments'>;

  /**
   * maximum number of related appStoreReviewAttachments returned (when they are
   * included)
   */
  'limit[appStoreReviewAttachments]'?: number;
}

export interface AppStoreVersionRetrieveAppStoreVersionExperimentsParams {
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
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatments
   */
  'fields[appStoreVersionExperimentTreatments]'?: Array<
    | 'name'
    | 'appIcon'
    | 'appIconName'
    | 'promotedDate'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appStoreVersionExperimentTreatmentLocalizations'
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
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'PREPARE_FOR_SUBMISSION'
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'ACCEPTED'
    | 'APPROVED'
    | 'REJECTED'
    | 'COMPLETED'
    | 'STOPPED'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appStoreVersionExperimentTreatments returned (when
   * they are included)
   */
  'limit[appStoreVersionExperimentTreatments]'?: number;
}

export interface AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params {
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
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'platform'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
    | 'appStoreVersionExperimentTreatments'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatments
   */
  'fields[appStoreVersionExperimentTreatments]'?: Array<
    | 'name'
    | 'appIcon'
    | 'appIconName'
    | 'promotedDate'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appStoreVersionExperimentTreatmentLocalizations'
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
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'PREPARE_FOR_SUBMISSION'
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'ACCEPTED'
    | 'APPROVED'
    | 'REJECTED'
    | 'COMPLETED'
    | 'STOPPED'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'latestControlVersion' | 'controlVersions' | 'appStoreVersionExperimentTreatments'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appStoreVersionExperimentTreatments returned (when
   * they are included)
   */
  'limit[appStoreVersionExperimentTreatments]'?: number;

  /**
   * maximum number of related controlVersions returned (when they are included)
   */
  'limit[controlVersions]'?: number;
}

export interface AppStoreVersionRetrieveAppStoreVersionLocalizationsParams {
  /**
   * the fields to include for returned resources of type appPreviewSets
   */
  'fields[appPreviewSets]'?: Array<
    | 'previewType'
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appPreviews'
  >;

  /**
   * the fields to include for returned resources of type appScreenshotSets
   */
  'fields[appScreenshotSets]'?: Array<
    | 'screenshotDisplayType'
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appScreenshots'
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
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion' | 'appScreenshotSets' | 'appPreviewSets'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appPreviewSets returned (when they are included)
   */
  'limit[appPreviewSets]'?: number;

  /**
   * maximum number of related appScreenshotSets returned (when they are included)
   */
  'limit[appScreenshotSets]'?: number;
}

export interface AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams {
  /**
   * the fields to include for returned resources of type
   * appStoreVersionPhasedReleases
   */
  'fields[appStoreVersionPhasedReleases]'?: Array<
    'phasedReleaseState' | 'startDate' | 'totalPauseDuration' | 'currentDayNumber'
  >;
}

export interface AppStoreVersionRetrieveAppStoreVersionSubmissionParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion'>;
}

export interface AppStoreVersionRetrieveBuildParams {
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
}

export interface AppStoreVersionRetrieveCustomerReviewsParams {
  /**
   * filter by publishedResponse
   */
  'exists[publishedResponse]'?: boolean;

  /**
   * the fields to include for returned resources of type customerReviewResponses
   */
  'fields[customerReviewResponses]'?: Array<'responseBody' | 'lastModifiedDate' | 'state' | 'review'>;

  /**
   * the fields to include for returned resources of type customerReviews
   */
  'fields[customerReviews]'?: Array<
    'rating' | 'title' | 'body' | 'reviewerNickname' | 'createdDate' | 'territory' | 'response'
  >;

  /**
   * filter by attribute 'rating'
   */
  'filter[rating]'?: Array<string>;

  /**
   * filter by attribute 'territory'
   */
  'filter[territory]'?: Array<
    | 'ABW'
    | 'AFG'
    | 'AGO'
    | 'AIA'
    | 'ALB'
    | 'AND'
    | 'ANT'
    | 'ARE'
    | 'ARG'
    | 'ARM'
    | 'ASM'
    | 'ATG'
    | 'AUS'
    | 'AUT'
    | 'AZE'
    | 'BDI'
    | 'BEL'
    | 'BEN'
    | 'BES'
    | 'BFA'
    | 'BGD'
    | 'BGR'
    | 'BHR'
    | 'BHS'
    | 'BIH'
    | 'BLR'
    | 'BLZ'
    | 'BMU'
    | 'BOL'
    | 'BRA'
    | 'BRB'
    | 'BRN'
    | 'BTN'
    | 'BWA'
    | 'CAF'
    | 'CAN'
    | 'CHE'
    | 'CHL'
    | 'CHN'
    | 'CIV'
    | 'CMR'
    | 'COD'
    | 'COG'
    | 'COK'
    | 'COL'
    | 'COM'
    | 'CPV'
    | 'CRI'
    | 'CUB'
    | 'CUW'
    | 'CXR'
    | 'CYM'
    | 'CYP'
    | 'CZE'
    | 'DEU'
    | 'DJI'
    | 'DMA'
    | 'DNK'
    | 'DOM'
    | 'DZA'
    | 'ECU'
    | 'EGY'
    | 'ERI'
    | 'ESP'
    | 'EST'
    | 'ETH'
    | 'FIN'
    | 'FJI'
    | 'FLK'
    | 'FRA'
    | 'FRO'
    | 'FSM'
    | 'GAB'
    | 'GBR'
    | 'GEO'
    | 'GGY'
    | 'GHA'
    | 'GIB'
    | 'GIN'
    | 'GLP'
    | 'GMB'
    | 'GNB'
    | 'GNQ'
    | 'GRC'
    | 'GRD'
    | 'GRL'
    | 'GTM'
    | 'GUF'
    | 'GUM'
    | 'GUY'
    | 'HKG'
    | 'HND'
    | 'HRV'
    | 'HTI'
    | 'HUN'
    | 'IDN'
    | 'IMN'
    | 'IND'
    | 'IRL'
    | 'IRQ'
    | 'ISL'
    | 'ISR'
    | 'ITA'
    | 'JAM'
    | 'JEY'
    | 'JOR'
    | 'JPN'
    | 'KAZ'
    | 'KEN'
    | 'KGZ'
    | 'KHM'
    | 'KIR'
    | 'KNA'
    | 'KOR'
    | 'KWT'
    | 'LAO'
    | 'LBN'
    | 'LBR'
    | 'LBY'
    | 'LCA'
    | 'LIE'
    | 'LKA'
    | 'LSO'
    | 'LTU'
    | 'LUX'
    | 'LVA'
    | 'MAC'
    | 'MAR'
    | 'MCO'
    | 'MDA'
    | 'MDG'
    | 'MDV'
    | 'MEX'
    | 'MHL'
    | 'MKD'
    | 'MLI'
    | 'MLT'
    | 'MMR'
    | 'MNE'
    | 'MNG'
    | 'MNP'
    | 'MOZ'
    | 'MRT'
    | 'MSR'
    | 'MTQ'
    | 'MUS'
    | 'MWI'
    | 'MYS'
    | 'MYT'
    | 'NAM'
    | 'NCL'
    | 'NER'
    | 'NFK'
    | 'NGA'
    | 'NIC'
    | 'NIU'
    | 'NLD'
    | 'NOR'
    | 'NPL'
    | 'NRU'
    | 'NZL'
    | 'OMN'
    | 'PAK'
    | 'PAN'
    | 'PER'
    | 'PHL'
    | 'PLW'
    | 'PNG'
    | 'POL'
    | 'PRI'
    | 'PRT'
    | 'PRY'
    | 'PSE'
    | 'PYF'
    | 'QAT'
    | 'REU'
    | 'ROU'
    | 'RUS'
    | 'RWA'
    | 'SAU'
    | 'SEN'
    | 'SGP'
    | 'SHN'
    | 'SLB'
    | 'SLE'
    | 'SLV'
    | 'SMR'
    | 'SOM'
    | 'SPM'
    | 'SRB'
    | 'SSD'
    | 'STP'
    | 'SUR'
    | 'SVK'
    | 'SVN'
    | 'SWE'
    | 'SWZ'
    | 'SXM'
    | 'SYC'
    | 'TCA'
    | 'TCD'
    | 'TGO'
    | 'THA'
    | 'TJK'
    | 'TKM'
    | 'TLS'
    | 'TON'
    | 'TTO'
    | 'TUN'
    | 'TUR'
    | 'TUV'
    | 'TWN'
    | 'TZA'
    | 'UGA'
    | 'UKR'
    | 'UMI'
    | 'URY'
    | 'USA'
    | 'UZB'
    | 'VAT'
    | 'VCT'
    | 'VEN'
    | 'VGB'
    | 'VIR'
    | 'VNM'
    | 'VUT'
    | 'WLF'
    | 'WSM'
    | 'YEM'
    | 'ZAF'
    | 'ZMB'
    | 'ZWE'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'response'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'rating' | '-rating' | 'createdDate' | '-createdDate'>;
}

export interface AppStoreVersionRetrieveGameCenterAppVersionParams {
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

export interface AppStoreVersionRetrieveRoutingAppCoverageParams {
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
}

AppStoreVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace AppStoreVersions {
  export {
    type AppStoreVersionDetails as AppStoreVersionDetails,
    type AppStoreVersionExperimentsV2 as AppStoreVersionExperimentsV2,
    type AppStoreVersionResponse as AppStoreVersionResponse,
    type AppStoreVersionSubmission as AppStoreVersionSubmission,
    type BuildWithoutIncludes as BuildWithoutIncludes,
    type CustomerReviews as CustomerReviews,
    type AppStoreVersionRetrieveAgeRatingDeclarationResponse as AppStoreVersionRetrieveAgeRatingDeclarationResponse,
    type AppStoreVersionRetrieveAppStoreVersionExperimentsResponse as AppStoreVersionRetrieveAppStoreVersionExperimentsResponse,
    type AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse as AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse,
    type AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse as AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse,
    type AppStoreVersionRetrieveAppStoreVersionSubmissionResponse as AppStoreVersionRetrieveAppStoreVersionSubmissionResponse,
    type AppStoreVersionRetrieveRoutingAppCoverageResponse as AppStoreVersionRetrieveRoutingAppCoverageResponse,
    type AppStoreVersionCreateParams as AppStoreVersionCreateParams,
    type AppStoreVersionRetrieveParams as AppStoreVersionRetrieveParams,
    type AppStoreVersionUpdateParams as AppStoreVersionUpdateParams,
    type AppStoreVersionRetrieveAgeRatingDeclarationParams as AppStoreVersionRetrieveAgeRatingDeclarationParams,
    type AppStoreVersionRetrieveAlternativeDistributionPackageParams as AppStoreVersionRetrieveAlternativeDistributionPackageParams,
    type AppStoreVersionRetrieveAppClipDefaultExperienceParams as AppStoreVersionRetrieveAppClipDefaultExperienceParams,
    type AppStoreVersionRetrieveAppStoreReviewDetailParams as AppStoreVersionRetrieveAppStoreReviewDetailParams,
    type AppStoreVersionRetrieveAppStoreVersionExperimentsParams as AppStoreVersionRetrieveAppStoreVersionExperimentsParams,
    type AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params as AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params,
    type AppStoreVersionRetrieveAppStoreVersionLocalizationsParams as AppStoreVersionRetrieveAppStoreVersionLocalizationsParams,
    type AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams as AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams,
    type AppStoreVersionRetrieveAppStoreVersionSubmissionParams as AppStoreVersionRetrieveAppStoreVersionSubmissionParams,
    type AppStoreVersionRetrieveBuildParams as AppStoreVersionRetrieveBuildParams,
    type AppStoreVersionRetrieveCustomerReviewsParams as AppStoreVersionRetrieveCustomerReviewsParams,
    type AppStoreVersionRetrieveGameCenterAppVersionParams as AppStoreVersionRetrieveGameCenterAppVersionParams,
    type AppStoreVersionRetrieveRoutingAppCoverageParams as AppStoreVersionRetrieveRoutingAppCoverageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAgeRatingDeclarationResponse as RelationshipRetrieveAgeRatingDeclarationResponse,
    type RelationshipRetrieveAlternativeDistributionPackageResponse as RelationshipRetrieveAlternativeDistributionPackageResponse,
    type RelationshipRetrieveAppStoreReviewDetailResponse as RelationshipRetrieveAppStoreReviewDetailResponse,
    type RelationshipRetrieveAppStoreVersionExperimentsResponse as RelationshipRetrieveAppStoreVersionExperimentsResponse,
    type RelationshipRetrieveAppStoreVersionExperimentsV2Response as RelationshipRetrieveAppStoreVersionExperimentsV2Response,
    type RelationshipRetrieveAppStoreVersionLocalizationsResponse as RelationshipRetrieveAppStoreVersionLocalizationsResponse,
    type RelationshipRetrieveAppStoreVersionPhasedReleaseResponse as RelationshipRetrieveAppStoreVersionPhasedReleaseResponse,
    type RelationshipRetrieveAppStoreVersionSubmissionResponse as RelationshipRetrieveAppStoreVersionSubmissionResponse,
    type RelationshipRetrieveCustomerReviewsResponse as RelationshipRetrieveCustomerReviewsResponse,
    type RelationshipRetrieveGameCenterAppVersionResponse as RelationshipRetrieveGameCenterAppVersionResponse,
    type RelationshipRetrieveRoutingAppCoverageResponse as RelationshipRetrieveRoutingAppCoverageResponse,
    type RelationshipRetrieveAppStoreVersionExperimentsParams as RelationshipRetrieveAppStoreVersionExperimentsParams,
    type RelationshipRetrieveAppStoreVersionExperimentsV2Params as RelationshipRetrieveAppStoreVersionExperimentsV2Params,
    type RelationshipRetrieveAppStoreVersionLocalizationsParams as RelationshipRetrieveAppStoreVersionLocalizationsParams,
    type RelationshipRetrieveCustomerReviewsParams as RelationshipRetrieveCustomerReviewsParams,
  };
}
