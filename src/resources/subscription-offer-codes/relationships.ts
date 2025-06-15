// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listCustomCodes(
    id: string,
    query: RelationshipListCustomCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListCustomCodesResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}/relationships/customCodes`, {
      query,
      ...options,
    });
  }

  listOneTimeUseCodes(
    id: string,
    query: RelationshipListOneTimeUseCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListOneTimeUseCodesResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}/relationships/oneTimeUseCodes`, {
      query,
      ...options,
    });
  }

  listPrices(
    id: string,
    query: RelationshipListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListPricesResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}/relationships/prices`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListCustomCodesResponse {
  data: Array<RelationshipListCustomCodesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListCustomCodesResponse {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodeCustomCodes';
  }
}

export interface RelationshipListOneTimeUseCodesResponse {
  data: Array<RelationshipListOneTimeUseCodesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListOneTimeUseCodesResponse {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodeOneTimeUseCodes';
  }
}

export interface RelationshipListPricesResponse {
  data: Array<RelationshipListPricesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListPricesResponse {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodePrices';
  }
}

export interface RelationshipListCustomCodesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListOneTimeUseCodesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListPricesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListCustomCodesResponse as RelationshipListCustomCodesResponse,
    type RelationshipListOneTimeUseCodesResponse as RelationshipListOneTimeUseCodesResponse,
    type RelationshipListPricesResponse as RelationshipListPricesResponse,
    type RelationshipListCustomCodesParams as RelationshipListCustomCodesParams,
    type RelationshipListOneTimeUseCodesParams as RelationshipListOneTimeUseCodesParams,
    type RelationshipListPricesParams as RelationshipListPricesParams,
  };
}
