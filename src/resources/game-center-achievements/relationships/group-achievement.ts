// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GroupAchievement extends APIResource {
  /**
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GroupAchievementRetrieveResponse> {
    return this._client.get(path`/v1/gameCenterAchievements/${id}/relationships/groupAchievement`, options);
  }

  /**
   * @deprecated
   */
  update(id: string, body: GroupAchievementUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterAchievements/${id}/relationships/groupAchievement`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * @deprecated
 */
export interface GroupAchievementRetrieveResponse {
  data: GroupAchievementRetrieveResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace GroupAchievementRetrieveResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface GroupAchievementUpdateParams {
  data: GroupAchievementUpdateParams.Data;
}

export namespace GroupAchievementUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export declare namespace GroupAchievement {
  export {
    type GroupAchievementRetrieveResponse as GroupAchievementRetrieveResponse,
    type GroupAchievementUpdateParams as GroupAchievementUpdateParams,
  };
}
