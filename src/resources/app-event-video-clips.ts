// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AppEventVideoClipsAPI from './app-event-video-clips';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppEventScreenshotsAPI from './app-event-screenshots';
import * as AppEventLocalizationsAPI from './app-event-localizations/app-event-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppEventVideoClips extends APIResource {
  create(
    body: AppEventVideoClipCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppEventVideoClipResponse> {
    return this._client.post('/v1/appEventVideoClips', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppEventVideoClipRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventVideoClipResponse> {
    return this._client.get(path`/v1/appEventVideoClips/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppEventVideoClipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppEventVideoClipResponse> {
    return this._client.patch(path`/v1/appEventVideoClips/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appEventVideoClips/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppEventVideoClip {
  id: string;

  type: 'appEventVideoClips';

  attributes?: AppEventVideoClip.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppEventVideoClip.Relationships;
}

export namespace AppEventVideoClip {
  export interface Attributes {
    appEventAssetType?: AppEventScreenshotsAPI.AppEventAssetType;

    /**
     * @deprecated
     */
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    previewFrameImage?: AppEventVideoClipsAPI.PreviewFrameImage;

    previewFrameTimeCode?: string;

    /**
     * @deprecated
     */
    previewImage?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;

    videoDeliveryState?: AppEventVideoClipsAPI.AppMediaVideoState;

    videoUrl?: string;
  }

  export interface Relationships {
    appEventLocalization?: Relationships.AppEventLocalization;
  }

  export namespace Relationships {
    export interface AppEventLocalization {
      data?: AppEventLocalization.Data;
    }

    export namespace AppEventLocalization {
      export interface Data {
        id: string;

        type: 'appEventLocalizations';
      }
    }
  }
}

export interface AppEventVideoClipResponse {
  data: AppEventVideoClip;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppEventLocalizationsAPI.AppEventLocalization>;
}

export interface AppMediaVideoState {
  errors?: Array<AppClipAdvancedExperienceImagesAPI.AppMediaStateError>;

  state?: 'AWAITING_UPLOAD' | 'UPLOAD_COMPLETE' | 'PROCESSING' | 'COMPLETE' | 'FAILED';

  warnings?: Array<AppClipAdvancedExperienceImagesAPI.AppMediaStateError>;
}

export interface PreviewFrameImage {
  image?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

  state?: PreviewFrameImage.State;
}

export namespace PreviewFrameImage {
  export interface State {
    errors?: Array<AppClipAdvancedExperienceImagesAPI.AppMediaStateError>;

    state?: 'PROCESSING' | 'COMPLETE' | 'FAILED';

    warnings?: Array<AppClipAdvancedExperienceImagesAPI.AppMediaStateError>;
  }
}

export interface AppEventVideoClipCreateParams {
  data: AppEventVideoClipCreateParams.Data;
}

export namespace AppEventVideoClipCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appEventVideoClips';
  }

  export namespace Data {
    export interface Attributes {
      appEventAssetType: AppEventScreenshotsAPI.AppEventAssetType;

      fileName: string;

      fileSize: number;

      previewFrameTimeCode?: string;
    }

    export interface Relationships {
      appEventLocalization: Relationships.AppEventLocalization;
    }

    export namespace Relationships {
      export interface AppEventLocalization {
        data: AppEventLocalization.Data;
      }

      export namespace AppEventLocalization {
        export interface Data {
          id: string;

          type: 'appEventLocalizations';
        }
      }
    }
  }
}

export interface AppEventVideoClipRetrieveParams {
  /**
   * the fields to include for returned resources of type appEventVideoClips
   */
  'fields[appEventVideoClips]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'previewFrameTimeCode'
    | 'videoUrl'
    | 'previewFrameImage'
    | 'previewImage'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'videoDeliveryState'
    | 'appEventAssetType'
    | 'appEventLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appEventLocalization'>;
}

export interface AppEventVideoClipUpdateParams {
  data: AppEventVideoClipUpdateParams.Data;
}

export namespace AppEventVideoClipUpdateParams {
  export interface Data {
    id: string;

    type: 'appEventVideoClips';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      previewFrameTimeCode?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppEventVideoClips {
  export {
    type AppEventVideoClip as AppEventVideoClip,
    type AppEventVideoClipResponse as AppEventVideoClipResponse,
    type AppMediaVideoState as AppMediaVideoState,
    type PreviewFrameImage as PreviewFrameImage,
    type AppEventVideoClipCreateParams as AppEventVideoClipCreateParams,
    type AppEventVideoClipRetrieveParams as AppEventVideoClipRetrieveParams,
    type AppEventVideoClipUpdateParams as AppEventVideoClipUpdateParams,
  };
}
