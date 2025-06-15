// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as GameCenterLeaderboardSetLocalizationsAPI from './game-center-leaderboard-set-localizations/game-center-leaderboard-set-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterLeaderboardSetImages extends APIResource {
  create(
    body: GameCenterLeaderboardSetImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetImageResponse> {
    return this._client.post('/v1/gameCenterLeaderboardSetImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterLeaderboardSetImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetImageResponse> {
    return this._client.get(path`/v1/gameCenterLeaderboardSetImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterLeaderboardSetImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterLeaderboardSetImageResponse> {
    return this._client.patch(path`/v1/gameCenterLeaderboardSetImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterLeaderboardSetImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterLeaderboardSetImage {
  id: string;

  type: 'gameCenterLeaderboardSetImages';

  attributes?: GameCenterLeaderboardSetImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterLeaderboardSetImage.Relationships;
}

export namespace GameCenterLeaderboardSetImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    gameCenterLeaderboardSetLocalization?: Relationships.GameCenterLeaderboardSetLocalization;
  }

  export namespace Relationships {
    export interface GameCenterLeaderboardSetLocalization {
      data?: GameCenterLeaderboardSetLocalization.Data;
    }

    export namespace GameCenterLeaderboardSetLocalization {
      export interface Data {
        id: string;

        type: 'gameCenterLeaderboardSetLocalizations';
      }
    }
  }
}

export interface GameCenterLeaderboardSetImageResponse {
  data: GameCenterLeaderboardSetImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterLeaderboardSetLocalizationsAPI.LeaderboardSetLocalization>;
}

export interface GameCenterLeaderboardSetImageCreateParams {
  data: GameCenterLeaderboardSetImageCreateParams.Data;
}

export namespace GameCenterLeaderboardSetImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterLeaderboardSetImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      gameCenterLeaderboardSetLocalization: Relationships.GameCenterLeaderboardSetLocalization;
    }

    export namespace Relationships {
      export interface GameCenterLeaderboardSetLocalization {
        data: GameCenterLeaderboardSetLocalization.Data;
      }

      export namespace GameCenterLeaderboardSetLocalization {
        export interface Data {
          id: string;

          type: 'gameCenterLeaderboardSetLocalizations';
        }
      }
    }
  }
}

export interface GameCenterLeaderboardSetImageRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterLeaderboardSetLocalization'>;
}

export interface GameCenterLeaderboardSetImageUpdateParams {
  data: GameCenterLeaderboardSetImageUpdateParams.Data;
}

export namespace GameCenterLeaderboardSetImageUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterLeaderboardSetImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      uploaded?: boolean;
    }
  }
}

export declare namespace GameCenterLeaderboardSetImages {
  export {
    type GameCenterLeaderboardSetImage as GameCenterLeaderboardSetImage,
    type GameCenterLeaderboardSetImageResponse as GameCenterLeaderboardSetImageResponse,
    type GameCenterLeaderboardSetImageCreateParams as GameCenterLeaderboardSetImageCreateParams,
    type GameCenterLeaderboardSetImageRetrieveParams as GameCenterLeaderboardSetImageRetrieveParams,
    type GameCenterLeaderboardSetImageUpdateParams as GameCenterLeaderboardSetImageUpdateParams,
  };
}
