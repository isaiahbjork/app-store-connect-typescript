// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as GameCenterAchievementImagesAPI from '../game-center-achievement-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveGameCenterAchievementImageResponse,
  RelationshipRetrieveGameCenterAchievementResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterAchievementsAPI from '../game-center-achievements/game-center-achievements';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterAchievementLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterAchievementLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AchievementLocalizationResponse> {
    return this._client.post('/v1/gameCenterAchievementLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterAchievementLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AchievementLocalizationResponse> {
    return this._client.get(path`/v1/gameCenterAchievementLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterAchievementLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AchievementLocalizationResponse> {
    return this._client.patch(path`/v1/gameCenterAchievementLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterAchievementLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveGameCenterAchievement(
    id: string,
    query: GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementsAPI.AchievementResponse> {
    return this._client.get(path`/v1/gameCenterAchievementLocalizations/${id}/gameCenterAchievement`, {
      query,
      ...options,
    });
  }

  retrieveGameCenterAchievementImage(
    id: string,
    query: GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementImagesAPI.GameCenterAchievementImageResponse> {
    return this._client.get(path`/v1/gameCenterAchievementLocalizations/${id}/gameCenterAchievementImage`, {
      query,
      ...options,
    });
  }
}

export interface AchievementLocalization {
  id: string;

  type: 'gameCenterAchievementLocalizations';

  attributes?: AchievementLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AchievementLocalization.Relationships;
}

export namespace AchievementLocalization {
  export interface Attributes {
    afterEarnedDescription?: string;

    beforeEarnedDescription?: string;

    locale?: string;

    name?: string;
  }

  export interface Relationships {
    gameCenterAchievement?: Relationships.GameCenterAchievement;

    gameCenterAchievementImage?: Relationships.GameCenterAchievementImage;
  }

  export namespace Relationships {
    export interface GameCenterAchievement {
      data?: GameCenterAchievement.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterAchievement {
      export interface Data {
        id: string;

        type: 'gameCenterAchievements';
      }
    }

    export interface GameCenterAchievementImage {
      data?: GameCenterAchievementImage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterAchievementImage {
      export interface Data {
        id: string;

        type: 'gameCenterAchievementImages';
      }
    }
  }
}

export interface AchievementLocalizationResponse {
  data: AchievementLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    GameCenterAchievementsAPI.AchievementRecord | GameCenterAchievementImagesAPI.GameCenterAchievementImage
  >;
}

export interface GameCenterAchievementLocalizationCreateParams {
  data: GameCenterAchievementLocalizationCreateParams.Data;
}

export namespace GameCenterAchievementLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterAchievementLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      afterEarnedDescription: string;

      beforeEarnedDescription: string;

      locale: string;

      name: string;
    }

    export interface Relationships {
      gameCenterAchievement: Relationships.GameCenterAchievement;
    }

    export namespace Relationships {
      export interface GameCenterAchievement {
        data: GameCenterAchievement.Data;
      }

      export namespace GameCenterAchievement {
        export interface Data {
          id: string;

          type: 'gameCenterAchievements';
        }
      }
    }
  }
}

export interface GameCenterAchievementLocalizationRetrieveParams {
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
}

export interface GameCenterAchievementLocalizationUpdateParams {
  data: GameCenterAchievementLocalizationUpdateParams.Data;
}

export namespace GameCenterAchievementLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievementLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      afterEarnedDescription?: string;

      beforeEarnedDescription?: string;

      name?: string;
    }
  }
}

export interface GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams {
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

export interface GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterAchievementLocalization'>;
}

GameCenterAchievementLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterAchievementLocalizations {
  export {
    type AchievementLocalization as AchievementLocalization,
    type AchievementLocalizationResponse as AchievementLocalizationResponse,
    type GameCenterAchievementLocalizationCreateParams as GameCenterAchievementLocalizationCreateParams,
    type GameCenterAchievementLocalizationRetrieveParams as GameCenterAchievementLocalizationRetrieveParams,
    type GameCenterAchievementLocalizationUpdateParams as GameCenterAchievementLocalizationUpdateParams,
    type GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams as GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams,
    type GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams as GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveGameCenterAchievementResponse as RelationshipRetrieveGameCenterAchievementResponse,
    type RelationshipRetrieveGameCenterAchievementImageResponse as RelationshipRetrieveGameCenterAchievementImageResponse,
  };
}
