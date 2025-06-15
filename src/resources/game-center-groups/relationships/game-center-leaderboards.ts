// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterLeaderboards extends APIResource {
  update(id: string, body: GameCenterLeaderboardUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterGroups/${id}/relationships/gameCenterLeaderboards`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(
    id: string,
    query: GameCenterLeaderboardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardListResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/relationships/gameCenterLeaderboards`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterLeaderboardListResponse {
  data: Array<GameCenterLeaderboardListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterLeaderboardListResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface GameCenterLeaderboardUpdateParams {
  data: Array<GameCenterLeaderboardUpdateParams.Data>;
}

export namespace GameCenterLeaderboardUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface GameCenterLeaderboardListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace GameCenterLeaderboards {
  export {
    type GameCenterLeaderboardListResponse as GameCenterLeaderboardListResponse,
    type GameCenterLeaderboardUpdateParams as GameCenterLeaderboardUpdateParams,
    type GameCenterLeaderboardListParams as GameCenterLeaderboardListParams,
  };
}
