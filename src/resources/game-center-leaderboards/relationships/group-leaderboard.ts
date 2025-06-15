// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GroupLeaderboard extends APIResource {
  /**
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GroupLeaderboardRetrieveResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboards/${id}/relationships/groupLeaderboard`, options);
  }

  /**
   * @deprecated
   */
  update(id: string, body: GroupLeaderboardUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterLeaderboards/${id}/relationships/groupLeaderboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * @deprecated
 */
export interface GroupLeaderboardRetrieveResponse {
  data: GroupLeaderboardRetrieveResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace GroupLeaderboardRetrieveResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface GroupLeaderboardUpdateParams {
  data: GroupLeaderboardUpdateParams.Data;
}

export namespace GroupLeaderboardUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export declare namespace GroupLeaderboard {
  export {
    type GroupLeaderboardRetrieveResponse as GroupLeaderboardRetrieveResponse,
    type GroupLeaderboardUpdateParams as GroupLeaderboardUpdateParams,
  };
}
