// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as GameCenterAchievementsAPI from './game-center-achievements/game-center-achievements';
import * as GameCenterDetailsAPI from './game-center-details/game-center-details';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterAchievementReleases extends APIResource {
  create(
    body: GameCenterAchievementReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementReleaseResponse> {
    return this._client.post('/v1/gameCenterAchievementReleases', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterAchievementReleaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementReleaseResponse> {
    return this._client.get(path`/v1/gameCenterAchievementReleases/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterAchievementReleases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterAchievementRelease {
  id: string;

  type: 'gameCenterAchievementReleases';

  attributes?: GameCenterAchievementRelease.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterAchievementRelease.Relationships;
}

export namespace GameCenterAchievementRelease {
  export interface Attributes {
    live?: boolean;
  }

  export interface Relationships {
    gameCenterAchievement?: Relationships.GameCenterAchievement;

    gameCenterDetail?: Relationships.GameCenterDetail;
  }

  export namespace Relationships {
    export interface GameCenterAchievement {
      data?: GameCenterAchievement.Data;
    }

    export namespace GameCenterAchievement {
      export interface Data {
        id: string;

        type: 'gameCenterAchievements';
      }
    }

    export interface GameCenterDetail {
      data?: GameCenterDetail.Data;
    }

    export namespace GameCenterDetail {
      export interface Data {
        id: string;

        type: 'gameCenterDetails';
      }
    }
  }
}

export interface GameCenterAchievementReleaseResponse {
  data: GameCenterAchievementRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterDetailsAPI.GameCenterDetailDetail | GameCenterAchievementsAPI.AchievementRecord>;
}

export interface GameCenterAchievementReleaseCreateParams {
  data: GameCenterAchievementReleaseCreateParams.Data;
}

export namespace GameCenterAchievementReleaseCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterAchievementReleases';
  }

  export namespace Data {
    export interface Relationships {
      gameCenterAchievement: Relationships.GameCenterAchievement;

      gameCenterDetail: Relationships.GameCenterDetail;
    }

    export namespace Relationships {
      export interface GameCenterAchievement {
        data: GameCenterAchievement.Data;
      }

      export namespace GameCenterAchievement {
        export interface Data {
          id: string;

          type: 'gameCenterAchievements';
        }
      }

      export interface GameCenterDetail {
        data: GameCenterDetail.Data;
      }

      export namespace GameCenterDetail {
        export interface Data {
          id: string;

          type: 'gameCenterDetails';
        }
      }
    }
  }
}

export interface GameCenterAchievementReleaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterAchievementReleases
   */
  'fields[gameCenterAchievementReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterAchievement'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterAchievement'>;
}

export declare namespace GameCenterAchievementReleases {
  export {
    type GameCenterAchievementRelease as GameCenterAchievementRelease,
    type GameCenterAchievementReleaseResponse as GameCenterAchievementReleaseResponse,
    type GameCenterAchievementReleaseCreateParams as GameCenterAchievementReleaseCreateParams,
    type GameCenterAchievementReleaseRetrieveParams as GameCenterAchievementReleaseRetrieveParams,
  };
}
