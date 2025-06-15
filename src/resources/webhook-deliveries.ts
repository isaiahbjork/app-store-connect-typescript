// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as WebhooksAPI from './webhooks/webhooks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class WebhookDeliveries extends APIResource {
  create(
    body: WebhookDeliveryCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookDeliveryCreateResponse> {
    return this._client.post('/v1/webhookDeliveries', { body, ...options });
  }
}

export interface WebhookDelivery {
  id: string;

  type: 'webhookDeliveries';

  attributes?: WebhookDelivery.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: WebhookDelivery.Relationships;
}

export namespace WebhookDelivery {
  export interface Attributes {
    createdDate?: string;

    deliveryState?: 'SUCCEEDED' | 'FAILED' | 'PENDING';

    errorMessage?: string;

    redelivery?: boolean;

    request?: Attributes.Request;

    response?: Attributes.Response;

    sentDate?: string;
  }

  export namespace Attributes {
    export interface Request {
      url?: string;
    }

    export interface Response {
      body?: string;

      httpStatusCode?: number;
    }
  }

  export interface Relationships {
    event?: Relationships.Event;
  }

  export namespace Relationships {
    export interface Event {
      data?: Event.Data;
    }

    export namespace Event {
      export interface Data {
        id: string;

        type: 'webhookEvents';
      }
    }
  }
}

export interface WebhookEvent {
  id: string;

  type: 'webhookEvents';

  attributes?: WebhookEvent.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace WebhookEvent {
  export interface Attributes {
    createdDate?: string;

    eventType?: WebhooksAPI.WebhookEventType;

    payload?: string;

    ping?: boolean;
  }
}

export interface WebhookDeliveryCreateResponse {
  data: WebhookDelivery;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<WebhookEvent>;
}

export interface WebhookDeliveryCreateParams {
  data: WebhookDeliveryCreateParams.Data;
}

export namespace WebhookDeliveryCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'webhookDeliveries';
  }

  export namespace Data {
    export interface Relationships {
      template: Relationships.Template;
    }

    export namespace Relationships {
      export interface Template {
        data: Template.Data;
      }

      export namespace Template {
        export interface Data {
          id: string;

          type: 'webhookDeliveries';
        }
      }
    }
  }
}

export declare namespace WebhookDeliveries {
  export {
    type WebhookDelivery as WebhookDelivery,
    type WebhookEvent as WebhookEvent,
    type WebhookDeliveryCreateResponse as WebhookDeliveryCreateResponse,
    type WebhookDeliveryCreateParams as WebhookDeliveryCreateParams,
  };
}
