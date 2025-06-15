// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Leaderboards extends APIResource {
  create(id: string, body: LeaderboardCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/gameCenterActivities/${id}/relationships/leaderboards`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(id: string, body: LeaderboardDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterActivities/${id}/relationships/leaderboards`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterActivityLeaderboardsLinkages {
  data: Array<GameCenterActivityLeaderboardsLinkages.Data>;
}

export namespace GameCenterActivityLeaderboardsLinkages {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface LeaderboardCreateParams {
  data: Array<LeaderboardCreateParams.Data>;
}

export namespace LeaderboardCreateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface LeaderboardDeleteParams {
  data: Array<LeaderboardDeleteParams.Data>;
}

export namespace LeaderboardDeleteParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export declare namespace Leaderboards {
  export {
    type GameCenterActivityLeaderboardsLinkages as GameCenterActivityLeaderboardsLinkages,
    type LeaderboardCreateParams as LeaderboardCreateParams,
    type LeaderboardDeleteParams as LeaderboardDeleteParams,
  };
}
