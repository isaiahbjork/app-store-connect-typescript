// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as InAppPurchasesAPI from './in-app-purchases/in-app-purchases';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InAppPurchaseImages extends APIResource {
  create(
    body: InAppPurchaseImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseImageResponse> {
    return this._client.post('/v1/inAppPurchaseImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: InAppPurchaseImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseImageResponse> {
    return this._client.get(path`/v1/inAppPurchaseImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: InAppPurchaseImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseImageResponse> {
    return this._client.patch(path`/v1/inAppPurchaseImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/inAppPurchaseImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InAppPurchaseImage {
  id: string;

  type: 'inAppPurchaseImages';

  attributes?: InAppPurchaseImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchaseImage.Relationships;
}

export namespace InAppPurchaseImage {
  export interface Attributes {
    assetToken?: string;

    fileName?: string;

    fileSize?: number;

    imageAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    sourceFileChecksum?: string;

    state?:
      | 'AWAITING_UPLOAD'
      | 'UPLOAD_COMPLETE'
      | 'FAILED'
      | 'PREPARE_FOR_SUBMISSION'
      | 'WAITING_FOR_REVIEW'
      | 'APPROVED'
      | 'REJECTED';

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    inAppPurchase?: Relationships.InAppPurchase;
  }

  export namespace Relationships {
    export interface InAppPurchase {
      data?: InAppPurchase.Data;
    }

    export namespace InAppPurchase {
      export interface Data {
        id: string;

        type: 'inAppPurchases';
      }
    }
  }
}

export interface InAppPurchaseImageResponse {
  data: InAppPurchaseImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2>;
}

export interface InAppPurchaseImageCreateParams {
  data: InAppPurchaseImageCreateParams.Data;
}

export namespace InAppPurchaseImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'inAppPurchaseImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      inAppPurchase: Relationships.InAppPurchase;
    }

    export namespace Relationships {
      export interface InAppPurchase {
        data: InAppPurchase.Data;
      }

      export namespace InAppPurchase {
        export interface Data {
          id: string;

          type: 'inAppPurchases';
        }
      }
    }
  }
}

export interface InAppPurchaseImageRetrieveParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseImages
   */
  'fields[inAppPurchaseImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'assetToken'
    | 'imageAsset'
    | 'uploadOperations'
    | 'state'
    | 'inAppPurchase'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchase'>;
}

export interface InAppPurchaseImageUpdateParams {
  data: InAppPurchaseImageUpdateParams.Data;
}

export namespace InAppPurchaseImageUpdateParams {
  export interface Data {
    id: string;

    type: 'inAppPurchaseImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace InAppPurchaseImages {
  export {
    type InAppPurchaseImage as InAppPurchaseImage,
    type InAppPurchaseImageResponse as InAppPurchaseImageResponse,
    type InAppPurchaseImageCreateParams as InAppPurchaseImageCreateParams,
    type InAppPurchaseImageRetrieveParams as InAppPurchaseImageRetrieveParams,
    type InAppPurchaseImageUpdateParams as InAppPurchaseImageUpdateParams,
  };
}
