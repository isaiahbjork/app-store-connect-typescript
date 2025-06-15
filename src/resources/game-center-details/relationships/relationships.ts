// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as GameCenterAchievementsAPI from './game-center-achievements';
import {
  GameCenterAchievementRetrieveGameCenterAchievementsParams,
  GameCenterAchievementRetrieveGameCenterAchievementsResponse,
  GameCenterAchievementUpdateGameCenterAchievementsParams,
  GameCenterAchievements,
} from './game-center-achievements';
import * as GameCenterLeaderboardSetsAPI from './game-center-leaderboard-sets';
import {
  GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams,
  GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse,
  GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams,
  GameCenterLeaderboardSets,
} from './game-center-leaderboard-sets';
import * as GameCenterLeaderboardsAPI from './game-center-leaderboards';
import {
  GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams,
  GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse,
  GameCenterLeaderboardUpdateGameCenterLeaderboardsParams,
  GameCenterLeaderboards,
} from './game-center-leaderboards';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  gameCenterAchievements: GameCenterAchievementsAPI.GameCenterAchievements =
    new GameCenterAchievementsAPI.GameCenterAchievements(this._client);
  gameCenterLeaderboardSets: GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSets =
    new GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSets(this._client);
  gameCenterLeaderboards: GameCenterLeaderboardsAPI.GameCenterLeaderboards =
    new GameCenterLeaderboardsAPI.GameCenterLeaderboards(this._client);

  retrieveAchievementReleases(
    id: string,
    query: RelationshipRetrieveAchievementReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAchievementReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/achievementReleases`, {
      query,
      ...options,
    });
  }

  retrieveActivityReleases(
    id: string,
    query: RelationshipRetrieveActivityReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveActivityReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/activityReleases`, {
      query,
      ...options,
    });
  }

  retrieveChallengeReleases(
    id: string,
    query: RelationshipRetrieveChallengeReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveChallengeReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/challengeReleases`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterActivities(
    id: string,
    query: RelationshipRetrieveGameCenterActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterActivitiesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterActivities`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterAppVersions(
    id: string,
    query: RelationshipRetrieveGameCenterAppVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterAppVersionsResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterAppVersions`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterChallenges(
    id: string,
    query: RelationshipRetrieveGameCenterChallengesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterChallengesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterChallenges`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterGroup(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterGroupResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/gameCenterGroup`, options);
  }

  retrieveLeaderboardReleases(
    id: string,
    query: RelationshipRetrieveLeaderboardReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveLeaderboardReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/leaderboardReleases`, {
      query,
      ...options,
    });
  }

  retrieveLeaderboardSetReleases(
    id: string,
    query: RelationshipRetrieveLeaderboardSetReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveLeaderboardSetReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/relationships/leaderboardSetReleases`, {
      query,
      ...options,
    });
  }

  updateChallengesMinimumPlatformVersions(
    id: string,
    body: RelationshipUpdateChallengesMinimumPlatformVersionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(
      path`/v1/gameCenterDetails/${id}/relationships/challengesMinimumPlatformVersions`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface RelationshipRetrieveAchievementReleasesResponse {
  data: Array<RelationshipRetrieveAchievementReleasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAchievementReleasesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAchievementReleases';
  }
}

export interface RelationshipRetrieveActivityReleasesResponse {
  data: Array<RelationshipRetrieveActivityReleasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveActivityReleasesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterActivityVersionReleases';
  }
}

export interface RelationshipRetrieveChallengeReleasesResponse {
  data: Array<RelationshipRetrieveChallengeReleasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveChallengeReleasesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterChallengeVersionReleases';
  }
}

export interface RelationshipRetrieveGameCenterActivitiesResponse {
  data: Array<RelationshipRetrieveGameCenterActivitiesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveGameCenterActivitiesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterActivities';
  }
}

export interface RelationshipRetrieveGameCenterAppVersionsResponse {
  data: Array<RelationshipRetrieveGameCenterAppVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveGameCenterAppVersionsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';
  }
}

export interface RelationshipRetrieveGameCenterChallengesResponse {
  data: Array<RelationshipRetrieveGameCenterChallengesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveGameCenterChallengesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterChallenges';
  }
}

export interface RelationshipRetrieveGameCenterGroupResponse {
  data: RelationshipRetrieveGameCenterGroupResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterGroupResponse {
  export interface Data {
    id: string;

    type: 'gameCenterGroups';
  }
}

export interface RelationshipRetrieveLeaderboardReleasesResponse {
  data: Array<RelationshipRetrieveLeaderboardReleasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveLeaderboardReleasesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardReleases';
  }
}

export interface RelationshipRetrieveLeaderboardSetReleasesResponse {
  data: Array<RelationshipRetrieveLeaderboardSetReleasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveLeaderboardSetReleasesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSetReleases';
  }
}

export interface RelationshipRetrieveAchievementReleasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveActivityReleasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveChallengeReleasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveGameCenterActivitiesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveGameCenterAppVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveGameCenterChallengesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveLeaderboardReleasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveLeaderboardSetReleasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipUpdateChallengesMinimumPlatformVersionsParams {
  data: Array<RelationshipUpdateChallengesMinimumPlatformVersionsParams.Data>;
}

export namespace RelationshipUpdateChallengesMinimumPlatformVersionsParams {
  export interface Data {
    id: string;

    type: 'appStoreVersions';
  }
}

Relationships.GameCenterAchievements = GameCenterAchievements;
Relationships.GameCenterLeaderboardSets = GameCenterLeaderboardSets;
Relationships.GameCenterLeaderboards = GameCenterLeaderboards;

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAchievementReleasesResponse as RelationshipRetrieveAchievementReleasesResponse,
    type RelationshipRetrieveActivityReleasesResponse as RelationshipRetrieveActivityReleasesResponse,
    type RelationshipRetrieveChallengeReleasesResponse as RelationshipRetrieveChallengeReleasesResponse,
    type RelationshipRetrieveGameCenterActivitiesResponse as RelationshipRetrieveGameCenterActivitiesResponse,
    type RelationshipRetrieveGameCenterAppVersionsResponse as RelationshipRetrieveGameCenterAppVersionsResponse,
    type RelationshipRetrieveGameCenterChallengesResponse as RelationshipRetrieveGameCenterChallengesResponse,
    type RelationshipRetrieveGameCenterGroupResponse as RelationshipRetrieveGameCenterGroupResponse,
    type RelationshipRetrieveLeaderboardReleasesResponse as RelationshipRetrieveLeaderboardReleasesResponse,
    type RelationshipRetrieveLeaderboardSetReleasesResponse as RelationshipRetrieveLeaderboardSetReleasesResponse,
    type RelationshipRetrieveAchievementReleasesParams as RelationshipRetrieveAchievementReleasesParams,
    type RelationshipRetrieveActivityReleasesParams as RelationshipRetrieveActivityReleasesParams,
    type RelationshipRetrieveChallengeReleasesParams as RelationshipRetrieveChallengeReleasesParams,
    type RelationshipRetrieveGameCenterActivitiesParams as RelationshipRetrieveGameCenterActivitiesParams,
    type RelationshipRetrieveGameCenterAppVersionsParams as RelationshipRetrieveGameCenterAppVersionsParams,
    type RelationshipRetrieveGameCenterChallengesParams as RelationshipRetrieveGameCenterChallengesParams,
    type RelationshipRetrieveLeaderboardReleasesParams as RelationshipRetrieveLeaderboardReleasesParams,
    type RelationshipRetrieveLeaderboardSetReleasesParams as RelationshipRetrieveLeaderboardSetReleasesParams,
    type RelationshipUpdateChallengesMinimumPlatformVersionsParams as RelationshipUpdateChallengesMinimumPlatformVersionsParams,
  };

  export {
    GameCenterAchievements as GameCenterAchievements,
    type GameCenterAchievementRetrieveGameCenterAchievementsResponse as GameCenterAchievementRetrieveGameCenterAchievementsResponse,
    type GameCenterAchievementRetrieveGameCenterAchievementsParams as GameCenterAchievementRetrieveGameCenterAchievementsParams,
    type GameCenterAchievementUpdateGameCenterAchievementsParams as GameCenterAchievementUpdateGameCenterAchievementsParams,
  };

  export {
    GameCenterLeaderboardSets as GameCenterLeaderboardSets,
    type GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse as GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsResponse,
    type GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams as GameCenterLeaderboardSetRetrieveGameCenterLeaderboardSetsParams,
    type GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams as GameCenterLeaderboardSetUpdateGameCenterLeaderboardSetsParams,
  };

  export {
    GameCenterLeaderboards as GameCenterLeaderboards,
    type GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse as GameCenterLeaderboardRetrieveGameCenterLeaderboardsResponse,
    type GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams as GameCenterLeaderboardRetrieveGameCenterLeaderboardsParams,
    type GameCenterLeaderboardUpdateGameCenterLeaderboardsParams as GameCenterLeaderboardUpdateGameCenterLeaderboardsParams,
  };
}
