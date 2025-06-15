// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveAppStoreReviewScreenshot(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreReviewScreenshotResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/appStoreReviewScreenshot`, options);
  }

  retrieveContent(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveContentResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/content`, options);
  }

  retrieveIapPriceSchedule(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveIapPriceScheduleResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/iapPriceSchedule`, options);
  }

  retrieveImages(
    id: string,
    query: RelationshipRetrieveImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveImagesResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/images`, { query, ...options });
  }

  retrieveInAppPurchaseAvailability(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveInAppPurchaseAvailabilityResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/inAppPurchaseAvailability`, options);
  }

  retrieveInAppPurchaseLocalizations(
    id: string,
    query: RelationshipRetrieveInAppPurchaseLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveInAppPurchaseLocalizationsResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/inAppPurchaseLocalizations`, {
      query,
      ...options,
    });
  }

  retrievePricePoints(
    id: string,
    query: RelationshipRetrievePricePointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePricePointsResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/pricePoints`, { query, ...options });
  }

  retrievePromotedPurchase(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePromotedPurchaseResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/relationships/promotedPurchase`, options);
  }
}

export interface RelationshipRetrieveAppStoreReviewScreenshotResponse {
  data: RelationshipRetrieveAppStoreReviewScreenshotResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreReviewScreenshotResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchaseAppStoreReviewScreenshots';
  }
}

export interface RelationshipRetrieveContentResponse {
  data: RelationshipRetrieveContentResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveContentResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchaseContents';
  }
}

export interface RelationshipRetrieveIapPriceScheduleResponse {
  data: RelationshipRetrieveIapPriceScheduleResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveIapPriceScheduleResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchasePriceSchedules';
  }
}

export interface RelationshipRetrieveImagesResponse {
  data: Array<RelationshipRetrieveImagesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveImagesResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchaseImages';
  }
}

export interface RelationshipRetrieveInAppPurchaseAvailabilityResponse {
  data: RelationshipRetrieveInAppPurchaseAvailabilityResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveInAppPurchaseAvailabilityResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchaseAvailabilities';
  }
}

export interface RelationshipRetrieveInAppPurchaseLocalizationsResponse {
  data: Array<RelationshipRetrieveInAppPurchaseLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveInAppPurchaseLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchaseLocalizations';
  }
}

export interface RelationshipRetrievePricePointsResponse {
  data: Array<RelationshipRetrievePricePointsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrievePricePointsResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchasePricePoints';
  }
}

export interface RelationshipRetrievePromotedPurchaseResponse {
  data: RelationshipRetrievePromotedPurchaseResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrievePromotedPurchaseResponse {
  export interface Data {
    id: string;

    type: 'promotedPurchases';
  }
}

export interface RelationshipRetrieveImagesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveInAppPurchaseLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrievePricePointsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAppStoreReviewScreenshotResponse as RelationshipRetrieveAppStoreReviewScreenshotResponse,
    type RelationshipRetrieveContentResponse as RelationshipRetrieveContentResponse,
    type RelationshipRetrieveIapPriceScheduleResponse as RelationshipRetrieveIapPriceScheduleResponse,
    type RelationshipRetrieveImagesResponse as RelationshipRetrieveImagesResponse,
    type RelationshipRetrieveInAppPurchaseAvailabilityResponse as RelationshipRetrieveInAppPurchaseAvailabilityResponse,
    type RelationshipRetrieveInAppPurchaseLocalizationsResponse as RelationshipRetrieveInAppPurchaseLocalizationsResponse,
    type RelationshipRetrievePricePointsResponse as RelationshipRetrievePricePointsResponse,
    type RelationshipRetrievePromotedPurchaseResponse as RelationshipRetrievePromotedPurchaseResponse,
    type RelationshipRetrieveImagesParams as RelationshipRetrieveImagesParams,
    type RelationshipRetrieveInAppPurchaseLocalizationsParams as RelationshipRetrieveInAppPurchaseLocalizationsParams,
    type RelationshipRetrievePricePointsParams as RelationshipRetrievePricePointsParams,
  };
}
