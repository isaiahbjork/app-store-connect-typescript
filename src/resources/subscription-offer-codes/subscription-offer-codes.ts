// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionOfferCodesAPI from './subscription-offer-codes';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as SubscriptionIntroductoryOffersAPI from '../subscription-introductory-offers';
import * as SubscriptionOfferCodeCustomCodesAPI from '../subscription-offer-code-custom-codes';
import * as SubscriptionOfferCodeOneTimeUseCodesAPI from '../subscription-offer-code-one-time-use-codes';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListCustomCodesParams,
  RelationshipListCustomCodesResponse,
  RelationshipListOneTimeUseCodesParams,
  RelationshipListOneTimeUseCodesResponse,
  RelationshipListPricesParams,
  RelationshipListPricesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as SubscriptionPricePointsAPI from '../subscription-price-points/subscription-price-points';
import * as SubscriptionsAPI from '../subscriptions/subscriptions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubscriptionOfferCodes extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: SubscriptionOfferCodeCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeResponse> {
    return this._client.post('/v1/subscriptionOfferCodes', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionOfferCodeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionOfferCodeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeResponse> {
    return this._client.patch(path`/v1/subscriptionOfferCodes/${id}`, { body, ...options });
  }

  listCustomCodes(
    id: string,
    query: SubscriptionOfferCodeListCustomCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeListCustomCodesResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}/customCodes`, { query, ...options });
  }

  listOneTimeUseCodes(
    id: string,
    query: SubscriptionOfferCodeListOneTimeUseCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeListOneTimeUseCodesResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}/oneTimeUseCodes`, { query, ...options });
  }

  listPrices(
    id: string,
    query: SubscriptionOfferCodeListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeListPricesResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodes/${id}/prices`, { query, ...options });
  }
}

export type SubscriptionCustomerEligibility = 'NEW' | 'EXISTING' | 'EXPIRED';

export interface SubscriptionOfferCode {
  id: string;

  type: 'subscriptionOfferCodes';

  attributes?: SubscriptionOfferCode.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionOfferCode.Relationships;
}

export namespace SubscriptionOfferCode {
  export interface Attributes {
    active?: boolean;

    customerEligibilities?: Array<SubscriptionOfferCodesAPI.SubscriptionCustomerEligibility>;

    duration?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

    name?: string;

    numberOfPeriods?: number;

    offerEligibility?: SubscriptionOfferCodesAPI.SubscriptionOfferEligibility;

    offerMode?: SubscriptionIntroductoryOffersAPI.SubscriptionOfferMode;
  }

  export interface Relationships {
    customCodes?: Relationships.CustomCodes;

    oneTimeUseCodes?: Relationships.OneTimeUseCodes;

    prices?: Relationships.Prices;

    subscription?: Relationships.Subscription;
  }

  export namespace Relationships {
    export interface CustomCodes {
      data?: Array<CustomCodes.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace CustomCodes {
      export interface Data {
        id: string;

        type: 'subscriptionOfferCodeCustomCodes';
      }
    }

    export interface OneTimeUseCodes {
      data?: Array<OneTimeUseCodes.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace OneTimeUseCodes {
      export interface Data {
        id: string;

        type: 'subscriptionOfferCodeOneTimeUseCodes';
      }
    }

    export interface Prices {
      data?: Array<Prices.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Prices {
      export interface Data {
        id: string;

        type: 'subscriptionOfferCodePrices';
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

export interface SubscriptionOfferCodePrice {
  id: string;

  type: 'subscriptionOfferCodePrices';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionOfferCodePrice.Relationships;
}

export namespace SubscriptionOfferCodePrice {
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

export interface SubscriptionOfferCodeResponse {
  data: SubscriptionOfferCode;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | SubscriptionsAPI.Subscription
    | SubscriptionOfferCodeOneTimeUseCodesAPI.SubscriptionOfferCodeOneTimeUseCode
    | SubscriptionOfferCodeCustomCodesAPI.SubscriptionOfferCodeCustomCode
    | SubscriptionOfferCodePrice
  >;
}

export type SubscriptionOfferEligibility = 'STACK_WITH_INTRO_OFFERS' | 'REPLACE_INTRO_OFFERS';

export interface SubscriptionOfferCodeListCustomCodesResponse {
  data: Array<SubscriptionOfferCodeCustomCodesAPI.SubscriptionOfferCodeCustomCode>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<SubscriptionOfferCode>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionOfferCodeListOneTimeUseCodesResponse {
  data: Array<SubscriptionOfferCodeOneTimeUseCodesAPI.SubscriptionOfferCodeOneTimeUseCode>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<SubscriptionOfferCode>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionOfferCodeListPricesResponse {
  data: Array<SubscriptionOfferCodePrice>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory | SubscriptionPricePointsAPI.SubscriptionPricePoint>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionOfferCodeCreateParams {
  data: SubscriptionOfferCodeCreateParams.Data;

  included?: Array<SubscriptionOfferCodeCreateParams.Included>;
}

export namespace SubscriptionOfferCodeCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionOfferCodes';
  }

  export namespace Data {
    export interface Attributes {
      customerEligibilities: Array<SubscriptionOfferCodesAPI.SubscriptionCustomerEligibility>;

      duration: SubscriptionIntroductoryOffersAPI.SubscriptionOfferDuration;

      name: string;

      numberOfPeriods: number;

      offerEligibility: SubscriptionOfferCodesAPI.SubscriptionOfferEligibility;

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

          type: 'subscriptionOfferCodePrices';
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
    type: 'subscriptionOfferCodePrices';

    id?: string;

    relationships?: Included.Relationships;
  }

  export namespace Included {
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
}

export interface SubscriptionOfferCodeRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription' | 'oneTimeUseCodes' | 'customCodes' | 'prices'>;

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

export interface SubscriptionOfferCodeUpdateParams {
  data: SubscriptionOfferCodeUpdateParams.Data;
}

export namespace SubscriptionOfferCodeUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodes';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      active?: boolean;
    }
  }
}

export interface SubscriptionOfferCodeListCustomCodesParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionOfferCodeCustomCodes
   */
  'fields[subscriptionOfferCodeCustomCodes]'?: Array<
    'customCode' | 'numberOfCodes' | 'createdDate' | 'expirationDate' | 'active' | 'offerCode'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'offerCode'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionOfferCodeListOneTimeUseCodesParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionOfferCodeOneTimeUseCodes
   */
  'fields[subscriptionOfferCodeOneTimeUseCodes]'?: Array<
    'numberOfCodes' | 'createdDate' | 'expirationDate' | 'active' | 'offerCode' | 'values'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'offerCode'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface SubscriptionOfferCodeListPricesParams {
  /**
   * the fields to include for returned resources of type subscriptionOfferCodePrices
   */
  'fields[subscriptionOfferCodePrices]'?: Array<'territory' | 'subscriptionPricePoint'>;

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
  include?: Array<'territory' | 'subscriptionPricePoint'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

SubscriptionOfferCodes.Relationships = RelationshipsAPIRelationships;

export declare namespace SubscriptionOfferCodes {
  export {
    type SubscriptionCustomerEligibility as SubscriptionCustomerEligibility,
    type SubscriptionOfferCode as SubscriptionOfferCode,
    type SubscriptionOfferCodePrice as SubscriptionOfferCodePrice,
    type SubscriptionOfferCodeResponse as SubscriptionOfferCodeResponse,
    type SubscriptionOfferEligibility as SubscriptionOfferEligibility,
    type SubscriptionOfferCodeListCustomCodesResponse as SubscriptionOfferCodeListCustomCodesResponse,
    type SubscriptionOfferCodeListOneTimeUseCodesResponse as SubscriptionOfferCodeListOneTimeUseCodesResponse,
    type SubscriptionOfferCodeListPricesResponse as SubscriptionOfferCodeListPricesResponse,
    type SubscriptionOfferCodeCreateParams as SubscriptionOfferCodeCreateParams,
    type SubscriptionOfferCodeRetrieveParams as SubscriptionOfferCodeRetrieveParams,
    type SubscriptionOfferCodeUpdateParams as SubscriptionOfferCodeUpdateParams,
    type SubscriptionOfferCodeListCustomCodesParams as SubscriptionOfferCodeListCustomCodesParams,
    type SubscriptionOfferCodeListOneTimeUseCodesParams as SubscriptionOfferCodeListOneTimeUseCodesParams,
    type SubscriptionOfferCodeListPricesParams as SubscriptionOfferCodeListPricesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListCustomCodesResponse as RelationshipListCustomCodesResponse,
    type RelationshipListOneTimeUseCodesResponse as RelationshipListOneTimeUseCodesResponse,
    type RelationshipListPricesResponse as RelationshipListPricesResponse,
    type RelationshipListCustomCodesParams as RelationshipListCustomCodesParams,
    type RelationshipListOneTimeUseCodesParams as RelationshipListOneTimeUseCodesParams,
    type RelationshipListPricesParams as RelationshipListPricesParams,
  };
}
