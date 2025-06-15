// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterLeaderboards extends APIResource {
  retrieveGameCenterLeaderboards(
    id: string,
    query: GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterLeaderboards`, {
      query,
      ...options,
    });
  }

  updateGameCenterLeaderboards(
    id: string,
    body: GameCenterLeaderboardUpdateGameCenterLeaderboardsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterDetails/${id}/relationships/gameCenterLeaderboards`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse {
  data: Array<GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterLeaderboardUpdateGameCenterLeaderboardsParams {
  data: Array<GameCenterLeaderboardUpdateGameCenterLeaderboardsParams.Data>;
}

export namespace GameCenterLeaderboardUpdateGameCenterLeaderboardsParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export declare namespace GameCenterLeaderboards {
  export {
    type GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse as GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse,
    type GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams as GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams,
    type GameCenterLeaderboardUpdateGameCenterLeaderboardsParams as GameCenterLeaderboardUpdateGameCenterLeaderboardsParams,
  };
}
