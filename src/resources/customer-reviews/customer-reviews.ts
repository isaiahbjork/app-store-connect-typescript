// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as CustomerReviewResponsesAPI from '../customer-review-responses';
import * as SandboxTestersAPI from '../sandbox-testers';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveResponseResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CustomerReviews extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: CustomerReviewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReviewRetrieveResponse> {
    return this._client.get(path`/v1/customerReviews/${id}`, { query, ...options });
  }

  retrieveResponse(
    id: string,
    query: CustomerReviewRetrieveResponseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReviewResponsesAPI.CustomerReviewResponseV1Response> {
    return this._client.get(path`/v1/customerReviews/${id}/response`, { query, ...options });
  }
}

export interface CustomerReview {
  id: string;

  type: 'customerReviews';

  attributes?: CustomerReview.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CustomerReview.Relationships;
}

export namespace CustomerReview {
  export interface Attributes {
    body?: string;

    createdDate?: string;

    rating?: number;

    reviewerNickname?: string;

    territory?: SandboxTestersAPI.TerritoryCode;

    title?: string;
  }

  export interface Relationships {
    response?: Relationships.Response;
  }

  export namespace Relationships {
    export interface Response {
      data?: Response.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Response {
      export interface Data {
        id: string;

        type: 'customerReviewResponses';
      }
    }
  }
}

export interface CustomerReviewRetrieveResponse {
  data: CustomerReview;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<CustomerReviewResponsesAPI.CustomerReviewResponseV1>;
}

export interface CustomerReviewRetrieveParams {
  /**
   * the fields to include for returned resources of type customerReviewResponses
   */
  'fields[customerReviewResponses]'?: Array<'responseBody' | 'lastModifiedDate' | 'state' | 'review'>;

  /**
   * the fields to include for returned resources of type customerReviews
   */
  'fields[customerReviews]'?: Array<
    'rating' | 'title' | 'body' | 'reviewerNickname' | 'createdDate' | 'territory' | 'response'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'response'>;
}

export interface CustomerReviewRetrieveResponseParams {
  /**
   * the fields to include for returned resources of type customerReviewResponses
   */
  'fields[customerReviewResponses]'?: Array<'responseBody' | 'lastModifiedDate' | 'state' | 'review'>;

  /**
   * the fields to include for returned resources of type customerReviews
   */
  'fields[customerReviews]'?: Array<
    'rating' | 'title' | 'body' | 'reviewerNickname' | 'createdDate' | 'territory' | 'response'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'review'>;
}

CustomerReviews.Relationships = RelationshipsAPIRelationships;

export declare namespace CustomerReviews {
  export {
    type CustomerReview as CustomerReview,
    type CustomerReviewRetrieveResponse as CustomerReviewRetrieveResponse,
    type CustomerReviewRetrieveParams as CustomerReviewRetrieveParams,
    type CustomerReviewRetrieveResponseParams as CustomerReviewRetrieveResponseParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveResponseResponse as RelationshipRetrieveResponseResponse,
  };
}
