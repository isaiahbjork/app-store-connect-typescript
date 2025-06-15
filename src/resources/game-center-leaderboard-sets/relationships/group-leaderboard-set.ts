// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GroupLeaderboardSet extends APIResource {
  /**
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GroupLeaderboardSetRetrieveResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardSets/${id}/relationships/groupLeaderboardSet`,
      options,
    );
  }

  /**
   * @deprecated
   */
  update(id: string, body: GroupLeaderboardSetUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterLeaderboardSets/${id}/relationships/groupLeaderboardSet`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * @deprecated
 */
export interface GroupLeaderboardSetRetrieveResponse {
  data: GroupLeaderboardSetRetrieveResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace GroupLeaderboardSetRetrieveResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export interface GroupLeaderboardSetUpdateParams {
  data: GroupLeaderboardSetUpdateParams.Data;
}

export namespace GroupLeaderboardSetUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export declare namespace GroupLeaderboardSet {
  export {
    type GroupLeaderboardSetRetrieveResponse as GroupLeaderboardSetRetrieveResponse,
    type GroupLeaderboardSetUpdateParams as GroupLeaderboardSetUpdateParams,
  };
}
