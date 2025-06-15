// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveAdvancedExperiences(
    id: string,
    query: RelationshipRetrieveAdvancedExperiencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAdvancedExperiencesResponse> {
    return this._client.get(path`/v1/appClips/${id}/relationships/appClipAdvancedExperiences`, {
      query,
      ...options,
    });
  }

  retrieveDefaultExperiences(
    id: string,
    query: RelationshipRetrieveDefaultExperiencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveDefaultExperiencesResponse> {
    return this._client.get(path`/v1/appClips/${id}/relationships/appClipDefaultExperiences`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipRetrieveAdvancedExperiencesResponse {
  data: Array<RelationshipRetrieveAdvancedExperiencesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAdvancedExperiencesResponse {
  export interface Data {
    id: string;

    type: 'appClipAdvancedExperiences';
  }
}

export interface RelationshipRetrieveDefaultExperiencesResponse {
  data: Array<RelationshipRetrieveDefaultExperiencesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveDefaultExperiencesResponse {
  export interface Data {
    id: string;

    type: 'appClipDefaultExperiences';
  }
}

export interface RelationshipRetrieveAdvancedExperiencesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveDefaultExperiencesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAdvancedExperiencesResponse as RelationshipRetrieveAdvancedExperiencesResponse,
    type RelationshipRetrieveDefaultExperiencesResponse as RelationshipRetrieveDefaultExperiencesResponse,
    type RelationshipRetrieveAdvancedExperiencesParams as RelationshipRetrieveAdvancedExperiencesParams,
    type RelationshipRetrieveDefaultExperiencesParams as RelationshipRetrieveDefaultExperiencesParams,
  };
}
