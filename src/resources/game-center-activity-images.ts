// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterActivityImages extends APIResource {
  create(
    body: GameCenterActivityImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityImageResponse> {
    return this._client.post('/v1/gameCenterActivityImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterActivityImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityImageResponse> {
    return this._client.get(path`/v1/gameCenterActivityImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterActivityImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityImageResponse> {
    return this._client.patch(path`/v1/gameCenterActivityImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterActivityImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterActivityImage {
  id: string;

  type: 'gameCenterActivityImages';

  attributes?: GameCenterActivityImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace GameCenterActivityImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }
}

export interface GameCenterActivityImageResponse {
  data: GameCenterActivityImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface GameCenterActivityImageCreateParams {
  data: GameCenterActivityImageCreateParams.Data;
}

export namespace GameCenterActivityImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterActivityImages';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      localization?: Relationships.Localization;

      version?: Relationships.Version;
    }

    export namespace Relationships {
      export interface Localization {
        data?: Localization.Data;
      }

      export namespace Localization {
        export interface Data {
          id: string;

          type: 'gameCenterActivityLocalizations';
        }
      }

      export interface Version {
        data?: Version.Data;
      }

      export namespace Version {
        export interface Data {
          id: string;

          type: 'gameCenterActivityVersions';
        }
      }
    }
  }
}

export interface GameCenterActivityImageRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterActivityImages
   */
  'fields[gameCenterActivityImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

export interface GameCenterActivityImageUpdateParams {
  data: GameCenterActivityImageUpdateParams.Data;
}

export namespace GameCenterActivityImageUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterActivityImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      uploaded?: boolean;
    }
  }
}

export declare namespace GameCenterActivityImages {
  export {
    type GameCenterActivityImage as GameCenterActivityImage,
    type GameCenterActivityImageResponse as GameCenterActivityImageResponse,
    type GameCenterActivityImageCreateParams as GameCenterActivityImageCreateParams,
    type GameCenterActivityImageRetrieveParams as GameCenterActivityImageRetrieveParams,
    type GameCenterActivityImageUpdateParams as GameCenterActivityImageUpdateParams,
  };
}
