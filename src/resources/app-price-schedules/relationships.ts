// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listAutomaticPrices(
    id: string,
    query: RelationshipListAutomaticPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAutomaticPricesResponse> {
    return this._client.get(path`/v1/appPriceSchedules/${id}/relationships/automaticPrices`, {
      query,
      ...options,
    });
  }

  listManualPrices(
    id: string,
    query: RelationshipListManualPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListManualPricesResponse> {
    return this._client.get(path`/v1/appPriceSchedules/${id}/relationships/manualPrices`, {
      query,
      ...options,
    });
  }

  retrieveBaseTerritory(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBaseTerritoryResponse> {
    return this._client.get(path`/v1/appPriceSchedules/${id}/relationships/baseTerritory`, options);
  }
}

export interface RelationshipListAutomaticPricesResponse {
  data: Array<RelationshipListAutomaticPricesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAutomaticPricesResponse {
  export interface Data {
    id: string;

    type: 'appPrices';
  }
}

export interface RelationshipListManualPricesResponse {
  data: Array<RelationshipListManualPricesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListManualPricesResponse {
  export interface Data {
    id: string;

    type: 'appPrices';
  }
}

export interface RelationshipRetrieveBaseTerritoryResponse {
  data: RelationshipRetrieveBaseTerritoryResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBaseTerritoryResponse {
  export interface Data {
    id: string;

    type: 'territories';
  }
}

export interface RelationshipListAutomaticPricesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListManualPricesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListAutomaticPricesResponse as RelationshipListAutomaticPricesResponse,
    type RelationshipListManualPricesResponse as RelationshipListManualPricesResponse,
    type RelationshipRetrieveBaseTerritoryResponse as RelationshipRetrieveBaseTerritoryResponse,
    type RelationshipListAutomaticPricesParams as RelationshipListAutomaticPricesParams,
    type RelationshipListManualPricesParams as RelationshipListManualPricesParams,
  };
}
