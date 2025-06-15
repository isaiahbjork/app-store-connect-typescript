// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as AppClipDefaultExperienceAPI from './app-clip-default-experience';
import {
  AppClipDefaultExperience,
  AppClipDefaultExperienceRetrieveResponse,
  AppClipDefaultExperienceUpdateParams,
} from './app-clip-default-experience';
import * as BuildAPI from './build';
import { Build, BuildRetrieveResponse, BuildUpdateParams } from './build';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  appClipDefaultExperience: AppClipDefaultExperienceAPI.AppClipDefaultExperience =
    new AppClipDefaultExperienceAPI.AppClipDefaultExperience(this._client);
  build: BuildAPI.Build = new BuildAPI.Build(this._client);

  /**
   * @deprecated
   */
  retrieveAgeRatingDeclaration(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAgeRatingDeclarationResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/ageRatingDeclaration`, options);
  }

  retrieveAlternativeDistributionPackage(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAlternativeDistributionPackageResponse> {
    return this._client.get(
      path`/v1/appStoreVersions/${id}/relationships/alternativeDistributionPackage`,
      options,
    );
  }

  retrieveAppStoreReviewDetail(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreReviewDetailResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/appStoreReviewDetail`, options);
  }

  /**
   * @deprecated
   */
  retrieveAppStoreVersionExperiments(
    id: string,
    query: RelationshipRetrieveAppStoreVersionExperimentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionExperimentsResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/appStoreVersionExperiments`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersionExperimentsV2(
    id: string,
    query: RelationshipRetrieveAppStoreVersionExperimentsV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionExperimentsV2Response> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/appStoreVersionExperimentsV2`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersionLocalizations(
    id: string,
    query: RelationshipRetrieveAppStoreVersionLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionLocalizationsResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/appStoreVersionLocalizations`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersionPhasedRelease(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionPhasedReleaseResponse> {
    return this._client.get(
      path`/v1/appStoreVersions/${id}/relationships/appStoreVersionPhasedRelease`,
      options,
    );
  }

  /**
   * @deprecated
   */
  retrieveAppStoreVersionSubmission(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionSubmissionResponse> {
    return this._client.get(
      path`/v1/appStoreVersions/${id}/relationships/appStoreVersionSubmission`,
      options,
    );
  }

  retrieveCustomerReviews(
    id: string,
    query: RelationshipRetrieveCustomerReviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveCustomerReviewsResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/customerReviews`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterAppVersion(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterAppVersionResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/gameCenterAppVersion`, options);
  }

  retrieveRoutingAppCoverage(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveRoutingAppCoverageResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/routingAppCoverage`, options);
  }
}

/**
 * @deprecated
 */
export interface RelationshipRetrieveAgeRatingDeclarationResponse {
  data: RelationshipRetrieveAgeRatingDeclarationResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAgeRatingDeclarationResponse {
  export interface Data {
    id: string;

    type: 'ageRatingDeclarations';
  }
}

export interface RelationshipRetrieveAlternativeDistributionPackageResponse {
  data: RelationshipRetrieveAlternativeDistributionPackageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAlternativeDistributionPackageResponse {
  export interface Data {
    id: string;

    type: 'alternativeDistributionPackages';
  }
}

export interface RelationshipRetrieveAppStoreReviewDetailResponse {
  data: RelationshipRetrieveAppStoreReviewDetailResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreReviewDetailResponse {
  export interface Data {
    id: string;

    type: 'appStoreReviewDetails';
  }
}

/**
 * @deprecated
 */
export interface RelationshipRetrieveAppStoreVersionExperimentsResponse {
  data: Array<RelationshipRetrieveAppStoreVersionExperimentsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppStoreVersionExperimentsResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionExperiments';
  }
}

export interface RelationshipRetrieveAppStoreVersionExperimentsV2Response {
  data: Array<RelationshipRetrieveAppStoreVersionExperimentsV2Response.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppStoreVersionExperimentsV2Response {
  export interface Data {
    id: string;

    type: 'appStoreVersionExperiments';
  }
}

export interface RelationshipRetrieveAppStoreVersionLocalizationsResponse {
  data: Array<RelationshipRetrieveAppStoreVersionLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppStoreVersionLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionLocalizations';
  }
}

export interface RelationshipRetrieveAppStoreVersionPhasedReleaseResponse {
  data: RelationshipRetrieveAppStoreVersionPhasedReleaseResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreVersionPhasedReleaseResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionPhasedReleases';
  }
}

/**
 * @deprecated
 */
export interface RelationshipRetrieveAppStoreVersionSubmissionResponse {
  data: RelationshipRetrieveAppStoreVersionSubmissionResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreVersionSubmissionResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionSubmissions';
  }
}

export interface RelationshipRetrieveCustomerReviewsResponse {
  data: Array<RelationshipRetrieveCustomerReviewsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveCustomerReviewsResponse {
  export interface Data {
    id: string;

    type: 'customerReviews';
  }
}

export interface RelationshipRetrieveGameCenterAppVersionResponse {
  data: RelationshipRetrieveGameCenterAppVersionResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterAppVersionResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';
  }
}

export interface RelationshipRetrieveRoutingAppCoverageResponse {
  data: RelationshipRetrieveRoutingAppCoverageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveRoutingAppCoverageResponse {
  export interface Data {
    id: string;

    type: 'routingAppCoverages';
  }
}

export interface RelationshipRetrieveAppStoreVersionExperimentsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppStoreVersionExperimentsV2Params {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppStoreVersionLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveCustomerReviewsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.AppClipDefaultExperience = AppClipDefaultExperience;
Relationships.Build = Build;

export declare namespace Relationships {
  export {
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

  export {
    AppClipDefaultExperience as AppClipDefaultExperience,
    type AppClipDefaultExperienceRetrieveResponse as AppClipDefaultExperienceRetrieveResponse,
    type AppClipDefaultExperienceUpdateParams as AppClipDefaultExperienceUpdateParams,
  };

  export {
    Build as Build,
    type BuildRetrieveResponse as BuildRetrieveResponse,
    type BuildUpdateParams as BuildUpdateParams,
  };
}
