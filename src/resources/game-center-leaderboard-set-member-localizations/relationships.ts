// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveGameCenterLeaderboard(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterLeaderboardResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardSetMemberLocalizations/${id}/relationships/gameCenterLeaderboard`,
      options,
    );
  }

  retrieveGameCenterLeaderboardSet(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterLeaderboardSetResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardSetMemberLocalizations/${id}/relationships/gameCenterLeaderboardSet`,
      options,
    );
  }
}

export interface RelationshipRetrieveGameCenterLeaderboardResponse {
  data: RelationshipRetrieveGameCenterLeaderboardResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterLeaderboardResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';
  }
}

export interface RelationshipRetrieveGameCenterLeaderboardSetResponse {
  data: RelationshipRetrieveGameCenterLeaderboardSetResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterLeaderboardSetResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';
  }
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveGameCenterLeaderboardResponse as RelationshipRetrieveGameCenterLeaderboardResponse,
    type RelationshipRetrieveGameCenterLeaderboardSetResponse as RelationshipRetrieveGameCenterLeaderboardSetResponse,
  };
}
