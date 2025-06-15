// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PricePoints extends APIResource {
  list(
    id: string,
    query: PricePointListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricePointListResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/pricePoints`, { query, ...options });
  }
}

export interface PricePointListResponse {
  data: Array<PricePointListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace PricePointListResponse {
  export interface Data {
    id: string;

    type: 'subscriptionPricePoints';
  }
}

export interface PricePointListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace PricePoints {
  export {
    type PricePointListResponse as PricePointListResponse,
    type PricePointListParams as PricePointListParams,
  };
}
