// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listActions(
    id: string,
    query: RelationshipListActionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListActionsResponse> {
    return this._client.get(path`/v1/ciBuildRuns/${id}/relationships/actions`, { query, ...options });
  }

  listBuilds(
    id: string,
    query: RelationshipListBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListBuildsResponse> {
    return this._client.get(path`/v1/ciBuildRuns/${id}/relationships/builds`, { query, ...options });
  }
}

export interface RelationshipListActionsResponse {
  data: Array<RelationshipListActionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListActionsResponse {
  export interface Data {
    id: string;

    type: 'ciBuildActions';
  }
}

export interface RelationshipListBuildsResponse {
  data: Array<RelationshipListBuildsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListBuildsResponse {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface RelationshipListActionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListBuildsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListActionsResponse as RelationshipListActionsResponse,
    type RelationshipListBuildsResponse as RelationshipListBuildsResponse,
    type RelationshipListActionsParams as RelationshipListActionsParams,
    type RelationshipListBuildsParams as RelationshipListBuildsParams,
  };
}
