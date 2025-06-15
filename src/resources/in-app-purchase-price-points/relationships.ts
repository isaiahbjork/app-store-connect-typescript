// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveEqualizations(
    id: string,
    query: RelationshipRetrieveEqualizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveEqualizationsResponse> {
    return this._client.get(path`/v1/inAppPurchasePricePoints/${id}/relationships/equalizations`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipRetrieveEqualizationsResponse {
  data: Array<RelationshipRetrieveEqualizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveEqualizationsResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchasePricePoints';
  }
}

export interface RelationshipRetrieveEqualizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveEqualizationsResponse as RelationshipRetrieveEqualizationsResponse,
    type RelationshipRetrieveEqualizationsParams as RelationshipRetrieveEqualizationsParams,
  };
}
