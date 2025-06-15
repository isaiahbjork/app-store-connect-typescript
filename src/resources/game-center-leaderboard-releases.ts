// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as GameCenterDetailsAPI from './game-center-details/game-center-details';
import * as GameCenterLeaderboardsAPI from './game-center-leaderboards/game-center-leaderboards';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterLeaderboardReleases extends APIResource {
  create(
    body: GameCenterLeaderboardReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardReleaseResponse> {
    return this._client.post('/v1/gameCenterLeaderboardReleases', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardReleaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardReleaseResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardReleases/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardReleases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterLeaderboardRelease {
  id: string;

  type: 'gameCenterLeaderboardReleases';

  attributes?: GameCenterLeaderboardRelease.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterLeaderboardRelease.Relationships;
}

export namespace GameCenterLeaderboardRelease {
  export interface Attributes {
    live?: boolean;
  }

  export interface Relationships {
    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterLeaderboard?: Relationships.GameCenterLeaderboard;
  }

  export namespace Relationships {
    export interface GameCenterDetail {
      data?: GameCenterDetail.Data;
    }

    export namespace GameCenterDetail {
      export interface Data {
        id: string;

        type: 'gameCenterDetails';
      }
    }

    export interface GameCenterLeaderboard {
      data?: GameCenterLeaderboard.Data;
    }

    export namespace GameCenterLeaderboard {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }
  }
}

export interface GameCenterLeaderboardReleaseResponse {
  data: GameCenterLeaderboardRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    GameCenterDetailsAPI.GameCenterDetailDetail | GameCenterLeaderboardsAPI.GameCenterLeaderboard
  >;
}

export interface GameCenterLeaderboardReleaseCreateParams {
  data: GameCenterLeaderboardReleaseCreateParams.Data;
}

export namespace GameCenterLeaderboardReleaseCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardReleases';
  }

  export namespace Data {
    export interface Relationships {
      gameCenterDetail: Relationships.GameCenterDetail;

      gameCenterLeaderboard: Relationships.GameCenterLeaderboard;
    }

    export namespace Relationships {
      export interface GameCenterDetail {
        data: GameCenterDetail.Data;
      }

      export namespace GameCenterDetail {
        export interface Data {
          id: string;

          type: 'gameCenterDetails';
        }
      }

      export interface GameCenterLeaderboard {
        data: GameCenterLeaderboard.Data;
      }

      export namespace GameCenterLeaderboard {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }
    }
  }
}

export interface GameCenterLeaderboardReleaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardReleases
   */
  'fields[gameCenterLeaderboardReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterLeaderboard'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterLeaderboard'>;
}

export declare namespace GameCenterLeaderboardReleases {
  export {
    type GameCenterLeaderboardRelease as GameCenterLeaderboardRelease,
    type GameCenterLeaderboardReleaseResponse as GameCenterLeaderboardReleaseResponse,
    type GameCenterLeaderboardReleaseCreateParams as GameCenterLeaderboardReleaseCreateParams,
    type GameCenterLeaderboardReleaseRetrieveParams as GameCenterLeaderboardReleaseRetrieveParams,
  };
}
