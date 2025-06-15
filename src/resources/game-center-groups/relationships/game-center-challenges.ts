// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterChallenges extends APIResource {
  list(
    id: string,
    query: GameCenterChallengeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeListResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/relationships/gameCenterChallenges`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterChallengeListResponse {
  data: Array<GameCenterChallengeListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterChallengeListResponse {
  export interface Data {
    id: string;

    type: 'gameCenterChallenges';
  }
}

export interface GameCenterChallengeListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace GameCenterChallenges {
  export {
    type GameCenterChallengeListResponse as GameCenterChallengeListResponse,
    type GameCenterChallengeListParams as GameCenterChallengeListParams,
  };
}
