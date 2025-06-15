// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveGameCenterAchievement(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterAchievementResponse> {
    return this._client.get(
      path`/v1/gameCenterAchievementLocalizations/${id}/relationships/gameCenterAchievement`,
      options,
    );
  }

  retrieveGameCenterAchievementImage(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterAchievementImageResponse> {
    return this._client.get(
      path`/v1/gameCenterAchievementLocalizations/${id}/relationships/gameCenterAchievementImage`,
      options,
    );
  }
}

export interface RelationshipRetrieveGameCenterAchievementResponse {
  data: RelationshipRetrieveGameCenterAchievementResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterAchievementResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';
  }
}

export interface RelationshipRetrieveGameCenterAchievementImageResponse {
  data: RelationshipRetrieveGameCenterAchievementImageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterAchievementImageResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievementImages';
  }
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveGameCenterAchievementResponse as RelationshipRetrieveGameCenterAchievementResponse,
    type RelationshipRetrieveGameCenterAchievementImageResponse as RelationshipRetrieveGameCenterAchievementImageResponse,
  };
}
