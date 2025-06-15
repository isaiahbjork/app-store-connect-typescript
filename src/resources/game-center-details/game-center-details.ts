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
import * as GameCenterAchievementLocalizationsAPI from '../game-center-achievement-localizations/game-center-achievement-localizations';
import * as GameCenterAchievementsAPI from '../game-center-achievements/game-center-achievements';
import * as GameCenterActivitiesAPI from '../game-center-activities/game-center-activities';
import * as GameCenterActivityVersionsAPI from '../game-center-activity-versions/game-center-activity-versions';
import * as GameCenterAppVersionsAPI from '../game-center-app-versions/game-center-app-versions';
import * as GameCenterChallengeVersionsAPI from '../game-center-challenge-versions/game-center-challenge-versions';
import * as GameCenterChallengesAPI from '../game-center-challenges/game-center-challenges';
import * as MetricsAPI from './metrics';
import {
  GameCenterMatchmakingAppRequestsV1Metric,
  MetricRetrieveClassicMatchmakingRequestsParams,
  MetricRetrieveRuleBasedMatchmakingRequestsParams,
  Metrics,
} from './metrics';
import * as GameCenterGroupsAPI from '../game-center-groups/game-center-groups';
import * as GameCenterLeaderboardLocalizationsAPI from '../game-center-leaderboard-localizations/game-center-leaderboard-localizations';
import * as GameCenterLeaderboardSetLocalizationsAPI from '../game-center-leaderboard-set-localizations/game-center-leaderboard-set-localizations';
import * as GameCenterLeaderboardSetsAPI from '../game-center-leaderboard-sets/game-center-leaderboard-sets';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipRetrieveAchievementReleasesParams,
  RelationshipRetrieveAchievementReleasesResponse,
  RelationshipRetrieveActivityReleasesParams,
  RelationshipRetrieveActivityReleasesResponse,
  RelationshipRetrieveChallengeReleasesParams,
  RelationshipRetrieveChallengeReleasesResponse,
  RelationshipRetrieveGameCenterActivitiesParams,
  RelationshipRetrieveGameCenterActivitiesResponse,
  RelationshipRetrieveGameCenterAppVersionsParams,
  RelationshipRetrieveGameCenterAppVersionsResponse,
  RelationshipRetrieveGameCenterChallengesParams,
  RelationshipRetrieveGameCenterChallengesResponse,
  RelationshipRetrieveGameCenterGroupResponse,
  RelationshipRetrieveLeaderboardReleasesParams,
  RelationshipRetrieveLeaderboardReleasesResponse,
  RelationshipRetrieveLeaderboardSetReleasesParams,
  RelationshipRetrieveLeaderboardSetReleasesResponse,
  RelationshipUpdateChallengesMinimumPlatformVersionsParams,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterDetails extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  retrieve(
    id: string,
    query: GameCenterDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailResponse> {
    return this._client.patch(path`/v1/gameCenterDetails/${id}`, { body, ...options });
  }

  gameCenterDetails(
    body: GameCenterDetailGameCenterDetailsParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailResponse> {
    return this._client.post('/v1/gameCenterDetails', { body, ...options });
  }

  retrieveAchievementReleases(
    id: string,
    query: GameCenterDetailRetrieveAchievementReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementsAPI.AchievementReleases> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/achievementReleases`, { query, ...options });
  }

  retrieveActivityReleases(
    id: string,
    query: GameCenterDetailRetrieveActivityReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailRetrieveActivityReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/activityReleases`, { query, ...options });
  }

  retrieveChallengeReleases(
    id: string,
    query: GameCenterDetailRetrieveChallengeReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailRetrieveChallengeReleasesResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/challengeReleases`, { query, ...options });
  }

  retrieveGameCenterAchievements(
    id: string,
    query: GameCenterDetailRetrieveGameCenterAchievementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievements> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterAchievements`, { query, ...options });
  }

  retrieveGameCenterActivities(
    id: string,
    query: GameCenterDetailRetrieveGameCenterActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivities> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterActivities`, { query, ...options });
  }

  retrieveGameCenterAppVersions(
    id: string,
    query: GameCenterDetailRetrieveGameCenterAppVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAppVersionsAPI.GameCenterAppVersionsResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterAppVersions`, { query, ...options });
  }

  retrieveGameCenterChallenges(
    id: string,
    query: GameCenterDetailRetrieveGameCenterChallengesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallenges> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterChallenges`, { query, ...options });
  }

  retrieveGameCenterGroup(
    id: string,
    query: GameCenterDetailRetrieveGameCenterGroupParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterGroupsAPI.GameCenterGroupResponse> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterGroup`, { query, ...options });
  }

  retrieveGameCenterLeaderboardSets(
    id: string,
    query: GameCenterDetailRetrieveGameCenterLeaderboardSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSets> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterLeaderboardSets`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterLeaderboards(
    id: string,
    query: GameCenterDetailRetrieveGameCenterLeaderboardsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboards> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/gameCenterLeaderboards`, { query, ...options });
  }

  retrieveLeaderboardReleases(
    id: string,
    query: GameCenterDetailRetrieveLeaderboardReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardReleases> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/leaderboardReleases`, { query, ...options });
  }

  retrieveLeaderboardSetReleases(
    id: string,
    query: GameCenterDetailRetrieveLeaderboardSetReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetReleases> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/leaderboardSetReleases`, { query, ...options });
  }
}

