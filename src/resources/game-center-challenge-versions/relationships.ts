// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listLocalizations(
    id: string,
    query: RelationshipListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterChallengeVersions/${id}/relationships/localizations`, {
      query,
      ...options,
    });
  }

  retrieveDefaultImage(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveDefaultImageResponse> {
    return this._client.get(path`/v1/gameCenterChallengeVersions/${id}/relationships/defaultImage`, options);
  }
}

export interface RelationshipListLocalizationsResponse {
  data: Array<RelationshipListLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterChallengeLocalizations';
  }
}

export interface RelationshipRetrieveDefaultImageResponse {
  data: RelationshipRetrieveDefaultImageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveDefaultImageResponse {
  export interface Data {
    id: string;

    type: 'gameCenterChallengeImages';
  }
}

export interface RelationshipListLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipRetrieveDefaultImageResponse as RelationshipRetrieveDefaultImageResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
  };
}
