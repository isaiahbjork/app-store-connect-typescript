// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as InAppPurchasesAPI from './in-app-purchases/in-app-purchases';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InAppPurchaseAppStoreReviewScreenshots extends APIResource {
  create(
    body: InAppPurchaseAppStoreReviewScreenshotCreateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAppStoreReviewScreenshotResponse> {
    return this._client.post('/v1/inAppPurchaseAppStoreReviewScreenshots', { body, ...options });
  }

  retrieve(
    id: string,
    query: InAppPurchaseAppStoreReviewScreenshotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAppStoreReviewScreenshotResponse> {
    return this._client.get(path`/v1/inAppPurchaseAppStoreReviewScreenshots/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: InAppPurchaseAppStoreReviewScreenshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAppStoreReviewScreenshotResponse> {
    return this._client.patch(path`/v1/inAppPurchaseAppStoreReviewScreenshots/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/inAppPurchaseAppStoreReviewScreenshots/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InAppPurchaseAppStoreReviewScreenshot {
  id: string;

  type: 'inAppPurchaseAppStoreReviewScreenshots';

  attributes?: InAppPurchaseAppStoreReviewScreenshot.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchaseAppStoreReviewScreenshot.Relationships;
}

export namespace InAppPurchaseAppStoreReviewScreenshot {
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
    inAppPurchaseV2?: Relationships.InAppPurchaseV2;
  }

  export namespace Relationships {
    export interface InAppPurchaseV2 {
      data?: InAppPurchaseV2.Data;
    }

    export namespace InAppPurchaseV2 {
      export interface Data {
        id: string;

        type: 'inAppPurchases';
      }
    }
  }
}

export interface InAppPurchaseAppStoreReviewScreenshotResponse {
  data: InAppPurchaseAppStoreReviewScreenshot;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2>;
}

export interface InAppPurchaseAppStoreReviewScreenshotCreateParams {
  data: InAppPurchaseAppStoreReviewScreenshotCreateParams.Data;
}

export namespace InAppPurchaseAppStoreReviewScreenshotCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'inAppPurchaseAppStoreReviewScreenshots';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      inAppPurchaseV2: Relationships.InAppPurchaseV2;
    }

    export namespace Relationships {
      export interface InAppPurchaseV2 {
        data: InAppPurchaseV2.Data;
      }

      export namespace InAppPurchaseV2 {
        export interface Data {
          id: string;

          type: 'inAppPurchases';
        }
      }
    }
  }
}

export interface InAppPurchaseAppStoreReviewScreenshotRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * inAppPurchaseAppStoreReviewScreenshots
   */
  'fields[inAppPurchaseAppStoreReviewScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'inAppPurchaseV2'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2'>;
}

export interface InAppPurchaseAppStoreReviewScreenshotUpdateParams {
  data: InAppPurchaseAppStoreReviewScreenshotUpdateParams.Data;
}

export namespace InAppPurchaseAppStoreReviewScreenshotUpdateParams {
  export interface Data {
    id: string;

    type: 'inAppPurchaseAppStoreReviewScreenshots';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace InAppPurchaseAppStoreReviewScreenshots {
  export {
    type InAppPurchaseAppStoreReviewScreenshot as InAppPurchaseAppStoreReviewScreenshot,
    type InAppPurchaseAppStoreReviewScreenshotResponse as InAppPurchaseAppStoreReviewScreenshotResponse,
    type InAppPurchaseAppStoreReviewScreenshotCreateParams as InAppPurchaseAppStoreReviewScreenshotCreateParams,
    type InAppPurchaseAppStoreReviewScreenshotRetrieveParams as InAppPurchaseAppStoreReviewScreenshotRetrieveParams,
    type InAppPurchaseAppStoreReviewScreenshotUpdateParams as InAppPurchaseAppStoreReviewScreenshotUpdateParams,
  };
}
