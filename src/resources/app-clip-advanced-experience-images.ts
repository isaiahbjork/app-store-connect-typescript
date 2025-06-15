// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppClipAdvancedExperienceImages extends APIResource {
  create(
    body: AppClipAdvancedExperienceImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipAdvancedExperienceImageResponse> {
    return this._client.post('/v1/appClipAdvancedExperienceImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppClipAdvancedExperienceImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipAdvancedExperienceImageResponse> {
    return this._client.get(path`/v1/appClipAdvancedExperienceImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppClipAdvancedExperienceImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipAdvancedExperienceImageResponse> {
    return this._client.patch(path`/v1/appClipAdvancedExperienceImages/${id}`, { body, ...options });
  }
}

export interface AppClipAdvancedExperienceImage {
  id: string;

  type: 'appClipAdvancedExperienceImages';

  attributes?: AppClipAdvancedExperienceImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AppClipAdvancedExperienceImage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }
}

export interface AppClipAdvancedExperienceImageResponse {
  data: AppClipAdvancedExperienceImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppMediaAssetState {
  errors?: Array<AppMediaStateError>;

  state?: 'AWAITING_UPLOAD' | 'UPLOAD_COMPLETE' | 'COMPLETE' | 'FAILED';

  warnings?: Array<AppMediaStateError>;
}

export interface AppMediaStateError {
  code?: string;

  description?: string;
}

export interface HTTPHeader {
  name?: string;

  value?: string;
}

export interface ImageAsset {
  height?: number;

  templateUrl?: string;

  width?: number;
}

export interface UploadOperation {
  length?: number;

  method?: string;

  offset?: number;

  requestHeaders?: Array<HTTPHeader>;

  url?: string;
}

export interface AppClipAdvancedExperienceImageCreateParams {
  data: AppClipAdvancedExperienceImageCreateParams.Data;
}

export namespace AppClipAdvancedExperienceImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'appClipAdvancedExperienceImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }
  }
}

export interface AppClipAdvancedExperienceImageRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appClipAdvancedExperienceImages
   */
  'fields[appClipAdvancedExperienceImages]'?: Array<
    'fileSize' | 'fileName' | 'sourceFileChecksum' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

export interface AppClipAdvancedExperienceImageUpdateParams {
  data: AppClipAdvancedExperienceImageUpdateParams.Data;
}

export namespace AppClipAdvancedExperienceImageUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipAdvancedExperienceImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppClipAdvancedExperienceImages {
  export {
    type AppClipAdvancedExperienceImage as AppClipAdvancedExperienceImage,
    type AppClipAdvancedExperienceImageResponse as AppClipAdvancedExperienceImageResponse,
    type AppMediaAssetState as AppMediaAssetState,
    type AppMediaStateError as AppMediaStateError,
    type HTTPHeader as HTTPHeader,
    type ImageAsset as ImageAsset,
    type UploadOperation as UploadOperation,
    type AppClipAdvancedExperienceImageCreateParams as AppClipAdvancedExperienceImageCreateParams,
    type AppClipAdvancedExperienceImageRetrieveParams as AppClipAdvancedExperienceImageRetrieveParams,
    type AppClipAdvancedExperienceImageUpdateParams as AppClipAdvancedExperienceImageUpdateParams,
  };
}
