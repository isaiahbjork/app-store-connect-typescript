// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppClipAdvancedExperienceImagesAPI from '../app-clip-advanced-experience-images';
import * as AppClipAdvancedExperiencesAPI from '../app-clip-advanced-experiences';
import * as AppClipAppStoreReviewDetailsAPI from '../app-clip-app-store-review-details';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppClipDefaultExperienceLocalizationsAPI from '../app-clip-default-experience-localizations/app-clip-default-experience-localizations';
import * as AppClipDefaultExperiencesAPI from '../app-clip-default-experiences/app-clip-default-experiences';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveAdvancedExperiencesParams,
  RelationshipRetrieveAdvancedExperiencesResponse,
  RelationshipRetrieveDefaultExperiencesParams,
  RelationshipRetrieveDefaultExperiencesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as AppsAPI from '../apps/apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppClips extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AppClipRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipRetrieveResponse> {
    return this._client.get(path`/v1/appClips/${id}`, { query, ...options });
  }

  listAdvancedExperiences(
    id: string,
    query: AppClipListAdvancedExperiencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipListAdvancedExperiencesResponse> {
    return this._client.get(path`/v1/appClips/${id}/appClipAdvancedExperiences`, { query, ...options });
  }

  listDefaultExperiences(
    id: string,
    query: AppClipListDefaultExperiencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipListDefaultExperiencesResponse> {
    return this._client.get(path`/v1/appClips/${id}/appClipDefaultExperiences`, { query, ...options });
  }
}

export interface AppClip {
  id: string;

  type: 'appClips';

  attributes?: AppClip.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppClip.Relationships;
}

export namespace AppClip {
  export interface Attributes {
    bundleId?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    appClipAdvancedExperiences?: Relationships.AppClipAdvancedExperiences;

    appClipDefaultExperiences?: Relationships.AppClipDefaultExperiences;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface AppClipAdvancedExperiences {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AppClipDefaultExperiences {
      data?: Array<AppClipDefaultExperiences.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppClipDefaultExperiences {
      export interface Data {
        id: string;

        type: 'appClipDefaultExperiences';
      }
    }
  }
}

export interface AppClipRetrieveResponse {
  data: AppClip;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | AppClipDefaultExperiencesAPI.AppClipDefaultExperience>;
}

export interface AppClipListAdvancedExperiencesResponse {
  data: Array<AppClipAdvancedExperiencesAPI.AppClipAdvancedExperience>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppClip
    | AppClipAdvancedExperienceImagesAPI.AppClipAdvancedExperienceImage
    | AppClipAdvancedExperiencesAPI.AppClipAdvancedExperienceLocalization
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppClipListDefaultExperiencesResponse {
  data: Array<AppClipDefaultExperiencesAPI.AppClipDefaultExperience>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppClip
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppClipDefaultExperienceLocalizationsAPI.AppClipDefaultExperienceLocalization
    | AppClipAppStoreReviewDetailsAPI.AppClipAppStoreReviewDetail
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppClipRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'appClipDefaultExperiences'>;

  /**
   * maximum number of related appClipDefaultExperiences returned (when they are
   * included)
   */
  'limit[appClipDefaultExperiences]'?: number;
}

export interface AppClipListAdvancedExperiencesParams {
  /**
   * the fields to include for returned resources of type
   * appClipAdvancedExperienceImages
   */
  'fields[appClipAdvancedExperienceImages]'?: Array<
    'fileSize' | 'fileName' | 'sourceFileChecksum' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type
   * appClipAdvancedExperienceLocalizations
   */
  'fields[appClipAdvancedExperienceLocalizations]'?: Array<'language' | 'title' | 'subtitle'>;

  /**
   * the fields to include for returned resources of type appClipAdvancedExperiences
   */
  'fields[appClipAdvancedExperiences]'?: Array<
    | 'link'
    | 'version'
    | 'status'
    | 'action'
    | 'isPoweredBy'
    | 'place'
    | 'placeStatus'
    | 'businessCategory'
    | 'defaultLanguage'
    | 'appClip'
    | 'headerImage'
    | 'localizations'
  >;

  /**
   * the fields to include for returned resources of type appClips
   */
  'fields[appClips]'?: Array<'bundleId' | 'app' | 'appClipDefaultExperiences' | 'appClipAdvancedExperiences'>;

  /**
   * filter by attribute 'action'
   */
  'filter[action]'?: Array<'OPEN' | 'VIEW' | 'PLAY'>;

  /**
   * filter by attribute 'placeStatus'
   */
  'filter[placeStatus]'?: Array<'PENDING' | 'MATCHED' | 'NO_MATCH'>;

  /**
   * filter by attribute 'status'
   */
  'filter[status]'?: Array<'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClip' | 'headerImage' | 'localizations'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;
}

export interface AppClipListDefaultExperiencesParams {
  /**
   * filter by existence or non-existence of related 'releaseWithAppStoreVersion'
   */
  'exists[releaseWithAppStoreVersion]'?: boolean;

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
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appClipDefaultExperienceLocalizations returned (when
   * they are included)
   */
  'limit[appClipDefaultExperienceLocalizations]'?: number;
}

AppClips.Relationships = RelationshipsAPIRelationships;

export declare namespace AppClips {
  export {
    type AppClip as AppClip,
    type AppClipRetrieveResponse as AppClipRetrieveResponse,
    type AppClipListAdvancedExperiencesResponse as AppClipListAdvancedExperiencesResponse,
    type AppClipListDefaultExperiencesResponse as AppClipListDefaultExperiencesResponse,
    type AppClipRetrieveParams as AppClipRetrieveParams,
    type AppClipListAdvancedExperiencesParams as AppClipListAdvancedExperiencesParams,
    type AppClipListDefaultExperiencesParams as AppClipListDefaultExperiencesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAdvancedExperiencesResponse as RelationshipRetrieveAdvancedExperiencesResponse,
    type RelationshipRetrieveDefaultExperiencesResponse as RelationshipRetrieveDefaultExperiencesResponse,
    type RelationshipRetrieveAdvancedExperiencesParams as RelationshipRetrieveAdvancedExperiencesParams,
    type RelationshipRetrieveDefaultExperiencesParams as RelationshipRetrieveDefaultExperiencesParams,
  };
}
