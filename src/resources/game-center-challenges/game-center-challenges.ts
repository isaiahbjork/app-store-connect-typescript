// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterChallengeImagesAPI from '../game-center-challenge-images';
import * as GameCenterChallengeVersionReleasesAPI from '../game-center-challenge-version-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterChallengeLocalizationsAPI from '../game-center-challenge-localizations/game-center-challenge-localizations';
import * as GameCenterChallengeVersionsAPI from '../game-center-challenge-versions/game-center-challenge-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListVersionsParams,
  RelationshipListVersionsResponse,
  RelationshipUpdateLeaderboardParams,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as GameCenterGroupsAPI from '../game-center-groups/game-center-groups';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterChallenges extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterChallengeCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeResponse> {
    return this._client.post('/v1/gameCenterChallenges', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterChallengeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeResponse> {
    return this._client.get(path`/v1/gameCenterChallenges/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterChallengeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeResponse> {
    return this._client.patch(path`/v1/gameCenterChallenges/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterChallenges/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listVersions(
    id: string,
    query: GameCenterChallengeListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeListVersionsResponse> {
    return this._client.get(path`/v1/gameCenterChallenges/${id}/versions`, { query, ...options });
  }
}

export interface GameCenterChallenge {
  id: string;

  type: 'gameCenterChallenges';

  attributes?: GameCenterChallenge.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterChallenge.Relationships;
}

export namespace GameCenterChallenge {
  export interface Attributes {
    allowedDurations?: Array<'ONE_DAY' | 'THREE_DAYS' | 'ONE_WEEK'>;

    archived?: boolean;

    challengeType?: 'LEADERBOARD';

    referenceName?: string;

    repeatable?: boolean;

    vendorIdentifier?: string;
  }

  export interface Relationships {
    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterGroup?: Relationships.GameCenterGroup;

    leaderboard?: Relationships.Leaderboard;

    versions?: Relationships.Versions;
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

    export interface Leaderboard {
      data?: Leaderboard.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Leaderboard {
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

        type: 'gameCenterChallengeVersions';
      }
    }
  }
}

export interface GameCenterChallengeResponse {
  data: GameCenterChallenge;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | GameCenterGroupsAPI.GameCenterGroup
    | GameCenterChallengeVersionsAPI.GameCenterChallengeVersion
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
  >;
}

export interface GameCenterChallengeListVersionsResponse {
  data: Array<GameCenterChallengeVersionsAPI.GameCenterChallengeVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterChallenge
    | GameCenterChallengeLocalizationsAPI.GameCenterChallengeLocalization
    | GameCenterChallengeVersionReleasesAPI.GameCenterChallengeVersionRelease
    | GameCenterChallengeImagesAPI.GameCenterChallengeImage
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterChallengeCreateParams {
  data: GameCenterChallengeCreateParams.Data;
}

export namespace GameCenterChallengeCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterChallenges';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      challengeType: 'LEADERBOARD';

      referenceName: string;

      vendorIdentifier: string;

      allowedDurations?: Array<'ONE_DAY' | 'THREE_DAYS' | 'ONE_WEEK'>;

      repeatable?: boolean;
    }

    export interface Relationships {
      gameCenterDetail?: Relationships.GameCenterDetail;

      gameCenterGroup?: Relationships.GameCenterGroup;

      leaderboard?: Relationships.Leaderboard;
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

      export interface Leaderboard {
        data?: Leaderboard.Data;
      }

      export namespace Leaderboard {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }
    }
  }
}

export interface GameCenterChallengeRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'versions' | 'leaderboard'>;

  /**
   * maximum number of related versions returned (when they are included)
   */
  'limit[versions]'?: number;
}

export interface GameCenterChallengeUpdateParams {
  data: GameCenterChallengeUpdateParams.Data;
}

export namespace GameCenterChallengeUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterChallenges';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      allowedDurations?: Array<'ONE_DAY' | 'THREE_DAYS' | 'ONE_WEEK'>;

      archived?: boolean;

      referenceName?: string;

      repeatable?: boolean;
    }

    export interface Relationships {
      leaderboard?: Relationships.Leaderboard;
    }

    export namespace Relationships {
      export interface Leaderboard {
        data?: Leaderboard.Data;
      }

      export namespace Leaderboard {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboards';
        }
      }
    }
  }
}

export interface GameCenterChallengeListVersionsParams {
  /**
   * the fields to include for returned resources of type gameCenterChallengeImages
   */
  'fields[gameCenterChallengeImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterChallengeLocalizations
   */
  'fields[gameCenterChallengeLocalizations]'?: Array<'locale' | 'name' | 'description' | 'version' | 'image'>;

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
   * the fields to include for returned resources of type gameCenterChallengeVersions
   */
  'fields[gameCenterChallengeVersions]'?: Array<
    'version' | 'state' | 'challenge' | 'localizations' | 'releases' | 'defaultImage'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'challenge' | 'localizations' | 'releases' | 'defaultImage'>;

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

GameCenterChallenges.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterChallenges {
  export {
    type GameCenterChallenge as GameCenterChallenge,
    type GameCenterChallengeResponse as GameCenterChallengeResponse,
    type GameCenterChallengeListVersionsResponse as GameCenterChallengeListVersionsResponse,
    type GameCenterChallengeCreateParams as GameCenterChallengeCreateParams,
    type GameCenterChallengeRetrieveParams as GameCenterChallengeRetrieveParams,
    type GameCenterChallengeUpdateParams as GameCenterChallengeUpdateParams,
    type GameCenterChallengeListVersionsParams as GameCenterChallengeListVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
    type RelationshipUpdateLeaderboardParams as RelationshipUpdateLeaderboardParams,
  };
}
