// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterChallengeImages extends APIResource {
  create(
    body: GameCenterChallengeImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeImageResponse> {
    return this._client.post('/v1/gameCenterChallengeImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterChallengeImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeImageResponse> {
    return this._client.get(path`/v1/gameCenterChallengeImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterChallengeImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeImageResponse> {
    return this._client.patch(path`/v1/gameCenterChallengeImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterChallengeImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterChallengeImage {
  id: string;

  type: 'gameCenterChallengeImages';

  attributes?: GameCenterChallengeImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace GameCenterChallengeImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }
}

export interface GameCenterChallengeImageResponse {
  data: GameCenterChallengeImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface GameCenterChallengeImageCreateParams {
  data: GameCenterChallengeImageCreateParams.Data;
}

export namespace GameCenterChallengeImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterChallengeImages';

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

          type: 'gameCenterChallengeLocalizations';
        }
      }

      export interface Version {
        data?: Version.Data;
      }

      export namespace Version {
        export interface Data {
          id: string;

          type: 'gameCenterChallengeVersions';
        }
      }
    }
  }
}

export interface GameCenterChallengeImageRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterChallengeImages
   */
  'fields[gameCenterChallengeImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

export interface GameCenterChallengeImageUpdateParams {
  data: GameCenterChallengeImageUpdateParams.Data;
}

export namespace GameCenterChallengeImageUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterChallengeImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      uploaded?: boolean;
    }
  }
}

export declare namespace GameCenterChallengeImages {
  export {
    type GameCenterChallengeImage as GameCenterChallengeImage,
    type GameCenterChallengeImageResponse as GameCenterChallengeImageResponse,
    type GameCenterChallengeImageCreateParams as GameCenterChallengeImageCreateParams,
    type GameCenterChallengeImageRetrieveParams as GameCenterChallengeImageRetrieveParams,
    type GameCenterChallengeImageUpdateParams as GameCenterChallengeImageUpdateParams,
  };
}
