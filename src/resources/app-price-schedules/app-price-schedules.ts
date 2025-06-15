// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPricePointsAPI from '../app-price-points/app-price-points';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAutomaticPricesParams,
  RelationshipListAutomaticPricesResponse,
  RelationshipListManualPricesParams,
  RelationshipListManualPricesResponse,
  RelationshipRetrieveBaseTerritoryResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppsAPI from '../apps/apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppPriceSchedules extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: AppPriceScheduleCreateParams, options?: RequestOptions): APIPromise<AppPriceSchedule> {
    return this._client.post('/v1/appPriceSchedules', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppPriceScheduleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPriceSchedule> {
    return this._client.get(path`/v1/appPriceSchedules/${id}`, { query, ...options });
  }

  listAutomaticPrices(
    id: string,
    query: AppPriceScheduleListAutomaticPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPricesV2> {
    return this._client.get(path`/v1/appPriceSchedules/${id}/automaticPrices`, { query, ...options });
  }

  listManualPrices(
    id: string,
    query: AppPriceScheduleListManualPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPricesV2> {
    return this._client.get(path`/v1/appPriceSchedules/${id}/manualPrices`, { query, ...options });
  }

  retrieveBaseTerritory(
    id: string,
    query: AppPriceScheduleRetrieveBaseTerritoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerritoryResponse> {
    return this._client.get(path`/v1/appPriceSchedules/${id}/baseTerritory`, { query, ...options });
  }
}

export interface AppPriceSchedule {
  data: AppPriceSchedule.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | Territory | AppPriceV2>;
}

export namespace AppPriceSchedule {
  export interface Data {
    id: string;

    type: 'appPriceSchedules';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Relationships {
      app?: Relationships.App;

      automaticPrices?: Relationships.AutomaticPrices;

      baseTerritory?: Relationships.BaseTerritory;

      manualPrices?: Relationships.ManualPrices;
    }

    export namespace Relationships {
      export interface App {
        data?: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }

      export interface AutomaticPrices {
        data?: Array<AutomaticPrices.Data>;

        links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

        meta?: ActorsAPI.PagingInformation;
      }

      export namespace AutomaticPrices {
        export interface Data {
          id: string;

          type: 'appPrices';
        }
      }

      export interface BaseTerritory {
        data?: BaseTerritory.Data;

        links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
      }

      export namespace BaseTerritory {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }

      export interface ManualPrices {
        data?: Array<ManualPrices.Data>;

        links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

        meta?: ActorsAPI.PagingInformation;
      }

      export namespace ManualPrices {
        export interface Data {
          id: string;

          type: 'appPrices';
        }
      }
    }
  }
}

export interface AppPriceV2 {
  id: string;

  type: 'appPrices';

  attributes?: AppPriceV2.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppPriceV2.Relationships;
}

export namespace AppPriceV2 {
  export interface Attributes {
    endDate?: string;

    manual?: boolean;

    startDate?: string;
  }

  export interface Relationships {
    appPricePoint?: Relationships.AppPricePoint;

    territory?: Relationships.Territory;
  }

  export namespace Relationships {
    export interface AppPricePoint {
      data?: AppPricePoint.Data;
    }

    export namespace AppPricePoint {
      export interface Data {
        id: string;

        type: 'appPricePoints';
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

export interface AppPricesV2 {
  data: Array<AppPriceV2>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPricePointsAPI.AppPricePoint | Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface Territory {
  id: string;

  type: 'territories';

  attributes?: Territory.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace Territory {
  export interface Attributes {
    currency?: string;
  }
}

export interface TerritoryInlineCreate {
  type: 'territories';

  id?: string;
}

export interface TerritoryResponse {
  data: Territory;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppPriceScheduleCreateParams {
  data: AppPriceScheduleCreateParams.Data;

  included?: Array<AppPriceScheduleCreateParams.AppPriceV2InlineCreate | TerritoryInlineCreate>;
}

export namespace AppPriceScheduleCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appPriceSchedules';
  }

  export namespace Data {
    export interface Relationships {
      app: Relationships.App;

      baseTerritory: Relationships.BaseTerritory;

      manualPrices: Relationships.ManualPrices;
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

      export interface BaseTerritory {
        data: BaseTerritory.Data;
      }

      export namespace BaseTerritory {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }

      export interface ManualPrices {
        data: Array<ManualPrices.Data>;
      }

      export namespace ManualPrices {
        export interface Data {
          id: string;

          type: 'appPrices';
        }
      }
    }
  }

  export interface AppPriceV2InlineCreate {
    type: 'appPrices';

    id?: string;
  }
}

export interface AppPriceScheduleRetrieveParams {
  /**
   * the fields to include for returned resources of type appPrices
   */
  'fields[appPrices]'?: Array<'manual' | 'startDate' | 'endDate' | 'appPricePoint' | 'territory'>;

  /**
   * the fields to include for returned resources of type appPriceSchedules
   */
  'fields[appPriceSchedules]'?: Array<'app' | 'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * maximum number of related automaticPrices returned (when they are included)
   */
  'limit[automaticPrices]'?: number;

  /**
   * maximum number of related manualPrices returned (when they are included)
   */
  'limit[manualPrices]'?: number;
}

export interface AppPriceScheduleListAutomaticPricesParams {
  /**
   * the fields to include for returned resources of type appPricePoints
   */
  'fields[appPricePoints]'?: Array<'customerPrice' | 'proceeds' | 'app' | 'equalizations' | 'territory'>;

  /**
   * the fields to include for returned resources of type appPrices
   */
  'fields[appPrices]'?: Array<'manual' | 'startDate' | 'endDate' | 'appPricePoint' | 'territory'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by attribute 'endDate'
   */
  'filter[endDate]'?: Array<string>;

  /**
   * filter by attribute 'startDate'
   */
  'filter[startDate]'?: Array<string>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appPricePoint' | 'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppPriceScheduleListManualPricesParams {
  /**
   * the fields to include for returned resources of type appPricePoints
   */
  'fields[appPricePoints]'?: Array<'customerPrice' | 'proceeds' | 'app' | 'equalizations' | 'territory'>;

  /**
   * the fields to include for returned resources of type appPrices
   */
  'fields[appPrices]'?: Array<'manual' | 'startDate' | 'endDate' | 'appPricePoint' | 'territory'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by attribute 'endDate'
   */
  'filter[endDate]'?: Array<string>;

  /**
   * filter by attribute 'startDate'
   */
  'filter[startDate]'?: Array<string>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appPricePoint' | 'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppPriceScheduleRetrieveBaseTerritoryParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;
}

AppPriceSchedules.Relationships = RelationshipsAPIRelationships;

export declare namespace AppPriceSchedules {
  export {
    type AppPriceSchedule as AppPriceSchedule,
    type AppPriceV2 as AppPriceV2,
    type AppPricesV2 as AppPricesV2,
    type Territory as Territory,
    type TerritoryInlineCreate as TerritoryInlineCreate,
    type TerritoryResponse as TerritoryResponse,
    type AppPriceScheduleCreateParams as AppPriceScheduleCreateParams,
    type AppPriceScheduleRetrieveParams as AppPriceScheduleRetrieveParams,
    type AppPriceScheduleListAutomaticPricesParams as AppPriceScheduleListAutomaticPricesParams,
    type AppPriceScheduleListManualPricesParams as AppPriceScheduleListManualPricesParams,
    type AppPriceScheduleRetrieveBaseTerritoryParams as AppPriceScheduleRetrieveBaseTerritoryParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAutomaticPricesResponse as RelationshipListAutomaticPricesResponse,
    type RelationshipListManualPricesResponse as RelationshipListManualPricesResponse,
    type RelationshipRetrieveBaseTerritoryResponse as RelationshipRetrieveBaseTerritoryResponse,
    type RelationshipListAutomaticPricesParams as RelationshipListAutomaticPricesParams,
    type RelationshipListManualPricesParams as RelationshipListManualPricesParams,
  };
}
