// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterAchievements extends APIResource {
  retrieveGameCenterAchievements(
    id: string,
    query: GameCenterAchievementRetrieveGameCenterAchievementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementRetrieveGameCenterAchievementsResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterAchievements`, {
      query,
      ...options,
    });
  }

  updateGameCenterAchievements(
    id: string,
    body: GameCenterAchievementUpdateGameCenterAchievementsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterDetails/${id}/relationships/gameCenterAchievements`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterAchievementRetrieveGameCenterAchievementsResponse {
  data: Array<GameCenterAchievementRetrieveGameCenterAchievementsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterAchievementRetrieveGameCenterAchievementsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface GameCenterAchievementRetrieveGameCenterAchievementsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterAchievementUpdateGameCenterAchievementsParams {
  data: Array<GameCenterAchievementUpdateGameCenterAchievementsParams.Data>;
}

export namespace GameCenterAchievementUpdateGameCenterAchievementsParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export declare namespace GameCenterAchievements {
  export {
    type GameCenterAchievementRetrieveGameCenterAchievementsResponse as GameCenterAchievementRetrieveGameCenterAchievementsResponse,
    type GameCenterAchievementRetrieveGameCenterAchievementsParams as GameCenterAchievementRetrieveGameCenterAchievementsParams,
    type GameCenterAchievementUpdateGameCenterAchievementsParams as GameCenterAchievementUpdateGameCenterAchievementsParams,
  };
}
