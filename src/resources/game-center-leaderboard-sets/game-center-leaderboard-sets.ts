// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterLeaderboardSetImagesAPI from '../game-center-leaderboard-set-images';
import * as GameCenterLeaderboardSetReleasesAPI from '../game-center-leaderboard-set-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as GameCenterGroupsAPI from '../game-center-groups/game-center-groups';
import * as GameCenterLeaderboardSetLocalizationsAPI from '../game-center-leaderboard-set-localizations/game-center-leaderboard-set-localizations';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  RelationshipListReleasesParams,
  RelationshipListReleasesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterLeaderboardSets extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterLeaderboardSetCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetResponse> {
    return this._client.post('/v1/gameCenterLeaderboardSets', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardSetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardSetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboardSets/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardSets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listGameCenterLeaderboards(
    id: string,
    query: GameCenterLeaderboardSetListGameCenterLeaderboardsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterLeaderboards> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/gameCenterLeaderboards`, {
      query,
      ...options,
    });
  }

  listLocalizations(
    id: string,
    query: GameCenterLeaderboardSetListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/localizations`, { query, ...options });
  }

  listReleases(
    id: string,
    query: GameCenterLeaderboardSetListReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterLeaderboardSetReleases> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/releases`, { query, ...options });
  }

  /**
   * @deprecated
   */
  retrieveGroupLeaderboardSet(
    id: string,
    query: GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSets/${id}/groupLeaderboardSet`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterLeaderboardSet {
  id: string;

  type: 'gameCenterLeaderboardSets';

  attributes?: GameCenterLeaderboardSet.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterLeaderboardSet.Relationships;
}

export namespace GameCenterLeaderboardSet {
  export interface Attributes {
    referenceName?: string;

    vendorIdentifier?: string;
  }

  export interface Relationships {
    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterGroup?: Relationships.GameCenterGroup;

    gameCenterLeaderboards?: Relationships.GameCenterLeaderboards;

    /**
     * @deprecated
     */
    groupLeaderboardSet?: Relationships.GroupLeaderboardSet;

    localizations?: Relationships.Localizations;

    releases?: Relationships.Releases;
  }

  export namespace Relationships {
    export interface GameCenterDetail {
      data?: GameCenterDetail.Data;
    }

    export namespace GameCenterDetail {
      export interface Data {
        id: string;

        type: 'gameCenterDetails';
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

    /**
     * @deprecated
     */
    export interface GroupLeaderboardSet {
      data?: GroupLeaderboardSet.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GroupLeaderboardSet {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSets';
      }
    }

    export interface Localizations {
      data?: Array<Localizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Localizations {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSetLocalizations';
      }
    }

    export interface Releases {
      data?: Array<Releases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Releases {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSetReleases';
      }
    }
  }
}

export interface GameCenterLeaderboardSetResponse {
  data: GameCenterLeaderboardSet;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterLeaderboardSet
    | GameCenterLeaderboardSetLocalizationsAPI.LeaderboardSetLocalization
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardSetReleasesAPI.GameCenterLeaderboardSetRelease
  >;
}

export interface GameCenterLeaderboardSetListLocalizationsResponse {
  data: Array<GameCenterLeaderboardSetLocalizationsAPI.LeaderboardSetLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    GameCenterLeaderboardSet | GameCenterLeaderboardSetImagesAPI.GameCenterLeaderboardSetImage
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterLeaderboardSetCreateParams {
  data: GameCenterLeaderboardSetCreateParams.Data;
}

export namespace GameCenterLeaderboardSetCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterLeaderboardSets';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      referenceName: string;

      vendorIdentifier: string;
    }

    export interface Relationships {
      gameCenterDetail?: Relationships.GameCenterDetail;

      gameCenterGroup?: Relationships.GameCenterGroup;

      gameCenterLeaderboards?: Relationships.GameCenterLeaderboards;
    }

    export namespace Relationships {
      export interface GameCenterDetail {
        data?: GameCenterDetail.Data;
      }

      export namespace GameCenterDetail {
        export interface Data {
          id: string;

          type: 'gameCenterDetails';
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

      export interface GameCenterLeaderboards {
        data?: Array<GameCenterLeaderboards.Data>;
      }

      export namespace GameCenterLeaderboards {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }
    }
  }
}

export interface GameCenterLeaderboardSetRetrieveParams {
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

export interface GameCenterLeaderboardSetUpdateParams {
  data: GameCenterLeaderboardSetUpdateParams.Data;
}

export namespace GameCenterLeaderboardSetUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSets';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      referenceName?: string;
    }
  }
}

export interface GameCenterLeaderboardSetListGameCenterLeaderboardsParams {
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

export interface GameCenterLeaderboardSetListLocalizationsParams {
  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetImages
   */
  'fields[gameCenterLeaderboardSetImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'gameCenterLeaderboardSetLocalization'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetLocalizations
   */
  'fields[gameCenterLeaderboardSetLocalizations]'?: Array<
    'locale' | 'name' | 'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage'
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
  include?: Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterLeaderboardSetListReleasesParams {
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
   * filter by id(s) of related 'gameCenterDetail'
   */
  'filter[gameCenterDetail]'?: Array<string>;

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

export interface GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams {
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

GameCenterLeaderboardSets.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterLeaderboardSets {
  export {
    type GameCenterLeaderboardSet as GameCenterLeaderboardSet,
    type GameCenterLeaderboardSetResponse as GameCenterLeaderboardSetResponse,
    type GameCenterLeaderboardSetListLocalizationsResponse as GameCenterLeaderboardSetListLocalizationsResponse,
    type GameCenterLeaderboardSetCreateParams as GameCenterLeaderboardSetCreateParams,
    type GameCenterLeaderboardSetRetrieveParams as GameCenterLeaderboardSetRetrieveParams,
    type GameCenterLeaderboardSetUpdateParams as GameCenterLeaderboardSetUpdateParams,
    type GameCenterLeaderboardSetListGameCenterLeaderboardsParams as GameCenterLeaderboardSetListGameCenterLeaderboardsParams,
    type GameCenterLeaderboardSetListLocalizationsParams as GameCenterLeaderboardSetListLocalizationsParams,
    type GameCenterLeaderboardSetListReleasesParams as GameCenterLeaderboardSetListReleasesParams,
    type GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams as GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListReleasesResponse as RelationshipListReleasesResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListReleasesParams as RelationshipListReleasesParams,
  };
}
