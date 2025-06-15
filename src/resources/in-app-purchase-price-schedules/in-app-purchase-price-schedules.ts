// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as InAppPurchasePricePointsAPI from '../in-app-purchase-price-points/in-app-purchase-price-points';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAutomaticPricesParams,
  RelationshipListAutomaticPricesResponse,
  RelationshipListManualPricesParams,
  RelationshipListManualPricesResponse,
  RelationshipRetrieveBaseTerritoryResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InAppPurchasePriceSchedules extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: InAppPurchasePriceScheduleCreateParams,
    options?: RequestOptions,
  ): APIPromise<PriceScheduleResponse> {
    return this._client.post('/v1/inAppPurchasePriceSchedules', { body, ...options });
  }

  retrieve(
    id: string,
    query: InAppPurchasePriceScheduleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriceScheduleResponse> {
    return this._client.get(path`/v1/inAppPurchasePriceSchedules/${id}`, { query, ...options });
  }

  listAutomaticPrices(
    id: string,
    query: InAppPurchasePriceScheduleListAutomaticPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricesResponse> {
    return this._client.get(path`/v1/inAppPurchasePriceSchedules/${id}/automaticPrices`, {
      query,
      ...options,
    });
  }

  listManualPrices(
    id: string,
    query: InAppPurchasePriceScheduleListManualPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricesResponse> {
    return this._client.get(path`/v1/inAppPurchasePriceSchedules/${id}/manualPrices`, { query, ...options });
  }

  retrieveBaseTerritory(
    id: string,
    query: InAppPurchasePriceScheduleRetrieveBaseTerritoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPriceSchedulesAPI.TerritoryResponse> {
    return this._client.get(path`/v1/inAppPurchasePriceSchedules/${id}/baseTerritory`, { query, ...options });
  }
}

export interface Price {
  id: string;

  type: 'inAppPurchasePrices';

  attributes?: Price.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Price.Relationships;
}

export namespace Price {
  export interface Attributes {
    endDate?: string;

    manual?: boolean;

    startDate?: string;
  }

  export interface Relationships {
    inAppPurchasePricePoint?: Relationships.InAppPurchasePricePoint;

    territory?: Relationships.Territory;
  }

  export namespace Relationships {
    export interface InAppPurchasePricePoint {
      data?: InAppPurchasePricePoint.Data;
    }

    export namespace InAppPurchasePricePoint {
      export interface Data {
        id: string;

        type: 'inAppPurchasePricePoints';
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

export interface PriceSchedule {
  id: string;

  type: 'inAppPurchasePriceSchedules';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: PriceSchedule.Relationships;
}

export namespace PriceSchedule {
  export interface Relationships {
    automaticPrices?: Relationships.AutomaticPrices;

    baseTerritory?: Relationships.BaseTerritory;

    manualPrices?: Relationships.ManualPrices;
  }

  export namespace Relationships {
    export interface AutomaticPrices {
      data?: Array<AutomaticPrices.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AutomaticPrices {
      export interface Data {
        id: string;

        type: 'inAppPurchasePrices';
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

        type: 'inAppPurchasePrices';
      }
    }
  }
}

export interface PriceScheduleResponse {
  data: PriceSchedule;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory | Price>;
}

export interface PricesResponse {
  data: Array<Price>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<InAppPurchasePricePointsAPI.PricePoint | AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface InAppPurchasePriceScheduleCreateParams {
  data: InAppPurchasePriceScheduleCreateParams.Data;

  included?: Array<
    | InAppPurchasePriceScheduleCreateParams.InAppPurchasePriceInlineCreate
    | AppPriceSchedulesAPI.TerritoryInlineCreate
  >;
}

export namespace InAppPurchasePriceScheduleCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'inAppPurchasePriceSchedules';
  }

  export namespace Data {
    export interface Relationships {
      baseTerritory: Relationships.BaseTerritory;

      inAppPurchase: Relationships.InAppPurchase;

      manualPrices: Relationships.ManualPrices;
    }

    export namespace Relationships {
      export interface BaseTerritory {
        data: BaseTerritory.Data;
      }

      export namespace BaseTerritory {
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

      export interface ManualPrices {
        data: Array<ManualPrices.Data>;
      }

      export namespace ManualPrices {
        export interface Data {
          id: string;

          type: 'inAppPurchasePrices';
        }
      }
    }
  }

  export interface InAppPurchasePriceInlineCreate {
    type: 'inAppPurchasePrices';

    id?: string;

    attributes?: InAppPurchasePriceInlineCreate.Attributes;

    relationships?: InAppPurchasePriceInlineCreate.Relationships;
  }

  export namespace InAppPurchasePriceInlineCreate {
    export interface Attributes {
      endDate?: string;

      startDate?: string;
    }

    export interface Relationships {
      inAppPurchasePricePoint?: Relationships.InAppPurchasePricePoint;

      inAppPurchaseV2?: Relationships.InAppPurchaseV2;
    }

    export namespace Relationships {
      export interface InAppPurchasePricePoint {
        data?: InAppPurchasePricePoint.Data;
      }

      export namespace InAppPurchasePricePoint {
        export interface Data {
          id: string;

          type: 'inAppPurchasePricePoints';
        }
      }

      export interface InAppPurchaseV2 {
        data?: InAppPurchaseV2.Data;
      }

      export namespace InAppPurchaseV2 {
        export interface Data {
          id: string;

          type: 'inAppPurchases';
        }
      }
    }
  }
}

export interface InAppPurchasePriceScheduleRetrieveParams {
  /**
   * the fields to include for returned resources of type inAppPurchasePrices
   */
  'fields[inAppPurchasePrices]'?: Array<
    'startDate' | 'endDate' | 'manual' | 'inAppPurchasePricePoint' | 'territory'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchasePriceSchedules
   */
  'fields[inAppPurchasePriceSchedules]'?: Array<'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * maximum number of related automaticPrices returned (when they are included)
   */
  'limit[automaticPrices]'?: number;

  /**
   * maximum number of related manualPrices returned (when they are included)
   */
  'limit[manualPrices]'?: number;
}

export interface InAppPurchasePriceScheduleListAutomaticPricesParams {
  /**
   * the fields to include for returned resources of type inAppPurchasePricePoints
   */
  'fields[inAppPurchasePricePoints]'?: Array<'customerPrice' | 'proceeds' | 'territory' | 'equalizations'>;

  /**
   * the fields to include for returned resources of type inAppPurchasePrices
   */
  'fields[inAppPurchasePrices]'?: Array<
    'startDate' | 'endDate' | 'manual' | 'inAppPurchasePricePoint' | 'territory'
  >;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchasePricePoint' | 'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface InAppPurchasePriceScheduleListManualPricesParams {
  /**
   * the fields to include for returned resources of type inAppPurchasePricePoints
   */
  'fields[inAppPurchasePricePoints]'?: Array<'customerPrice' | 'proceeds' | 'territory' | 'equalizations'>;

  /**
   * the fields to include for returned resources of type inAppPurchasePrices
   */
  'fields[inAppPurchasePrices]'?: Array<
    'startDate' | 'endDate' | 'manual' | 'inAppPurchasePricePoint' | 'territory'
  >;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchasePricePoint' | 'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface InAppPurchasePriceScheduleRetrieveBaseTerritoryParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;
}

InAppPurchasePriceSchedules.Relationships = RelationshipsAPIRelationships;

export declare namespace InAppPurchasePriceSchedules {
  export {
    type Price as Price,
    type PriceSchedule as PriceSchedule,
    type PriceScheduleResponse as PriceScheduleResponse,
    type PricesResponse as PricesResponse,
    type InAppPurchasePriceScheduleCreateParams as InAppPurchasePriceScheduleCreateParams,
    type InAppPurchasePriceScheduleRetrieveParams as InAppPurchasePriceScheduleRetrieveParams,
    type InAppPurchasePriceScheduleListAutomaticPricesParams as InAppPurchasePriceScheduleListAutomaticPricesParams,
    type InAppPurchasePriceScheduleListManualPricesParams as InAppPurchasePriceScheduleListManualPricesParams,
    type InAppPurchasePriceScheduleRetrieveBaseTerritoryParams as InAppPurchasePriceScheduleRetrieveBaseTerritoryParams,
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
