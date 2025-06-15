// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AppEventScreenshotsAPI from './app-event-screenshots';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppEventLocalizationsAPI from './app-event-localizations/app-event-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppEventScreenshots extends APIResource {
  create(
    body: AppEventScreenshotCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppEventScreenshotResponse> {
    return this._client.post('/v1/appEventScreenshots', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppEventScreenshotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventScreenshotResponse> {
    return this._client.get(path`/v1/appEventScreenshots/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppEventScreenshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppEventScreenshotResponse> {
    return this._client.patch(path`/v1/appEventScreenshots/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appEventScreenshots/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AppEventAssetType = 'EVENT_CARD' | 'EVENT_DETAILS_PAGE';

export interface AppEventScreenshot {
  id: string;

  type: 'appEventScreenshots';

  attributes?: AppEventScreenshot.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppEventScreenshot.Relationships;
}

export namespace AppEventScreenshot {
  export interface Attributes {
    appEventAssetType?: AppEventScreenshotsAPI.AppEventAssetType;

    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    assetToken?: string;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
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

export interface AppEventScreenshotResponse {
  data: AppEventScreenshot;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppEventLocalizationsAPI.AppEventLocalization>;
}

export interface AppEventScreenshotCreateParams {
  data: AppEventScreenshotCreateParams.Data;
}

export namespace AppEventScreenshotCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appEventScreenshots';
  }

  export namespace Data {
    export interface Attributes {
      appEventAssetType: AppEventScreenshotsAPI.AppEventAssetType;

      fileName: string;

      fileSize: number;
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

export interface AppEventScreenshotRetrieveParams {
  /**
   * the fields to include for returned resources of type appEventScreenshots
   */
  'fields[appEventScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'imageAsset'
    | 'assetToken'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appEventAssetType'
    | 'appEventLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appEventLocalization'>;
}

export interface AppEventScreenshotUpdateParams {
  data: AppEventScreenshotUpdateParams.Data;
}

export namespace AppEventScreenshotUpdateParams {
  export interface Data {
    id: string;

    type: 'appEventScreenshots';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      uploaded?: boolean;
    }
  }
}

export declare namespace AppEventScreenshots {
  export {
    type AppEventAssetType as AppEventAssetType,
    type AppEventScreenshot as AppEventScreenshot,
    type AppEventScreenshotResponse as AppEventScreenshotResponse,
    type AppEventScreenshotCreateParams as AppEventScreenshotCreateParams,
    type AppEventScreenshotRetrieveParams as AppEventScreenshotRetrieveParams,
    type AppEventScreenshotUpdateParams as AppEventScreenshotUpdateParams,
  };
}
