// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as InAppPurchasesAPI from './in-app-purchases/in-app-purchases';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class InAppPurchaseSubmissions extends APIResource {
  create(
    body: InAppPurchaseSubmissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseSubmissionCreateResponse> {
    return this._client.post('/v1/inAppPurchaseSubmissions', { body, ...options });
  }
}

export interface InAppPurchaseSubmissionCreateResponse {
  data: InAppPurchaseSubmissionCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2>;
}

export namespace InAppPurchaseSubmissionCreateResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchaseSubmissions';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;

    relationships?: Data.Relationships;
  }

  export namespace Data {
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
}

export interface InAppPurchaseSubmissionCreateParams {
  data: InAppPurchaseSubmissionCreateParams.Data;
}

export namespace InAppPurchaseSubmissionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'inAppPurchaseSubmissions';
  }

  export namespace Data {
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

export declare namespace InAppPurchaseSubmissions {
  export {
    type InAppPurchaseSubmissionCreateResponse as InAppPurchaseSubmissionCreateResponse,
    type InAppPurchaseSubmissionCreateParams as InAppPurchaseSubmissionCreateParams,
  };
}
