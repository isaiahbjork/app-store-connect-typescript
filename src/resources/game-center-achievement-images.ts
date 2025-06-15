// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as GameCenterAchievementLocalizationsAPI from './game-center-achievement-localizations/game-center-achievement-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterAchievementImages extends APIResource {
  create(
    body: GameCenterAchievementImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementImageResponse> {
    return this._client.post('/v1/gameCenterAchievementImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterAchievementImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementImageResponse> {
    return this._client.get(path`/v1/gameCenterAchievementImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterAchievementImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterAchievementImageResponse> {
    return this._client.patch(path`/v1/gameCenterAchievementImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterAchievementImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterAchievementImage {
  id: string;

  type: 'gameCenterAchievementImages';

  attributes?: GameCenterAchievementImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterAchievementImage.Relationships;
}

export namespace GameCenterAchievementImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    gameCenterAchievementLocalization?: Relationships.GameCenterAchievementLocalization;
  }

  export namespace Relationships {
    export interface GameCenterAchievementLocalization {
      data?: GameCenterAchievementLocalization.Data;
    }

    export namespace GameCenterAchievementLocalization {
      export interface Data {
        id: string;

        type: 'gameCenterAchievementLocalizations';
      }
    }
  }
}

export interface GameCenterAchievementImageResponse {
  data: GameCenterAchievementImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterAchievementLocalizationsAPI.AchievementLocalization>;
}

export interface GameCenterAchievementImageCreateParams {
  data: GameCenterAchievementImageCreateParams.Data;
}

export namespace GameCenterAchievementImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterAchievementImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      gameCenterAchievementLocalization: Relationships.GameCenterAchievementLocalization;
    }

    export namespace Relationships {
      export interface GameCenterAchievementLocalization {
        data: GameCenterAchievementLocalization.Data;
      }

      export namespace GameCenterAchievementLocalization {
        export interface Data {
          id: string;

          type: 'gameCenterAchievementLocalizations';
        }
      }
    }
  }
}

export interface GameCenterAchievementImageRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'gameCenterAchievementLocalization'>;
}

export interface GameCenterAchievementImageUpdateParams {
  data: GameCenterAchievementImageUpdateParams.Data;
}

export namespace GameCenterAchievementImageUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAchievementImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      uploaded?: boolean;
    }
  }
}

export declare namespace GameCenterAchievementImages {
  export {
    type GameCenterAchievementImage as GameCenterAchievementImage,
    type GameCenterAchievementImageResponse as GameCenterAchievementImageResponse,
    type GameCenterAchievementImageCreateParams as GameCenterAchievementImageCreateParams,
    type GameCenterAchievementImageRetrieveParams as GameCenterAchievementImageRetrieveParams,
    type GameCenterAchievementImageUpdateParams as GameCenterAchievementImageUpdateParams,
  };
}
