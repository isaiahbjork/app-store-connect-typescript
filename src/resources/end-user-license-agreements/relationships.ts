// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveTerritories(
    id: string,
    query: RelationshipRetrieveTerritoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveTerritoriesResponse> {
    return this._client.get(path`/v1/endUserLicenseAgreements/${id}/relationships/territories`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipRetrieveTerritoriesResponse {
  data: Array<RelationshipRetrieveTerritoriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveTerritoriesResponse {
  export interface Data {
    id: string;

    type: 'territories';
  }
}

export interface RelationshipRetrieveTerritoriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveTerritoriesResponse as RelationshipRetrieveTerritoriesResponse,
    type RelationshipRetrieveTerritoriesParams as RelationshipRetrieveTerritoriesParams,
  };
}
