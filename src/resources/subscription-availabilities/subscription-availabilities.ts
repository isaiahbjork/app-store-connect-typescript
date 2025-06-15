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

export class SubscriptionAvailabilities extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: SubscriptionAvailabilityCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionAvailabilityResponse> {
    return this._client.post('/v1/subscriptionAvailabilities', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionAvailabilityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionAvailabilityResponse> {
    return this._client.get(path`/v1/subscriptionAvailabilities/${id}`, { query, ...options });
  }

  listAvailableTerritories(
    id: string,
    query: SubscriptionAvailabilityListAvailableTerritoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerritoriesAPI.TerritoriesResponse> {
    return this._client.get(path`/v1/subscriptionAvailabilities/${id}/availableTerritories`, {
      query,
      ...options,
    });
  }
}

export interface SubscriptionAvailability {
  id: string;

  type: 'subscriptionAvailabilities';

  attributes?: SubscriptionAvailability.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionAvailability.Relationships;
}

export namespace SubscriptionAvailability {
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

export interface SubscriptionAvailabilityResponse {
  data: SubscriptionAvailability;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;
}

export interface SubscriptionAvailabilityCreateParams {
  data: SubscriptionAvailabilityCreateParams.Data;
}

export namespace SubscriptionAvailabilityCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionAvailabilities';
  }

  export namespace Data {
    export interface Attributes {
      availableInNewTerritories: boolean;
    }

    export interface Relationships {
      availableTerritories: Relationships.AvailableTerritories;

      subscription: Relationships.Subscription;
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

export interface SubscriptionAvailabilityRetrieveParams {
  /**
   * the fields to include for returned resources of type subscriptionAvailabilities
   */
  'fields[subscriptionAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

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

export interface SubscriptionAvailabilityListAvailableTerritoriesParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

SubscriptionAvailabilities.Relationships = RelationshipsAPIRelationships;

export declare namespace SubscriptionAvailabilities {
  export {
    type SubscriptionAvailability as SubscriptionAvailability,
    type SubscriptionAvailabilityResponse as SubscriptionAvailabilityResponse,
    type SubscriptionAvailabilityCreateParams as SubscriptionAvailabilityCreateParams,
    type SubscriptionAvailabilityRetrieveParams as SubscriptionAvailabilityRetrieveParams,
    type SubscriptionAvailabilityListAvailableTerritoriesParams as SubscriptionAvailabilityListAvailableTerritoriesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAvailableTerritoriesResponse as RelationshipListAvailableTerritoriesResponse,
    type RelationshipListAvailableTerritoriesParams as RelationshipListAvailableTerritoriesParams,
  };
}
