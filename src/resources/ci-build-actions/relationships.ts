// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listArtifacts(
    id: string,
    query: RelationshipListArtifactsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListArtifactsResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/relationships/artifacts`, { query, ...options });
  }

  listIssues(
    id: string,
    query: RelationshipListIssuesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListIssuesResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/relationships/issues`, { query, ...options });
  }

  listTestResults(
    id: string,
    query: RelationshipListTestResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListTestResultsResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/relationships/testResults`, { query, ...options });
  }

  retrieveBuildRun(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveBuildRunResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/relationships/buildRun`, options);
  }
}

export interface RelationshipListArtifactsResponse {
  data: Array<RelationshipListArtifactsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListArtifactsResponse {
  export interface Data {
    id: string;

    type: 'ciArtifacts';
  }
}

export interface RelationshipListIssuesResponse {
  data: Array<RelationshipListIssuesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListIssuesResponse {
  export interface Data {
    id: string;

    type: 'ciIssues';
  }
}

export interface RelationshipListTestResultsResponse {
  data: Array<RelationshipListTestResultsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListTestResultsResponse {
  export interface Data {
    id: string;

    type: 'ciTestResults';
  }
}

export interface RelationshipRetrieveBuildRunResponse {
  data: RelationshipRetrieveBuildRunResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBuildRunResponse {
  export interface Data {
    id: string;

    type: 'ciBuildRuns';
  }
}

export interface RelationshipListArtifactsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListIssuesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListTestResultsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListArtifactsResponse as RelationshipListArtifactsResponse,
    type RelationshipListIssuesResponse as RelationshipListIssuesResponse,
    type RelationshipListTestResultsResponse as RelationshipListTestResultsResponse,
    type RelationshipRetrieveBuildRunResponse as RelationshipRetrieveBuildRunResponse,
    type RelationshipListArtifactsParams as RelationshipListArtifactsParams,
    type RelationshipListIssuesParams as RelationshipListIssuesParams,
    type RelationshipListTestResultsParams as RelationshipListTestResultsParams,
  };
}
