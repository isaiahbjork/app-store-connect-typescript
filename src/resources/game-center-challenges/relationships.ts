// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listVersions(
    id: string,
    query: RelationshipListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListVersionsResponse> {
    return this._client.get(path`/v1/gameCenterChallenges/${id}/relationships/versions`, {
      query,
      ...options,
    });
  }

  updateLeaderboard(
    id: string,
    body: RelationshipUpdateLeaderboardParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterChallenges/${id}/relationships/leaderboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RelationshipListVersionsResponse {
  data: Array<RelationshipListVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListVersionsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterChallengeVersions';
  }
}

export interface RelationshipListVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipUpdateLeaderboardParams {
  data: RelationshipUpdateLeaderboardParams.Data;
}

export namespace RelationshipUpdateLeaderboardParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export declare namespace Relationships {
  export {
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
    type RelationshipUpdateLeaderboardParams as RelationshipUpdateLeaderboardParams,
  };
}
