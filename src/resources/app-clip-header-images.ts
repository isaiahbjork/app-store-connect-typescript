// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppClipDefaultExperienceLocalizationsAPI from './app-clip-default-experience-localizations/app-clip-default-experience-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppClipHeaderImages extends APIResource {
  create(
    body: AppClipHeaderImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipHeaderImageResponse> {
    return this._client.post('/v1/appClipHeaderImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppClipHeaderImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipHeaderImageResponse> {
    return this._client.get(path`/v1/appClipHeaderImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppClipHeaderImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipHeaderImageResponse> {
    return this._client.patch(path`/v1/appClipHeaderImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appClipHeaderImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppClipHeaderImage {
  id: string;

  type: 'appClipHeaderImages';

  attributes?: AppClipHeaderImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppClipHeaderImage.Relationships;
}

export namespace AppClipHeaderImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    appClipDefaultExperienceLocalization?: Relationships.AppClipDefaultExperienceLocalization;
  }

  export namespace Relationships {
    export interface AppClipDefaultExperienceLocalization {
      data?: AppClipDefaultExperienceLocalization.Data;
    }

    export namespace AppClipDefaultExperienceLocalization {
      export interface Data {
        id: string;

        type: 'appClipDefaultExperienceLocalizations';
      }
    }
  }
}

export interface AppClipHeaderImageResponse {
  data: AppClipHeaderImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppClipDefaultExperienceLocalizationsAPI.AppClipDefaultExperienceLocalization>;
}

export interface AppClipHeaderImageCreateParams {
  data: AppClipHeaderImageCreateParams.Data;
}

export namespace AppClipHeaderImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appClipHeaderImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      appClipDefaultExperienceLocalization: Relationships.AppClipDefaultExperienceLocalization;
    }

    export namespace Relationships {
      export interface AppClipDefaultExperienceLocalization {
        data: AppClipDefaultExperienceLocalization.Data;
      }

      export namespace AppClipDefaultExperienceLocalization {
        export interface Data {
          id: string;

          type: 'appClipDefaultExperienceLocalizations';
        }
      }
    }
  }
}

export interface AppClipHeaderImageRetrieveParams {
  /**
   * the fields to include for returned resources of type appClipHeaderImages
   */
  'fields[appClipHeaderImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appClipDefaultExperienceLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClipDefaultExperienceLocalization'>;
}

export interface AppClipHeaderImageUpdateParams {
  data: AppClipHeaderImageUpdateParams.Data;
}

export namespace AppClipHeaderImageUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipHeaderImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppClipHeaderImages {
  export {
    type AppClipHeaderImage as AppClipHeaderImage,
    type AppClipHeaderImageResponse as AppClipHeaderImageResponse,
    type AppClipHeaderImageCreateParams as AppClipHeaderImageCreateParams,
    type AppClipHeaderImageRetrieveParams as AppClipHeaderImageRetrieveParams,
    type AppClipHeaderImageUpdateParams as AppClipHeaderImageUpdateParams,
  };
}