export interface GameCenterAchievements {
  data: Array<GameCenterAchievementsAPI.AchievementRecord>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterAchievementsAPI.AchievementRecord
    | GameCenterAchievementLocalizationsAPI.AchievementLocalization
    | GameCenterAchievementReleasesAPI.GameCenterAchievementRelease
    | GameCenterActivitiesAPI.GameCenterActivity
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterActivities {
  data: Array<GameCenterActivitiesAPI.GameCenterActivity>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterAchievementsAPI.AchievementRecord
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterActivityVersionsAPI.GameCenterActivityVersion
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterChallenges {
  data: Array<GameCenterChallengesAPI.GameCenterChallenge>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterChallengeVersionsAPI.GameCenterChallengeVersion
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterDetailDetail {
  id: string;

  type: 'gameCenterDetails';

  attributes?: GameCenterDetailDetail.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterDetailDetail.Relationships;
}

export namespace GameCenterDetailDetail {
  export interface Attributes {
    arcadeEnabled?: boolean;

    /**
     * @deprecated
     */
    challengeEnabled?: boolean;
  }

  export interface Relationships {
    achievementReleases?: Relationships.AchievementReleases;

    activityReleases?: Relationships.ActivityReleases;

    app?: Relationships.App;

    challengeReleases?: Relationships.ChallengeReleases;

    challengesMinimumPlatformVersions?: Relationships.ChallengesMinimumPlatformVersions;

    defaultGroupLeaderboard?: Relationships.DefaultGroupLeaderboard;

    defaultLeaderboard?: Relationships.DefaultLeaderboard;

    gameCenterAchievements?: Relationships.GameCenterAchievements;

    gameCenterActivities?: Relationships.GameCenterActivities;

    gameCenterAppVersions?: Relationships.GameCenterAppVersions;

    gameCenterChallenges?: Relationships.GameCenterChallenges;

    gameCenterGroup?: Relationships.GameCenterGroup;

    gameCenterLeaderboards?: Relationships.GameCenterLeaderboards;

    gameCenterLeaderboardSets?: Relationships.GameCenterLeaderboardSets;

    leaderboardReleases?: Relationships.LeaderboardReleases;

    leaderboardSetReleases?: Relationships.LeaderboardSetReleases;
  }

  export namespace Relationships {
    export interface AchievementReleases {
      data?: Array<AchievementReleases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AchievementReleases {
      export interface Data {
        id: string;

        type: 'gameCenterAchievementReleases';
      }
    }

    export interface ActivityReleases {
      data?: Array<ActivityReleases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace ActivityReleases {
      export interface Data {
        id: string;

        type: 'gameCenterActivityVersionReleases';
      }
    }

    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface ChallengeReleases {
      data?: Array<ChallengeReleases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace ChallengeReleases {
      export interface Data {
        id: string;

        type: 'gameCenterChallengeVersionReleases';
      }
    }

    export interface ChallengesMinimumPlatformVersions {
      data?: Array<ChallengesMinimumPlatformVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace ChallengesMinimumPlatformVersions {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface DefaultGroupLeaderboard {
      data?: DefaultGroupLeaderboard.Data;
    }

    export namespace DefaultGroupLeaderboard {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }

    export interface DefaultLeaderboard {
      data?: DefaultLeaderboard.Data;
    }

    export namespace DefaultLeaderboard {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }

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

    export interface GameCenterAppVersions {
      data?: Array<GameCenterAppVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterAppVersions {
      export interface Data {
        id: string;

        type: 'gameCenterAppVersions';
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

    export interface GameCenterGroup {
      data?: GameCenterGroup.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterGroup {
      export interface Data {
        id: string;

        type: 'gameCenterGroups';
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

    export interface LeaderboardReleases {
      data?: Array<LeaderboardReleases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace LeaderboardReleases {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardReleases';
      }
    }

    export interface LeaderboardSetReleases {
      data?: Array<LeaderboardSetReleases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace LeaderboardSetReleases {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSetReleases';
      }
    }
  }
}

export interface GameCenterDetailResponse {
  data: GameCenterDetailDetail;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppsAPI.App
    | GameCenterAppVersionsAPI.GameCenterAppVersion
    | GameCenterGroupsAPI.GameCenterGroup
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
}

export interface GameCenterLeaderboardReleases {
  data: Array<GameCenterLeaderboardReleasesAPI.GameCenterLeaderboardRelease>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterDetailDetail | GameCenterLeaderboardsAPI.GameCenterLeaderboard>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterLeaderboardSetReleases {
  data: Array<GameCenterLeaderboardSetReleasesAPI.GameCenterLeaderboardSetRelease>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterDetailDetail | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterLeaderboardSets {
  data: Array<GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterLeaderboardSetLocalizationsAPI.LeaderboardSetLocalization
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardSetReleasesAPI.GameCenterLeaderboardSetRelease
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterLeaderboards {
  data: Array<GameCenterLeaderboardsAPI.GameCenterLeaderboard>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterLeaderboardLocalizationsAPI.LeaderboardLocalization
    | GameCenterLeaderboardReleasesAPI.GameCenterLeaderboardRelease
    | GameCenterActivitiesAPI.GameCenterActivity
    | GameCenterChallengesAPI.GameCenterChallenge
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterDetailRetrieveActivityReleasesResponse {
  data: Array<GameCenterActivityVersionReleasesAPI.GameCenterActivityVersionRelease>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterActivityVersionsAPI.GameCenterActivityVersion>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterDetailRetrieveChallengeReleasesResponse {
  data: Array<GameCenterChallengeVersionReleasesAPI.GameCenterChallengeVersionRelease>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterChallengeVersionsAPI.GameCenterChallengeVersion>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterDetailRetrieveParams {
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

export interface GameCenterDetailUpdateParams {
  data: GameCenterDetailUpdateParams.Data;
}

export namespace GameCenterDetailUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterDetails';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * @deprecated
       */
      challengeEnabled?: boolean;
    }

    export interface Relationships {
      defaultGroupLeaderboard?: Relationships.DefaultGroupLeaderboard;

      defaultLeaderboard?: Relationships.DefaultLeaderboard;

      gameCenterGroup?: Relationships.GameCenterGroup;
    }

    export namespace Relationships {
      export interface DefaultGroupLeaderboard {
        data?: DefaultGroupLeaderboard.Data;
      }

      export namespace DefaultGroupLeaderboard {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }

      export interface DefaultLeaderboard {
        data?: DefaultLeaderboard.Data;
      }

      export namespace DefaultLeaderboard {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }

      export interface GameCenterGroup {
        data?: GameCenterGroup.Data;
      }

      export namespace GameCenterGroup {
        export interface Data {
          id: string;

          type: 'gameCenterGroups';
        }
      }
    }
  }
}

export interface GameCenterDetailGameCenterDetailsParams {
  data: GameCenterDetailGameCenterDetailsParams.Data;
}

export namespace GameCenterDetailGameCenterDetailsParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }

    export interface Attributes {
      /**
       * @deprecated
       */
      challengeEnabled?: boolean;
    }
  }
}

export interface GameCenterDetailRetrieveAchievementReleasesParams {
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
   * filter by id(s) of related 'gameCenterAchievement'
   */
  'filter[gameCenterAchievement]'?: Array<string>;

  /**
   * filter by attribute 'live'
   */
  'filter[live]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterAchievement'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterDetailRetrieveActivityReleasesParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterActivityVersionReleases
   */
  'fields[gameCenterActivityVersionReleases]'?: Array<'version'>;

  /**
   * the fields to include for returned resources of type gameCenterActivityVersions
   */
  'fields[gameCenterActivityVersions]'?: Array<
    'version' | 'state' | 'fallbackUrl' | 'activity' | 'localizations' | 'defaultImage' | 'releases'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterDetailRetrieveChallengeReleasesParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterChallengeVersionReleases
   */
  'fields[gameCenterChallengeVersionReleases]'?: Array<'version'>;

  /**
   * the fields to include for returned resources of type gameCenterChallengeVersions
   */
  'fields[gameCenterChallengeVersions]'?: Array<
    'version' | 'state' | 'challenge' | 'localizations' | 'releases' | 'defaultImage'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterDetailRetrieveGameCenterAchievementsParams {
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

export interface GameCenterDetailRetrieveGameCenterActivitiesParams {
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

export interface GameCenterDetailRetrieveGameCenterAppVersionsParams {
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
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * filter by attribute 'enabled'
   */
  'filter[enabled]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related compatibilityVersions returned (when they are
   * included)
   */
  'limit[compatibilityVersions]'?: number;
}

export interface GameCenterDetailRetrieveGameCenterChallengesParams {
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

export interface GameCenterDetailRetrieveGameCenterGroupParams {
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

export interface GameCenterDetailRetrieveGameCenterLeaderboardSetsParams {
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

export interface GameCenterDetailRetrieveGameCenterLeaderboardsParams {
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

export interface GameCenterDetailRetrieveLeaderboardReleasesParams {
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
   * filter by id(s) of related 'gameCenterLeaderboard'
   */
  'filter[gameCenterLeaderboard]'?: Array<string>;

  /**
   * filter by attribute 'live'
   */
  'filter[live]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterLeaderboard'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterDetailRetrieveLeaderboardSetReleasesParams {
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
   * filter by id(s) of related 'gameCenterLeaderboardSet'
   */
  'filter[gameCenterLeaderboardSet]'?: Array<string>;

  /**
   * filter by attribute 'live'
   */
  'filter[live]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterLeaderboardSet'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

GameCenterDetails.Relationships = RelationshipsAPIRelationships;
GameCenterDetails.Metrics = Metrics;

export declare namespace GameCenterDetails {
  export {
    type GameCenterAchievements as GameCenterAchievements,
    type GameCenterActivities as GameCenterActivities,
    type GameCenterChallenges as GameCenterChallenges,
    type GameCenterDetailDetail as GameCenterDetailDetail,
    type GameCenterDetailResponse as GameCenterDetailResponse,
    type GameCenterLeaderboardReleases as GameCenterLeaderboardReleases,
    type GameCenterLeaderboardSetReleases as GameCenterLeaderboardSetReleases,
    type GameCenterLeaderboardSets as GameCenterLeaderboardSets,
    type GameCenterLeaderboards as GameCenterLeaderboards,
    type GameCenterDetailRetrieveActivityReleasesResponse as GameCenterDetailRetrieveActivityReleasesResponse,
    type GameCenterDetailRetrieveChallengeReleasesResponse as GameCenterDetailRetrieveChallengeReleasesResponse,
    type GameCenterDetailRetrieveParams as GameCenterDetailRetrieveParams,
    type GameCenterDetailUpdateParams as GameCenterDetailUpdateParams,
    type GameCenterDetailGameCenterDetailsParams as GameCenterDetailGameCenterDetailsParams,
    type GameCenterDetailRetrieveAchievementReleasesParams as GameCenterDetailRetrieveAchievementReleasesParams,
    type GameCenterDetailRetrieveActivityReleasesParams as GameCenterDetailRetrieveActivityReleasesParams,
    type GameCenterDetailRetrieveChallengeReleasesParams as GameCenterDetailRetrieveChallengeReleasesParams,
    type GameCenterDetailRetrieveGameCenterAchievementsParams as GameCenterDetailRetrieveGameCenterAchievementsParams,
    type GameCenterDetailRetrieveGameCenterActivitiesParams as GameCenterDetailRetrieveGameCenterActivitiesParams,
    type GameCenterDetailRetrieveGameCenterAppVersionsParams as GameCenterDetailRetrieveGameCenterAppVersionsParams,
    type GameCenterDetailRetrieveGameCenterChallengesParams as GameCenterDetailRetrieveGameCenterChallengesParams,
    type GameCenterDetailRetrieveGameCenterGroupParams as GameCenterDetailRetrieveGameCenterGroupParams,
    type GameCenterDetailRetrieveGameCenterLeaderboardSetsParams as GameCenterDetailRetrieveGameCenterLeaderboardSetsParams,
    type GameCenterDetailRetrieveGameCenterLeaderboardsParams as GameCenterDetailRetrieveGameCenterLeaderboardsParams,
    type GameCenterDetailRetrieveLeaderboardReleasesParams as GameCenterDetailRetrieveLeaderboardReleasesParams,
    type GameCenterDetailRetrieveLeaderboardSetReleasesParams as GameCenterDetailRetrieveLeaderboardSetReleasesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
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
    Metrics as Metrics,
    type GameCenterMatchmakingAppRequestsV1Metric as GameCenterMatchmakingAppRequestsV1Metric,
    type MetricRetrieveClassicMatchmakingRequestsParams as MetricRetrieveClassicMatchmakingRequestsParams,
    type MetricRetrieveRuleBasedMatchmakingRequestsParams as MetricRetrieveRuleBasedMatchmakingRequestsParams,
  };
}
