// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import * as GroupAchievementAPI from './group-achievement';
import {
  GroupAchievement,
  GroupAchievementRetrieveResponse,
  GroupAchievementUpdateParams,
} from './group-achievement';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  groupAchievement: GroupAchievementAPI.GroupAchievement = new GroupAchievementAPI.GroupAchievement(
    this._client,
  );

  listLocalizations(
    id: string,
    query: RelationshipListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterAchievements/${id}/relationships/localizations`, {
      query,
      ...options,
    });
  }

  listReleases(
    id: string,
    query: RelationshipListReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListReleasesResponse> {
    return this._client.get(path`/v1/gameCenterAchievements/${id}/relationships/releases`, {
      query,
      ...options,
    });
  }

  updateActivity(
    id: string,
    body: RelationshipUpdateActivityParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterAchievements/${id}/relationships/activity`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RelationshipListLocalizationsResponse {
  data: Array<RelationshipListLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievementLocalizations';
  }
}

export interface RelationshipListReleasesResponse {
  data: Array<RelationshipListReleasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListReleasesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievementReleases';
  }
}

export interface RelationshipListLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListReleasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipUpdateActivityParams {
  data: RelationshipUpdateActivityParams.Data;
}

export namespace RelationshipUpdateActivityParams {
  export interface Data {
    id: string;

    type: 'gameCenterActivities';
  }
}

Relationships.GroupAchievement = GroupAchievement;

export declare namespace Relationships {
  export {
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListReleasesResponse as RelationshipListReleasesResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListReleasesParams as RelationshipListReleasesParams,
    type RelationshipUpdateActivityParams as RelationshipUpdateActivityParams,
  };

  export {
    GroupAchievement as GroupAchievement,
    type GroupAchievementRetrieveResponse as GroupAchievementRetrieveResponse,
    type GroupAchievementUpdateParams as GroupAchievementUpdateParams,
  };
}
