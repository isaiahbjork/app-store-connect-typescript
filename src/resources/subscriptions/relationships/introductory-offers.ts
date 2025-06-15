// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IntroductoryOffers extends APIResource {
  list(
    id: string,
    query: IntroductoryOfferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntroductoryOfferListResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/introductoryOffers`, {
      query,
      ...options,
    });
  }

  delete(id: string, body: IntroductoryOfferDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/${id}/relationships/introductoryOffers`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IntroductoryOfferListResponse {
  data: Array<IntroductoryOfferListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace IntroductoryOfferListResponse {
  export interface Data {
    id: string;

    type: 'subscriptionIntroductoryOffers';
  }
}

export interface IntroductoryOfferListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface IntroductoryOfferDeleteParams {
  data: Array<IntroductoryOfferDeleteParams.Data>;
}

export namespace IntroductoryOfferDeleteParams {
  export interface Data {
    id: string;

    type: 'subscriptionIntroductoryOffers';
  }
}

export declare namespace IntroductoryOffers {
  export {
    type IntroductoryOfferListResponse as IntroductoryOfferListResponse,
    type IntroductoryOfferListParams as IntroductoryOfferListParams,
    type IntroductoryOfferDeleteParams as IntroductoryOfferDeleteParams,
  };
}
