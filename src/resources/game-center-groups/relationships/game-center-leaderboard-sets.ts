// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterLeaderboardSets extends APIResource {
  update(id: string, body: GameCenterLeaderboardSetUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterGroups/${id}/relationships/gameCenterLeaderboardSets`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(
    id: string,
    query: GameCenterLeaderboardSetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetListResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/relationships/gameCenterLeaderboardSets`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterLeaderboardSetListResponse {
  data: Array<GameCenterLeaderboardSetListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterLeaderboardSetListResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export interface GameCenterLeaderboardSetUpdateParams {
  data: Array<GameCenterLeaderboardSetUpdateParams.Data>;
}

export namespace GameCenterLeaderboardSetUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export interface GameCenterLeaderboardSetListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace GameCenterLeaderboardSets {
  export {
    type GameCenterLeaderboardSetListResponse as GameCenterLeaderboardSetListResponse,
    type GameCenterLeaderboardSetUpdateParams as GameCenterLeaderboardSetUpdateParams,
    type GameCenterLeaderboardSetListParams as GameCenterLeaderboardSetListParams,
  };
}
