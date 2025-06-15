// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GameCenterDetails extends APIResource {
  retrieve(
    id: string,
    query: GameCenterDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailRetrieveResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/relationships/gameCenterDetails`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterDetailRetrieveResponse {
  data: Array<GameCenterDetailRetrieveResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterDetailRetrieveResponse {
  export interface Data {
    id: string;

    type: 'gameCenterDetails';
  }
}

export interface GameCenterDetailRetrieveParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace GameCenterDetails {
  export {
    type GameCenterDetailRetrieveResponse as GameCenterDetailRetrieveResponse,
    type GameCenterDetailRetrieveParams as GameCenterDetailRetrieveParams,
  };
}
