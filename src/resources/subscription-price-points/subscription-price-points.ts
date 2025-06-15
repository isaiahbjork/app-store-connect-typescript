// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListEqualizationsParams,
  RelationshipListEqualizationsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubscriptionPricePoints extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: SubscriptionPricePointRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionPricePointRetrieveResponse> {
    return this._client.get(path`/v1/subscriptionPricePoints/${id}`, { query, ...options });
  }

  listEqualizations(
    id: string,
    query: SubscriptionPricePointListEqualizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionPricePointsResponse> {
    return this._client.get(path`/v1/subscriptionPricePoints/${id}/equalizations`, { query, ...options });
  }
}

export interface SubscriptionPricePoint {
  id: string;

  type: 'subscriptionPricePoints';

  attributes?: SubscriptionPricePoint.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionPricePoint.Relationships;
}

export namespace SubscriptionPricePoint {
  export interface Attributes {
    customerPrice?: string;

    proceeds?: string;

    proceedsYear2?: string;
  }

  export interface Relationships {
    equalizations?: Relationships.Equalizations;

    territory?: Relationships.Territory;
  }

  export namespace Relationships {
    export interface Equalizations {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
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

export interface SubscriptionPricePointsResponse {
  data: Array<SubscriptionPricePoint>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface SubscriptionPricePointRetrieveResponse {
  data: SubscriptionPricePoint;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;
}

export interface SubscriptionPricePointRetrieveParams {
  /**
   * the fields to include for returned resources of type subscriptionPricePoints
   */
  'fields[subscriptionPricePoints]'?: Array<
    'customerPrice' | 'proceeds' | 'proceedsYear2' | 'territory' | 'equalizations'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territory'>;
}

export interface SubscriptionPricePointListEqualizationsParams {
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
   * filter by id(s) of related 'subscription'
   */
  'filter[subscription]'?: Array<string>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

SubscriptionPricePoints.Relationships = RelationshipsAPIRelationships;

export declare namespace SubscriptionPricePoints {
  export {
    type SubscriptionPricePoint as SubscriptionPricePoint,
    type SubscriptionPricePointsResponse as SubscriptionPricePointsResponse,
    type SubscriptionPricePointRetrieveResponse as SubscriptionPricePointRetrieveResponse,
    type SubscriptionPricePointRetrieveParams as SubscriptionPricePointRetrieveParams,
    type SubscriptionPricePointListEqualizationsParams as SubscriptionPricePointListEqualizationsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListEqualizationsResponse as RelationshipListEqualizationsResponse,
    type RelationshipListEqualizationsParams as RelationshipListEqualizationsParams,
  };
}
