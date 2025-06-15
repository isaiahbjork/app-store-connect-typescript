// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listPrices(
    id: string,
    query: RelationshipListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListPricesResponse> {
    return this._client.get(path`/v1/subscriptionPromotionalOffers/${id}/relationships/prices`, {
      query,
      ...options,
    });
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

    type: 'subscriptionPromotionalOfferPrices';
  }
}

export interface RelationshipListPricesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListPricesResponse as RelationshipListPricesResponse,
    type RelationshipListPricesParams as RelationshipListPricesParams,
  };
}
