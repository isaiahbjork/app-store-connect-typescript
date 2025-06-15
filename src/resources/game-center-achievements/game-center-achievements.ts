// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterAchievementImagesAPI from '../game-center-achievement-images';
import * as GameCenterAchievementReleasesAPI from '../game-center-achievement-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterAchievementLocalizationsAPI from '../game-center-achievement-localizations/game-center-achievement-localizations';
import * as GameCenterActivitiesAPI from '../game-center-activities/game-center-activities';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as GameCenterGroupsAPI from '../game-center-groups/game-center-groups';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  RelationshipListReleasesParams,
  RelationshipListReleasesResponse,
  RelationshipUpdateActivityParams,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterAchievements extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: GameCenterAchievementCreateParams, options?: RequestOptions): APIPromise<AchievementResponse> {
    return this._client.post('/v1/gameCenterAchievements', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterAchievementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AchievementResponse> {
    return this._client.get(path`/v1/gameCenterAchievements/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterAchievementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AchievementResponse> {
    return this._client.patch(path`/v1/gameCenterAchievements/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterAchievements/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listLocalizations(
    id: string,
    query: GameCenterAchievementListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterAchievements/${id}/localizations`, { query, ...options });
  }

  listReleases(
    id: string,
    query: GameCenterAchievementListReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AchievementReleases> {
    return this._client.get(path`/v1/gameCenterAchievements/${id}/releases`, { query, ...options });
  }
}

export interface AchievementRecord {
  id: string;

  type: 'gameCenterAchievements';

  attributes?: AchievementRecord.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AchievementRecord.Relationships;
}

export namespace AchievementRecord {
  export interface Attributes {
    activityProperties?: Record<string, string>;

    archived?: boolean;

    points?: number;

    referenceName?: string;

    repeatable?: boolean;

    showBeforeEarned?: boolean;

    vendorIdentifier?: string;
  }

  export interface Relationships {
    activity?: Relationships.Activity;

    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterGroup?: Relationships.GameCenterGroup;

    /**
     * @deprecated
     */
    groupAchievement?: Relationships.GroupAchievement;

    localizations?: Relationships.Localizations;

    releases?: Relationships.Releases;
  }

  export namespace Relationships {
    export interface Activity {
      data?: Activity.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Activity {
      export interface Data {
        id: string;

        type: 'gameCenterActivities';
      }
    }

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

    /**
     * @deprecated
     */
    export interface GroupAchievement {
      data?: GroupAchievement.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GroupAchievement {
      export interface Data {
        id: string;

        type: 'gameCenterAchievements';
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

        type: 'gameCenterAchievementLocalizations';
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

        type: 'gameCenterAchievementReleases';
      }
    }
  }
}

export interface AchievementReleases {
  data: Array<GameCenterAchievementReleasesAPI.GameCenterAchievementRelease>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterDetailsAPI.GameCenterDetailDetail | AchievementRecord>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AchievementResponse {
  data: AchievementRecord;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | AchievementRecord
    | GameCenterAchievementLocalizationsAPI.AchievementLocalization
    | GameCenterAchievementReleasesAPI.GameCenterAchievementRelease
    | GameCenterActivitiesAPI.GameCenterActivity
  >;
}

export interface GameCenterAchievementListLocalizationsResponse {
  data: Array<GameCenterAchievementLocalizationsAPI.AchievementLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AchievementRecord | GameCenterAchievementImagesAPI.GameCenterAchievementImage>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterAchievementCreateParams {
  data: GameCenterAchievementCreateParams.Data;
}

export namespace GameCenterAchievementCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterAchievements';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      points: number;

      referenceName: string;

      repeatable: boolean;

      showBeforeEarned: boolean;

      vendorIdentifier: string;

      activityProperties?: Record<string, string>;
    }

    export interface Relationships {
      gameCenterDetail?: Relationships.GameCenterDetail;

      gameCenterGroup?: Relationships.GameCenterGroup;
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
    }
  }
}

export interface GameCenterAchievementRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<
    'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases' | 'activity'
  >;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;

  /**
   * maximum number of related releases returned (when they are included)
   */
  'limit[releases]'?: number;
}

export interface GameCenterAchievementUpdateParams {
  data: GameCenterAchievementUpdateParams.Data;
}

export namespace GameCenterAchievementUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievements';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      activityProperties?: Record<string, string>;

      archived?: boolean;

      points?: number;

      referenceName?: string;

      repeatable?: boolean;

      showBeforeEarned?: boolean;
    }
  }
}

export interface GameCenterAchievementListLocalizationsParams {
  /**
   * the fields to include for returned resources of type gameCenterAchievementImages
   */
  'fields[gameCenterAchievementImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'gameCenterAchievementLocalization'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterAchievement' | 'gameCenterAchievementImage'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterAchievementListReleasesParams {
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
  include?: Array<'gameCenterDetail' | 'gameCenterAchievement'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

GameCenterAchievements.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterAchievements {
  export {
    type AchievementRecord as AchievementRecord,
    type AchievementReleases as AchievementReleases,
    type AchievementResponse as AchievementResponse,
    type GameCenterAchievementListLocalizationsResponse as GameCenterAchievementListLocalizationsResponse,
    type GameCenterAchievementCreateParams as GameCenterAchievementCreateParams,
    type GameCenterAchievementRetrieveParams as GameCenterAchievementRetrieveParams,
    type GameCenterAchievementUpdateParams as GameCenterAchievementUpdateParams,
    type GameCenterAchievementListLocalizationsParams as GameCenterAchievementListLocalizationsParams,
    type GameCenterAchievementListReleasesParams as GameCenterAchievementListReleasesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListReleasesResponse as RelationshipListReleasesResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListReleasesParams as RelationshipListReleasesParams,
    type RelationshipUpdateActivityParams as RelationshipUpdateActivityParams,
  };
}
