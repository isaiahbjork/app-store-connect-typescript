// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as SubscriptionOfferCodesAPI from './subscription-offer-codes/subscription-offer-codes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionOfferCodeCustomCodes extends APIResource {
  create(
    body: SubscriptionOfferCodeCustomCodeCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeCustomCodeResponse> {
    return this._client.post('/v1/subscriptionOfferCodeCustomCodes', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionOfferCodeCustomCodeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeCustomCodeResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodeCustomCodes/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionOfferCodeCustomCodeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeCustomCodeResponse> {
    return this._client.patch(path`/v1/subscriptionOfferCodeCustomCodes/${id}`, { body, ...options });
  }
}

export interface SubscriptionOfferCodeCustomCode {
  id: string;

  type: 'subscriptionOfferCodeCustomCodes';

  attributes?: SubscriptionOfferCodeCustomCode.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionOfferCodeCustomCode.Relationships;
}

export namespace SubscriptionOfferCodeCustomCode {
  export interface Attributes {
    active?: boolean;

    createdDate?: string;

    customCode?: string;

    expirationDate?: string;

    numberOfCodes?: number;
  }

  export interface Relationships {
    offerCode?: Relationships.OfferCode;
  }

  export namespace Relationships {
    export interface OfferCode {
      data?: OfferCode.Data;
    }

    export namespace OfferCode {
      export interface Data {
        id: string;

        type: 'subscriptionOfferCodes';
      }
    }
  }
}

export interface SubscriptionOfferCodeCustomCodeResponse {
  data: SubscriptionOfferCodeCustomCode;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionOfferCodesAPI.SubscriptionOfferCode>;
}

export interface SubscriptionOfferCodeCustomCodeCreateParams {
  data: SubscriptionOfferCodeCustomCodeCreateParams.Data;
}

export namespace SubscriptionOfferCodeCustomCodeCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionOfferCodeCustomCodes';
  }

  export namespace Data {
    export interface Attributes {
      customCode: string;

      numberOfCodes: number;

      expirationDate?: string;
    }

    export interface Relationships {
      offerCode: Relationships.OfferCode;
    }

    export namespace Relationships {
      export interface OfferCode {
        data: OfferCode.Data;
      }

      export namespace OfferCode {
        export interface Data {
          id: string;

          type: 'subscriptionOfferCodes';
        }
      }
    }
  }
}

export interface SubscriptionOfferCodeCustomCodeRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionOfferCodeCustomCodes
   */
  'fields[subscriptionOfferCodeCustomCodes]'?: Array<
    'customCode' | 'numberOfCodes' | 'createdDate' | 'expirationDate' | 'active' | 'offerCode'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'offerCode'>;
}

export interface SubscriptionOfferCodeCustomCodeUpdateParams {
  data: SubscriptionOfferCodeCustomCodeUpdateParams.Data;
}

export namespace SubscriptionOfferCodeCustomCodeUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodeCustomCodes';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      active?: boolean;
    }
  }
}

export declare namespace SubscriptionOfferCodeCustomCodes {
  export {
    type SubscriptionOfferCodeCustomCode as SubscriptionOfferCodeCustomCode,
    type SubscriptionOfferCodeCustomCodeResponse as SubscriptionOfferCodeCustomCodeResponse,
    type SubscriptionOfferCodeCustomCodeCreateParams as SubscriptionOfferCodeCustomCodeCreateParams,
    type SubscriptionOfferCodeCustomCodeRetrieveParams as SubscriptionOfferCodeCustomCodeRetrieveParams,
    type SubscriptionOfferCodeCustomCodeUpdateParams as SubscriptionOfferCodeCustomCodeUpdateParams,
  };
}
