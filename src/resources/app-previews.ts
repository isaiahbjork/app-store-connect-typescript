// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppEventVideoClipsAPI from './app-event-video-clips';
import * as AppPreviewSetsAPI from './app-preview-sets/app-preview-sets';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppPreviews extends APIResource {
  create(body: AppPreviewCreateParams, options?: RequestOptions): APIPromise<AppPreviewResponse> {
    return this._client.post('/v1/appPreviews', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppPreviewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPreviewResponse> {
    return this._client.get(path`/v1/appPreviews/${id}`, { query, ...options });
  }

  update(id: string, body: AppPreviewUpdateParams, options?: RequestOptions): APIPromise<AppPreviewResponse> {
    return this._client.patch(path`/v1/appPreviews/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appPreviews/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppPreview {
  id: string;

  type: 'appPreviews';

  attributes?: AppPreview.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppPreview.Relationships;
}

export namespace AppPreview {
  export interface Attributes {
    /**
     * @deprecated
     */
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    mimeType?: string;

    previewFrameImage?: AppEventVideoClipsAPI.PreviewFrameImage;

    previewFrameTimeCode?: string;

    /**
     * @deprecated
     */
    previewImage?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;

    videoDeliveryState?: AppEventVideoClipsAPI.AppMediaVideoState;

    videoUrl?: string;
  }

  export interface Relationships {
    appPreviewSet?: Relationships.AppPreviewSet;
  }

  export namespace Relationships {
    export interface AppPreviewSet {
      data?: AppPreviewSet.Data;
    }

    export namespace AppPreviewSet {
      export interface Data {
        id: string;

        type: 'appPreviewSets';
      }
    }
  }
}

export interface AppPreviewResponse {
  data: AppPreview;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPreviewSetsAPI.AppPreviewSet>;
}

export interface AppPreviewCreateParams {
  data: AppPreviewCreateParams.Data;
}

export namespace AppPreviewCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appPreviews';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;

      mimeType?: string;

      previewFrameTimeCode?: string;
    }

    export interface Relationships {
      appPreviewSet: Relationships.AppPreviewSet;
    }

    export namespace Relationships {
      export interface AppPreviewSet {
        data: AppPreviewSet.Data;
      }

      export namespace AppPreviewSet {
        export interface Data {
          id: string;

          type: 'appPreviewSets';
        }
      }
    }
  }
}

export interface AppPreviewRetrieveParams {
  /**
   * the fields to include for returned resources of type appPreviews
   */
  'fields[appPreviews]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'previewFrameTimeCode'
    | 'mimeType'
    | 'videoUrl'
    | 'previewFrameImage'
    | 'previewImage'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'videoDeliveryState'
    | 'appPreviewSet'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appPreviewSet'>;
}

export interface AppPreviewUpdateParams {
  data: AppPreviewUpdateParams.Data;
}

export namespace AppPreviewUpdateParams {
  export interface Data {
    id: string;

    type: 'appPreviews';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      previewFrameTimeCode?: string;

      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppPreviews {
  export {
    type AppPreview as AppPreview,
    type AppPreviewResponse as AppPreviewResponse,
    type AppPreviewCreateParams as AppPreviewCreateParams,
    type AppPreviewRetrieveParams as AppPreviewRetrieveParams,
    type AppPreviewUpdateParams as AppPreviewUpdateParams,
  };
}
