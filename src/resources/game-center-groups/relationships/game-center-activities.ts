// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterActivities extends APIResource {
  list(
    id: string,
    query: GameCenterActivityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityListResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/relationships/gameCenterActivities`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterActivityListResponse {
  data: Array<GameCenterActivityListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterActivityListResponse {
  export interface Data {
    id: string;

    type: 'gameCenterActivities';
  }
}

export interface GameCenterActivityListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace GameCenterActivities {
  export {
    type GameCenterActivityListResponse as GameCenterActivityListResponse,
    type GameCenterActivityListParams as GameCenterActivityListParams,
  };
}
