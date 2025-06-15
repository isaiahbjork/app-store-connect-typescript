// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActorsAPI from './actors';
import * as AppPriceSchedulesAPI from './app-price-schedules/app-price-schedules';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Territories extends APIResource {
  list(
    query: TerritoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerritoriesResponse> {
    return this._client.get('/v1/territories', { query, ...options });
  }
}

export interface TerritoriesResponse {
  data: Array<AppPriceSchedulesAPI.Territory>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface TerritoryListParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Territories {
  export { type TerritoriesResponse as TerritoriesResponse, type TerritoryListParams as TerritoryListParams };
}
