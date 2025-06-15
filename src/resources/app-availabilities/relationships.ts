// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listTerritoryAvailabilities(
    id: string,
    query: RelationshipListTerritoryAvailabilitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListTerritoryAvailabilitiesResponse> {
    return this._client.get(path`/v2/appAvailabilities/${id}/relationships/territoryAvailabilities`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListTerritoryAvailabilitiesResponse {
  data: Array<RelationshipListTerritoryAvailabilitiesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListTerritoryAvailabilitiesResponse {
  export interface Data {
    id: string;

    type: 'territoryAvailabilities';
  }
}

export interface RelationshipListTerritoryAvailabilitiesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListTerritoryAvailabilitiesResponse as RelationshipListTerritoryAvailabilitiesResponse,
    type RelationshipListTerritoryAvailabilitiesParams as RelationshipListTerritoryAvailabilitiesParams,
  };
}
