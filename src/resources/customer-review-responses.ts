// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as CustomerReviewsAPI from './customer-reviews/customer-reviews';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CustomerReviewResponses extends APIResource {
  create(
    body: CustomerReviewResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerReviewResponseV1Response> {
    return this._client.post('/v1/customerReviewResponses', { body, ...options });
  }

  retrieve(
    id: string,
    query: CustomerReviewResponseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReviewResponseV1Response> {
    return this._client.get(path`/v1/customerReviewResponses/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/customerReviewResponses/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CustomerReviewResponseV1 {
  id: string;

  type: 'customerReviewResponses';

  attributes?: CustomerReviewResponseV1.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CustomerReviewResponseV1.Relationships;
}

export namespace CustomerReviewResponseV1 {
  export interface Attributes {
    lastModifiedDate?: string;

    responseBody?: string;

    state?: 'PUBLISHED' | 'PENDING_PUBLISH';
  }

  export interface Relationships {
    review?: Relationships.Review;
  }

  export namespace Relationships {
    export interface Review {
      data?: Review.Data;
    }

    export namespace Review {
      export interface Data {
        id: string;

        type: 'customerReviews';
      }
    }
  }
}

export interface CustomerReviewResponseV1Response {
  data: CustomerReviewResponseV1;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<CustomerReviewsAPI.CustomerReview>;
}

export interface CustomerReviewResponseCreateParams {
  data: CustomerReviewResponseCreateParams.Data;
}

export namespace CustomerReviewResponseCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'customerReviewResponses';
  }

  export namespace Data {
    export interface Attributes {
      responseBody: string;
    }

    export interface Relationships {
      review: Relationships.Review;
    }

    export namespace Relationships {
      export interface Review {
        data: Review.Data;
      }

      export namespace Review {
        export interface Data {
          id: string;

          type: 'customerReviews';
        }
      }
    }
  }
}

export interface CustomerReviewResponseRetrieveParams {
  /**
   * the fields to include for returned resources of type customerReviewResponses
   */
  'fields[customerReviewResponses]'?: Array<'responseBody' | 'lastModifiedDate' | 'state' | 'review'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'review'>;
}

export declare namespace CustomerReviewResponses {
  export {
    type CustomerReviewResponseV1 as CustomerReviewResponseV1,
    type CustomerReviewResponseV1Response as CustomerReviewResponseV1Response,
    type CustomerReviewResponseCreateParams as CustomerReviewResponseCreateParams,
    type CustomerReviewResponseRetrieveParams as CustomerReviewResponseRetrieveParams,
  };
}
