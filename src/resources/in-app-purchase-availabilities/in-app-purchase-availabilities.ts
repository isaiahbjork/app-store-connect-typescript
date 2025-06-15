// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as TerritoriesAPI from '../territories';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAvailableTerritoriesParams,
  RelationshipListAvailableTerritoriesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InAppPurchaseAvailabilities extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: InAppPurchaseAvailabilityCreateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAvailabilityResponse> {
    return this._client.post('/v1/inAppPurchaseAvailabilities', { body, ...options });
  }

  retrieve(
    id: string,
    query: InAppPurchaseAvailabilityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAvailabilityResponse> {
    return this._client.get(path`/v1/inAppPurchaseAvailabilities/${id}`, { query, ...options });
  }

  listAvailableTerritories(
    id: string,
    query: InAppPurchaseAvailabilityListAvailableTerritoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerritoriesAPI.TerritoriesResponse> {
    return this._client.get(path`/v1/inAppPurchaseAvailabilities/${id}/availableTerritories`, {
      query,
      ...options,
    });
  }
}

export interface InAppPurchaseAvailability {
  id: string;

  type: 'inAppPurchaseAvailabilities';

  attributes?: InAppPurchaseAvailability.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchaseAvailability.Relationships;
}

export namespace InAppPurchaseAvailability {
  export interface Attributes {
    availableInNewTerritories?: boolean;
  }

  export interface Relationships {
    availableTerritories?: Relationships.AvailableTerritories;
  }

  export namespace Relationships {
    export interface AvailableTerritories {
      data?: Array<AvailableTerritories.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AvailableTerritories {
      export interface Data {
        id: string;

        type: 'territories';
      }
    }
  }
}

export interface InAppPurchaseAvailabilityResponse {
  data: InAppPurchaseAvailability;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;
}

export interface InAppPurchaseAvailabilityCreateParams {
  data: InAppPurchaseAvailabilityCreateParams.Data;
}

export namespace InAppPurchaseAvailabilityCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'inAppPurchaseAvailabilities';
  }

  export namespace Data {
    export interface Attributes {
      availableInNewTerritories: boolean;
    }

    export interface Relationships {
      availableTerritories: Relationships.AvailableTerritories;

      inAppPurchase: Relationships.InAppPurchase;
    }

    export namespace Relationships {
      export interface AvailableTerritories {
        data: Array<AvailableTerritories.Data>;
      }

      export namespace AvailableTerritories {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }

      export interface InAppPurchase {
        data: InAppPurchase.Data;
      }

      export namespace InAppPurchase {
        export interface Data {
          id: string;

          type: 'inAppPurchases';
        }
      }
    }
  }
}

export interface InAppPurchaseAvailabilityRetrieveParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseAvailabilities
   */
  'fields[inAppPurchaseAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'availableTerritories'>;

  /**
   * maximum number of related availableTerritories returned (when they are included)
   */
  'limit[availableTerritories]'?: number;
}

export interface InAppPurchaseAvailabilityListAvailableTerritoriesParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

InAppPurchaseAvailabilities.Relationships = RelationshipsAPIRelationships;

export declare namespace InAppPurchaseAvailabilities {
  export {
    type InAppPurchaseAvailability as InAppPurchaseAvailability,
    type InAppPurchaseAvailabilityResponse as InAppPurchaseAvailabilityResponse,
    type InAppPurchaseAvailabilityCreateParams as InAppPurchaseAvailabilityCreateParams,
    type InAppPurchaseAvailabilityRetrieveParams as InAppPurchaseAvailabilityRetrieveParams,
    type InAppPurchaseAvailabilityListAvailableTerritoriesParams as InAppPurchaseAvailabilityListAvailableTerritoriesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAvailableTerritoriesResponse as RelationshipListAvailableTerritoriesResponse,
    type RelationshipListAvailableTerritoriesParams as RelationshipListAvailableTerritoriesParams,
  };
}
