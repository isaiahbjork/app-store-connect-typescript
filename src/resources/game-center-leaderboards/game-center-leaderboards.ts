// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterLeaderboardImagesAPI from '../game-center-leaderboard-images';
import * as GameCenterLeaderboardReleasesAPI from '../game-center-leaderboard-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterActivitiesAPI from '../game-center-activities/game-center-activities';
import * as GameCenterChallengesAPI from '../game-center-challenges/game-center-challenges';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as GameCenterGroupsAPI from '../game-center-groups/game-center-groups';
import * as GameCenterLeaderboardLocalizationsAPI from '../game-center-leaderboard-localizations/game-center-leaderboard-localizations';
import * as GameCenterLeaderboardSetsAPI from '../game-center-leaderboard-sets/game-center-leaderboard-sets';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  RelationshipListReleasesParams,
  RelationshipListReleasesResponse,
  RelationshipUpdateActivityParams,
  RelationshipUpdateChallengeParams,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterLeaderboards extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterLeaderboardCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardResponse> {
    return this._client.post('/v1/gameCenterLeaderboards', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboards/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboards/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboards/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listLocalizations(
    id: string,
    query: GameCenterLeaderboardListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboards/${id}/localizations`, { query, ...options });
  }

  listReleases(
    id: string,
    query: GameCenterLeaderboardListReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterLeaderboardReleases> {
    return this._client.get(path`/v1/gameCenterLeaderboards/${id}/releases`, { query, ...options });
  }
}

export interface GameCenterLeaderboard {
  id: string;

  type: 'gameCenterLeaderboards';

  attributes?: GameCenterLeaderboard.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterLeaderboard.Relationships;
}

export namespace GameCenterLeaderboard {
  export interface Attributes {
    activityProperties?: { [key: string]: string };

    archived?: boolean;

    defaultFormatter?: GameCenterLeaderboardLocalizationsAPI.LeaderboardFormatter;

    recurrenceDuration?: string;

    recurrenceRule?: string;

    recurrenceStartDate?: string;

    referenceName?: string;

    scoreRangeEnd?: string;

    scoreRangeStart?: string;

    scoreSortType?: 'ASC' | 'DESC';

    submissionType?: 'BEST_SCORE' | 'MOST_RECENT_SCORE';

    vendorIdentifier?: string;

    visibility?: 'SHOW_FOR_ALL' | 'HIDE_FOR_ALL';
  }

  export interface Relationships {
    activity?: Relationships.Activity;

    challenge?: Relationships.Challenge;

    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterGroup?: Relationships.GameCenterGroup;

    gameCenterLeaderboardSets?: Relationships.GameCenterLeaderboardSets;

    /**
     * @deprecated
     */
    groupLeaderboard?: Relationships.GroupLeaderboard;

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

    export interface Challenge {
      data?: Challenge.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Challenge {
      export interface Data {
        id: string;

        type: 'gameCenterChallenges';
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

    export interface GameCenterLeaderboardSets {
      data?: Array<GameCenterLeaderboardSets.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterLeaderboardSets {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSets';
      }
    }

    /**
     * @deprecated
     */
    export interface GroupLeaderboard {
      data?: GroupLeaderboard.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GroupLeaderboard {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
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

        type: 'gameCenterLeaderboardLocalizations';
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

        type: 'gameCenterLeaderboardReleases';
      }
    }
  }
}

export interface GameCenterLeaderboardResponse {
  data: GameCenterLeaderboard;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterLeaderboard
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterLeaderboardLocalizationsAPI.LeaderboardLocalization
    | GameCenterLeaderboardReleasesAPI.GameCenterLeaderboardRelease
    | GameCenterActivitiesAPI.GameCenterActivity
    | GameCenterChallengesAPI.GameCenterChallenge
  >;
}

export interface GameCenterLeaderboardListLocalizationsResponse {
  data: Array<GameCenterLeaderboardLocalizationsAPI.LeaderboardLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterLeaderboard | GameCenterLeaderboardImagesAPI.GameCenterLeaderboardImage>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterLeaderboardCreateParams {
  data: GameCenterLeaderboardCreateParams.Data;
}

export namespace GameCenterLeaderboardCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterLeaderboards';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      defaultFormatter: GameCenterLeaderboardLocalizationsAPI.LeaderboardFormatter;

      referenceName: string;

      scoreSortType: 'ASC' | 'DESC';

      submissionType: 'BEST_SCORE' | 'MOST_RECENT_SCORE';

      vendorIdentifier: string;

      activityProperties?: { [key: string]: string };

      recurrenceDuration?: string;

      recurrenceRule?: string;

      recurrenceStartDate?: string;

      scoreRangeEnd?: string;

      scoreRangeStart?: string;

      visibility?: 'SHOW_FOR_ALL' | 'HIDE_FOR_ALL';
    }

    export interface Relationships {
      gameCenterDetail?: Relationships.GameCenterDetail;

      gameCenterGroup?: Relationships.GameCenterGroup;

      gameCenterLeaderboardSets?: Relationships.GameCenterLeaderboardSets;
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

      export interface GameCenterLeaderboardSets {
        data?: Array<GameCenterLeaderboardSets.Data>;
      }

      export namespace GameCenterLeaderboardSets {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboardSets';
        }
      }
    }
  }
}

export interface GameCenterLeaderboardRetrieveParams {
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

export interface GameCenterLeaderboardUpdateParams {
  data: GameCenterLeaderboardUpdateParams.Data;
}

export namespace GameCenterLeaderboardUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboards';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      activityProperties?: { [key: string]: string };

      archived?: boolean;

      defaultFormatter?: GameCenterLeaderboardLocalizationsAPI.LeaderboardFormatter;

      recurrenceDuration?: string;

      recurrenceRule?: string;

      recurrenceStartDate?: string;

      referenceName?: string;

      scoreRangeEnd?: string;

      scoreRangeStart?: string;

      scoreSortType?: 'ASC' | 'DESC';

      submissionType?: 'BEST_SCORE' | 'MOST_RECENT_SCORE';

      visibility?: 'SHOW_FOR_ALL' | 'HIDE_FOR_ALL';
    }
  }
}

export interface GameCenterLeaderboardListLocalizationsParams {
  /**
   * the fields to include for returned resources of type gameCenterLeaderboardImages
   */
  'fields[gameCenterLeaderboardImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'gameCenterLeaderboardLocalization'
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
  include?: Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardImage'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterLeaderboardListReleasesParams {
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
  include?: Array<'gameCenterDetail' | 'gameCenterLeaderboard'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

GameCenterLeaderboards.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterLeaderboards {
  export {
    type GameCenterLeaderboard as GameCenterLeaderboard,
    type GameCenterLeaderboardResponse as GameCenterLeaderboardResponse,
    type GameCenterLeaderboardListLocalizationsResponse as GameCenterLeaderboardListLocalizationsResponse,
    type GameCenterLeaderboardCreateParams as GameCenterLeaderboardCreateParams,
    type GameCenterLeaderboardRetrieveParams as GameCenterLeaderboardRetrieveParams,
    type GameCenterLeaderboardUpdateParams as GameCenterLeaderboardUpdateParams,
    type GameCenterLeaderboardListLocalizationsParams as GameCenterLeaderboardListLocalizationsParams,
    type GameCenterLeaderboardListReleasesParams as GameCenterLeaderboardListReleasesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListReleasesResponse as RelationshipListReleasesResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListReleasesParams as RelationshipListReleasesParams,
    type RelationshipUpdateActivityParams as RelationshipUpdateActivityParams,
    type RelationshipUpdateChallengeParams as RelationshipUpdateChallengeParams,
  };
}
