// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listAppInfoLocalizations(
    id: string,
    query: RelationshipListAppInfoLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAppInfoLocalizationsResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/appInfoLocalizations`, {
      query,
      ...options,
    });
  }

  retrieveAgeRatingDeclaration(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAgeRatingDeclarationResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/ageRatingDeclaration`, options);
  }

  retrievePrimaryCategory(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePrimaryCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/primaryCategory`, options);
  }

  retrievePrimarySubcategoryOne(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePrimarySubcategoryOneResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/primarySubcategoryOne`, options);
  }

  retrievePrimarySubcategoryTwo(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePrimarySubcategoryTwoResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/primarySubcategoryTwo`, options);
  }

  retrieveSecondaryCategory(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveSecondaryCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/secondaryCategory`, options);
  }

  retrieveSecondarySubcategoryOne(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveSecondarySubcategoryOneResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/secondarySubcategoryOne`, options);
  }

  retrieveSecondarySubcategoryTwo(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveSecondarySubcategoryTwoResponse> {
    return this._client.get(path`/v1/appInfos/${id}/relationships/secondarySubcategoryTwo`, options);
  }
}

export interface RelationshipListAppInfoLocalizationsResponse {
  data: Array<RelationshipListAppInfoLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAppInfoLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'appInfoLocalizations';
  }
}

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

export interface RelationshipRetrievePrimaryCategoryResponse {
  data: RelationshipRetrievePrimaryCategoryResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrievePrimaryCategoryResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipRetrievePrimarySubcategoryOneResponse {
  data: RelationshipRetrievePrimarySubcategoryOneResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrievePrimarySubcategoryOneResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipRetrievePrimarySubcategoryTwoResponse {
  data: RelationshipRetrievePrimarySubcategoryTwoResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrievePrimarySubcategoryTwoResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipRetrieveSecondaryCategoryResponse {
  data: RelationshipRetrieveSecondaryCategoryResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveSecondaryCategoryResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipRetrieveSecondarySubcategoryOneResponse {
  data: RelationshipRetrieveSecondarySubcategoryOneResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveSecondarySubcategoryOneResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipRetrieveSecondarySubcategoryTwoResponse {
  data: RelationshipRetrieveSecondarySubcategoryTwoResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveSecondarySubcategoryTwoResponse {
  export interface Data {
    id: string;

    type: 'appCategories';
  }
}

export interface RelationshipListAppInfoLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListAppInfoLocalizationsResponse as RelationshipListAppInfoLocalizationsResponse,
    type RelationshipRetrieveAgeRatingDeclarationResponse as RelationshipRetrieveAgeRatingDeclarationResponse,
    type RelationshipRetrievePrimaryCategoryResponse as RelationshipRetrievePrimaryCategoryResponse,
    type RelationshipRetrievePrimarySubcategoryOneResponse as RelationshipRetrievePrimarySubcategoryOneResponse,
    type RelationshipRetrievePrimarySubcategoryTwoResponse as RelationshipRetrievePrimarySubcategoryTwoResponse,
    type RelationshipRetrieveSecondaryCategoryResponse as RelationshipRetrieveSecondaryCategoryResponse,
    type RelationshipRetrieveSecondarySubcategoryOneResponse as RelationshipRetrieveSecondarySubcategoryOneResponse,
    type RelationshipRetrieveSecondarySubcategoryTwoResponse as RelationshipRetrieveSecondarySubcategoryTwoResponse,
    type RelationshipListAppInfoLocalizationsParams as RelationshipListAppInfoLocalizationsParams,
  };
}
