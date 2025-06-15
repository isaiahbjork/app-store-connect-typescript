// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WinBackOffersAPI from './win-back-offers';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as SubscriptionIntroductoryOffersAPI from '../subscription-introductory-offers';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as SubscriptionPricePointsAPI from '../subscription-price-points/subscription-price-points';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListPricesParams,
  RelationshipListPricesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WinBackOffers extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: WinBackOfferCreateParams, options?: RequestOptions): APIPromise<WinBackOfferResponse> {
    return this._client.post('/v1/winBackOffers', { body, ...options });
  }

  retrieve(
    id: string,
    query: WinBackOfferRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WinBackOfferResponse> {
    return this._client.get(path`/v1/winBackOffers/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: WinBackOfferUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WinBackOfferResponse> {
    return this._client.patch(path`/v1/winBackOffers/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/winBackOffers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listPrices(
    id: string,
    query: WinBackOfferListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WinBackOfferListPricesResponse> {
    return this._client.get(path`/v1/winBackOffers/${id}/prices`, { query, ...options });
  }
}

export interface IntegerRange {
  maximum?: number;

  minimum?: number;
}

export interface WinBackOffer {
  id: string;

  type: 'winBackOffers';

  attributes?: WinBackOffer.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: WinBackOffer.Relationships;
}

export namespace WinBackOffer {
  export interface Attributes {
    customerEligibilityPaidSubscriptionDurationInMonths?: number;

    customerEligibilityTimeSinceLastSubscribedInMonths?: WinBackOffersAPI.IntegerRange;

    customerEligibilityWaitBetweenOffersInMonths?: number;

    duration?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

    endDate?: string;

    offerId?: string;

    offerMode?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;

    periodCount?: number;

    priority?: 'HIGH' | 'NORMAL';

    promotionIntent?: 'NOT_PROMOTED' | 'USE_AUTO_GENERATED_ASSETS';

    referenceName?: string;

    startDate?: string;
  }

  export interface Relationships {
    prices?: Relationships.Prices;
  }

  export namespace Relationships {
    export interface Prices {
      data?: Array<Prices.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Prices {
      export interface Data {
        id: string;

        type: 'winBackOfferPrices';
      }
    }
  }
}

export interface WinBackOfferPrice {
  id: string;

  type: 'winBackOfferPrices';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: WinBackOfferPrice.Relationships;
}

export namespace WinBackOfferPrice {
  export interface Relationships {
    subscriptionPricePoint?: Relationships.SubscriptionPricePoint;

    territory?: Relationships.Territory;
  }

  export namespace Relationships {
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

export interface WinBackOfferResponse {
  data: WinBackOffer;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<WinBackOfferPrice>;
}

export interface WinBackOfferListPricesResponse {
  data: Array<WinBackOfferPrice>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory | SubscriptionPricePointsAPI.SubscriptionPricePoint>;

  meta?: ActorsAPI.PagingInformation;
}

export interface WinBackOfferCreateParams {
  data: WinBackOfferCreateParams.Data;

  included?: Array<WinBackOfferCreateParams.Included>;
}

export namespace WinBackOfferCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'winBackOffers';
  }

  export namespace Data {
    export interface Attributes {
      customerEligibilityPaidSubscriptionDurationInMonths: number;

      customerEligibilityTimeSinceLastSubscribedInMonths: WinBackOffersAPI.IntegerRange;

      duration: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

      offerId: string;

      offerMode: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;

      periodCount: number;

      priority: 'HIGH' | 'NORMAL';

      referenceName: string;

      startDate: string;

      customerEligibilityWaitBetweenOffersInMonths?: number;

      endDate?: string;

      promotionIntent?: 'NOT_PROMOTED' | 'USE_AUTO_GENERATED_ASSETS';
    }

    export interface Relationships {
      prices: Relationships.Prices;

      subscription: Relationships.Subscription;
    }

    export namespace Relationships {
      export interface Prices {
        data: Array<Prices.Data>;
      }

      export namespace Prices {
        export interface Data {
          id: string;

          type: 'winBackOfferPrices';
        }
      }

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

  export interface Included {
    type: 'winBackOfferPrices';

    id?: string;
  }
}

export interface WinBackOfferRetrieveParams {
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
   * maximum number of related prices returned (when they are included)
   */
  'limit[prices]'?: number;
}

export interface WinBackOfferUpdateParams {
  data: WinBackOfferUpdateParams.Data;
}

export namespace WinBackOfferUpdateParams {
  export interface Data {
    id: string;

    type: 'winBackOffers';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      customerEligibilityPaidSubscriptionDurationInMonths?: number;

      customerEligibilityTimeSinceLastSubscribedInMonths?: WinBackOffersAPI.IntegerRange;

      customerEligibilityWaitBetweenOffersInMonths?: number;

      endDate?: string;

      priority?: 'HIGH' | 'NORMAL';

      promotionIntent?: 'NOT_PROMOTED' | 'USE_AUTO_GENERATED_ASSETS';

      startDate?: string;
    }
  }
}

export interface WinBackOfferListPricesParams {
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
   * the fields to include for returned resources of type winBackOfferPrices
   */
  'fields[winBackOfferPrices]'?: Array<'territory' | 'subscriptionPricePoint'>;

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

WinBackOffers.Relationships = RelationshipsAPIRelationships;

export declare namespace WinBackOffers {
  export {
    type IntegerRange as IntegerRange,
    type WinBackOffer as WinBackOffer,
    type WinBackOfferPrice as WinBackOfferPrice,
    type WinBackOfferResponse as WinBackOfferResponse,
    type WinBackOfferListPricesResponse as WinBackOfferListPricesResponse,
    type WinBackOfferCreateParams as WinBackOfferCreateParams,
    type WinBackOfferRetrieveParams as WinBackOfferRetrieveParams,
    type WinBackOfferUpdateParams as WinBackOfferUpdateParams,
    type WinBackOfferListPricesParams as WinBackOfferListPricesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListPricesResponse as RelationshipListPricesResponse,
    type RelationshipListPricesParams as RelationshipListPricesParams,
  };
}
