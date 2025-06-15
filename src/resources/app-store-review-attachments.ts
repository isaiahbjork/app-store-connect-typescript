// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppStoreReviewDetailsAPI from './app-store-review-details/app-store-review-details';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppStoreReviewAttachments extends APIResource {
  create(
    body: AppStoreReviewAttachmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewAttachmentResponse> {
    return this._client.post('/v1/appStoreReviewAttachments', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppStoreReviewAttachmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewAttachmentResponse> {
    return this._client.get(path`/v1/appStoreReviewAttachments/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppStoreReviewAttachmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewAttachmentResponse> {
    return this._client.patch(path`/v1/appStoreReviewAttachments/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appStoreReviewAttachments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppStoreReviewAttachment {
  id: string;

  type: 'appStoreReviewAttachments';

  attributes?: AppStoreReviewAttachment.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreReviewAttachment.Relationships;
}

export namespace AppStoreReviewAttachment {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    appStoreReviewDetail?: Relationships.AppStoreReviewDetail;
  }

  export namespace Relationships {
    export interface AppStoreReviewDetail {
      data?: AppStoreReviewDetail.Data;
    }

    export namespace AppStoreReviewDetail {
      export interface Data {
        id: string;

        type: 'appStoreReviewDetails';
      }
    }
  }
}

export interface AppStoreReviewAttachmentResponse {
  data: AppStoreReviewAttachment;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppStoreReviewDetailsAPI.AppStoreReviewDetail>;
}

export interface AppStoreReviewAttachmentCreateParams {
  data: AppStoreReviewAttachmentCreateParams.Data;
}

export namespace AppStoreReviewAttachmentCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appStoreReviewAttachments';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      appStoreReviewDetail: Relationships.AppStoreReviewDetail;
    }

    export namespace Relationships {
      export interface AppStoreReviewDetail {
        data: AppStoreReviewDetail.Data;
      }

      export namespace AppStoreReviewDetail {
        export interface Data {
          id: string;

          type: 'appStoreReviewDetails';
        }
      }
    }
  }
}

export interface AppStoreReviewAttachmentRetrieveParams {
  /**
   * the fields to include for returned resources of type appStoreReviewAttachments
   */
  'fields[appStoreReviewAttachments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreReviewDetail'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreReviewDetail'>;
}

export interface AppStoreReviewAttachmentUpdateParams {
  data: AppStoreReviewAttachmentUpdateParams.Data;
}

export namespace AppStoreReviewAttachmentUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreReviewAttachments';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppStoreReviewAttachments {
  export {
    type AppStoreReviewAttachment as AppStoreReviewAttachment,
    type AppStoreReviewAttachmentResponse as AppStoreReviewAttachmentResponse,
    type AppStoreReviewAttachmentCreateParams as AppStoreReviewAttachmentCreateParams,
    type AppStoreReviewAttachmentRetrieveParams as AppStoreReviewAttachmentRetrieveParams,
    type AppStoreReviewAttachmentUpdateParams as AppStoreReviewAttachmentUpdateParams,
  };
}
