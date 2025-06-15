// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SubscriptionIntroductoryOffersAPI from './subscription-introductory-offers';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppPriceSchedulesAPI from './app-price-schedules/app-price-schedules';
import * as SubscriptionPricePointsAPI from './subscription-price-points/subscription-price-points';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionIntroductoryOffers extends APIResource {
  create(
    body: SubscriptionIntroductoryOfferCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionIntroductoryOfferResponse> {
    return this._client.post('/v1/subscriptionIntroductoryOffers', { body, ...options });
  }

  update(
    id: string,
    body: SubscriptionIntroductoryOfferUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionIntroductoryOfferResponse> {
    return this._client.patch(path`/v1/subscriptionIntroductoryOffers/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionIntroductoryOffers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionIntroductoryOffer {
  id: string;

  type: 'subscriptionIntroductoryOffers';

  attributes?: SubscriptionIntroductoryOffer.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionIntroductoryOffer.Relationships;
}

export namespace SubscriptionIntroductoryOffer {
  export interface Attributes {
    duration?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

    endDate?: string;

    numberOfPeriods?: number;

    offerMode?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;

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

export interface SubscriptionIntroductoryOfferResponse {
  data: SubscriptionIntroductoryOffer;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | SubscriptionsAPI.Subscription
    | AppPriceSchedulesAPI.Territory
    | SubscriptionPricePointsAPI.SubscriptionPricePoint
  >;
}

export type SubscriptionOfferDuration =
  | 'THREE_DAYS'
  | 'ONE_WEEK'
  | 'TWO_WEEKS'
  | 'ONE_MONTH'
  | 'TWO_MONTHS'
  | 'THREE_MONTHS'
  | 'SIX_MONTHS'
  | 'ONE_YEAR';

export type SubscriptionOfferMode = 'PAY_AS_YOU_GO' | 'PAY_UP_FRONT' | 'FREE_TRIAL';

export interface SubscriptionIntroductoryOfferCreateParams {
  data: SubscriptionIntroductoryOfferCreateParams.Data;

  included?: Array<SubscriptionIntroductoryOfferCreateParams.Included>;
}

export namespace SubscriptionIntroductoryOfferCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionIntroductoryOffers';
  }

  export namespace Data {
    export interface Attributes {
      duration: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

      numberOfPeriods: number;

      offerMode: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;

      endDate?: string;

      startDate?: string;
    }

    export interface Relationships {
      subscription: Relationships.Subscription;

      subscriptionPricePoint?: Relationships.SubscriptionPricePoint;

      territory?: Relationships.Territory;
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

  export interface Included {
    type: 'subscriptionPricePoints';

    id?: string;
  }
}

export interface SubscriptionIntroductoryOfferUpdateParams {
  data: SubscriptionIntroductoryOfferUpdateParams.Data;
}

export namespace SubscriptionIntroductoryOfferUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionIntroductoryOffers';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      endDate?: string;
    }
  }
}

export declare namespace SubscriptionIntroductoryOffers {
  export {
    type SubscriptionIntroductoryOffer as SubscriptionIntroductoryOffer,
    type SubscriptionIntroductoryOfferResponse as SubscriptionIntroductoryOfferResponse,
    type SubscriptionOfferDuration as SubscriptionOfferDuration,
    type SubscriptionOfferMode as SubscriptionOfferMode,
    type SubscriptionIntroductoryOfferCreateParams as SubscriptionIntroductoryOfferCreateParams,
    type SubscriptionIntroductoryOfferUpdateParams as SubscriptionIntroductoryOfferUpdateParams,
  };
}
