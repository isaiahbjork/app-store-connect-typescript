// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as GameCenterLeaderboardSetImagesAPI from '../game-center-leaderboard-set-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterLeaderboardSetsAPI from '../game-center-leaderboard-sets/game-center-leaderboard-sets';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterLeaderboardSetLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterLeaderboardSetLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeaderboardSetLocalizationResponse> {
    return this._client.post('/v1/gameCenterLeaderboardSetLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardSetLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaderboardSetLocalizationResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSetLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardSetLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LeaderboardSetLocalizationResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboardSetLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardSetLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveImage(
    id: string,
    query: GameCenterLeaderboardSetLocalizationRetrieveImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetImagesAPI.GameCenterLeaderboardSetImageResponse> {
    return this._client.get(
      path`/v1/gameCenterLeaderboardSetLocalizations/${id}/gameCenterLeaderboardSetImage`,
      { query, ...options },
    );
  }
}

export interface LeaderboardSetLocalization {
  id: string;

  type: 'gameCenterLeaderboardSetLocalizations';

  attributes?: LeaderboardSetLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: LeaderboardSetLocalization.Relationships;
}

export namespace LeaderboardSetLocalization {
  export interface Attributes {
    locale?: string;

    name?: string;
  }

  export interface Relationships {
    gameCenterLeaderboardSet?: Relationships.GameCenterLeaderboardSet;

    gameCenterLeaderboardSetImage?: Relationships.GameCenterLeaderboardSetImage;
  }

  export namespace Relationships {
    export interface GameCenterLeaderboardSet {
      data?: GameCenterLeaderboardSet.Data;
    }

    export namespace GameCenterLeaderboardSet {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSets';
      }
    }

    export interface GameCenterLeaderboardSetImage {
      data?: GameCenterLeaderboardSetImage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterLeaderboardSetImage {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSetImages';
      }
    }
  }
}

export interface LeaderboardSetLocalizationResponse {
  data: LeaderboardSetLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSet
    | GameCenterLeaderboardSetImagesAPI.GameCenterLeaderboardSetImage
  >;
}

export interface GameCenterLeaderboardSetLocalizationCreateParams {
  data: GameCenterLeaderboardSetLocalizationCreateParams.Data;
}

export namespace GameCenterLeaderboardSetLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardSetLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;
    }

    export interface Relationships {
      gameCenterLeaderboardSet: Relationships.GameCenterLeaderboardSet;
    }

    export namespace Relationships {
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
  }
}

export interface GameCenterLeaderboardSetLocalizationRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage'>;
}

export interface GameCenterLeaderboardSetLocalizationUpdateParams {
  data: GameCenterLeaderboardSetLocalizationUpdateParams.Data;
}

export namespace GameCenterLeaderboardSetLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSetLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;
    }
  }
}

export interface GameCenterLeaderboardSetLocalizationRetrieveImageParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterLeaderboardSetLocalization'>;
}

GameCenterLeaderboardSetLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterLeaderboardSetLocalizations {
  export {
    type LeaderboardSetLocalization as LeaderboardSetLocalization,
    type LeaderboardSetLocalizationResponse as LeaderboardSetLocalizationResponse,
    type GameCenterLeaderboardSetLocalizationCreateParams as GameCenterLeaderboardSetLocalizationCreateParams,
    type GameCenterLeaderboardSetLocalizationRetrieveParams as GameCenterLeaderboardSetLocalizationRetrieveParams,
    type GameCenterLeaderboardSetLocalizationUpdateParams as GameCenterLeaderboardSetLocalizationUpdateParams,
    type GameCenterLeaderboardSetLocalizationRetrieveImageParams as GameCenterLeaderboardSetLocalizationRetrieveImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveImageResponse as RelationshipRetrieveImageResponse,
  };
}
