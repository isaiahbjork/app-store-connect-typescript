// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listSubcategories(
    id: string,
    query: RelationshipListSubcategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListSubcategoriesResponse> {
    return this._client.get(path`/v1/appCategories/${id}/relationships/subcategories`, { query, ...options });
  }

  retrieveParent(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveParentResponse> {
    return this._client.get(path`/v1/appCategories/${id}/relationships/parent`, options);
  }
}

export interface RelationshipListSubcategoriesResponse {
  data: Array<RelationshipListSubcategoriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListSubcategoriesResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipRetrieveParentResponse {
  data: RelationshipRetrieveParentResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveParentResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipListSubcategoriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListSubcategoriesResponse as RelationshipListSubcategoriesResponse,
    type RelationshipRetrieveParentResponse as RelationshipRetrieveParentResponse,
    type RelationshipListSubcategoriesParams as RelationshipListSubcategoriesParams,
  };
}
