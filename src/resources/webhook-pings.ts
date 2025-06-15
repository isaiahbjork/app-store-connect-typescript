// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class WebhookPings extends APIResource {
  create(body: WebhookPingCreateParams, options?: RequestOptions): APIPromise<WebhookPingCreateResponse> {
    return this._client.post('/v1/webhookPings', { body, ...options });
  }
}

export interface WebhookPingCreateResponse {
  data: WebhookPingCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace WebhookPingCreateResponse {
  export interface Data {
    id: string;

    type: 'webhookPings';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface WebhookPingCreateParams {
  data: WebhookPingCreateParams.Data;
}

export namespace WebhookPingCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'webhookPings';
  }

  export namespace Data {
    export interface Relationships {
      webhook: Relationships.Webhook;
    }

    export namespace Relationships {
      export interface Webhook {
        data: Webhook.Data;
      }

      export namespace Webhook {
        export interface Data {
          id: string;

          type: 'webhooks';
        }
      }
    }
  }
}

export declare namespace WebhookPings {
  export {
    type WebhookPingCreateResponse as WebhookPingCreateResponse,
    type WebhookPingCreateParams as WebhookPingCreateParams,
  };
}
