// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveGameCenterLeaderboardResponse,
  RelationshipRetrieveGameCenterLeaderboardSetResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterLeaderboardSetsAPI from '../game-center-leaderboard-sets/game-center-leaderboard-sets';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterLeaderboardSetMemberLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterLeaderboardSetMemberLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeaderboardSetMemberLocalizationResponse> {
    return this._client.post('/v1/gameCenterLeaderboardSetMemberLocalizations', { body, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardSetMemberLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LeaderboardSetMemberLocalizationResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboardSetMemberLocalizations/${id}`, {
      body,
      ...options,
    });
  }

  list(
    query: GameCenterLeaderboardSetMemberLocalizationListParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetMemberLocalizationListResponse> {
    return this._client.get('/v1/gameCenterLeaderboardSetMemberLocalizations', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardSetMemberLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveGameCenterLeaderboard(
    id: string,
    query:
      | GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams
      | null
      | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardsAPI.GameCenterLeaderboardResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardSetMemberLocalizations/${id}/gameCenterLeaderboard`,
      { query, ...options },
    );
  }

  retrieveGameCenterLeaderboardSet(
    id: string,
    query:
      | GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams
      | null
      | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSetResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardSetMemberLocalizations/${id}/gameCenterLeaderboardSet`,
      { query, ...options },
    );
  }
}

export interface LeaderboardSetMemberLocalization {
  id: string;

  type: 'gameCenterLeaderboardSetMemberLocalizations';

  attributes?: LeaderboardSetMemberLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: LeaderboardSetMemberLocalization.Relationships;
}

export namespace LeaderboardSetMemberLocalization {
  export interface Attributes {
    locale?: string;

    name?: string;
  }

  export interface Relationships {
    gameCenterLeaderboard?: Relationships.GameCenterLeaderboard;

    gameCenterLeaderboardSet?: Relationships.GameCenterLeaderboardSet;
  }

  export namespace Relationships {
    export interface GameCenterLeaderboard {
      data?: GameCenterLeaderboard.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterLeaderboard {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }

    export interface GameCenterLeaderboardSet {
      data?: GameCenterLeaderboardSet.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterLeaderboardSet {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSets';
      }
    }
  }
}

export interface LeaderboardSetMemberLocalizationResponse {
  data: LeaderboardSetMemberLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet | GameCenterLeaderboardsAPI.GameCenterLeaderboard
  >;
}

export interface GameCenterLeaderboardSetMemberLocalizationListResponse {
  data: Array<LeaderboardSetMemberLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet | GameCenterLeaderboardsAPI.GameCenterLeaderboard
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterLeaderboardSetMemberLocalizationCreateParams {
  data: GameCenterLeaderboardSetMemberLocalizationCreateParams.Data;
}

export namespace GameCenterLeaderboardSetMemberLocalizationCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardSetMemberLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      gameCenterLeaderboard: Relationships.GameCenterLeaderboard;

      gameCenterLeaderboardSet: Relationships.GameCenterLeaderboardSet;
    }

    export namespace Relationships {
      export interface GameCenterLeaderboard {
        data: GameCenterLeaderboard.Data;
      }

      export namespace GameCenterLeaderboard {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }

      export interface GameCenterLeaderboardSet {
        data: GameCenterLeaderboardSet.Data;
      }

      export namespace GameCenterLeaderboardSet {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboardSets';
        }
      }
    }

    export interface Attributes {
      locale?: string;

      name?: string;
    }
  }
}

export interface GameCenterLeaderboardSetMemberLocalizationUpdateParams {
  data: GameCenterLeaderboardSetMemberLocalizationUpdateParams.Data;
}

export namespace GameCenterLeaderboardSetMemberLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSetMemberLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;
    }
  }
}

export interface GameCenterLeaderboardSetMemberLocalizationListParams {
  /**
   * filter by id(s) of related 'gameCenterLeaderboard'
   */
  'filter[gameCenterLeaderboard]': Array<string>;

  /**
   * filter by id(s) of related 'gameCenterLeaderboardSet'
   */
  'filter[gameCenterLeaderboardSet]': Array<string>;

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
   * gameCenterLeaderboardSetMemberLocalizations
   */
  'fields[gameCenterLeaderboardSetMemberLocalizations]'?: Array<
    'name' | 'locale' | 'gameCenterLeaderboardSet' | 'gameCenterLeaderboard'
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
  include?: Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboard'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams {
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

export interface GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams {
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

GameCenterLeaderboardSetMemberLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterLeaderboardSetMemberLocalizations {
  export {
    type LeaderboardSetMemberLocalization as LeaderboardSetMemberLocalization,
    type LeaderboardSetMemberLocalizationResponse as LeaderboardSetMemberLocalizationResponse,
    type GameCenterLeaderboardSetMemberLocalizationListResponse as GameCenterLeaderboardSetMemberLocalizationListResponse,
    type GameCenterLeaderboardSetMemberLocalizationCreateParams as GameCenterLeaderboardSetMemberLocalizationCreateParams,
    type GameCenterLeaderboardSetMemberLocalizationUpdateParams as GameCenterLeaderboardSetMemberLocalizationUpdateParams,
    type GameCenterLeaderboardSetMemberLocalizationListParams as GameCenterLeaderboardSetMemberLocalizationListParams,
    type GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams as GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams,
    type GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams as GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveGameCenterLeaderboardResponse as RelationshipRetrieveGameCenterLeaderboardResponse,
    type RelationshipRetrieveGameCenterLeaderboardSetResponse as RelationshipRetrieveGameCenterLeaderboardSetResponse,
  };
}
