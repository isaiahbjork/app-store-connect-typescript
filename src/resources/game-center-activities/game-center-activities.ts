// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterActivityImagesAPI from '../game-center-activity-images';
import * as GameCenterActivityVersionReleasesAPI from '../game-center-activity-version-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterAchievementsAPI from '../game-center-achievements/game-center-achievements';
import * as GameCenterActivityLocalizationsAPI from '../game-center-activity-localizations/game-center-activity-localizations';
import * as GameCenterActivityVersionsAPI from '../game-center-activity-versions/game-center-activity-versions';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as GameCenterGroupsAPI from '../game-center-groups/game-center-groups';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipListVersionsParams,
  RelationshipListVersionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterActivities extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterActivityCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityResponse> {
    return this._client.post('/v1/gameCenterActivities', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterActivityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityResponse> {
    return this._client.get(path`/v1/gameCenterActivities/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterActivityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityResponse> {
    return this._client.patch(path`/v1/gameCenterActivities/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterActivities/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listVersions(
    id: string,
    query: GameCenterActivityListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityListVersionsResponse> {
    return this._client.get(path`/v1/gameCenterActivities/${id}/versions`, { query, ...options });
  }
}

export interface GameCenterActivity {
  id: string;

  type: 'gameCenterActivities';

  attributes?: GameCenterActivity.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterActivity.Relationships;
}

export namespace GameCenterActivity {
  export interface Attributes {
    archived?: boolean;

    maximumPlayersCount?: number;

    minimumPlayersCount?: number;

    playStyle?: 'ASYNCHRONOUS' | 'SYNCHRONOUS';

    properties?: Record<string, string>;

    referenceName?: string;

    supportsPartyCode?: boolean;

    vendorIdentifier?: string;
  }

  export interface Relationships {
    achievements?: Relationships.Achievements;

    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterGroup?: Relationships.GameCenterGroup;

    leaderboards?: Relationships.Leaderboards;

    versions?: Relationships.Versions;
  }

  export namespace Relationships {
    export interface Achievements {
      data?: Array<Achievements.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Achievements {
      export interface Data {
        id: string;

        type: 'gameCenterAchievements';
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

    export interface Leaderboards {
      data?: Array<Leaderboards.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Leaderboards {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }

    export interface Versions {
      data?: Array<Versions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Versions {
      export interface Data {
        id: string;

        type: 'gameCenterActivityVersions';
      }
    }
  }
}

export interface GameCenterActivityResponse {
  data: GameCenterActivity;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterAchievementsAPI.AchievementRecord
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterActivityVersionsAPI.GameCenterActivityVersion
  >;
}

export interface GameCenterActivityListVersionsResponse {
  data: Array<GameCenterActivityVersionsAPI.GameCenterActivityVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterActivity
    | GameCenterActivityLocalizationsAPI.GameCenterActivityLocalization
    | GameCenterActivityImagesAPI.GameCenterActivityImage
    | GameCenterActivityVersionReleasesAPI.GameCenterActivityVersionRelease
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterActivityCreateParams {
  data: GameCenterActivityCreateParams.Data;
}

export namespace GameCenterActivityCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterActivities';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      referenceName: string;

      vendorIdentifier: string;

      maximumPlayersCount?: number;

      minimumPlayersCount?: number;

      playStyle?: 'ASYNCHRONOUS' | 'SYNCHRONOUS';

      properties?: Record<string, string>;

      supportsPartyCode?: boolean;
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

export interface GameCenterActivityRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'achievements' | 'leaderboards' | 'versions'>;

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

export interface GameCenterActivityUpdateParams {
  data: GameCenterActivityUpdateParams.Data;
}

export namespace GameCenterActivityUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterActivities';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      archived?: boolean;

      maximumPlayersCount?: number;

      minimumPlayersCount?: number;

      playStyle?: 'ASYNCHRONOUS' | 'SYNCHRONOUS';

      properties?: Record<string, string>;

      referenceName?: string;

      supportsPartyCode?: boolean;
    }
  }
}

export interface GameCenterActivityListVersionsParams {
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
   * the fields to include for returned resources of type gameCenterActivityImages
   */
  'fields[gameCenterActivityImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterActivityLocalizations
   */
  'fields[gameCenterActivityLocalizations]'?: Array<'locale' | 'name' | 'description' | 'version' | 'image'>;

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
  include?: Array<'activity' | 'localizations' | 'defaultImage' | 'releases'>;

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

GameCenterActivities.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterActivities {
  export {
    type GameCenterActivity as GameCenterActivity,
    type GameCenterActivityResponse as GameCenterActivityResponse,
    type GameCenterActivityListVersionsResponse as GameCenterActivityListVersionsResponse,
    type GameCenterActivityCreateParams as GameCenterActivityCreateParams,
    type GameCenterActivityRetrieveParams as GameCenterActivityRetrieveParams,
    type GameCenterActivityUpdateParams as GameCenterActivityUpdateParams,
    type GameCenterActivityListVersionsParams as GameCenterActivityListVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
  };
}
