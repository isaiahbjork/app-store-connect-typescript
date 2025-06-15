// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as ReleaseWithAppStoreVersionAPI from './release-with-app-store-version';
import {
  ReleaseWithAppStoreVersion,
  ReleaseWithAppStoreVersionRetrieveResponse,
  ReleaseWithAppStoreVersionUpdateParams,
} from './release-with-app-store-version';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  releaseWithAppStoreVersion: ReleaseWithAppStoreVersionAPI.ReleaseWithAppStoreVersion =
    new ReleaseWithAppStoreVersionAPI.ReleaseWithAppStoreVersion(this._client);

  listAppClipDefaultExperienceLocalizations(
    id: string,
    query: RelationshipListAppClipDefaultExperienceLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAppClipDefaultExperienceLocalizationsResponse> {
    return this._client.get(
      path`/v1/appClipDefaultExperiences/${id}/relationships/appClipDefaultExperienceLocalizations`,
      { query, ...options },
    );
  }

  retrieveAppClipAppStoreReviewDetail(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppClipAppStoreReviewDetailResponse> {
    return this._client.get(
      path`/v1/appClipDefaultExperiences/${id}/relationships/appClipAppStoreReviewDetail`,
      options,
    );
  }
}

export interface RelationshipListAppClipDefaultExperienceLocalizationsResponse {
  data: Array<RelationshipListAppClipDefaultExperienceLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAppClipDefaultExperienceLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'appClipDefaultExperienceLocalizations';
  }
}

export interface RelationshipRetrieveAppClipAppStoreReviewDetailResponse {
  data: RelationshipRetrieveAppClipAppStoreReviewDetailResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppClipAppStoreReviewDetailResponse {
  export interface Data {
    id: string;

    type: 'appClipAppStoreReviewDetails';
  }
}

export interface RelationshipListAppClipDefaultExperienceLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.ReleaseWithAppStoreVersion = ReleaseWithAppStoreVersion;

export declare namespace Relationships {
  export {
    type RelationshipListAppClipDefaultExperienceLocalizationsResponse as RelationshipListAppClipDefaultExperienceLocalizationsResponse,
    type RelationshipRetrieveAppClipAppStoreReviewDetailResponse as RelationshipRetrieveAppClipAppStoreReviewDetailResponse,
    type RelationshipListAppClipDefaultExperienceLocalizationsParams as RelationshipListAppClipDefaultExperienceLocalizationsParams,
  };

  export {
    ReleaseWithAppStoreVersion as ReleaseWithAppStoreVersion,
    type ReleaseWithAppStoreVersionRetrieveResponse as ReleaseWithAppStoreVersionRetrieveResponse,
    type ReleaseWithAppStoreVersionUpdateParams as ReleaseWithAppStoreVersionUpdateParams,
  };
}
