// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AlternativeDistributionPackageVersionsAPI from './alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as SubscriptionOfferCodesAPI from './subscription-offer-codes/subscription-offer-codes';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionOfferCodeOneTimeUseCodes extends APIResource {
  create(
    body: SubscriptionOfferCodeOneTimeUseCodeCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeOneTimeUseCodeResponse> {
    return this._client.post('/v1/subscriptionOfferCodeOneTimeUseCodes', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionOfferCodeOneTimeUseCodeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeOneTimeUseCodeResponse> {
    return this._client.get(path`/v1/subscriptionOfferCodeOneTimeUseCodes/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionOfferCodeOneTimeUseCodeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionOfferCodeOneTimeUseCodeResponse> {
    return this._client.patch(path`/v1/subscriptionOfferCodeOneTimeUseCodes/${id}`, { body, ...options });
  }

  listValues(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/v1/subscriptionOfferCodeOneTimeUseCodes/${id}/values`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }
}

export interface SubscriptionOfferCodeOneTimeUseCode {
  id: string;

  type: 'subscriptionOfferCodeOneTimeUseCodes';

  attributes?: SubscriptionOfferCodeOneTimeUseCode.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionOfferCodeOneTimeUseCode.Relationships;
}

export namespace SubscriptionOfferCodeOneTimeUseCode {
  export interface Attributes {
    active?: boolean;

    createdDate?: string;

    expirationDate?: string;

    numberOfCodes?: number;
  }

  export interface Relationships {
    offerCode?: Relationships.OfferCode;

    values?: Relationships.Values;
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

    export interface Values {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface SubscriptionOfferCodeOneTimeUseCodeResponse {
  data: SubscriptionOfferCodeOneTimeUseCode;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionOfferCodesAPI.SubscriptionOfferCode>;
}

export type SubscriptionOfferCodeOneTimeUseCodeListValuesResponse = string;

export interface SubscriptionOfferCodeOneTimeUseCodeCreateParams {
  data: SubscriptionOfferCodeOneTimeUseCodeCreateParams.Data;
}

export namespace SubscriptionOfferCodeOneTimeUseCodeCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionOfferCodeOneTimeUseCodes';
  }

  export namespace Data {
    export interface Attributes {
      expirationDate: string;

      numberOfCodes: number;
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

export interface SubscriptionOfferCodeOneTimeUseCodeRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionOfferCodeOneTimeUseCodes
   */
  'fields[subscriptionOfferCodeOneTimeUseCodes]'?: Array<
    'numberOfCodes' | 'createdDate' | 'expirationDate' | 'active' | 'offerCode' | 'values'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'offerCode'>;
}

export interface SubscriptionOfferCodeOneTimeUseCodeUpdateParams {
  data: SubscriptionOfferCodeOneTimeUseCodeUpdateParams.Data;
}

export namespace SubscriptionOfferCodeOneTimeUseCodeUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionOfferCodeOneTimeUseCodes';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      active?: boolean;
    }
  }
}

export declare namespace SubscriptionOfferCodeOneTimeUseCodes {
  export {
    type SubscriptionOfferCodeOneTimeUseCode as SubscriptionOfferCodeOneTimeUseCode,
    type SubscriptionOfferCodeOneTimeUseCodeResponse as SubscriptionOfferCodeOneTimeUseCodeResponse,
    type SubscriptionOfferCodeOneTimeUseCodeListValuesResponse as SubscriptionOfferCodeOneTimeUseCodeListValuesResponse,
    type SubscriptionOfferCodeOneTimeUseCodeCreateParams as SubscriptionOfferCodeOneTimeUseCodeCreateParams,
    type SubscriptionOfferCodeOneTimeUseCodeRetrieveParams as SubscriptionOfferCodeOneTimeUseCodeRetrieveParams,
    type SubscriptionOfferCodeOneTimeUseCodeUpdateParams as SubscriptionOfferCodeOneTimeUseCodeUpdateParams,
  };
}
