// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as WebhookDeliveriesAPI from '../webhook-deliveries';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListDeliveriesParams,
  RelationshipListDeliveriesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookResponse> {
    return this._client.post('/v1/webhooks', { body, ...options });
  }

  retrieve(
    id: string,
    query: WebhookRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookResponse> {
    return this._client.get(path`/v1/webhooks/${id}`, { query, ...options });
  }

  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookResponse> {
    return this._client.patch(path`/v1/webhooks/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listDeliveries(
    id: string,
    query: WebhookListDeliveriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListDeliveriesResponse> {
    return this._client.get(path`/v1/webhooks/${id}/deliveries`, { query, ...options });
  }
}

export interface Webhook {
  id: string;

  type: 'webhooks';

  attributes?: Webhook.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Webhook.Relationships;
}

export namespace Webhook {
  export interface Attributes {
    enabled?: boolean;

    eventTypes?: Array<WebhooksAPI.WebhookEventType>;

    name?: string;

    url?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    deliveries?: Relationships.Deliveries;
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

    export interface Deliveries {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export type WebhookEventType =
  | 'APP_STORE_VERSION_APP_VERSION_STATE_UPDATED'
  | 'BETA_FEEDBACK_CRASH_SUBMISSION_CREATED'
  | 'BETA_FEEDBACK_SCREENSHOT_SUBMISSION_CREATED';

export interface WebhookResponse {
  data: Webhook;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App>;
}

export interface WebhookListDeliveriesResponse {
  data: Array<WebhookDeliveriesAPI.WebhookDelivery>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<WebhookDeliveriesAPI.WebhookEvent>;

  meta?: ActorsAPI.PagingInformation;
}

export interface WebhookCreateParams {
  data: WebhookCreateParams.Data;
}

export namespace WebhookCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'webhooks';
  }

  export namespace Data {
    export interface Attributes {
      enabled: boolean;

      eventTypes: Array<WebhooksAPI.WebhookEventType>;

      name: string;

      secret: string;

      url: string;
    }

    export interface Relationships {
      app: Relationships.App;
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
    }
  }
}

export interface WebhookRetrieveParams {
  /**
   * the fields to include for returned resources of type webhooks
   */
  'fields[webhooks]'?: Array<'enabled' | 'eventTypes' | 'name' | 'url' | 'app' | 'deliveries'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;
}

export interface WebhookUpdateParams {
  data: WebhookUpdateParams.Data;
}

export namespace WebhookUpdateParams {
  export interface Data {
    id: string;

    type: 'webhooks';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      enabled?: boolean;

      eventTypes?: Array<WebhooksAPI.WebhookEventType>;

      name?: string;

      secret?: string;

      url?: string;
    }
  }
}

export interface WebhookListDeliveriesParams {
  /**
   * the fields to include for returned resources of type webhookDeliveries
   */
  'fields[webhookDeliveries]'?: Array<
    | 'createdDate'
    | 'deliveryState'
    | 'errorMessage'
    | 'redelivery'
    | 'sentDate'
    | 'request'
    | 'response'
    | 'event'
  >;

  /**
   * the fields to include for returned resources of type webhookEvents
   */
  'fields[webhookEvents]'?: Array<'eventType' | 'payload' | 'ping' | 'createdDate'>;

  /**
   * filter by createdDateGreaterThanOrEqualTo
   */
  'filter[createdDateGreaterThanOrEqualTo]'?: Array<string>;

  /**
   * filter by createdDateLessThan
   */
  'filter[createdDateLessThan]'?: Array<string>;

  /**
   * filter by attribute 'deliveryState'
   */
  'filter[deliveryState]'?: Array<'SUCCEEDED' | 'FAILED' | 'PENDING'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'event'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

Webhooks.Relationships = RelationshipsAPIRelationships;

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookEventType as WebhookEventType,
    type WebhookResponse as WebhookResponse,
    type WebhookListDeliveriesResponse as WebhookListDeliveriesResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListDeliveriesParams as WebhookListDeliveriesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListDeliveriesResponse as RelationshipListDeliveriesResponse,
    type RelationshipListDeliveriesParams as RelationshipListDeliveriesParams,
  };
}
