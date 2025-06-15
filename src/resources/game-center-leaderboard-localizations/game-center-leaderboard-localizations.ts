// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GameCenterLeaderboardLocalizationsAPI from './game-center-leaderboard-localizations';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as GameCenterLeaderboardImagesAPI from '../game-center-leaderboard-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveGameCenterLeaderboardImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterLeaderboardsAPI from '../game-center-leaderboards/game-center-leaderboards';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterLeaderboardLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterLeaderboardLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeaderboardLocalizationResponse> {
    return this._client.post('/v1/gameCenterLeaderboardLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaderboardLocalizationResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LeaderboardLocalizationResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboardLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveGameCenterLeaderboardImage(
    id: string,
    query: GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardImagesAPI.GameCenterLeaderboardImageResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardLocalizations/${id}/gameCenterLeaderboardImage`, {
      query,
      ...options,
    });
  }
}

export type LeaderboardFormatter =
  | 'INTEGER'
  | 'DECIMAL_POINT_1_PLACE'
  | 'DECIMAL_POINT_2_PLACE'
  | 'DECIMAL_POINT_3_PLACE'
  | 'ELAPSED_TIME_CENTISECOND'
  | 'ELAPSED_TIME_MINUTE'
  | 'ELAPSED_TIME_SECOND'
  | 'MONEY_POUND_DECIMAL'
  | 'MONEY_POUND'
  | 'MONEY_DOLLAR_DECIMAL'
  | 'MONEY_DOLLAR'
  | 'MONEY_EURO_DECIMAL'
  | 'MONEY_EURO'
  | 'MONEY_FRANC_DECIMAL'
  | 'MONEY_FRANC'
  | 'MONEY_KRONER_DECIMAL'
  | 'MONEY_KRONER'
  | 'MONEY_YEN';

export interface LeaderboardLocalization {
  id: string;

  type: 'gameCenterLeaderboardLocalizations';

  attributes?: LeaderboardLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: LeaderboardLocalization.Relationships;
}

export namespace LeaderboardLocalization {
  export interface Attributes {
    formatterOverride?: GameCenterLeaderboardLocalizationsAPI.LeaderboardFormatter;

    formatterSuffix?: string;

    formatterSuffixSingular?: string;

    locale?: string;

    name?: string;
  }

  export interface Relationships {
    gameCenterLeaderboard?: Relationships.GameCenterLeaderboard;

    gameCenterLeaderboardImage?: Relationships.GameCenterLeaderboardImage;
  }

  export namespace Relationships {
    export interface GameCenterLeaderboard {
      data?: GameCenterLeaderboard.Data;
    }

    export namespace GameCenterLeaderboard {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboards';
      }
    }

    export interface GameCenterLeaderboardImage {
      data?: GameCenterLeaderboardImage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterLeaderboardImage {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardImages';
      }
    }
  }
}

export interface LeaderboardLocalizationResponse {
  data: LeaderboardLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterLeaderboardsAPI.GameCenterLeaderboard
    | GameCenterLeaderboardImagesAPI.GameCenterLeaderboardImage
  >;
}

export interface GameCenterLeaderboardLocalizationCreateParams {
  data: GameCenterLeaderboardLocalizationCreateParams.Data;
}

export namespace GameCenterLeaderboardLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;

      formatterOverride?: GameCenterLeaderboardLocalizationsAPI.LeaderboardFormatter;

      formatterSuffix?: string;

      formatterSuffixSingular?: string;
    }

    export interface Relationships {
      gameCenterLeaderboard: Relationships.GameCenterLeaderboard;
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
    }
  }
}

export interface GameCenterLeaderboardLocalizationRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardImage'>;
}

export interface GameCenterLeaderboardLocalizationUpdateParams {
  data: GameCenterLeaderboardLocalizationUpdateParams.Data;
}

export namespace GameCenterLeaderboardLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      formatterOverride?: GameCenterLeaderboardLocalizationsAPI.LeaderboardFormatter;

      formatterSuffix?: string;

      formatterSuffixSingular?: string;

      name?: string;
    }
  }
}

export interface GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterLeaderboardLocalization'>;
}

GameCenterLeaderboardLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterLeaderboardLocalizations {
  export {
    type LeaderboardFormatter as LeaderboardFormatter,
    type LeaderboardLocalization as LeaderboardLocalization,
    type LeaderboardLocalizationResponse as LeaderboardLocalizationResponse,
    type GameCenterLeaderboardLocalizationCreateParams as GameCenterLeaderboardLocalizationCreateParams,
    type GameCenterLeaderboardLocalizationRetrieveParams as GameCenterLeaderboardLocalizationRetrieveParams,
    type GameCenterLeaderboardLocalizationUpdateParams as GameCenterLeaderboardLocalizationUpdateParams,
    type GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams as GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveGameCenterLeaderboardImageResponse as RelationshipRetrieveGameCenterLeaderboardImageResponse,
  };
}
