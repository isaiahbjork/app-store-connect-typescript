// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Prices extends APIResource {
  list(
    id: string,
    query: PriceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriceListResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/prices`, { query, ...options });
  }

  delete(id: string, body: PriceDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/${id}/relationships/prices`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PriceListResponse {
  data: Array<PriceListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace PriceListResponse {
  export interface Data {
    id: string;

    type: 'subscriptionPrices';
  }
}

export interface PriceListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface PriceDeleteParams {
  data: Array<PriceDeleteParams.Data>;
}

export namespace PriceDeleteParams {
  export interface Data {
    id: string;

    type: 'subscriptionPrices';
  }
}

export declare namespace Prices {
  export {
    type PriceListResponse as PriceListResponse,
    type PriceListParams as PriceListParams,
    type PriceDeleteParams as PriceDeleteParams,
  };
}
