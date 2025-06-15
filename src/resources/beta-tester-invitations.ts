// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BetaTesterInvitations extends APIResource {
  create(
    body: BetaTesterInvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaTesterInvitationCreateResponse> {
    return this._client.post('/v1/betaTesterInvitations', { body, ...options });
  }
}

export interface BetaTesterInvitationCreateResponse {
  data: BetaTesterInvitationCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace BetaTesterInvitationCreateResponse {
  export interface Data {
    id: string;

    type: 'betaTesterInvitations';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface BetaTesterInvitationCreateParams {
  data: BetaTesterInvitationCreateParams.Data;
}

export namespace BetaTesterInvitationCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'betaTesterInvitations';
  }

  export namespace Data {
    export interface Relationships {
      app: Relationships.App;

      /**
       * @deprecated
       */
      betaTester?: Relationships.BetaTester;
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

      /**
       * @deprecated
       */
      export interface BetaTester {
        data?: BetaTester.Data;
      }

      export namespace BetaTester {
        export interface Data {
          id: string;

          type: 'betaTesters';
        }
      }
    }
  }
}

export declare namespace BetaTesterInvitations {
  export {
    type BetaTesterInvitationCreateResponse as BetaTesterInvitationCreateResponse,
    type BetaTesterInvitationCreateParams as BetaTesterInvitationCreateParams,
  };
}
