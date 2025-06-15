// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GameCenterLeaderboardEntrySubmissions extends APIResource {
  create(
    body: GameCenterLeaderboardEntrySubmissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardEntrySubmissionCreateResponse> {
    return this._client.post('/v1/gameCenterLeaderboardEntrySubmissions', { body, ...options });
  }
}

export interface GameCenterLeaderboardEntrySubmissionCreateResponse {
  data: GameCenterLeaderboardEntrySubmissionCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace GameCenterLeaderboardEntrySubmissionCreateResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardEntrySubmissions';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      bundleId?: string;

      challengeIds?: Array<string>;

      context?: string;

      scopedPlayerId?: string;

      score?: string;

      submittedDate?: string;

      vendorIdentifier?: string;
    }
  }
}

export interface GameCenterLeaderboardEntrySubmissionCreateParams {
  data: GameCenterLeaderboardEntrySubmissionCreateParams.Data;
}

export namespace GameCenterLeaderboardEntrySubmissionCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterLeaderboardEntrySubmissions';
  }

  export namespace Data {
    export interface Attributes {
      bundleId: string;

      scopedPlayerId: string;

      score: string;

      vendorIdentifier: string;

      challengeIds?: Array<string>;

      context?: string;

      submittedDate?: string;
    }
  }
}

export declare namespace GameCenterLeaderboardEntrySubmissions {
  export {
    type GameCenterLeaderboardEntrySubmissionCreateResponse as GameCenterLeaderboardEntrySubmissionCreateResponse,
    type GameCenterLeaderboardEntrySubmissionCreateParams as GameCenterLeaderboardEntrySubmissionCreateParams,
  };
}
