// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterAchievements extends APIResource {
  update(id: string, body: GameCenterAchievementUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterGroups/${id}/relationships/gameCenterAchievements`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(
    id: string,
    query: GameCenterAchievementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementListResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/relationships/gameCenterAchievements`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterAchievementListResponse {
  data: Array<GameCenterAchievementListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterAchievementListResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface GameCenterAchievementUpdateParams {
  data: Array<GameCenterAchievementUpdateParams.Data>;
}

export namespace GameCenterAchievementUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface GameCenterAchievementListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace GameCenterAchievements {
  export {
    type GameCenterAchievementListResponse as GameCenterAchievementListResponse,
    type GameCenterAchievementUpdateParams as GameCenterAchievementUpdateParams,
    type GameCenterAchievementListParams as GameCenterAchievementListParams,
  };
}
