// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listEqualizations(
    id: string,
    query: RelationshipListEqualizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListEqualizationsResponse> {
    return this._client.get(path`/v3/appPricePoints/${id}/relationships/equalizations`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListEqualizationsResponse {
  data: Array<RelationshipListEqualizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListEqualizationsResponse {
  export interface Data {
    id: string;

    type: 'appPricePoints';
  }
}

export interface RelationshipListEqualizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListEqualizationsResponse as RelationshipListEqualizationsResponse,
    type RelationshipListEqualizationsParams as RelationshipListEqualizationsParams,
  };
}
