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
    return this._client.get(path`/v1/ciProducts/${id}/relationships/buildRuns`, { query, ...options });
  }

  listWorkflows(
    id: string,
    query: RelationshipListWorkflowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListWorkflowsResponse> {
    return this._client.get(path`/v1/ciProducts/${id}/relationships/workflows`, { query, ...options });
  }

  retrieveAdditionalRepositories(
    id: string,
    query: RelationshipRetrieveAdditionalRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAdditionalRepositoriesResponse> {
    return this._client.get(path`/v1/ciProducts/${id}/relationships/additionalRepositories`, {
      query,
      ...options,
    });
  }

  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/ciProducts/${id}/relationships/app`, options);
  }

  retrievePrimaryRepositories(
    id: string,
    query: RelationshipRetrievePrimaryRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePrimaryRepositoriesResponse> {
    return this._client.get(path`/v1/ciProducts/${id}/relationships/primaryRepositories`, {
      query,
      ...options,
    });
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

export interface RelationshipListWorkflowsResponse {
  data: Array<RelationshipListWorkflowsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListWorkflowsResponse {
  export interface Data {
    id: string;

    type: 'ciWorkflows';
  }
}

export interface RelationshipRetrieveAdditionalRepositoriesResponse {
  data: Array<RelationshipRetrieveAdditionalRepositoriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAdditionalRepositoriesResponse {
  export interface Data {
    id: string;

    type: 'scmRepositories';
  }
}

export interface RelationshipRetrieveAppResponse {
  data: RelationshipRetrieveAppResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface RelationshipRetrievePrimaryRepositoriesResponse {
  data: Array<RelationshipRetrievePrimaryRepositoriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrievePrimaryRepositoriesResponse {
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

export interface RelationshipListWorkflowsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAdditionalRepositoriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrievePrimaryRepositoriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListBuildRunsResponse as RelationshipListBuildRunsResponse,
    type RelationshipListWorkflowsResponse as RelationshipListWorkflowsResponse,
    type RelationshipRetrieveAdditionalRepositoriesResponse as RelationshipRetrieveAdditionalRepositoriesResponse,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrievePrimaryRepositoriesResponse as RelationshipRetrievePrimaryRepositoriesResponse,
    type RelationshipListBuildRunsParams as RelationshipListBuildRunsParams,
    type RelationshipListWorkflowsParams as RelationshipListWorkflowsParams,
    type RelationshipRetrieveAdditionalRepositoriesParams as RelationshipRetrieveAdditionalRepositoriesParams,
    type RelationshipRetrievePrimaryRepositoriesParams as RelationshipRetrievePrimaryRepositoriesParams,
  };
}
