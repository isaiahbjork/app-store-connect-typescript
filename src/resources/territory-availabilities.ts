// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppPriceSchedulesAPI from './app-price-schedules/app-price-schedules';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TerritoryAvailabilities extends APIResource {
  update(
    id: string,
    body: TerritoryAvailabilityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TerritoryAvailabilityUpdateResponse> {
    return this._client.patch(path`/v1/territoryAvailabilities/${id}`, { body, ...options });
  }
}

export interface TerritoryAvailability {
  id: string;

  type: 'territoryAvailabilities';

  attributes?: TerritoryAvailability.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: TerritoryAvailability.Relationships;
}

export namespace TerritoryAvailability {
  export interface Attributes {
    available?: boolean;

    contentStatuses?: Array<
      | 'AVAILABLE'
      | 'AVAILABLE_FOR_PREORDER_ON_DATE'
      | 'PROCESSING_TO_NOT_AVAILABLE'
      | 'PROCESSING_TO_AVAILABLE'
      | 'PROCESSING_TO_PRE_ORDER'
      | 'AVAILABLE_FOR_SALE_UNRELEASED_APP'
      | 'PREORDER_ON_UNRELEASED_APP'
      | 'AVAILABLE_FOR_PREORDER'
      | 'MISSING_RATING'
      | 'CANNOT_SELL_RESTRICTED_RATING'
      | 'BRAZIL_REQUIRED_TAX_ID'
      | 'MISSING_GRN'
      | 'UNVERIFIED_GRN'
      | 'ICP_NUMBER_INVALID'
      | 'ICP_NUMBER_MISSING'
      | 'TRADER_STATUS_NOT_PROVIDED'
      | 'TRADER_STATUS_VERIFICATION_FAILED'
      | 'TRADER_STATUS_VERIFICATION_STATUS_MISSING'
      | 'CANNOT_SELL_SEVENTEEN_PLUS_APPS'
      | 'CANNOT_SELL_SEXUALLY_EXPLICIT'
      | 'CANNOT_SELL_NON_IOS_GAMES'
      | 'CANNOT_SELL_SEVENTEEN_PLUS_GAMES'
      | 'CANNOT_SELL_CASINO'
      | 'CANNOT_SELL_CASINO_WITHOUT_GRAC'
      | 'CANNOT_SELL_CASINO_WITHOUT_AGE_VERIFICATION'
      | 'CANNOT_SELL_ADULT_ONLY'
      | 'CANNOT_SELL_GAMBLING_CONTESTS'
      | 'CANNOT_SELL_GAMBLING'
      | 'CANNOT_SELL_CONTESTS'
      | 'CANNOT_SELL'
    >;

    preOrderEnabled?: boolean;

    preOrderPublishDate?: string;

    releaseDate?: string;
  }

  export interface Relationships {
    territory?: Relationships.Territory;
  }

  export namespace Relationships {
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

export interface TerritoryAvailabilityUpdateResponse {
  data: TerritoryAvailability;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;
}

export interface TerritoryAvailabilityUpdateParams {
  data: TerritoryAvailabilityUpdateParams.Data;
}

export namespace TerritoryAvailabilityUpdateParams {
  export interface Data {
    id: string;

    type: 'territoryAvailabilities';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      available?: boolean;

      preOrderEnabled?: boolean;

      releaseDate?: string;
    }
  }
}

export declare namespace TerritoryAvailabilities {
  export {
    type TerritoryAvailability as TerritoryAvailability,
    type TerritoryAvailabilityUpdateResponse as TerritoryAvailabilityUpdateResponse,
    type TerritoryAvailabilityUpdateParams as TerritoryAvailabilityUpdateParams,
  };
}
