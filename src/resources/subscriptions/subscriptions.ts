// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as PromotedPurchasesAPI from '../promoted-purchases';
import * as SubscriptionAppStoreReviewScreenshotsAPI from '../subscription-app-store-review-screenshots';
import * as SubscriptionImagesAPI from '../subscription-images';
import * as SubscriptionIntroductoryOffersAPI from '../subscription-introductory-offers';
import * as SubscriptionLocalizationsAPI from '../subscription-localizations';
import * as SubscriptionOfferCodeCustomCodesAPI from '../subscription-offer-code-custom-codes';
import * as SubscriptionOfferCodeOneTimeUseCodesAPI from '../subscription-offer-code-one-time-use-codes';
import * as SubscriptionPricesAPI from '../subscription-prices';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as SubscriptionAvailabilitiesAPI from '../subscription-availabilities/subscription-availabilities';
import * as SubscriptionGroupsAPI from '../subscription-groups/subscription-groups';
import * as SubscriptionOfferCodesAPI from '../subscription-offer-codes/subscription-offer-codes';
import * as SubscriptionPricePointsAPI from '../subscription-price-points/subscription-price-points';
import * as SubscriptionPromotionalOffersAPI from '../subscription-promotional-offers/subscription-promotional-offers';
import * as WinBackOffersAPI from '../win-back-offers/win-back-offers';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipCheckSubscriptionAvailabilityResponse,
  RelationshipListImagesParams,
  RelationshipListImagesResponse,
  RelationshipListPromotionalOffersParams,
  RelationshipListPromotionalOffersResponse,
  RelationshipListSubscriptionLocalizationsParams,
  RelationshipListSubscriptionLocalizationsResponse,
  RelationshipListWinBackOffersParams,
  RelationshipListWinBackOffersResponse,
  RelationshipRetrieveAppStoreReviewScreenshotResponse,
  RelationshipRetrievePromotedPurchaseResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionResponse> {
    return this._client.post('/v1/subscriptions', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    return this._client.get(path`/v1/subscriptions/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    return this._client.patch(path`/v1/subscriptions/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  checkSubscriptionAvailability(
    id: string,
    query: SubscriptionCheckSubscriptionAvailabilityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionAvailabilitiesAPI.SubscriptionAvailabilityResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/subscriptionAvailability`, { query, ...options });
  }

  listImages(
    id: string,
    query: SubscriptionListImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListImagesResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/images`, { query, ...options });
  }

  listIntroductoryOffers(
    id: string,
    query: SubscriptionListIntroductoryOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListIntroductoryOffersResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/introductoryOffers`, { query, ...options });
  }

  listOfferCodes(
    id: string,
    query: SubscriptionListOfferCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListOfferCodesResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/offerCodes`, { query, ...options });
  }

  listPricePoints(
    id: string,
    query: SubscriptionListPricePointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionPricePointsAPI.SubscriptionPricePointsResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/pricePoints`, { query, ...options });
  }

  listPrices(
    id: string,
    query: SubscriptionListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListPricesResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/prices`, { query, ...options });
  }

  listPromotionalOffers(
    id: string,
    query: SubscriptionListPromotionalOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListPromotionalOffersResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/promotionalOffers`, { query, ...options });
  }

  listSubscriptionLocalizations(
    id: string,
    query: SubscriptionListSubscriptionLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListSubscriptionLocalizationsResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/subscriptionLocalizations`, { query, ...options });
  }

  listWinBackOffers(
    id: string,
    query: SubscriptionListWinBackOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListWinBackOffersResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/winBackOffers`, { query, ...options });
  }

  retrieveAppStoreReviewScreenshot(
    id: string,
    query: SubscriptionRetrieveAppStoreReviewScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionAppStoreReviewScreenshotsAPI.SubscriptionAppStoreReviewScreenshotResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/appStoreReviewScreenshot`, { query, ...options });
  }

  retrievePromotedPurchase(
    id: string,
    query: SubscriptionRetrievePromotedPurchaseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromotedPurchasesAPI.PromotedPurchaseResponse> {
    return this._client.get(path`/v1/subscriptions/${id}/promotedPurchase`, { query, ...options });
  }
}

export interface Subscription {
  id: string;

  type: 'subscriptions';

  attributes?: Subscription.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Subscription.Relationships;
}

export namespace Subscription {
  export interface Attributes {
    familySharable?: boolean;

