// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as GameCenterChallengeVersionsAPI from './game-center-challenge-versions/game-center-challenge-versions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterChallengeVersionReleases extends APIResource {
  create(
    body: GameCenterChallengeVersionReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeVersionReleaseResponse> {
    return this._client.post('/v1/gameCenterChallengeVersionReleases', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterChallengeVersionReleaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeVersionReleaseResponse> {
    return this._client.get(path`/v1/gameCenterChallengeVersionReleases/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterChallengeVersionReleases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterChallengeVersionRelease {
  id: string;

  type: 'gameCenterChallengeVersionReleases';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterChallengeVersionRelease.Relationships;
}

export namespace GameCenterChallengeVersionRelease {
  export interface Relationships {
    version?: Relationships.Version;
  }

  export namespace Relationships {
    export interface Version {
      data?: Version.Data;
    }

    export namespace Version {
      export interface Data {
        id: string;

        type: 'gameCenterChallengeVersions';
      }
    }
  }
}

export interface GameCenterChallengeVersionReleaseResponse {
  data: GameCenterChallengeVersionRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterChallengeVersionsAPI.GameCenterChallengeVersion>;
}

export interface GameCenterChallengeVersionReleaseCreateParams {
  data: GameCenterChallengeVersionReleaseCreateParams.Data;
}

export namespace GameCenterChallengeVersionReleaseCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterChallengeVersionReleases';
  }

  export namespace Data {
    export interface Relationships {
      gameCenterDetail: Relationships.GameCenterDetail;

      version: Relationships.Version;
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

      export interface Version {
        data: Version.Data;
      }

      export namespace Version {
        export interface Data {
          id: string;

          type: 'gameCenterChallengeVersions';
        }
      }
    }
  }
}

export interface GameCenterChallengeVersionReleaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterChallengeVersionReleases
   */
  'fields[gameCenterChallengeVersionReleases]'?: Array<'version'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version'>;
}

export declare namespace GameCenterChallengeVersionReleases {
  export {
    type GameCenterChallengeVersionRelease as GameCenterChallengeVersionRelease,
    type GameCenterChallengeVersionReleaseResponse as GameCenterChallengeVersionReleaseResponse,
    type GameCenterChallengeVersionReleaseCreateParams as GameCenterChallengeVersionReleaseCreateParams,
    type GameCenterChallengeVersionReleaseRetrieveParams as GameCenterChallengeVersionReleaseRetrieveParams,
  };
}
