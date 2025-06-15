// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppPriceSchedulesAPI from './app-price-schedules/app-price-schedules';
import * as SubscriptionPricePointsAPI from './subscription-price-points/subscription-price-points';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionPrices extends APIResource {
  create(
    body: SubscriptionPriceCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionPriceCreateResponse> {
    return this._client.post('/v1/subscriptionPrices', { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionPrices/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionPrice {
  id: string;

  type: 'subscriptionPrices';

  attributes?: SubscriptionPrice.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionPrice.Relationships;
}

export namespace SubscriptionPrice {
  export interface Attributes {
    preserved?: boolean;

    startDate?: string;
  }

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

export interface SubscriptionPriceCreateResponse {
  data: SubscriptionPrice;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory | SubscriptionPricePointsAPI.SubscriptionPricePoint>;
}

export interface SubscriptionPriceCreateParams {
  data: SubscriptionPriceCreateParams.Data;
}

export namespace SubscriptionPriceCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'subscriptionPrices';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      subscription: Relationships.Subscription;

      subscriptionPricePoint: Relationships.SubscriptionPricePoint;

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
        data: SubscriptionPricePoint.Data;
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

    export interface Attributes {
      preserveCurrentPrice?: boolean;

      startDate?: string;
    }
  }
}

export declare namespace SubscriptionPrices {
  export {
    type SubscriptionPrice as SubscriptionPrice,
    type SubscriptionPriceCreateResponse as SubscriptionPriceCreateResponse,
    type SubscriptionPriceCreateParams as SubscriptionPriceCreateParams,
  };
}