    groupLevel?: number;

    name?: string;

    productId?: string;

    reviewNote?: string;

    state?:
      | 'MISSING_METADATA'
      | 'READY_TO_SUBMIT'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'DEVELOPER_ACTION_NEEDED'
      | 'PENDING_BINARY_APPROVAL'
      | 'APPROVED'
      | 'DEVELOPER_REMOVED_FROM_SALE'
      | 'REMOVED_FROM_SALE'
      | 'REJECTED';

    subscriptionPeriod?: 'ONE_WEEK' | 'ONE_MONTH' | 'TWO_MONTHS' | 'THREE_MONTHS' | 'SIX_MONTHS' | 'ONE_YEAR';
  }

  export interface Relationships {
    appStoreReviewScreenshot?: Relationships.AppStoreReviewScreenshot;

    group?: Relationships.Group;

    images?: Relationships.Images;

    introductoryOffers?: Relationships.IntroductoryOffers;

    offerCodes?: Relationships.OfferCodes;

    pricePoints?: Relationships.PricePoints;

    prices?: Relationships.Prices;

    promotedPurchase?: Relationships.PromotedPurchase;

    promotionalOffers?: Relationships.PromotionalOffers;

    subscriptionAvailability?: Relationships.SubscriptionAvailability;

    subscriptionLocalizations?: Relationships.SubscriptionLocalizations;

    winBackOffers?: Relationships.WinBackOffers;
  }

  export namespace Relationships {
    export interface AppStoreReviewScreenshot {
      data?: AppStoreReviewScreenshot.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreReviewScreenshot {
      export interface Data {
        id: string;

        type: 'subscriptionAppStoreReviewScreenshots';
      }
    }

    export interface Group {
      data?: Group.Data;
    }

    export namespace Group {
      export interface Data {
        id: string;

        type: 'subscriptionGroups';
      }
    }

    export interface Images {
      data?: Array<Images.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Images {
      export interface Data {
        id: string;

        type: 'subscriptionImages';
      }
    }

    export interface IntroductoryOffers {
      data?: Array<IntroductoryOffers.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace IntroductoryOffers {
      export interface Data {
        id: string;

        type: 'subscriptionIntroductoryOffers';
      }
    }

    export interface OfferCodes {
      data?: Array<OfferCodes.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace OfferCodes {
      export interface Data {
        id: string;

        type: 'subscriptionOfferCodes';
      }
    }

    export interface PricePoints {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface Prices {
      data?: Array<Prices.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Prices {
      export interface Data {
        id: string;

        type: 'subscriptionPrices';
      }
    }

    export interface PromotedPurchase {
      data?: PromotedPurchase.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PromotedPurchase {
      export interface Data {
        id: string;

        type: 'promotedPurchases';
      }
    }

    export interface PromotionalOffers {
      data?: Array<PromotionalOffers.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace PromotionalOffers {
      export interface Data {
        id: string;

        type: 'subscriptionPromotionalOffers';
      }
    }

    export interface SubscriptionAvailability {
      data?: SubscriptionAvailability.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace SubscriptionAvailability {
      export interface Data {
        id: string;

        type: 'subscriptionAvailabilities';
      }
    }

    export interface SubscriptionLocalizations {
      data?: Array<SubscriptionLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace SubscriptionLocalizations {
      export interface Data {
        id: string;

        type: 'subscriptionLocalizations';
      }
    }

