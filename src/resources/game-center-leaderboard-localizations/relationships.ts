// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveGameCenterLeaderboardImage(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterLeaderboardImageResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardLocalizations/${id}/relationships/gameCenterLeaderboardImage`,
      options,
    );
  }
}

export interface RelationshipRetrieveGameCenterLeaderboardImageResponse {
  data: RelationshipRetrieveGameCenterLeaderboardImageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterLeaderboardImageResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardImages';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrieveGameCenterLeaderboardImageResponse as RelationshipRetrieveGameCenterLeaderboardImageResponse };
}
