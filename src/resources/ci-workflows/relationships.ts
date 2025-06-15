// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listBuildRuns(
    id: string,
    query: RelationshipListBuildRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListBuildRunsResponse> {
    return this._client.get(path`/v1/ciWorkflows/${id}/relationships/buildRuns`, { query, ...options });
  }

  retrieveRepository(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveRepositoryResponse> {
    return this._client.get(path`/v1/ciWorkflows/${id}/relationships/repository`, options);
  }
}

export interface RelationshipListBuildRunsResponse {
  data: Array<RelationshipListBuildRunsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListBuildRunsResponse {
  export interface Data {
    id: string;

    type: 'ciBuildRuns';
  }
}

export interface RelationshipRetrieveRepositoryResponse {
  data: RelationshipRetrieveRepositoryResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveRepositoryResponse {
  export interface Data {
    id: string;

    type: 'scmRepositories';
  }
}

export interface RelationshipListBuildRunsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListBuildRunsResponse as RelationshipListBuildRunsResponse,
    type RelationshipRetrieveRepositoryResponse as RelationshipRetrieveRepositoryResponse,
    type RelationshipListBuildRunsParams as RelationshipListBuildRunsParams,
  };
}