    export interface WinBackOffers {
      data?: Array<WinBackOffers.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace WinBackOffers {
      export interface Data {
        id: string;

        type: 'winBackOffers';
      }
    }
  }
}

export interface SubscriptionResponse {
  data: Subscription;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | SubscriptionLocalizationsAPI.SubscriptionLocalization
    | SubscriptionAppStoreReviewScreenshotsAPI.SubscriptionAppStoreReviewScreenshot
    | SubscriptionGroupsAPI.SubscriptionGroup
    | SubscriptionIntroductoryOffersAPI.SubscriptionIntroductoryOffer
    | SubscriptionPromotionalOffersAPI.SubscriptionPromotionalOffer
    | SubscriptionOfferCodesAPI.SubscriptionOfferCode
    | SubscriptionPricesAPI.SubscriptionPrice
    | PromotedPurchasesAPI.PromotedPurchase
    | SubscriptionAvailabilitiesAPI.SubscriptionAvailability
    | WinBackOffersAPI.WinBackOffer
    | SubscriptionImagesAPI.SubscriptionImage
  >;
}

export interface SubscriptionListImagesResponse {
  data: Array<SubscriptionImagesAPI.SubscriptionImage>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<Subscription>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionListIntroductoryOffersResponse {
  data: Array<SubscriptionIntroductoryOffersAPI.SubscriptionIntroductoryOffer>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    Subscription | AppPriceSchedulesAPI.Territory | SubscriptionPricePointsAPI.SubscriptionPricePoint
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionListOfferCodesResponse {
  data: Array<SubscriptionOfferCodesAPI.SubscriptionOfferCode>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | Subscription
    | SubscriptionOfferCodeOneTimeUseCodesAPI.SubscriptionOfferCodeOneTimeUseCode
    | SubscriptionOfferCodeCustomCodesAPI.SubscriptionOfferCodeCustomCode
    | SubscriptionOfferCodesAPI.SubscriptionOfferCodePrice
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionListPricesResponse {
  data: Array<SubscriptionPricesAPI.SubscriptionPrice>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory | SubscriptionPricePointsAPI.SubscriptionPricePoint>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionListPromotionalOffersResponse {
  data: Array<SubscriptionPromotionalOffersAPI.SubscriptionPromotionalOffer>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<Subscription | SubscriptionPromotionalOffersAPI.SubscriptionPromotionalOfferPrice>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionListSubscriptionLocalizationsResponse {
  data: Array<SubscriptionLocalizationsAPI.SubscriptionLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<Subscription>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionListWinBackOffersResponse {
  data: Array<WinBackOffersAPI.WinBackOffer>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<WinBackOffersAPI.WinBackOfferPrice>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionCreateParams {
  data: SubscriptionCreateParams.Data;
}

export namespace SubscriptionCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptions';
  }

  export namespace Data {
    export interface Attributes {
      name: string;

      productId: string;

      familySharable?: boolean;

      groupLevel?: number;

      reviewNote?: string;

      subscriptionPeriod?:
        | 'ONE_WEEK'
        | 'ONE_MONTH'
        | 'TWO_MONTHS'
        | 'THREE_MONTHS'
        | 'SIX_MONTHS'
        | 'ONE_YEAR';
    }

    export interface Relationships {
      group: Relationships.Group;
    }

    export namespace Relationships {
      export interface Group {
        data: Group.Data;
      }

      export namespace Group {
        export interface Data {
          id: string;

          type: 'subscriptionGroups';
        }
      }
    }
  }
}

export interface SubscriptionRetrieveParams {
  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

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
   * the fields to include for returned resources of type subscriptionAvailabilities
   */
  'fields[subscriptionAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

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
   * the fields to include for returned resources of type
   * subscriptionIntroductoryOffers
   */
  'fields[subscriptionIntroductoryOffers]'?: Array<
    | 'startDate'
    | 'endDate'
    | 'duration'
    | 'offerMode'
    | 'numberOfPeriods'
    | 'subscription'
    | 'territory'
    | 'subscriptionPricePoint'
  >;

  /**
   * the fields to include for returned resources of type subscriptionLocalizations
   */
  'fields[subscriptionLocalizations]'?: Array<'name' | 'locale' | 'description' | 'state' | 'subscription'>;

  /**
   * the fields to include for returned resources of type subscriptionOfferCodes
   */
  'fields[subscriptionOfferCodes]'?: Array<
    | 'name'
    | 'customerEligibilities'
    | 'offerEligibility'
    | 'duration'
    | 'offerMode'
    | 'numberOfPeriods'
    | 'active'
    | 'subscription'
    | 'oneTimeUseCodes'
    | 'customCodes'
    | 'prices'
  >;

  /**
   * the fields to include for returned resources of type subscriptionPrices
   */
  'fields[subscriptionPrices]'?: Array<'startDate' | 'preserved' | 'territory' | 'subscriptionPricePoint'>;

  /**
   * the fields to include for returned resources of type
   * subscriptionPromotionalOffers
   */
  'fields[subscriptionPromotionalOffers]'?: Array<
    'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'subscription' | 'prices'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type winBackOffers
   */
  'fields[winBackOffers]'?: Array<
    | 'referenceName'
    | 'offerId'
    | 'duration'
    | 'offerMode'
    | 'periodCount'
    | 'customerEligibilityPaidSubscriptionDurationInMonths'
    | 'customerEligibilityTimeSinceLastSubscribedInMonths'
    | 'customerEligibilityWaitBetweenOffersInMonths'
    | 'startDate'
    | 'endDate'
    | 'priority'
    | 'promotionIntent'
    | 'prices'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * maximum number of related images returned (when they are included)
   */
  'limit[images]'?: number;

  /**
   * maximum number of related introductoryOffers returned (when they are included)
   */
  'limit[introductoryOffers]'?: number;

  /**
   * maximum number of related offerCodes returned (when they are included)
   */
  'limit[offerCodes]'?: number;

  /**
   * maximum number of related prices returned (when they are included)
   */
  'limit[prices]'?: number;

  /**
   * maximum number of related promotionalOffers returned (when they are included)
   */
  'limit[promotionalOffers]'?: number;

  /**
   * maximum number of related subscriptionLocalizations returned (when they are
   * included)
   */
  'limit[subscriptionLocalizations]'?: number;

  /**
   * maximum number of related winBackOffers returned (when they are included)
   */
  'limit[winBackOffers]'?: number;
}

export interface SubscriptionUpdateParams {
  data: SubscriptionUpdateParams.Data;

  included?: Array<
    | SubscriptionUpdateParams.SubscriptionPromotionalOfferInlineCreate
    | SubscriptionUpdateParams.SubscriptionPriceInlineCreate
    | SubscriptionUpdateParams.SubscriptionIntroductoryOfferInlineCreate
  >;
}

export namespace SubscriptionUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptions';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      familySharable?: boolean;

      groupLevel?: number;

      name?: string;

      reviewNote?: string;

      subscriptionPeriod?:
        | 'ONE_WEEK'
        | 'ONE_MONTH'
        | 'TWO_MONTHS'
        | 'THREE_MONTHS'
        | 'SIX_MONTHS'
        | 'ONE_YEAR';
    }

    export interface Relationships {
      introductoryOffers?: Relationships.IntroductoryOffers;

      prices?: Relationships.Prices;

      promotionalOffers?: Relationships.PromotionalOffers;
    }

    export namespace Relationships {
      export interface IntroductoryOffers {
        data?: Array<IntroductoryOffers.Data>;
      }

      export namespace IntroductoryOffers {
        export interface Data {
          id: string;

          type: 'subscriptionIntroductoryOffers';
        }
      }

      export interface Prices {
        data?: Array<Prices.Data>;
      }

      export namespace Prices {
        export interface Data {
          id: string;

          type: 'subscriptionPrices';
        }
      }

      export interface PromotionalOffers {
        data?: Array<PromotionalOffers.Data>;
      }

      export namespace PromotionalOffers {
        export interface Data {
          id: string;

          type: 'subscriptionPromotionalOffers';
        }
      }
    }
  }

  export interface SubscriptionPromotionalOfferInlineCreate {
    attributes: SubscriptionPromotionalOfferInlineCreate.Attributes;

    type: 'subscriptionPromotionalOffers';

    id?: string;

    relationships?: SubscriptionPromotionalOfferInlineCreate.Relationships;
  }

  export namespace SubscriptionPromotionalOfferInlineCreate {
    export interface Attributes {
      duration: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

      name: string;

      numberOfPeriods: number;

      offerCode: string;

      offerMode: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;
    }

    export interface Relationships {
      prices?: Relationships.Prices;

      subscription?: Relationships.Subscription;
    }

    export namespace Relationships {
      export interface Prices {
        data?: Array<Prices.Data>;
      }

      export namespace Prices {
        export interface Data {
          id: string;

          type: 'subscriptionPromotionalOfferPrices';
        }
      }

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

  export interface SubscriptionPriceInlineCreate {
    type: 'subscriptionPrices';

    id?: string;

    attributes?: SubscriptionPriceInlineCreate.Attributes;

    relationships?: SubscriptionPriceInlineCreate.Relationships;
  }

  export namespace SubscriptionPriceInlineCreate {
    export interface Attributes {
      preserveCurrentPrice?: boolean;

      startDate?: string;
    }

    export interface Relationships {
      subscription?: Relationships.Subscription;

      subscriptionPricePoint?: Relationships.SubscriptionPricePoint;

      territory?: Relationships.Territory;
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

      export interface SubscriptionPricePoint {
        data?: SubscriptionPricePoint.Data;
      }

      export namespace SubscriptionPricePoint {
        export interface Data {
          id: string;

          type: 'subscriptionPricePoints';
        }
      }

      export interface Territory {
        data?: Territory.Data;
      }

      export namespace Territory {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }

  export interface SubscriptionIntroductoryOfferInlineCreate {
    attributes: SubscriptionIntroductoryOfferInlineCreate.Attributes;

    type: 'subscriptionIntroductoryOffers';

    id?: string;

    relationships?: SubscriptionIntroductoryOfferInlineCreate.Relationships;
  }

  export namespace SubscriptionIntroductoryOfferInlineCreate {
    export interface Attributes {
      duration: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

      numberOfPeriods: number;

      offerMode: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;

      endDate?: string;

      startDate?: string;
    }

    export interface Relationships {
      subscription?: Relationships.Subscription;

      subscriptionPricePoint?: Relationships.SubscriptionPricePoint;

      territory?: Relationships.Territory;
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

      export interface SubscriptionPricePoint {
        data?: SubscriptionPricePoint.Data;
      }

      export namespace SubscriptionPricePoint {
        export interface Data {
          id: string;

          type: 'subscriptionPricePoints';
        }
      }

      export interface Territory {
        data?: Territory.Data;
      }

      export namespace Territory {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }
}

export interface SubscriptionCheckSubscriptionAvailabilityParams {
  /**
   * the fields to include for returned resources of type subscriptionAvailabilities
   */
  'fields[subscriptionAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'availableTerritories'>;

  /**
   * maximum number of related availableTerritories returned (when they are included)
   */
  'limit[availableTerritories]'?: number;
}

export interface SubscriptionListImagesParams {
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
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionListIntroductoryOffersParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionIntroductoryOffers
   */
  'fields[subscriptionIntroductoryOffers]'?: Array<
    | 'startDate'
    | 'endDate'
    | 'duration'
    | 'offerMode'
    | 'numberOfPeriods'
    | 'subscription'
    | 'territory'
    | 'subscriptionPricePoint'
  >;

  /**
   * the fields to include for returned resources of type subscriptionPricePoints
   */
  'fields[subscriptionPricePoints]'?: Array<
    'customerPrice' | 'proceeds' | 'proceedsYear2' | 'territory' | 'equalizations'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription' | 'territory' | 'subscriptionPricePoint'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionListOfferCodesParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionOfferCodeCustomCodes
   */
  'fields[subscriptionOfferCodeCustomCodes]'?: Array<
    'customCode' | 'numberOfCodes' | 'createdDate' | 'expirationDate' | 'active' | 'offerCode'
  >;

  /**
   * the fields to include for returned resources of type
   * subscriptionOfferCodeOneTimeUseCodes
   */
  'fields[subscriptionOfferCodeOneTimeUseCodes]'?: Array<
    'numberOfCodes' | 'createdDate' | 'expirationDate' | 'active' | 'offerCode' | 'values'
  >;

  /**
   * the fields to include for returned resources of type subscriptionOfferCodePrices
   */
  'fields[subscriptionOfferCodePrices]'?: Array<'territory' | 'subscriptionPricePoint'>;

  /**
   * the fields to include for returned resources of type subscriptionOfferCodes
   */
  'fields[subscriptionOfferCodes]'?: Array<
    | 'name'
    | 'customerEligibilities'
    | 'offerEligibility'
    | 'duration'
    | 'offerMode'
    | 'numberOfPeriods'
    | 'active'
    | 'subscription'
    | 'oneTimeUseCodes'
    | 'customCodes'
    | 'prices'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * filter by territory
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription' | 'oneTimeUseCodes' | 'customCodes' | 'prices'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related customCodes returned (when they are included)
   */
  'limit[customCodes]'?: number;

  /**
   * maximum number of related oneTimeUseCodes returned (when they are included)
   */
  'limit[oneTimeUseCodes]'?: number;

  /**
   * maximum number of related prices returned (when they are included)
   */
  'limit[prices]'?: number;
}

export interface SubscriptionListPricePointsParams {
  /**
   * the fields to include for returned resources of type subscriptionPricePoints
   */
  'fields[subscriptionPricePoints]'?: Array<
    'customerPrice' | 'proceeds' | 'proceedsYear2' | 'territory' | 'equalizations'
  >;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionListPricesParams {
  /**
   * the fields to include for returned resources of type subscriptionPricePoints
   */
  'fields[subscriptionPricePoints]'?: Array<
    'customerPrice' | 'proceeds' | 'proceedsYear2' | 'territory' | 'equalizations'
  >;

  /**
   * the fields to include for returned resources of type subscriptionPrices
   */
  'fields[subscriptionPrices]'?: Array<'startDate' | 'preserved' | 'territory' | 'subscriptionPricePoint'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'subscriptionPricePoint'
   */
  'filter[subscriptionPricePoint]'?: Array<string>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territory' | 'subscriptionPricePoint'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionListPromotionalOffersParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionPromotionalOfferPrices
   */
  'fields[subscriptionPromotionalOfferPrices]'?: Array<'territory' | 'subscriptionPricePoint'>;

  /**
   * the fields to include for returned resources of type
   * subscriptionPromotionalOffers
   */
  'fields[subscriptionPromotionalOffers]'?: Array<
    'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'subscription' | 'prices'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * filter by territory
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription' | 'prices'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related prices returned (when they are included)
   */
  'limit[prices]'?: number;
}

export interface SubscriptionListSubscriptionLocalizationsParams {
  /**
   * the fields to include for returned resources of type subscriptionLocalizations
   */
  'fields[subscriptionLocalizations]'?: Array<'name' | 'locale' | 'description' | 'state' | 'subscription'>;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionListWinBackOffersParams {
  /**
   * the fields to include for returned resources of type winBackOfferPrices
   */
  'fields[winBackOfferPrices]'?: Array<'territory' | 'subscriptionPricePoint'>;

  /**
   * the fields to include for returned resources of type winBackOffers
   */
  'fields[winBackOffers]'?: Array<
    | 'referenceName'
    | 'offerId'
    | 'duration'
    | 'offerMode'
    | 'periodCount'
    | 'customerEligibilityPaidSubscriptionDurationInMonths'
    | 'customerEligibilityTimeSinceLastSubscribedInMonths'
    | 'customerEligibilityWaitBetweenOffersInMonths'
    | 'startDate'
    | 'endDate'
    | 'priority'
    | 'promotionIntent'
    | 'prices'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'prices'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related prices returned (when they are included)
   */
  'limit[prices]'?: number;
}

export interface SubscriptionRetrieveAppStoreReviewScreenshotParams {
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
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription'>;
}

export interface SubscriptionRetrievePromotedPurchaseParams {
  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2' | 'subscription'>;
}

Subscriptions.Relationships = RelationshipsAPIRelationships;

export declare namespace Subscriptions {
  export {
    type Subscription as Subscription,
    type SubscriptionResponse as SubscriptionResponse,
    type SubscriptionListImagesResponse as SubscriptionListImagesResponse,
    type SubscriptionListIntroductoryOffersResponse as SubscriptionListIntroductoryOffersResponse,
    type SubscriptionListOfferCodesResponse as SubscriptionListOfferCodesResponse,
    type SubscriptionListPricesResponse as SubscriptionListPricesResponse,
    type SubscriptionListPromotionalOffersResponse as SubscriptionListPromotionalOffersResponse,
    type SubscriptionListSubscriptionLocalizationsResponse as SubscriptionListSubscriptionLocalizationsResponse,
    type SubscriptionListWinBackOffersResponse as SubscriptionListWinBackOffersResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionCheckSubscriptionAvailabilityParams as SubscriptionCheckSubscriptionAvailabilityParams,
    type SubscriptionListImagesParams as SubscriptionListImagesParams,
    type SubscriptionListIntroductoryOffersParams as SubscriptionListIntroductoryOffersParams,
    type SubscriptionListOfferCodesParams as SubscriptionListOfferCodesParams,
    type SubscriptionListPricePointsParams as SubscriptionListPricePointsParams,
    type SubscriptionListPricesParams as SubscriptionListPricesParams,
    type SubscriptionListPromotionalOffersParams as SubscriptionListPromotionalOffersParams,
    type SubscriptionListSubscriptionLocalizationsParams as SubscriptionListSubscriptionLocalizationsParams,
    type SubscriptionListWinBackOffersParams as SubscriptionListWinBackOffersParams,
    type SubscriptionRetrieveAppStoreReviewScreenshotParams as SubscriptionRetrieveAppStoreReviewScreenshotParams,
    type SubscriptionRetrievePromotedPurchaseParams as SubscriptionRetrievePromotedPurchaseParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
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
}
