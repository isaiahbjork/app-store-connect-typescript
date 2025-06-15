// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionImages extends APIResource {
  create(
    body: SubscriptionImageCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionImageResponse> {
    return this._client.post('/v1/subscriptionImages', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionImageResponse> {
    return this._client.get(path`/v1/subscriptionImages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionImageResponse> {
    return this._client.patch(path`/v1/subscriptionImages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionImages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionImage {
  id: string;

  type: 'subscriptionImages';

  attributes?: SubscriptionImage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionImage.Relationships;
}

export namespace SubscriptionImage {
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
    subscription?: Relationships.Subscription;
  }

  export namespace Relationships {
    export interface Subscription {
      data?: Subscription.Data;
    }

    export namespace Subscription {
      export interface Data {
        id: string;

        type: 'subscriptions';
      }
    }
  }
}

export interface SubscriptionImageResponse {
  data: SubscriptionImage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionsAPI.Subscription>;
}

export interface SubscriptionImageCreateParams {
  data: SubscriptionImageCreateParams.Data;
}

export namespace SubscriptionImageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionImages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      subscription: Relationships.Subscription;
    }

    export namespace Relationships {
      export interface Subscription {
        data: Subscription.Data;
      }

      export namespace Subscription {
        export interface Data {
          id: string;

          type: 'subscriptions';
        }
      }
    }
  }
}

export interface SubscriptionImageRetrieveParams {
  /**
   * the fields to include for returned resources of type subscriptionImages
   */
  'fields[subscriptionImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'assetToken'
    | 'imageAsset'
    | 'uploadOperations'
    | 'state'
    | 'subscription'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription'>;
}

export interface SubscriptionImageUpdateParams {
  data: SubscriptionImageUpdateParams.Data;
}

export namespace SubscriptionImageUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionImages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace SubscriptionImages {
  export {
    type SubscriptionImage as SubscriptionImage,
    type SubscriptionImageResponse as SubscriptionImageResponse,
    type SubscriptionImageCreateParams as SubscriptionImageCreateParams,
    type SubscriptionImageRetrieveParams as SubscriptionImageRetrieveParams,
    type SubscriptionImageUpdateParams as SubscriptionImageUpdateParams,
  };
}
