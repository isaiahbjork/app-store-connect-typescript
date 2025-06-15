// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterAchievementReleasesAPI from '../game-center-achievement-releases';
import * as GameCenterActivityVersionReleasesAPI from '../game-center-activity-version-releases';
import * as GameCenterChallengeVersionReleasesAPI from '../game-center-challenge-version-releases';
import * as GameCenterLeaderboardReleasesAPI from '../game-center-leaderboard-releases';
import * as GameCenterLeaderboardSetReleasesAPI from '../game-center-leaderboard-set-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as AppsAPI from '../apps/apps';
import * as GameCenterAchievementsAPI from '../game-center-achievements/game-center-achievements';
import * as GameCenterActivitiesAPI from '../game-center-activities/game-center-activities';
import * as GameCenterAppVersionsAPI from '../game-center-app-versions/game-center-app-versions';
import * as GameCenterChallengesAPI from '../game-center-challenges/game-center-challenges';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as GameCenterLeaderboardSetsAPI from '../game-center-leaderboard-sets/game-center-leaderboard-sets';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import * as RelationshipsAPI from './relationships/relationships';
import { Relationships as RelationshipsAPIRelationships } from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterGroups extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: GameCenterGroupCreateParams, options?: RequestOptions): APIPromise<GameCenterGroupResponse> {
    return this._client.post('/v1/gameCenterGroups', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterGroupResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterGroupResponse> {
    return this._client.patch(path`/v1/gameCenterGroups/${id}`, { body, ...options });
  }

  list(
    query: GameCenterGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterGroupListResponse> {
    return this._client.get('/v1/gameCenterGroups', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterGroups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listGameCenterAchievements(
    id: string,
    query: GameCenterGroupListGameCenterAchievementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterAchievements> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/gameCenterAchievements`, { query, ...options });
  }

  listGameCenterActivities(
    id: string,
    query: GameCenterGroupListGameCenterActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterActivities> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/gameCenterActivities`, { query, ...options });
  }

  listGameCenterChallenges(
    id: string,
    query: GameCenterGroupListGameCenterChallengesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterChallenges> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/gameCenterChallenges`, { query, ...options });
  }

  listGameCenterLeaderboardSets(
    id: string,
    query: GameCenterGroupListGameCenterLeaderboardSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterLeaderboardSets> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/gameCenterLeaderboardSets`, {
      query,
      ...options,
    });
  }

  listGameCenterLeaderboards(
    id: string,
    query: GameCenterGroupListGameCenterLeaderboardsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterLeaderboards> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/gameCenterLeaderboards`, { query, ...options });
  }

  retrieveGameCenterDetails(
    id: string,
    query: GameCenterGroupRetrieveGameCenterDetailsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterGroupRetrieveGameCenterDetailsResponse> {
    return this._client.get(path`/v1/gameCenterGroups/${id}/gameCenterDetails`, { query, ...options });
  }
}

export interface GameCenterGroup {
  id: string;

  type: 'gameCenterGroups';

  attributes?: GameCenterGroup.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterGroup.Relationships;
}

export namespace GameCenterGroup {
  export interface Attributes {
    referenceName?: string;
  }

  export interface Relationships {
    gameCenterAchievements?: Relationships.GameCenterAchievements;

    gameCenterActivities?: Relationships.GameCenterActivities;

    gameCenterChallenges?: Relationships.GameCenterChallenges;

    gameCenterDetails?: Relationships.GameCenterDetails;

    gameCenterLeaderboards?: Relationships.GameCenterLeaderboards;

    gameCenterLeaderboardSets?: Relationships.GameCenterLeaderboardSets;
  }

  export namespace Relationships {
    export interface GameCenterAchievements {
      data?: Array<GameCenterAchievements.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterAchievements {
      export interface Data {
        id: string;

        type: 'gameCenterAchievements';
      }
    }

    export interface GameCenterActivities {
      data?: Array<GameCenterActivities.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterActivities {
      export interface Data {
        id: string;

        type: 'gameCenterActivities';
      }
    }

    export interface GameCenterChallenges {
      data?: Array<GameCenterChallenges.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterChallenges {
      export interface Data {
        id: string;

        type: 'gameCenterChallenges';
      }
    }

    export interface GameCenterDetails {
      data?: Array<GameCenterDetails.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterDetails {
      export interface Data {
        id: string;

        type: 'gameCenterDetails';
      }
    }

    export interface GameCenterLeaderboards {
      data?: Array<GameCenterLeaderboards.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterLeaderboards {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }

    export interface GameCenterLeaderboardSets {
      data?: Array<GameCenterLeaderboardSets.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterLeaderboardSets {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSets';
      }
    }
  }
}

export interface GameCenterGroupResponse {
  data: GameCenterGroup;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterAchievementsAPI.AchievementRecord
    | GameCenterActivitiesAPI.GameCenterActivity
    | GameCenterChallengesAPI.GameCenterChallenge
  >;
}

export interface GameCenterGroupListResponse {
  data: Array<GameCenterGroup>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterAchievementsAPI.AchievementRecord
    | GameCenterActivitiesAPI.GameCenterActivity
    | GameCenterChallengesAPI.GameCenterChallenge
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterGroupRetrieveGameCenterDetailsResponse {
  data: Array<GameCenterDetailsAPI.GameCenterDetailDetail>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppsAPI.App
    | GameCenterAppVersionsAPI.GameCenterAppVersion
    | GameCenterGroup
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterAchievementsAPI.AchievementRecord
    | GameCenterActivitiesAPI.GameCenterActivity
    | GameCenterChallengesAPI.GameCenterChallenge
    | GameCenterAchievementReleasesAPI.GameCenterAchievementRelease
    | GameCenterActivityVersionReleasesAPI.GameCenterActivityVersionRelease
    | GameCenterChallengeVersionReleasesAPI.GameCenterChallengeVersionRelease
    | GameCenterLeaderboardReleasesAPI.GameCenterLeaderboardRelease
    | GameCenterLeaderboardSetReleasesAPI.GameCenterLeaderboardSetRelease
    | AppStoreVersionsAPI.AppStoreVersionDetails
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterGroupCreateParams {
  data: GameCenterGroupCreateParams.Data;
}

export namespace GameCenterGroupCreateParams {
  export interface Data {
    type: 'gameCenterGroups';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      referenceName?: string;
    }
  }
}

export interface GameCenterGroupRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterAchievements
   */
  'fields[gameCenterAchievements]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'points'
    | 'showBeforeEarned'
    | 'repeatable'
    | 'archived'
    | 'activityProperties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupAchievement'
    | 'localizations'
    | 'releases'
    | 'activity'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterChallenges
   */
  'fields[gameCenterChallenges]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'allowedDurations'
    | 'archived'
    | 'challengeType'
    | 'repeatable'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'versions'
    | 'leaderboard'
  >;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboardSets
   */
  'fields[gameCenterLeaderboardSets]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * maximum number of related gameCenterAchievements returned (when they are
   * included)
   */
  'limit[gameCenterAchievements]'?: number;

  /**
   * maximum number of related gameCenterActivities returned (when they are included)
   */
  'limit[gameCenterActivities]'?: number;

  /**
   * maximum number of related gameCenterChallenges returned (when they are included)
   */
  'limit[gameCenterChallenges]'?: number;

  /**
   * maximum number of related gameCenterDetails returned (when they are included)
   */
  'limit[gameCenterDetails]'?: number;

  /**
   * maximum number of related gameCenterLeaderboards returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboards]'?: number;

  /**
   * maximum number of related gameCenterLeaderboardSets returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboardSets]'?: number;
}

export interface GameCenterGroupUpdateParams {
  data: GameCenterGroupUpdateParams.Data;
}

export namespace GameCenterGroupUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterGroups';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      referenceName?: string;
    }
  }
}

export interface GameCenterGroupListParams {
  /**
   * the fields to include for returned resources of type gameCenterAchievements
   */
  'fields[gameCenterAchievements]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'points'
    | 'showBeforeEarned'
    | 'repeatable'
    | 'archived'
    | 'activityProperties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupAchievement'
    | 'localizations'
    | 'releases'
    | 'activity'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterChallenges
   */
  'fields[gameCenterChallenges]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'allowedDurations'
    | 'archived'
    | 'challengeType'
    | 'repeatable'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'versions'
    | 'leaderboard'
  >;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboardSets
   */
  'fields[gameCenterLeaderboardSets]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  /**
   * filter by id(s) of related 'gameCenterDetails'
   */
  'filter[gameCenterDetails]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related gameCenterAchievements returned (when they are
   * included)
   */
  'limit[gameCenterAchievements]'?: number;

  /**
   * maximum number of related gameCenterActivities returned (when they are included)
   */
  'limit[gameCenterActivities]'?: number;

  /**
   * maximum number of related gameCenterChallenges returned (when they are included)
   */
  'limit[gameCenterChallenges]'?: number;

  /**
   * maximum number of related gameCenterDetails returned (when they are included)
   */
  'limit[gameCenterDetails]'?: number;

  /**
   * maximum number of related gameCenterLeaderboards returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboards]'?: number;

  /**
   * maximum number of related gameCenterLeaderboardSets returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboardSets]'?: number;
}

export interface GameCenterGroupListGameCenterAchievementsParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterAchievementLocalizations
   */
  'fields[gameCenterAchievementLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'beforeEarnedDescription'
    | 'afterEarnedDescription'
    | 'gameCenterAchievement'
    | 'gameCenterAchievementImage'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterAchievementReleases
   */
  'fields[gameCenterAchievementReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterAchievement'>;

  /**
   * the fields to include for returned resources of type gameCenterAchievements
   */
  'fields[gameCenterAchievements]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'points'
    | 'showBeforeEarned'
    | 'repeatable'
    | 'archived'
    | 'activityProperties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupAchievement'
    | 'localizations'
    | 'releases'
    | 'activity'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * filter by attribute 'archived'
   */
  'filter[archived]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'referenceName'
   */
  'filter[referenceName]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases' | 'activity'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;

  /**
   * maximum number of related releases returned (when they are included)
   */
  'limit[releases]'?: number;
}

export interface GameCenterGroupListGameCenterActivitiesParams {
  /**
   * the fields to include for returned resources of type gameCenterAchievements
   */
  'fields[gameCenterAchievements]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'points'
    | 'showBeforeEarned'
    | 'repeatable'
    | 'archived'
    | 'activityProperties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupAchievement'
    | 'localizations'
    | 'releases'
    | 'activity'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivityVersions
   */
  'fields[gameCenterActivityVersions]'?: Array<
    'version' | 'state' | 'fallbackUrl' | 'activity' | 'localizations' | 'defaultImage' | 'releases'
  >;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'achievements' | 'leaderboards' | 'versions'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related achievements returned (when they are included)
   */
  'limit[achievements]'?: number;

  /**
   * maximum number of related leaderboards returned (when they are included)
   */
  'limit[leaderboards]'?: number;

  /**
   * maximum number of related versions returned (when they are included)
   */
  'limit[versions]'?: number;
}

export interface GameCenterGroupListGameCenterChallengesParams {
  /**
   * the fields to include for returned resources of type gameCenterChallenges
   */
  'fields[gameCenterChallenges]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'allowedDurations'
    | 'archived'
    | 'challengeType'
    | 'repeatable'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'versions'
    | 'leaderboard'
  >;

  /**
   * the fields to include for returned resources of type gameCenterChallengeVersions
   */
  'fields[gameCenterChallengeVersions]'?: Array<
    'version' | 'state' | 'challenge' | 'localizations' | 'releases' | 'defaultImage'
  >;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * filter by attribute 'archived'
   */
  'filter[archived]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'referenceName'
   */
  'filter[referenceName]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'versions' | 'leaderboard'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related versions returned (when they are included)
   */
  'limit[versions]'?: number;
}

export interface GameCenterGroupListGameCenterLeaderboardSetsParams {
  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetLocalizations
   */
  'fields[gameCenterLeaderboardSetLocalizations]'?: Array<
    'locale' | 'name' | 'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetReleases
   */
  'fields[gameCenterLeaderboardSetReleases]'?: Array<
    'live' | 'gameCenterDetail' | 'gameCenterLeaderboardSet'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboardSets
   */
  'fields[gameCenterLeaderboardSets]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'referenceName'
   */
  'filter[referenceName]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related gameCenterLeaderboards returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboards]'?: number;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;

  /**
   * maximum number of related releases returned (when they are included)
   */
  'limit[releases]'?: number;
}

export interface GameCenterGroupListGameCenterLeaderboardsParams {
  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterChallenges
   */
  'fields[gameCenterChallenges]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'allowedDurations'
    | 'archived'
    | 'challengeType'
    | 'repeatable'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'versions'
    | 'leaderboard'
  >;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardLocalizations
   */
  'fields[gameCenterLeaderboardLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'formatterOverride'
    | 'formatterSuffix'
    | 'formatterSuffixSingular'
    | 'gameCenterLeaderboard'
    | 'gameCenterLeaderboardImage'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardReleases
   */
  'fields[gameCenterLeaderboardReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterLeaderboard'>;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboardSets
   */
  'fields[gameCenterLeaderboardSets]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  /**
   * filter by attribute 'archived'
   */
  'filter[archived]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'referenceName'
   */
  'filter[referenceName]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related gameCenterLeaderboardSets returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboardSets]'?: number;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;

  /**
   * maximum number of related releases returned (when they are included)
   */
  'limit[releases]'?: number;
}

export interface GameCenterGroupRetrieveGameCenterDetailsParams {
  /**
   * the fields to include for returned resources of type apps
   */
  'fields[apps]'?: Array<
    | 'accessibilityUrl'
    | 'name'
    | 'bundleId'
    | 'sku'
    | 'primaryLocale'
    | 'isOrEverWasMadeForKids'
    | 'subscriptionStatusUrl'
    | 'subscriptionStatusUrlVersion'
    | 'subscriptionStatusUrlForSandbox'
    | 'subscriptionStatusUrlVersionForSandbox'
    | 'contentRightsDeclaration'
    | 'streamlinedPurchasingEnabled'
    | 'accessibilityDeclarations'
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaTesters'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'appPricePoints'
    | 'endUserLicenseAgreement'
    | 'appPriceSchedule'
    | 'appAvailabilityV2'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'perfPowerMetrics'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'customerReviews'
    | 'customerReviewSummarizations'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionKey'
    | 'analyticsReportRequests'
    | 'marketplaceSearchDetail'
    | 'backgroundAssets'
    | 'betaFeedbackScreenshotSubmissions'
    | 'betaFeedbackCrashSubmissions'
    | 'webhooks'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterAchievementReleases
   */
  'fields[gameCenterAchievementReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterAchievement'>;

  /**
   * the fields to include for returned resources of type gameCenterAchievements
   */
  'fields[gameCenterAchievements]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'points'
    | 'showBeforeEarned'
    | 'repeatable'
    | 'archived'
    | 'activityProperties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupAchievement'
    | 'localizations'
    | 'releases'
    | 'activity'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterActivityVersionReleases
   */
  'fields[gameCenterActivityVersionReleases]'?: Array<'version'>;

  /**
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * the fields to include for returned resources of type gameCenterChallenges
   */
  'fields[gameCenterChallenges]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'allowedDurations'
    | 'archived'
    | 'challengeType'
    | 'repeatable'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'versions'
    | 'leaderboard'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterChallengeVersionReleases
   */
  'fields[gameCenterChallengeVersionReleases]'?: Array<'version'>;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardReleases
   */
  'fields[gameCenterLeaderboardReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterLeaderboard'>;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetReleases
   */
  'fields[gameCenterLeaderboardSetReleases]'?: Array<
    'live' | 'gameCenterDetail' | 'gameCenterLeaderboardSet'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboardSets
   */
  'fields[gameCenterLeaderboardSets]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  'filter[gameCenterAppVersions'?: GameCenterGroupRetrieveGameCenterDetailsParams.FilterGameCenterAppVersions;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related achievementReleases returned (when they are included)
   */
  'limit[achievementReleases]'?: number;

  /**
   * maximum number of related activityReleases returned (when they are included)
   */
  'limit[activityReleases]'?: number;

  /**
   * maximum number of related challengeReleases returned (when they are included)
   */
  'limit[challengeReleases]'?: number;

  /**
   * maximum number of related challengesMinimumPlatformVersions returned (when they
   * are included)
   */
  'limit[challengesMinimumPlatformVersions]'?: number;

  /**
   * maximum number of related gameCenterAchievements returned (when they are
   * included)
   */
  'limit[gameCenterAchievements]'?: number;

  /**
   * maximum number of related gameCenterActivities returned (when they are included)
   */
  'limit[gameCenterActivities]'?: number;

  /**
   * maximum number of related gameCenterAppVersions returned (when they are
   * included)
   */
  'limit[gameCenterAppVersions]'?: number;

  /**
   * maximum number of related gameCenterChallenges returned (when they are included)
   */
  'limit[gameCenterChallenges]'?: number;

  /**
   * maximum number of related gameCenterLeaderboards returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboards]'?: number;

  /**
   * maximum number of related gameCenterLeaderboardSets returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboardSets]'?: number;

  /**
   * maximum number of related leaderboardReleases returned (when they are included)
   */
  'limit[leaderboardReleases]'?: number;

  /**
   * maximum number of related leaderboardSetReleases returned (when they are
   * included)
   */
  'limit[leaderboardSetReleases]'?: number;
}

export namespace GameCenterGroupRetrieveGameCenterDetailsParams {
  export interface FilterGameCenterAppVersions {
    /**
     * filter by attribute 'gameCenterAppVersions.enabled'
     */
    'enabled]'?: Array<string>;
  }
}

GameCenterGroups.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterGroups {
  export {
    type GameCenterGroup as GameCenterGroup,
    type GameCenterGroupResponse as GameCenterGroupResponse,
    type GameCenterGroupListResponse as GameCenterGroupListResponse,
    type GameCenterGroupRetrieveGameCenterDetailsResponse as GameCenterGroupRetrieveGameCenterDetailsResponse,
    type GameCenterGroupCreateParams as GameCenterGroupCreateParams,
    type GameCenterGroupRetrieveParams as GameCenterGroupRetrieveParams,
    type GameCenterGroupUpdateParams as GameCenterGroupUpdateParams,
    type GameCenterGroupListParams as GameCenterGroupListParams,
    type GameCenterGroupListGameCenterAchievementsParams as GameCenterGroupListGameCenterAchievementsParams,
    type GameCenterGroupListGameCenterActivitiesParams as GameCenterGroupListGameCenterActivitiesParams,
    type GameCenterGroupListGameCenterChallengesParams as GameCenterGroupListGameCenterChallengesParams,
    type GameCenterGroupListGameCenterLeaderboardSetsParams as GameCenterGroupListGameCenterLeaderboardSetsParams,
    type GameCenterGroupListGameCenterLeaderboardsParams as GameCenterGroupListGameCenterLeaderboardsParams,
    type GameCenterGroupRetrieveGameCenterDetailsParams as GameCenterGroupRetrieveGameCenterDetailsParams,
  };

  export { RelationshipsAPIRelationships as Relationships };
}
