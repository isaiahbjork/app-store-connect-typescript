// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as IntroductoryOffersAPI from './introductory-offers';
import {
  IntroductoryOfferDeleteParams,
  IntroductoryOfferListParams,
  IntroductoryOfferListResponse,
  IntroductoryOffers,
} from './introductory-offers';
import * as OfferCodesAPI from './offer-codes';
import { OfferCodeListParams, OfferCodeListResponse, OfferCodes } from './offer-codes';
import * as PricePointsAPI from './price-points';
import { PricePointListParams, PricePointListResponse, PricePoints } from './price-points';
import * as PricesAPI from './prices';
import { PriceDeleteParams, PriceListParams, PriceListResponse, Prices } from './prices';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  introductoryOffers: IntroductoryOffersAPI.IntroductoryOffers = new IntroductoryOffersAPI.IntroductoryOffers(
    this._client,
  );
  offerCodes: OfferCodesAPI.OfferCodes = new OfferCodesAPI.OfferCodes(this._client);
  pricePoints: PricePointsAPI.PricePoints = new PricePointsAPI.PricePoints(this._client);
  prices: PricesAPI.Prices = new PricesAPI.Prices(this._client);

  checkSubscriptionAvailability(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipCheckSubscriptionAvailabilityResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/subscriptionAvailability`, options);
  }

  listImages(
    id: string,
    query: RelationshipListImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListImagesResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/images`, { query, ...options });
  }

  listPromotionalOffers(
    id: string,
    query: RelationshipListPromotionalOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListPromotionalOffersResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/promotionalOffers`, {
      query,
      ...options,
    });
  }

  listSubscriptionLocalizations(
    id: string,
    query: RelationshipListSubscriptionLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListSubscriptionLocalizationsResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/subscriptionLocalizations`, {
      query,
      ...options,
    });
  }

  listWinBackOffers(
    id: string,
    query: RelationshipListWinBackOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListWinBackOffersResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/winBackOffers`, { query, ...options });
  }

  retrieveAppStoreReviewScreenshot(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreReviewScreenshotResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/appStoreReviewScreenshot`, options);
  }

  retrievePromotedPurchase(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePromotedPurchaseResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/relationships/promotedPurchase`, options);
  }
}

export interface RelationshipCheckSubscriptionAvailabilityResponse {
  data: RelationshipCheckSubscriptionAvailabilityResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipCheckSubscriptionAvailabilityResponse {
  export interface Data {
    id: string;

    type: 'subscriptionAvailabilities';
  }
}

export interface RelationshipListImagesResponse {
  data: Array<RelationshipListImagesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListImagesResponse {
  export interface Data {
    id: string;

    type: 'subscriptionImages';
  }
}

export interface RelationshipListPromotionalOffersResponse {
  data: Array<RelationshipListPromotionalOffersResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListPromotionalOffersResponse {
  export interface Data {
    id: string;

    type: 'subscriptionPromotionalOffers';
  }
}

export interface RelationshipListSubscriptionLocalizationsResponse {
  data: Array<RelationshipListSubscriptionLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListSubscriptionLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'subscriptionLocalizations';
  }
}

export interface RelationshipListWinBackOffersResponse {
  data: Array<RelationshipListWinBackOffersResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListWinBackOffersResponse {
  export interface Data {
    id: string;

    type: 'winBackOffers';
  }
}

export interface RelationshipRetrieveAppStoreReviewScreenshotResponse {
  data: RelationshipRetrieveAppStoreReviewScreenshotResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreReviewScreenshotResponse {
  export interface Data {
    id: string;

    type: 'subscriptionAppStoreReviewScreenshots';
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

export interface RelationshipListImagesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListPromotionalOffersParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListSubscriptionLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListWinBackOffersParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.IntroductoryOffers = IntroductoryOffers;
Relationships.OfferCodes = OfferCodes;
Relationships.PricePoints = PricePoints;
Relationships.Prices = Prices;

export declare namespace Relationships {
  export {
    type RelationshipCheckSubscriptionAvailabilityResponse as RelationshipCheckSubscriptionAvailabilityResponse,
    type RelationshipListImagesResponse as RelationshipListImagesResponse,
    type RelationshipListPromotionalOffersResponse as RelationshipListPromotionalOffersResponse,
    type RelationshipListSubscriptionLocalizationsResponse as RelationshipListSubscriptionLocalizationsResponse,
    type RelationshipListWinBackOffersResponse as RelationshipListWinBackOffersResponse,
    type RelationshipRetrieveAppStoreReviewScreenshotResponse as RelationshipRetrieveAppStoreReviewScreenshotResponse,
    type RelationshipRetrievePromotedPurchaseResponse as RelationshipRetrievePromotedPurchaseResponse,
    type RelationshipListImagesParams as RelationshipListImagesParams,
    type RelationshipListPromotionalOffersParams as RelationshipListPromotionalOffersParams,
    type RelationshipListSubscriptionLocalizationsParams as RelationshipListSubscriptionLocalizationsParams,
    type RelationshipListWinBackOffersParams as RelationshipListWinBackOffersParams,
  };

  export {
    IntroductoryOffers as IntroductoryOffers,
    type IntroductoryOfferListResponse as IntroductoryOfferListResponse,
    type IntroductoryOfferListParams as IntroductoryOfferListParams,
    type IntroductoryOfferDeleteParams as IntroductoryOfferDeleteParams,
  };

  export {
    OfferCodes as OfferCodes,
    type OfferCodeListResponse as OfferCodeListResponse,
    type OfferCodeListParams as OfferCodeListParams,
  };

  export {
    PricePoints as PricePoints,
    type PricePointListResponse as PricePointListResponse,
    type PricePointListParams as PricePointListParams,
  };

  export {
    Prices as Prices,
    type PriceListResponse as PriceListResponse,
    type PriceListParams as PriceListParams,
    type PriceDeleteParams as PriceDeleteParams,
  };
}
