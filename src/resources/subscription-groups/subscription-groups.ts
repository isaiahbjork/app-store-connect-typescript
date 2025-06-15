// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as PromotedPurchasesAPI from '../promoted-purchases';
import * as SubscriptionAppStoreReviewScreenshotsAPI from '../subscription-app-store-review-screenshots';
import * as SubscriptionGroupLocalizationsAPI from '../subscription-group-localizations';
import * as SubscriptionImagesAPI from '../subscription-images';
import * as SubscriptionIntroductoryOffersAPI from '../subscription-introductory-offers';
import * as SubscriptionLocalizationsAPI from '../subscription-localizations';
import * as SubscriptionPricesAPI from '../subscription-prices';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as SubscriptionAvailabilitiesAPI from '../subscription-availabilities/subscription-availabilities';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  RelationshipListSubscriptionsParams,
  RelationshipListSubscriptionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as SubscriptionOfferCodesAPI from '../subscription-offer-codes/subscription-offer-codes';
import * as SubscriptionPromotionalOffersAPI from '../subscription-promotional-offers/subscription-promotional-offers';
import * as SubscriptionsAPI from '../subscriptions/subscriptions';
import * as WinBackOffersAPI from '../win-back-offers/win-back-offers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubscriptionGroups extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: SubscriptionGroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupResponse> {
    return this._client.post('/v1/subscriptionGroups', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupResponse> {
    return this._client.get(path`/v1/subscriptionGroups/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupResponse> {
    return this._client.patch(path`/v1/subscriptionGroups/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionGroups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listLocalizations(
    id: string,
    query: SubscriptionGroupListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupListLocalizationsResponse> {
    return this._client.get(path`/v1/subscriptionGroups/${id}/subscriptionGroupLocalizations`, {
      query,
      ...options,
    });
  }

  listSubscriptions(
    id: string,
    query: SubscriptionGroupListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupListSubscriptionsResponse> {
    return this._client.get(path`/v1/subscriptionGroups/${id}/subscriptions`, { query, ...options });
  }
}

export interface SubscriptionGroup {
  id: string;

  type: 'subscriptionGroups';

  attributes?: SubscriptionGroup.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionGroup.Relationships;
}

export namespace SubscriptionGroup {
  export interface Attributes {
    referenceName?: string;
  }

  export interface Relationships {
    subscriptionGroupLocalizations?: Relationships.SubscriptionGroupLocalizations;

    subscriptions?: Relationships.Subscriptions;
  }

  export namespace Relationships {
    export interface SubscriptionGroupLocalizations {
      data?: Array<SubscriptionGroupLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace SubscriptionGroupLocalizations {
      export interface Data {
        id: string;

        type: 'subscriptionGroupLocalizations';
      }
    }

    export interface Subscriptions {
      data?: Array<Subscriptions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Subscriptions {
      export interface Data {
        id: string;

        type: 'subscriptions';
      }
    }
  }
}

export interface SubscriptionGroupResponse {
  data: SubscriptionGroup;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    SubscriptionsAPI.Subscription | SubscriptionGroupLocalizationsAPI.SubscriptionGroupLocalization
  >;
}

export interface SubscriptionGroupListLocalizationsResponse {
  data: Array<SubscriptionGroupLocalizationsAPI.SubscriptionGroupLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<SubscriptionGroup>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionGroupListSubscriptionsResponse {
  data: Array<SubscriptionsAPI.Subscription>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | SubscriptionLocalizationsAPI.SubscriptionLocalization
    | SubscriptionAppStoreReviewScreenshotsAPI.SubscriptionAppStoreReviewScreenshot
    | SubscriptionGroup
    | SubscriptionIntroductoryOffersAPI.SubscriptionIntroductoryOffer
    | SubscriptionPromotionalOffersAPI.SubscriptionPromotionalOffer
    | SubscriptionOfferCodesAPI.SubscriptionOfferCode
    | SubscriptionPricesAPI.SubscriptionPrice
    | PromotedPurchasesAPI.PromotedPurchase
    | SubscriptionAvailabilitiesAPI.SubscriptionAvailability
    | WinBackOffersAPI.WinBackOffer
    | SubscriptionImagesAPI.SubscriptionImage
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionGroupCreateParams {
  data: SubscriptionGroupCreateParams.Data;
}

export namespace SubscriptionGroupCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionGroups';
  }

  export namespace Data {
    export interface Attributes {
      referenceName: string;
    }

    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface SubscriptionGroupRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionGroupLocalizations
   */
  'fields[subscriptionGroupLocalizations]'?: Array<
    'name' | 'customAppName' | 'locale' | 'state' | 'subscriptionGroup'
  >;

  /**
   * the fields to include for returned resources of type subscriptionGroups
   */
  'fields[subscriptionGroups]'?: Array<'referenceName' | 'subscriptions' | 'subscriptionGroupLocalizations'>;

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
  include?: Array<'subscriptions' | 'subscriptionGroupLocalizations'>;

  /**
   * maximum number of related subscriptionGroupLocalizations returned (when they are
   * included)
   */
  'limit[subscriptionGroupLocalizations]'?: number;

  /**
   * maximum number of related subscriptions returned (when they are included)
   */
  'limit[subscriptions]'?: number;
}

export interface SubscriptionGroupUpdateParams {
  data: SubscriptionGroupUpdateParams.Data;
}

export namespace SubscriptionGroupUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionGroups';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      referenceName?: string;
    }
  }
}

export interface SubscriptionGroupListLocalizationsParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionGroupLocalizations
   */
  'fields[subscriptionGroupLocalizations]'?: Array<
    'name' | 'customAppName' | 'locale' | 'state' | 'subscriptionGroup'
  >;

  /**
   * the fields to include for returned resources of type subscriptionGroups
   */
  'fields[subscriptionGroups]'?: Array<'referenceName' | 'subscriptions' | 'subscriptionGroupLocalizations'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscriptionGroup'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionGroupListSubscriptionsParams {
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
   * the fields to include for returned resources of type subscriptionGroups
   */
  'fields[subscriptionGroups]'?: Array<'referenceName' | 'subscriptions' | 'subscriptionGroupLocalizations'>;

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
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * filter by attribute 'productId'
   */
  'filter[productId]'?: Array<string>;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'MISSING_METADATA'
    | 'READY_TO_SUBMIT'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'DEVELOPER_ACTION_NEEDED'
    | 'PENDING_BINARY_APPROVAL'
    | 'APPROVED'
    | 'DEVELOPER_REMOVED_FROM_SALE'
    | 'REMOVED_FROM_SALE'
    | 'REJECTED'
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
   * maximum resources per page
   */
  limit?: number;

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

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'name' | '-name'>;
}

SubscriptionGroups.Relationships = RelationshipsAPIRelationships;

export declare namespace SubscriptionGroups {
  export {
    type SubscriptionGroup as SubscriptionGroup,
    type SubscriptionGroupResponse as SubscriptionGroupResponse,
    type SubscriptionGroupListLocalizationsResponse as SubscriptionGroupListLocalizationsResponse,
    type SubscriptionGroupListSubscriptionsResponse as SubscriptionGroupListSubscriptionsResponse,
    type SubscriptionGroupCreateParams as SubscriptionGroupCreateParams,
    type SubscriptionGroupRetrieveParams as SubscriptionGroupRetrieveParams,
    type SubscriptionGroupUpdateParams as SubscriptionGroupUpdateParams,
    type SubscriptionGroupListLocalizationsParams as SubscriptionGroupListLocalizationsParams,
    type SubscriptionGroupListSubscriptionsParams as SubscriptionGroupListSubscriptionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListSubscriptionsResponse as RelationshipListSubscriptionsResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListSubscriptionsParams as RelationshipListSubscriptionsParams,
  };
}
