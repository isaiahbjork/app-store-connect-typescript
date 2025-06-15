// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listGitReferences(
    id: string,
    query: RelationshipListGitReferencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListGitReferencesResponse> {
    return this._client.get(path`/v1/scmRepositories/${id}/relationships/gitReferences`, {
      query,
      ...options,
    });
  }

  listPullRequests(
    id: string,
    query: RelationshipListPullRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListPullRequestsResponse> {
    return this._client.get(path`/v1/scmRepositories/${id}/relationships/pullRequests`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListGitReferencesResponse {
  data: Array<RelationshipListGitReferencesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListGitReferencesResponse {
  export interface Data {
    id: string;

    type: 'scmGitReferences';
  }
}

export interface RelationshipListPullRequestsResponse {
  data: Array<RelationshipListPullRequestsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListPullRequestsResponse {
  export interface Data {
    id: string;

    type: 'scmPullRequests';
  }
}

export interface RelationshipListGitReferencesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListPullRequestsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListGitReferencesResponse as RelationshipListGitReferencesResponse,
    type RelationshipListPullRequestsResponse as RelationshipListPullRequestsResponse,
    type RelationshipListGitReferencesParams as RelationshipListGitReferencesParams,
    type RelationshipListPullRequestsParams as RelationshipListPullRequestsParams,
  };
}
