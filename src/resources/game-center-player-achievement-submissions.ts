// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GameCenterPlayerAchievementSubmissions extends APIResource {
  create(
    body: GameCenterPlayerAchievementSubmissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterPlayerAchievementSubmissionCreateResponse> {
    return this._client.post('/v1/gameCenterPlayerAchievementSubmissions', { body, ...options });
  }
}

export interface GameCenterPlayerAchievementSubmissionCreateResponse {
  data: GameCenterPlayerAchievementSubmissionCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace GameCenterPlayerAchievementSubmissionCreateResponse {
  export interface Data {
    id: string;

    type: 'gameCenterPlayerAchievementSubmissions';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      bundleId?: string;

      challengeIds?: Array<string>;

      percentageAchieved?: number;

      scopedPlayerId?: string;

      submittedDate?: string;

      vendorIdentifier?: string;
    }
  }
}

export interface GameCenterPlayerAchievementSubmissionCreateParams {
  data: GameCenterPlayerAchievementSubmissionCreateParams.Data;
}

export namespace GameCenterPlayerAchievementSubmissionCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterPlayerAchievementSubmissions';
  }

  export namespace Data {
    export interface Attributes {
      bundleId: string;

      percentageAchieved: number;

      scopedPlayerId: string;

      vendorIdentifier: string;

      challengeIds?: Array<string>;

      submittedDate?: string;
    }
  }
}

export declare namespace GameCenterPlayerAchievementSubmissions {
  export {
    type GameCenterPlayerAchievementSubmissionCreateResponse as GameCenterPlayerAchievementSubmissionCreateResponse,
    type GameCenterPlayerAchievementSubmissionCreateParams as GameCenterPlayerAchievementSubmissionCreateParams,
  };
}
