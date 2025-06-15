// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListSubcategoriesParams,
  RelationshipListSubcategoriesResponse,
  RelationshipRetrieveParentResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppCategories extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AppCategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoryResponse> {
    return this._client.get(path`/v1/appCategories/${id}`, { query, ...options });
  }

  list(
    query: AppCategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoryListResponse> {
    return this._client.get('/v1/appCategories', { query, ...options });
  }

  listSubcategories(
    id: string,
    query: AppCategoryListSubcategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoryListSubcategoriesResponse> {
    return this._client.get(path`/v1/appCategories/${id}/subcategories`, { query, ...options });
  }

  retrieveParent(
    id: string,
    query: AppCategoryRetrieveParentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoryRetrieveParentResponse> {
    return this._client.get(path`/v1/appCategories/${id}/parent`, { query, ...options });
  }
}

export interface AppCategory {
  id: string;

  type: 'appCategories';

  attributes?: AppCategory.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppCategory.Relationships;
}

export namespace AppCategory {
  export interface Attributes {
    platforms?: Array<AppStoreVersionExperimentsAPI.Platform>;
  }

  export interface Relationships {
    parent?: Relationships.Parent;

    subcategories?: Relationships.Subcategories;
  }

  export namespace Relationships {
    export interface Parent {
      data?: Parent.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Parent {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }

    export interface Subcategories {
      data?: Array<Subcategories.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Subcategories {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }
  }
}

export interface AppCategoryResponse {
  data: AppCategory;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppCategory>;
}

export interface AppCategoryListResponse {
  data: Array<AppCategory>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppCategory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppCategoryListSubcategoriesResponse {
  data: Array<AppCategory>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppCategoryRetrieveParentResponse {
  data: AppCategory;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppCategoryRetrieveParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppCategoryListParams {
  /**
   * filter by existence or non-existence of related 'parent'
   */
  'exists[parent]'?: boolean;

  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * filter by attribute 'platforms'
   */
  'filter[platforms]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppCategoryListSubcategoriesParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppCategoryRetrieveParentParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;
}

AppCategories.Relationships = RelationshipsAPIRelationships;

export declare namespace AppCategories {
  export {
    type AppCategory as AppCategory,
    type AppCategoryResponse as AppCategoryResponse,
    type AppCategoryListResponse as AppCategoryListResponse,
    type AppCategoryListSubcategoriesResponse as AppCategoryListSubcategoriesResponse,
    type AppCategoryRetrieveParentResponse as AppCategoryRetrieveParentResponse,
    type AppCategoryRetrieveParams as AppCategoryRetrieveParams,
    type AppCategoryListParams as AppCategoryListParams,
    type AppCategoryListSubcategoriesParams as AppCategoryListSubcategoriesParams,
    type AppCategoryRetrieveParentParams as AppCategoryRetrieveParentParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListSubcategoriesResponse as RelationshipListSubcategoriesResponse,
    type RelationshipRetrieveParentResponse as RelationshipRetrieveParentResponse,
    type RelationshipListSubcategoriesParams as RelationshipListSubcategoriesParams,
  };
}
