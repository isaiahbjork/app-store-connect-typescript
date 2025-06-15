// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class EndAppAvailabilityPreOrders extends APIResource {
  create(
    body: EndAppAvailabilityPreOrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<EndAppAvailabilityPreOrderCreateResponse> {
    return this._client.post('/v1/endAppAvailabilityPreOrders', { body, ...options });
  }
}

export interface EndAppAvailabilityPreOrderCreateResponse {
  data: EndAppAvailabilityPreOrderCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace EndAppAvailabilityPreOrderCreateResponse {
  export interface Data {
    id: string;

    type: 'endAppAvailabilityPreOrders';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface EndAppAvailabilityPreOrderCreateParams {
  data: EndAppAvailabilityPreOrderCreateParams.Data;
}

export namespace EndAppAvailabilityPreOrderCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'endAppAvailabilityPreOrders';
  }

  export namespace Data {
    export interface Relationships {
      territoryAvailabilities: Relationships.TerritoryAvailabilities;
    }

    export namespace Relationships {
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
}

export declare namespace EndAppAvailabilityPreOrders {
  export {
    type EndAppAvailabilityPreOrderCreateResponse as EndAppAvailabilityPreOrderCreateResponse,
    type EndAppAvailabilityPreOrderCreateParams as EndAppAvailabilityPreOrderCreateParams,
  };
}
