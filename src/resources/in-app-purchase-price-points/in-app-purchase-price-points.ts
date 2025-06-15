// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveEqualizationsParams,
  RelationshipRetrieveEqualizationsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InAppPurchasePricePoints extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  listEqualizations(
    id: string,
    query: InAppPurchasePricePointListEqualizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricePointsResponse> {
    return this._client.get(path`/v1/inAppPurchasePricePoints/${id}/equalizations`, { query, ...options });
  }
}

export interface PricePoint {
  id: string;

  type: 'inAppPurchasePricePoints';

  attributes?: PricePoint.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: PricePoint.Relationships;
}

export namespace PricePoint {
  export interface Attributes {
    customerPrice?: string;

    proceeds?: string;
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

export interface PricePointsResponse {
  data: Array<PricePoint>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface InAppPurchasePricePointListEqualizationsParams {
  /**
   * the fields to include for returned resources of type inAppPurchasePricePoints
   */
  'fields[inAppPurchasePricePoints]'?: Array<'customerPrice' | 'proceeds' | 'territory' | 'equalizations'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'inAppPurchaseV2'
   */
  'filter[inAppPurchaseV2]'?: Array<string>;

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

InAppPurchasePricePoints.Relationships = RelationshipsAPIRelationships;

export declare namespace InAppPurchasePricePoints {
  export {
    type PricePoint as PricePoint,
    type PricePointsResponse as PricePointsResponse,
    type InAppPurchasePricePointListEqualizationsParams as InAppPurchasePricePointListEqualizationsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveEqualizationsResponse as RelationshipRetrieveEqualizationsResponse,
    type RelationshipRetrieveEqualizationsParams as RelationshipRetrieveEqualizationsParams,
  };
}
