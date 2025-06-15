// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as GameCenterDetailsAPI from './game-center-details/game-center-details';
import * as GameCenterLeaderboardSetsAPI from './game-center-leaderboard-sets/game-center-leaderboard-sets';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterLeaderboardSetReleases extends APIResource {
  create(
    body: GameCenterLeaderboardSetReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetReleaseResponse> {
    return this._client.post('/v1/gameCenterLeaderboardSetReleases', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardSetReleaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetReleaseResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSetReleases/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardSetReleases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterLeaderboardSetRelease {
  id: string;

  type: 'gameCenterLeaderboardSetReleases';

  attributes?: GameCenterLeaderboardSetRelease.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterLeaderboardSetRelease.Relationships;
}

export namespace GameCenterLeaderboardSetRelease {
  export interface Attributes {
    live?: boolean;
  }

  export interface Relationships {
    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterLeaderboardSet?: Relationships.GameCenterLeaderboardSet;
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

    export interface GameCenterLeaderboardSet {
      data?: GameCenterLeaderboardSet.Data;
    }

    export namespace GameCenterLeaderboardSet {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSets';
      }
    }
  }
}

export interface GameCenterLeaderboardSetReleaseResponse {
  data: GameCenterLeaderboardSetRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    GameCenterDetailsAPI.GameCenterDetailDetail | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
  >;
}

export interface GameCenterLeaderboardSetReleaseCreateParams {
  data: GameCenterLeaderboardSetReleaseCreateParams.Data;
}

export namespace GameCenterLeaderboardSetReleaseCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardSetReleases';
  }

  export namespace Data {
    export interface Relationships {
      gameCenterDetail: Relationships.GameCenterDetail;

      gameCenterLeaderboardSet: Relationships.GameCenterLeaderboardSet;
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

      export interface GameCenterLeaderboardSet {
        data: GameCenterLeaderboardSet.Data;
      }

      export namespace GameCenterLeaderboardSet {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboardSets';
        }
      }
    }
  }
}

export interface GameCenterLeaderboardSetReleaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetReleases
   */
  'fields[gameCenterLeaderboardSetReleases]'?: Array<
    'live' | 'gameCenterDetail' | 'gameCenterLeaderboardSet'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterLeaderboardSet'>;
}

export declare namespace GameCenterLeaderboardSetReleases {
  export {
    type GameCenterLeaderboardSetRelease as GameCenterLeaderboardSetRelease,
    type GameCenterLeaderboardSetReleaseResponse as GameCenterLeaderboardSetReleaseResponse,
    type GameCenterLeaderboardSetReleaseCreateParams as GameCenterLeaderboardSetReleaseCreateParams,
    type GameCenterLeaderboardSetReleaseRetrieveParams as GameCenterLeaderboardSetReleaseRetrieveParams,
  };
}
