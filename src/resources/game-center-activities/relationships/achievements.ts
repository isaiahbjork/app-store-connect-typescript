// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Achievements extends APIResource {
  create(id: string, body: AchievementCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/gameCenterActivities/${id}/relationships/achievements`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(id: string, body: AchievementDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterActivities/${id}/relationships/achievements`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterActivityAchievementsLinkages {
  data: Array<GameCenterActivityAchievementsLinkages.Data>;
}

export namespace GameCenterActivityAchievementsLinkages {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface AchievementCreateParams {
  data: Array<AchievementCreateParams.Data>;
}

export namespace AchievementCreateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface AchievementDeleteParams {
  data: Array<AchievementDeleteParams.Data>;
}

export namespace AchievementDeleteParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export declare namespace Achievements {
  export {
    type GameCenterActivityAchievementsLinkages as GameCenterActivityAchievementsLinkages,
    type AchievementCreateParams as AchievementCreateParams,
    type AchievementDeleteParams as AchievementDeleteParams,
  };
}
