// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as GameCenterLeaderboardLocalizationsAPI from './game-center-leaderboard-localizations/game-center-leaderboard-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterLeaderboardImages extends APIResource {
  create(
    body: GameCenterLeaderboardImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardImageResponse> {
    return this._client.post('/v1/gameCenterLeaderboardImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardImageResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardImageResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboardImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterLeaderboardImage {
  id: string;

  type: 'gameCenterLeaderboardImages';

  attributes?: GameCenterLeaderboardImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterLeaderboardImage.Relationships;
}

export namespace GameCenterLeaderboardImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    gameCenterLeaderboardLocalization?: Relationships.GameCenterLeaderboardLocalization;
  }

  export namespace Relationships {
    export interface GameCenterLeaderboardLocalization {
      data?: GameCenterLeaderboardLocalization.Data;
    }

    export namespace GameCenterLeaderboardLocalization {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardLocalizations';
      }
    }
  }
}

export interface GameCenterLeaderboardImageResponse {
  data: GameCenterLeaderboardImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterLeaderboardLocalizationsAPI.LeaderboardLocalization>;
}

export interface GameCenterLeaderboardImageCreateParams {
  data: GameCenterLeaderboardImageCreateParams.Data;
}

export namespace GameCenterLeaderboardImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      gameCenterLeaderboardLocalization: Relationships.GameCenterLeaderboardLocalization;
    }

    export namespace Relationships {
      export interface GameCenterLeaderboardLocalization {
        data: GameCenterLeaderboardLocalization.Data;
      }

      export namespace GameCenterLeaderboardLocalization {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboardLocalizations';
        }
      }
    }
  }
}

export interface GameCenterLeaderboardImageRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterLeaderboardLocalization'>;
}

export interface GameCenterLeaderboardImageUpdateParams {
  data: GameCenterLeaderboardImageUpdateParams.Data;
}

export namespace GameCenterLeaderboardImageUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      uploaded?: boolean;
    }
  }
}

export declare namespace GameCenterLeaderboardImages {
  export {
    type GameCenterLeaderboardImage as GameCenterLeaderboardImage,
    type GameCenterLeaderboardImageResponse as GameCenterLeaderboardImageResponse,
    type GameCenterLeaderboardImageCreateParams as GameCenterLeaderboardImageCreateParams,
    type GameCenterLeaderboardImageRetrieveParams as GameCenterLeaderboardImageRetrieveParams,
    type GameCenterLeaderboardImageUpdateParams as GameCenterLeaderboardImageUpdateParams,
  };
}
