// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionAppStoreReviewScreenshots extends APIResource {
  create(
    body: SubscriptionAppStoreReviewScreenshotCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionAppStoreReviewScreenshotResponse> {
    return this._client.post('/v1/subscriptionAppStoreReviewScreenshots', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionAppStoreReviewScreenshotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionAppStoreReviewScreenshotResponse> {
    return this._client.get(path`/v1/subscriptionAppStoreReviewScreenshots/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionAppStoreReviewScreenshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionAppStoreReviewScreenshotResponse> {
    return this._client.patch(path`/v1/subscriptionAppStoreReviewScreenshots/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionAppStoreReviewScreenshots/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionAppStoreReviewScreenshot {
  id: string;

  type: 'subscriptionAppStoreReviewScreenshots';

  attributes?: SubscriptionAppStoreReviewScreenshot.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionAppStoreReviewScreenshot.Relationships;
}

export namespace SubscriptionAppStoreReviewScreenshot {
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

export interface SubscriptionAppStoreReviewScreenshotResponse {
  data: SubscriptionAppStoreReviewScreenshot;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionsAPI.Subscription>;
}

export interface SubscriptionAppStoreReviewScreenshotCreateParams {
  data: SubscriptionAppStoreReviewScreenshotCreateParams.Data;
}

export namespace SubscriptionAppStoreReviewScreenshotCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionAppStoreReviewScreenshots';
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

export interface SubscriptionAppStoreReviewScreenshotRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionAppStoreReviewScreenshots
   */
  'fields[subscriptionAppStoreReviewScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'subscription'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription'>;
}

export interface SubscriptionAppStoreReviewScreenshotUpdateParams {
  data: SubscriptionAppStoreReviewScreenshotUpdateParams.Data;
}

export namespace SubscriptionAppStoreReviewScreenshotUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionAppStoreReviewScreenshots';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace SubscriptionAppStoreReviewScreenshots {
  export {
    type SubscriptionAppStoreReviewScreenshot as SubscriptionAppStoreReviewScreenshot,
    type SubscriptionAppStoreReviewScreenshotResponse as SubscriptionAppStoreReviewScreenshotResponse,
    type SubscriptionAppStoreReviewScreenshotCreateParams as SubscriptionAppStoreReviewScreenshotCreateParams,
    type SubscriptionAppStoreReviewScreenshotRetrieveParams as SubscriptionAppStoreReviewScreenshotRetrieveParams,
    type SubscriptionAppStoreReviewScreenshotUpdateParams as SubscriptionAppStoreReviewScreenshotUpdateParams,
  };
}
