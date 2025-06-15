// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import * as GameCenterLeaderboardsAPI from './game-center-leaderboards';
import {
  GameCenterLeaderboardCreateParams,
  GameCenterLeaderboardDeleteParams,
  GameCenterLeaderboardListParams,
  GameCenterLeaderboardListResponse,
  GameCenterLeaderboardUpdateParams,
  GameCenterLeaderboards,
  LinkagesRequestGameCenterLeaderboards,
} from './game-center-leaderboards';
import * as GroupLeaderboardSetAPI from './group-leaderboard-set';
import {
  GroupLeaderboardSet,
  GroupLeaderboardSetRetrieveResponse,
  GroupLeaderboardSetUpdateParams,
} from './group-leaderboard-set';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  gameCenterLeaderboards: GameCenterLeaderboardsAPI.GameCenterLeaderboards =
    new GameCenterLeaderboardsAPI.GameCenterLeaderboards(this._client);
  groupLeaderboardSet: GroupLeaderboardSetAPI.GroupLeaderboardSet =
    new GroupLeaderboardSetAPI.GroupLeaderboardSet(this._client);

  listLocalizations(
    id: string,
    query: RelationshipListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/relationships/localizations`, {
      query,
      ...options,
    });
  }

  listReleases(
    id: string,
    query: RelationshipListReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListReleasesResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/relationships/releases`, {
      query,
      ...options,
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

    type: 'gameCenterLeaderboardSetLocalizations';
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

    type: 'gameCenterLeaderboardSetReleases';
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

Relationships.GameCenterLeaderboards = GameCenterLeaderboards;
Relationships.GroupLeaderboardSet = GroupLeaderboardSet;

export declare namespace Relationships {
  export {
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListReleasesResponse as RelationshipListReleasesResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListReleasesParams as RelationshipListReleasesParams,
  };

  export {
    GameCenterLeaderboards as GameCenterLeaderboards,
    type LinkagesRequestGameCenterLeaderboards as LinkagesRequestGameCenterLeaderboards,
    type GameCenterLeaderboardListResponse as GameCenterLeaderboardListResponse,
    type GameCenterLeaderboardCreateParams as GameCenterLeaderboardCreateParams,
    type GameCenterLeaderboardUpdateParams as GameCenterLeaderboardUpdateParams,
    type GameCenterLeaderboardListParams as GameCenterLeaderboardListParams,
    type GameCenterLeaderboardDeleteParams as GameCenterLeaderboardDeleteParams,
  };

  export {
    GroupLeaderboardSet as GroupLeaderboardSet,
    type GroupLeaderboardSetRetrieveResponse as GroupLeaderboardSetRetrieveResponse,
    type GroupLeaderboardSetUpdateParams as GroupLeaderboardSetUpdateParams,
  };
}
