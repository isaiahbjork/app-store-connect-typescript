// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as TerritoryAvailabilitiesAPI from '../territory-availabilities';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListTerritoryAvailabilitiesParams,
  RelationshipListTerritoryAvailabilitiesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppAvailabilities extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: AppAvailabilityCreateParams, options?: RequestOptions): APIPromise<AppAvailability> {
    return this._client.post('/v2/appAvailabilities', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppAvailabilityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppAvailability> {
    return this._client.get(path`/v2/appAvailabilities/${id}`, { query, ...options });
  }

  listTerritoryAvailabilities(
    id: string,
    query: AppAvailabilityListTerritoryAvailabilitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppAvailabilityListTerritoryAvailabilitiesResponse> {
    return this._client.get(path`/v2/appAvailabilities/${id}/territoryAvailabilities`, { query, ...options });
  }
}

export interface AppAvailability {
  data: AppAvailability.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<TerritoryAvailabilitiesAPI.TerritoryAvailability>;
}

export namespace AppAvailability {
  export interface Data {
    id: string;

    type: 'appAvailabilities';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      availableInNewTerritories?: boolean;
    }

    export interface Relationships {
      territoryAvailabilities?: Relationships.TerritoryAvailabilities;
    }

    export namespace Relationships {
      export interface TerritoryAvailabilities {
        data?: Array<TerritoryAvailabilities.Data>;

        links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

        meta?: ActorsAPI.PagingInformation;
      }

      export namespace TerritoryAvailabilities {
        export interface Data {
          id: string;

          type: 'territoryAvailabilities';
        }
      }
    }
  }
}

export interface AppAvailabilityListTerritoryAvailabilitiesResponse {
  data: Array<TerritoryAvailabilitiesAPI.TerritoryAvailability>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppAvailabilityCreateParams {
  data: AppAvailabilityCreateParams.Data;

  included?: Array<AppAvailabilityCreateParams.Included>;
}

export namespace AppAvailabilityCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appAvailabilities';
  }

  export namespace Data {
    export interface Attributes {
      availableInNewTerritories: boolean;
    }

    export interface Relationships {
      app: Relationships.App;

      territoryAvailabilities: Relationships.TerritoryAvailabilities;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }

      export interface TerritoryAvailabilities {
        data: Array<TerritoryAvailabilities.Data>;
      }

      export namespace TerritoryAvailabilities {
        export interface Data {
          id: string;

          type: 'territoryAvailabilities';
        }
      }
    }
  }

  export interface Included {
    type: 'territoryAvailabilities';

    id?: string;
  }
}

export interface AppAvailabilityRetrieveParams {
  /**
   * the fields to include for returned resources of type appAvailabilities
   */
  'fields[appAvailabilities]'?: Array<'availableInNewTerritories' | 'territoryAvailabilities'>;

  /**
   * the fields to include for returned resources of type territoryAvailabilities
   */
  'fields[territoryAvailabilities]'?: Array<
    'available' | 'releaseDate' | 'preOrderEnabled' | 'preOrderPublishDate' | 'contentStatuses' | 'territory'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territoryAvailabilities'>;

  /**
   * maximum number of related territoryAvailabilities returned (when they are
   * included)
   */
  'limit[territoryAvailabilities]'?: number;
}

export interface AppAvailabilityListTerritoryAvailabilitiesParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * the fields to include for returned resources of type territoryAvailabilities
   */
  'fields[territoryAvailabilities]'?: Array<
    'available' | 'releaseDate' | 'preOrderEnabled' | 'preOrderPublishDate' | 'contentStatuses' | 'territory'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AppAvailabilities.Relationships = RelationshipsAPIRelationships;

export declare namespace AppAvailabilities {
  export {
    type AppAvailability as AppAvailability,
    type AppAvailabilityListTerritoryAvailabilitiesResponse as AppAvailabilityListTerritoryAvailabilitiesResponse,
    type AppAvailabilityCreateParams as AppAvailabilityCreateParams,
    type AppAvailabilityRetrieveParams as AppAvailabilityRetrieveParams,
    type AppAvailabilityListTerritoryAvailabilitiesParams as AppAvailabilityListTerritoryAvailabilitiesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListTerritoryAvailabilitiesResponse as RelationshipListTerritoryAvailabilitiesResponse,
    type RelationshipListTerritoryAvailabilitiesParams as RelationshipListTerritoryAvailabilitiesParams,
  };
}
