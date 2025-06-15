// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppScreenshotSetsAPI from './app-screenshot-sets/app-screenshot-sets';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppScreenshots extends APIResource {
  create(body: AppScreenshotCreateParams, options?: RequestOptions): APIPromise<AppScreenshotResponse> {
    return this._client.post('/v1/appScreenshots', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppScreenshotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppScreenshotResponse> {
    return this._client.get(path`/v1/appScreenshots/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppScreenshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppScreenshotResponse> {
    return this._client.patch(path`/v1/appScreenshots/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appScreenshots/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppScreenshot {
  id: string;

  type: 'appScreenshots';

  attributes?: AppScreenshot.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppScreenshot.Relationships;
}

export namespace AppScreenshot {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    assetToken?: string;

    assetType?: string;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    appScreenshotSet?: Relationships.AppScreenshotSet;
  }

  export namespace Relationships {
    export interface AppScreenshotSet {
      data?: AppScreenshotSet.Data;
    }

    export namespace AppScreenshotSet {
      export interface Data {
        id: string;

        type: 'appScreenshotSets';
      }
    }
  }
}

export interface AppScreenshotResponse {
  data: AppScreenshot;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppScreenshotSetsAPI.AppScreenshotSet>;
}

export interface AppScreenshotCreateParams {
  data: AppScreenshotCreateParams.Data;
}

export namespace AppScreenshotCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appScreenshots';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      appScreenshotSet: Relationships.AppScreenshotSet;
    }

    export namespace Relationships {
      export interface AppScreenshotSet {
        data: AppScreenshotSet.Data;
      }

      export namespace AppScreenshotSet {
        export interface Data {
          id: string;

          type: 'appScreenshotSets';
        }
      }
    }
  }
}

export interface AppScreenshotRetrieveParams {
  /**
   * the fields to include for returned resources of type appScreenshots
   */
  'fields[appScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appScreenshotSet'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appScreenshotSet'>;
}

export interface AppScreenshotUpdateParams {
  data: AppScreenshotUpdateParams.Data;
}

export namespace AppScreenshotUpdateParams {
  export interface Data {
    id: string;

    type: 'appScreenshots';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppScreenshots {
  export {
    type AppScreenshot as AppScreenshot,
    type AppScreenshotResponse as AppScreenshotResponse,
    type AppScreenshotCreateParams as AppScreenshotCreateParams,
    type AppScreenshotRetrieveParams as AppScreenshotRetrieveParams,
    type AppScreenshotUpdateParams as AppScreenshotUpdateParams,
  };
}
