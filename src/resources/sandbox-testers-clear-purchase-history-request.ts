// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SandboxTestersClearPurchaseHistoryRequest extends APIResource {
  create(
    body: SandboxTestersClearPurchaseHistoryRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<SandboxTestersClearPurchaseHistoryRequestCreateResponse> {
    return this._client.post('/v2/sandboxTestersClearPurchaseHistoryRequest', { body, ...options });
  }
}

export interface SandboxTestersClearPurchaseHistoryRequestCreateResponse {
  data: SandboxTestersClearPurchaseHistoryRequestCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace SandboxTestersClearPurchaseHistoryRequestCreateResponse {
  export interface Data {
    id: string;

    type: 'sandboxTestersClearPurchaseHistoryRequest';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface SandboxTestersClearPurchaseHistoryRequestCreateParams {
  data: SandboxTestersClearPurchaseHistoryRequestCreateParams.Data;
}

export namespace SandboxTestersClearPurchaseHistoryRequestCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'sandboxTestersClearPurchaseHistoryRequest';
  }

  export namespace Data {
    export interface Relationships {
      sandboxTesters: Relationships.SandboxTesters;
    }

    export namespace Relationships {
      export interface SandboxTesters {
        data: Array<SandboxTesters.Data>;
      }

      export namespace SandboxTesters {
        export interface Data {
          id: string;

          type: 'sandboxTesters';
        }
      }
    }
  }
}

export declare namespace SandboxTestersClearPurchaseHistoryRequest {
  export {
    type SandboxTestersClearPurchaseHistoryRequestCreateResponse as SandboxTestersClearPurchaseHistoryRequestCreateResponse,
    type SandboxTestersClearPurchaseHistoryRequestCreateParams as SandboxTestersClearPurchaseHistoryRequestCreateParams,
  };
}
