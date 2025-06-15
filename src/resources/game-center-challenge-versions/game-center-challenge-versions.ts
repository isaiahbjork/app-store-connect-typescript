// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterChallengeImagesAPI from '../game-center-challenge-images';
import * as GameCenterChallengeVersionReleasesAPI from '../game-center-challenge-version-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterActivityVersionsAPI from '../game-center-activity-versions/game-center-activity-versions';
import * as GameCenterChallengeLocalizationsAPI from '../game-center-challenge-localizations/game-center-challenge-localizations';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  RelationshipRetrieveDefaultImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterChallengesAPI from '../game-center-challenges/game-center-challenges';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterChallengeVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterChallengeVersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeVersionResponse> {
    return this._client.post('/v1/gameCenterChallengeVersions', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterChallengeVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeVersionResponse> {
    return this._client.get(path`/v1/gameCenterChallengeVersions/${id}`, { query, ...options });
  }

  listLocalizations(
    id: string,
    query: GameCenterChallengeVersionListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeVersionListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterChallengeVersions/${id}/localizations`, { query, ...options });
  }

  retrieveDefaultImage(
    id: string,
    query: GameCenterChallengeVersionRetrieveDefaultImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeImagesAPI.GameCenterChallengeImageResponse> {
    return this._client.get(path`/v1/gameCenterChallengeVersions/${id}/defaultImage`, { query, ...options });
  }
}

export interface GameCenterChallengeVersion {
  id: string;

  type: 'gameCenterChallengeVersions';

  attributes?: GameCenterChallengeVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterChallengeVersion.Relationships;
}

export namespace GameCenterChallengeVersion {
  export interface Attributes {
    state?: GameCenterActivityVersionsAPI.GameCenterVersionState;

    version?: number;
  }

  export interface Relationships {
    challenge?: Relationships.Challenge;

    defaultImage?: Relationships.DefaultImage;

    localizations?: Relationships.Localizations;

    releases?: Relationships.Releases;
  }

  export namespace Relationships {
    export interface Challenge {
      data?: Challenge.Data;
    }

    export namespace Challenge {
      export interface Data {
        id: string;

        type: 'gameCenterChallenges';
      }
    }

    export interface DefaultImage {
      data?: DefaultImage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace DefaultImage {
      export interface Data {
        id: string;

        type: 'gameCenterChallengeImages';
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

        type: 'gameCenterChallengeLocalizations';
      }
    }

    export interface Releases {
      data?: Array<Releases.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Releases {
      export interface Data {
        id: string;

        type: 'gameCenterChallengeVersionReleases';
      }
    }
  }
}

export interface GameCenterChallengeVersionResponse {
  data: GameCenterChallengeVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterChallengesAPI.GameCenterChallenge
    | GameCenterChallengeLocalizationsAPI.GameCenterChallengeLocalization
    | GameCenterChallengeVersionReleasesAPI.GameCenterChallengeVersionRelease
    | GameCenterChallengeImagesAPI.GameCenterChallengeImage
  >;
}

export interface GameCenterChallengeVersionListLocalizationsResponse {
  data: Array<GameCenterChallengeLocalizationsAPI.GameCenterChallengeLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterChallengeVersion | GameCenterChallengeImagesAPI.GameCenterChallengeImage>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterChallengeVersionCreateParams {
  data: GameCenterChallengeVersionCreateParams.Data;
}

export namespace GameCenterChallengeVersionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterChallengeVersions';
  }

  export namespace Data {
    export interface Relationships {
      challenge: Relationships.Challenge;
    }

    export namespace Relationships {
      export interface Challenge {
        data: Challenge.Data;
      }

      export namespace Challenge {
        export interface Data {
          id: string;

          type: 'gameCenterChallenges';
        }
      }
    }
  }
}

export interface GameCenterChallengeVersionRetrieveParams {
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
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;

  /**
   * maximum number of related releases returned (when they are included)
   */
  'limit[releases]'?: number;
}

export interface GameCenterChallengeVersionListLocalizationsParams {
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
   * the fields to include for returned resources of type gameCenterChallengeVersions
   */
  'fields[gameCenterChallengeVersions]'?: Array<
    'version' | 'state' | 'challenge' | 'localizations' | 'releases' | 'defaultImage'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version' | 'image'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterChallengeVersionRetrieveDefaultImageParams {
  /**
   * the fields to include for returned resources of type gameCenterChallengeImages
   */
  'fields[gameCenterChallengeImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

GameCenterChallengeVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterChallengeVersions {
  export {
    type GameCenterChallengeVersion as GameCenterChallengeVersion,
    type GameCenterChallengeVersionResponse as GameCenterChallengeVersionResponse,
    type GameCenterChallengeVersionListLocalizationsResponse as GameCenterChallengeVersionListLocalizationsResponse,
    type GameCenterChallengeVersionCreateParams as GameCenterChallengeVersionCreateParams,
    type GameCenterChallengeVersionRetrieveParams as GameCenterChallengeVersionRetrieveParams,
    type GameCenterChallengeVersionListLocalizationsParams as GameCenterChallengeVersionListLocalizationsParams,
    type GameCenterChallengeVersionRetrieveDefaultImageParams as GameCenterChallengeVersionRetrieveDefaultImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipRetrieveDefaultImageResponse as RelationshipRetrieveDefaultImageResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
  };
}
