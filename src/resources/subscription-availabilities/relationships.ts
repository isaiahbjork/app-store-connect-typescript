// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listAvailableTerritories(
    id: string,
    query: RelationshipListAvailableTerritoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAvailableTerritoriesResponse> {
    return this._client.get(path`/v1/subscriptionAvailabilities/${id}/relationships/availableTerritories`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListAvailableTerritoriesResponse {
  data: Array<RelationshipListAvailableTerritoriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAvailableTerritoriesResponse {
  export interface Data {
    id: string;

    type: 'territories';
  }
}

export interface RelationshipListAvailableTerritoriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListAvailableTerritoriesResponse as RelationshipListAvailableTerritoriesResponse,
    type RelationshipListAvailableTerritoriesParams as RelationshipListAvailableTerritoriesParams,
  };
}
