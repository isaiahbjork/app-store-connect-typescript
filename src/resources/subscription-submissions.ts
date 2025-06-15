// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SubscriptionSubmissions extends APIResource {
  create(
    body: SubscriptionSubmissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionSubmissionCreateResponse> {
    return this._client.post('/v1/subscriptionSubmissions', { body, ...options });
  }
}

export interface SubscriptionSubmissionCreateResponse {
  data: SubscriptionSubmissionCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionsAPI.Subscription>;
}

export namespace SubscriptionSubmissionCreateResponse {
  export interface Data {
    id: string;

    type: 'subscriptionSubmissions';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Relationships {
      subscription?: Relationships.Subscription;
    }

    export namespace Relationships {
      export interface Subscription {
        data?: Subscription.Data;
      }

      export namespace Subscription {
        export interface Data {
          id: string;

          type: 'subscriptions';
        }
      }
    }
  }
}

export interface SubscriptionSubmissionCreateParams {
  data: SubscriptionSubmissionCreateParams.Data;
}

export namespace SubscriptionSubmissionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'subscriptionSubmissions';
  }

  export namespace Data {
    export interface Relationships {
      subscription: Relationships.Subscription;
    }

    export namespace Relationships {
      export interface Subscription {
        data: Subscription.Data;
      }

      export namespace Subscription {
        export interface Data {
          id: string;

          type: 'subscriptions';
        }
      }
    }
  }
}

export declare namespace SubscriptionSubmissions {
  export {
    type SubscriptionSubmissionCreateResponse as SubscriptionSubmissionCreateResponse,
    type SubscriptionSubmissionCreateParams as SubscriptionSubmissionCreateParams,
  };
}
