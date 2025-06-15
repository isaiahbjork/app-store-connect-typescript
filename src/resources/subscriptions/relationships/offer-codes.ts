// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OfferCodes extends APIResource {
  list(
    id: string,
    query: OfferCodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferCodeListResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/offerCodes`, { query, ...options });
  }
}

export interface OfferCodeListResponse {
  data: Array<OfferCodeListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace OfferCodeListResponse {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodes';
  }
}

export interface OfferCodeListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace OfferCodes {
  export {
    type OfferCodeListResponse as OfferCodeListResponse,
    type OfferCodeListParams as OfferCodeListParams,
  };
}
