// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterLeaderboardSets extends APIResource {
  retrieveGameCenterLeaderboardSets(
    id: string,
    query: GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterLeaderboardSets`, {
      query,
      ...options,
    });
  }

  updateGameCenterLeaderboardSets(
    id: string,
    body: GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterDetails/${id}/relationships/gameCenterLeaderboardSets`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse {
  data: Array<GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export interface GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams {
  data: Array<GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams.Data>;
}

export namespace GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export declare namespace GameCenterLeaderboardSets {
  export {
    type GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse as GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse,
    type GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams as GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams,
    type GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams as GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams,
  };
}
