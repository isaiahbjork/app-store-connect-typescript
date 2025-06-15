// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppClipAdvancedExperiencesAPI from '../app-clip-advanced-experiences';
import * as AppClipAppStoreReviewDetailsAPI from '../app-clip-app-store-review-details';
import * as AppClipHeaderImagesAPI from '../app-clip-header-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppClipDefaultExperienceLocalizationsAPI from '../app-clip-default-experience-localizations/app-clip-default-experience-localizations';
import * as AppClipsAPI from '../app-clips/app-clips';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipListAppClipDefaultExperienceLocalizationsParams,
  RelationshipListAppClipDefaultExperienceLocalizationsResponse,
  RelationshipRetrieveAppClipAppStoreReviewDetailResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppClipDefaultExperiences extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppClipDefaultExperienceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceResponse> {
    return this._client.post('/v1/appClipDefaultExperiences', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppClipDefaultExperienceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceResponse> {
    return this._client.get(path`/v1/appClipDefaultExperiences/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppClipDefaultExperienceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceResponse> {
    return this._client.patch(path`/v1/appClipDefaultExperiences/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appClipDefaultExperiences/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAppClipDefaultExperienceLocalizations(
    id: string,
    query: AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse> {
    return this._client.get(path`/v1/appClipDefaultExperiences/${id}/appClipDefaultExperienceLocalizations`, {
      query,
      ...options,
    });
  }

  retrieveAppClipAppStoreReviewDetail(
    id: string,
    query: AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipAppStoreReviewDetailsAPI.AppClipAppStoreReviewDetailResponse> {
    return this._client.get(path`/v1/appClipDefaultExperiences/${id}/appClipAppStoreReviewDetail`, {
      query,
      ...options,
    });
  }

  retrieveReleaseWithAppStoreVersion(
    id: string,
    query: AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.AppStoreVersionResponse> {
    return this._client.get(path`/v1/appClipDefaultExperiences/${id}/releaseWithAppStoreVersion`, {
      query,
      ...options,
    });
  }
}

export interface AppClipDefaultExperience {
  id: string;

  type: 'appClipDefaultExperiences';

  attributes?: AppClipDefaultExperience.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppClipDefaultExperience.Relationships;
}

export namespace AppClipDefaultExperience {
  export interface Attributes {
    action?: AppClipAdvancedExperiencesAPI.AppClipAction;
  }

  export interface Relationships {
    appClip?: Relationships.AppClip;

    appClipAppStoreReviewDetail?: Relationships.AppClipAppStoreReviewDetail;

    appClipDefaultExperienceLocalizations?: Relationships.AppClipDefaultExperienceLocalizations;

    releaseWithAppStoreVersion?: Relationships.ReleaseWithAppStoreVersion;
  }

  export namespace Relationships {
    export interface AppClip {
      data?: AppClip.Data;
    }

    export namespace AppClip {
      export interface Data {
        id: string;

        type: 'appClips';
      }
    }

    export interface AppClipAppStoreReviewDetail {
      data?: AppClipAppStoreReviewDetail.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppClipAppStoreReviewDetail {
      export interface Data {
        id: string;

        type: 'appClipAppStoreReviewDetails';
      }
    }

    export interface AppClipDefaultExperienceLocalizations {
      data?: Array<AppClipDefaultExperienceLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppClipDefaultExperienceLocalizations {
      export interface Data {
        id: string;

        type: 'appClipDefaultExperienceLocalizations';
      }
    }

    export interface ReleaseWithAppStoreVersion {
      data?: ReleaseWithAppStoreVersion.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace ReleaseWithAppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }
  }
}

export interface AppClipDefaultExperienceResponse {
  data: AppClipDefaultExperience;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppClipsAPI.AppClip
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppClipDefaultExperienceLocalizationsAPI.AppClipDefaultExperienceLocalization
    | AppClipAppStoreReviewDetailsAPI.AppClipAppStoreReviewDetail
  >;
}

export interface AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse {
  data: Array<AppClipDefaultExperienceLocalizationsAPI.AppClipDefaultExperienceLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppClipDefaultExperience | AppClipHeaderImagesAPI.AppClipHeaderImage>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppClipDefaultExperienceCreateParams {
  data: AppClipDefaultExperienceCreateParams.Data;
}

export namespace AppClipDefaultExperienceCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appClipDefaultExperiences';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      appClip: Relationships.AppClip;

      appClipDefaultExperienceTemplate?: Relationships.AppClipDefaultExperienceTemplate;

      releaseWithAppStoreVersion?: Relationships.ReleaseWithAppStoreVersion;
    }

    export namespace Relationships {
      export interface AppClip {
        data: AppClip.Data;
      }

      export namespace AppClip {
        export interface Data {
          id: string;

          type: 'appClips';
        }
      }

      export interface AppClipDefaultExperienceTemplate {
        data?: AppClipDefaultExperienceTemplate.Data;
      }

      export namespace AppClipDefaultExperienceTemplate {
        export interface Data {
          id: string;

          type: 'appClipDefaultExperiences';
        }
      }

      export interface ReleaseWithAppStoreVersion {
        data?: ReleaseWithAppStoreVersion.Data;
      }

      export namespace ReleaseWithAppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }
    }

    export interface Attributes {
      action?: AppClipAdvancedExperiencesAPI.AppClipAction;
    }
  }
}

export interface AppClipDefaultExperienceRetrieveParams {
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

export interface AppClipDefaultExperienceUpdateParams {
  data: AppClipDefaultExperienceUpdateParams.Data;
}

export namespace AppClipDefaultExperienceUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipDefaultExperiences';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      action?: AppClipAdvancedExperiencesAPI.AppClipAction;
    }

    export interface Relationships {
      releaseWithAppStoreVersion?: Relationships.ReleaseWithAppStoreVersion;
    }

    export namespace Relationships {
      export interface ReleaseWithAppStoreVersion {
        data?: ReleaseWithAppStoreVersion.Data;
      }

      export namespace ReleaseWithAppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }
    }
  }
}

export interface AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams {
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
   * the fields to include for returned resources of type appClipHeaderImages
   */
  'fields[appClipHeaderImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appClipDefaultExperienceLocalization'
  >;

  /**
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClipDefaultExperience' | 'appClipHeaderImage'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams {
  /**
   * the fields to include for returned resources of type
   * appClipAppStoreReviewDetails
   */
  'fields[appClipAppStoreReviewDetails]'?: Array<'invocationUrls' | 'appClipDefaultExperience'>;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'appClipDefaultExperience'>;
}

export interface AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams {
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

AppClipDefaultExperiences.Relationships = RelationshipsAPIRelationships;

export declare namespace AppClipDefaultExperiences {
  export {
    type AppClipDefaultExperience as AppClipDefaultExperience,
    type AppClipDefaultExperienceResponse as AppClipDefaultExperienceResponse,
    type AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse as AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse,
    type AppClipDefaultExperienceCreateParams as AppClipDefaultExperienceCreateParams,
    type AppClipDefaultExperienceRetrieveParams as AppClipDefaultExperienceRetrieveParams,
    type AppClipDefaultExperienceUpdateParams as AppClipDefaultExperienceUpdateParams,
    type AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams as AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams,
    type AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams as AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams,
    type AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams as AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAppClipDefaultExperienceLocalizationsResponse as RelationshipListAppClipDefaultExperienceLocalizationsResponse,
    type RelationshipRetrieveAppClipAppStoreReviewDetailResponse as RelationshipRetrieveAppClipAppStoreReviewDetailResponse,
    type RelationshipListAppClipDefaultExperienceLocalizationsParams as RelationshipListAppClipDefaultExperienceLocalizationsParams,
  };
}
