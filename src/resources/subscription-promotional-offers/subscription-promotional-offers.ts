// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
import * as SubscriptionsAPI from '../subscriptions/subscriptions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubscriptionPromotionalOffers extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: SubscriptionPromotionalOfferCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionPromotionalOfferResponse> {
    return this._client.post('/v1/subscriptionPromotionalOffers', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionPromotionalOfferRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionPromotionalOfferResponse> {
    return this._client.get(path`/v1/subscriptionPromotionalOffers/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionPromotionalOfferUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionPromotionalOfferResponse> {
    return this._client.patch(path`/v1/subscriptionPromotionalOffers/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionPromotionalOffers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listPrices(
    id: string,
    query: SubscriptionPromotionalOfferListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionPromotionalOfferListPricesResponse> {
    return this._client.get(path`/v1/subscriptionPromotionalOffers/${id}/prices`, { query, ...options });
  }
}

export interface SubscriptionPromotionalOffer {
  id: string;

  type: 'subscriptionPromotionalOffers';

  attributes?: SubscriptionPromotionalOffer.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionPromotionalOffer.Relationships;
}

export namespace SubscriptionPromotionalOffer {
  export interface Attributes {
    duration?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

    name?: string;

    numberOfPeriods?: number;

    offerCode?: string;

    offerMode?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;
  }

  export interface Relationships {
    prices?: Relationships.Prices;

    subscription?: Relationships.Subscription;
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

export interface SubscriptionPromotionalOfferPrice {
  id: string;

  type: 'subscriptionPromotionalOfferPrices';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionPromotionalOfferPrice.Relationships;
}

export namespace SubscriptionPromotionalOfferPrice {
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

export interface SubscriptionPromotionalOfferPriceInlineCreate {
  type: 'subscriptionPromotionalOfferPrices';

  id?: string;

  relationships?: SubscriptionPromotionalOfferPriceInlineCreate.Relationships;
}

export namespace SubscriptionPromotionalOfferPriceInlineCreate {
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

export interface SubscriptionPromotionalOfferResponse {
  data: SubscriptionPromotionalOffer;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionsAPI.Subscription | SubscriptionPromotionalOfferPrice>;
}

export interface SubscriptionPromotionalOfferListPricesResponse {
  data: Array<SubscriptionPromotionalOfferPrice>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory | SubscriptionPricePointsAPI.SubscriptionPricePoint>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionPromotionalOfferCreateParams {
  data: SubscriptionPromotionalOfferCreateParams.Data;

  included?: Array<SubscriptionPromotionalOfferPriceInlineCreate>;
}

export namespace SubscriptionPromotionalOfferCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionPromotionalOffers';
  }

  export namespace Data {
    export interface Attributes {
      duration: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

      name: string;

      numberOfPeriods: number;

      offerCode: string;

      offerMode: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;
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

          type: 'subscriptionPromotionalOfferPrices';
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
}

export interface SubscriptionPromotionalOfferRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription' | 'prices'>;

  /**
   * maximum number of related prices returned (when they are included)
   */
  'limit[prices]'?: number;
}

export interface SubscriptionPromotionalOfferUpdateParams {
  data: SubscriptionPromotionalOfferUpdateParams.Data;

  included?: Array<SubscriptionPromotionalOfferPriceInlineCreate>;
}

export namespace SubscriptionPromotionalOfferUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionPromotionalOffers';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Relationships {
      prices?: Relationships.Prices;
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
    }
  }
}

export interface SubscriptionPromotionalOfferListPricesParams {
  /**
   * the fields to include for returned resources of type subscriptionPricePoints
   */
  'fields[subscriptionPricePoints]'?: Array<
    'customerPrice' | 'proceeds' | 'proceedsYear2' | 'territory' | 'equalizations'
  >;

  /**
   * the fields to include for returned resources of type
   * subscriptionPromotionalOfferPrices
   */
  'fields[subscriptionPromotionalOfferPrices]'?: Array<'territory' | 'subscriptionPricePoint'>;

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
  include?: Array<'territory' | 'subscriptionPricePoint'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

SubscriptionPromotionalOffers.Relationships = RelationshipsAPIRelationships;

export declare namespace SubscriptionPromotionalOffers {
  export {
    type SubscriptionPromotionalOffer as SubscriptionPromotionalOffer,
    type SubscriptionPromotionalOfferPrice as SubscriptionPromotionalOfferPrice,
    type SubscriptionPromotionalOfferPriceInlineCreate as SubscriptionPromotionalOfferPriceInlineCreate,
    type SubscriptionPromotionalOfferResponse as SubscriptionPromotionalOfferResponse,
    type SubscriptionPromotionalOfferListPricesResponse as SubscriptionPromotionalOfferListPricesResponse,
    type SubscriptionPromotionalOfferCreateParams as SubscriptionPromotionalOfferCreateParams,
    type SubscriptionPromotionalOfferRetrieveParams as SubscriptionPromotionalOfferRetrieveParams,
    type SubscriptionPromotionalOfferUpdateParams as SubscriptionPromotionalOfferUpdateParams,
    type SubscriptionPromotionalOfferListPricesParams as SubscriptionPromotionalOfferListPricesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListPricesResponse as RelationshipListPricesResponse,
    type RelationshipListPricesParams as RelationshipListPricesParams,
  };
}
