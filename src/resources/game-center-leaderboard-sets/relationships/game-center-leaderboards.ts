// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterLeaderboards extends APIResource {
  create(id: string, body: GameCenterLeaderboardCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/gameCenterLeaderboardSets/${id}/relationships/gameCenterLeaderboards`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: string, body: GameCenterLeaderboardUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(
      path`/v1/gameCenterLeaderboardSets/${id}/relationships/gameCenterLeaderboards`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  list(
    id: string,
    query: GameCenterLeaderboardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardListResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/relationships/gameCenterLeaderboards`, {
      query,
      ...options,
    });
  }

  delete(id: string, body: GameCenterLeaderboardDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/v1/gameCenterLeaderboardSets/${id}/relationships/gameCenterLeaderboards`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface LinkagesRequestGameCenterLeaderboards {
  data: Array<LinkagesRequestGameCenterLeaderboards.Data>;
}

export namespace LinkagesRequestGameCenterLeaderboards {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
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

export interface GameCenterLeaderboardCreateParams {
  data: Array<GameCenterLeaderboardCreateParams.Data>;
}

export namespace GameCenterLeaderboardCreateParams {
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

export interface GameCenterLeaderboardDeleteParams {
  data: Array<GameCenterLeaderboardDeleteParams.Data>;
}

export namespace GameCenterLeaderboardDeleteParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export declare namespace GameCenterLeaderboards {
  export {
    type LinkagesRequestGameCenterLeaderboards as LinkagesRequestGameCenterLeaderboards,
    type GameCenterLeaderboardListResponse as GameCenterLeaderboardListResponse,
    type GameCenterLeaderboardCreateParams as GameCenterLeaderboardCreateParams,
    type GameCenterLeaderboardUpdateParams as GameCenterLeaderboardUpdateParams,
    type GameCenterLeaderboardListParams as GameCenterLeaderboardListParams,
    type GameCenterLeaderboardDeleteParams as GameCenterLeaderboardDeleteParams,
  };
}
