// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PromotedPurchases extends APIResource {
  retrievePromotedPurchases(
    id: string,
    query: PromotedPurchaseRetrievePromotedPurchasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromotedPurchaseRetrievePromotedPurchasesResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/promotedPurchases`, { query, ...options });
  }

  updatePromotedPurchases(
    id: string,
    body: PromotedPurchaseUpdatePromotedPurchasesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v1/apps/${id}/relationships/promotedPurchases`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PromotedPurchaseRetrievePromotedPurchasesResponse {
  data: Array<PromotedPurchaseRetrievePromotedPurchasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace PromotedPurchaseRetrievePromotedPurchasesResponse {
  export interface Data {
    id: string;

    type: 'promotedPurchases';
  }
}

export interface PromotedPurchaseRetrievePromotedPurchasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface PromotedPurchaseUpdatePromotedPurchasesParams {
  data: Array<PromotedPurchaseUpdatePromotedPurchasesParams.Data>;
}

export namespace PromotedPurchaseUpdatePromotedPurchasesParams {
  export interface Data {
    id: string;

    type: 'promotedPurchases';
  }
}

export declare namespace PromotedPurchases {
  export {
    type PromotedPurchaseRetrievePromotedPurchasesResponse as PromotedPurchaseRetrievePromotedPurchasesResponse,
    type PromotedPurchaseRetrievePromotedPurchasesParams as PromotedPurchaseRetrievePromotedPurchasesParams,
    type PromotedPurchaseUpdatePromotedPurchasesParams as PromotedPurchaseUpdatePromotedPurchasesParams,
  };
}
