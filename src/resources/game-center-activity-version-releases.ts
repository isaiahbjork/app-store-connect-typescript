// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as GameCenterActivityVersionsAPI from './game-center-activity-versions/game-center-activity-versions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterActivityVersionReleases extends APIResource {
  create(
    body: GameCenterActivityVersionReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityVersionReleaseResponse> {
    return this._client.post('/v1/gameCenterActivityVersionReleases', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterActivityVersionReleaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityVersionReleaseResponse> {
    return this._client.get(path`/v1/gameCenterActivityVersionReleases/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterActivityVersionReleases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterActivityVersionRelease {
  id: string;

  type: 'gameCenterActivityVersionReleases';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterActivityVersionRelease.Relationships;
}

export namespace GameCenterActivityVersionRelease {
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

        type: 'gameCenterActivityVersions';
      }
    }
  }
}

export interface GameCenterActivityVersionReleaseResponse {
  data: GameCenterActivityVersionRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterActivityVersionsAPI.GameCenterActivityVersion>;
}

export interface GameCenterActivityVersionReleaseCreateParams {
  data: GameCenterActivityVersionReleaseCreateParams.Data;
}

export namespace GameCenterActivityVersionReleaseCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterActivityVersionReleases';
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

          type: 'gameCenterActivityVersions';
        }
      }
    }
  }
}

export interface GameCenterActivityVersionReleaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterActivityVersionReleases
   */
  'fields[gameCenterActivityVersionReleases]'?: Array<'version'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version'>;
}

export declare namespace GameCenterActivityVersionReleases {
  export {
    type GameCenterActivityVersionRelease as GameCenterActivityVersionRelease,
    type GameCenterActivityVersionReleaseResponse as GameCenterActivityVersionReleaseResponse,
    type GameCenterActivityVersionReleaseCreateParams as GameCenterActivityVersionReleaseCreateParams,
    type GameCenterActivityVersionReleaseRetrieveParams as GameCenterActivityVersionReleaseRetrieveParams,
  };
}
