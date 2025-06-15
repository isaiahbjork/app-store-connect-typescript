// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listRepositories(
    id: string,
    query: RelationshipListRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListRepositoriesResponse> {
    return this._client.get(path`/v1/scmProviders/${id}/relationships/repositories`, { query, ...options });
  }
}

export interface RelationshipListRepositoriesResponse {
  data: Array<RelationshipListRepositoriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListRepositoriesResponse {
  export interface Data {
    id: string;

    type: 'scmRepositories';
  }
}

export interface RelationshipListRepositoriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListRepositoriesResponse as RelationshipListRepositoriesResponse,
    type RelationshipListRepositoriesParams as RelationshipListRepositoriesParams,
  };
}
