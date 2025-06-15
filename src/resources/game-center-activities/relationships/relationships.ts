// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import * as AchievementsAPI from './achievements';
import {
  AchievementCreateParams,
  AchievementDeleteParams,
  Achievements,
  GameCenterActivityAchievementsLinkages,
} from './achievements';
import * as LeaderboardsAPI from './leaderboards';
import {
  GameCenterActivityLeaderboardsLinkages,
  LeaderboardCreateParams,
  LeaderboardDeleteParams,
  Leaderboards,
} from './leaderboards';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  achievements: AchievementsAPI.Achievements = new AchievementsAPI.Achievements(this._client);
  leaderboards: LeaderboardsAPI.Leaderboards = new LeaderboardsAPI.Leaderboards(this._client);

  listVersions(
    id: string,
    query: RelationshipListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListVersionsResponse> {
    return this._client.get(path`/v1/gameCenterActivities/${id}/relationships/versions`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListVersionsResponse {
  data: Array<RelationshipListVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListVersionsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterActivityVersions';
  }
}

export interface RelationshipListVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.Achievements = Achievements;
Relationships.Leaderboards = Leaderboards;

export declare namespace Relationships {
  export {
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
  };

  export {
    Achievements as Achievements,
    type GameCenterActivityAchievementsLinkages as GameCenterActivityAchievementsLinkages,
    type AchievementCreateParams as AchievementCreateParams,
    type AchievementDeleteParams as AchievementDeleteParams,
  };

  export {
    Leaderboards as Leaderboards,
    type GameCenterActivityLeaderboardsLinkages as GameCenterActivityLeaderboardsLinkages,
    type LeaderboardCreateParams as LeaderboardCreateParams,
    type LeaderboardDeleteParams as LeaderboardDeleteParams,
  };
}
