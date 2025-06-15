// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as InAppPurchasesAPI from './in-app-purchases/in-app-purchases';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InAppPurchaseLocalizations extends APIResource {
  create(
    body: InAppPurchaseLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseLocalizationResponse> {
    return this._client.post('/v1/inAppPurchaseLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: InAppPurchaseLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseLocalizationResponse> {
    return this._client.get(path`/v1/inAppPurchaseLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: InAppPurchaseLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseLocalizationResponse> {
    return this._client.patch(path`/v1/inAppPurchaseLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/inAppPurchaseLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InAppPurchaseLocalization {
  id: string;

  type: 'inAppPurchaseLocalizations';

  attributes?: InAppPurchaseLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchaseLocalization.Relationships;
}

export namespace InAppPurchaseLocalization {
  export interface Attributes {
    description?: string;

    locale?: string;

    name?: string;

    state?: 'PREPARE_FOR_SUBMISSION' | 'WAITING_FOR_REVIEW' | 'APPROVED' | 'REJECTED';
  }

  export interface Relationships {
    inAppPurchaseV2?: Relationships.InAppPurchaseV2;
  }

  export namespace Relationships {
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

export interface InAppPurchaseLocalizationResponse {
  data: InAppPurchaseLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2>;
}

export interface InAppPurchaseLocalizationCreateParams {
  data: InAppPurchaseLocalizationCreateParams.Data;
}

export namespace InAppPurchaseLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'inAppPurchaseLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;

      description?: string;
    }

    export interface Relationships {
      inAppPurchaseV2: Relationships.InAppPurchaseV2;
    }

    export namespace Relationships {
      export interface InAppPurchaseV2 {
        data: InAppPurchaseV2.Data;
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

export interface InAppPurchaseLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseLocalizations
   */
  'fields[inAppPurchaseLocalizations]'?: Array<
    'name' | 'locale' | 'description' | 'state' | 'inAppPurchaseV2'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2'>;
}

export interface InAppPurchaseLocalizationUpdateParams {
  data: InAppPurchaseLocalizationUpdateParams.Data;
}

export namespace InAppPurchaseLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'inAppPurchaseLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      name?: string;
    }
  }
}

export declare namespace InAppPurchaseLocalizations {
  export {
    type InAppPurchaseLocalization as InAppPurchaseLocalization,
    type InAppPurchaseLocalizationResponse as InAppPurchaseLocalizationResponse,
    type InAppPurchaseLocalizationCreateParams as InAppPurchaseLocalizationCreateParams,
    type InAppPurchaseLocalizationRetrieveParams as InAppPurchaseLocalizationRetrieveParams,
    type InAppPurchaseLocalizationUpdateParams as InAppPurchaseLocalizationUpdateParams,
  };
}
