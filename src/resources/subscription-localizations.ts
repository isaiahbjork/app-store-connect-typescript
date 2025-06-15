// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionLocalizations extends APIResource {
  create(
    body: SubscriptionLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionLocalizationResponse> {
    return this._client.post('/v1/subscriptionLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionLocalizationResponse> {
    return this._client.get(path`/v1/subscriptionLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionLocalizationResponse> {
    return this._client.patch(path`/v1/subscriptionLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionLocalization {
  id: string;

  type: 'subscriptionLocalizations';

  attributes?: SubscriptionLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionLocalization.Relationships;
}

export namespace SubscriptionLocalization {
  export interface Attributes {
    description?: string;

    locale?: string;

    name?: string;

    state?: 'PREPARE_FOR_SUBMISSION' | 'WAITING_FOR_REVIEW' | 'APPROVED' | 'REJECTED';
  }

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

export interface SubscriptionLocalizationResponse {
  data: SubscriptionLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionsAPI.Subscription>;
}

export interface SubscriptionLocalizationCreateParams {
  data: SubscriptionLocalizationCreateParams.Data;
}

export namespace SubscriptionLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;

      description?: string;
    }

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

export interface SubscriptionLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type subscriptionLocalizations
   */
  'fields[subscriptionLocalizations]'?: Array<'name' | 'locale' | 'description' | 'state' | 'subscription'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscription'>;
}

export interface SubscriptionLocalizationUpdateParams {
  data: SubscriptionLocalizationUpdateParams.Data;
}

export namespace SubscriptionLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      name?: string;
    }
  }
}

export declare namespace SubscriptionLocalizations {
  export {
    type SubscriptionLocalization as SubscriptionLocalization,
    type SubscriptionLocalizationResponse as SubscriptionLocalizationResponse,
    type SubscriptionLocalizationCreateParams as SubscriptionLocalizationCreateParams,
    type SubscriptionLocalizationRetrieveParams as SubscriptionLocalizationRetrieveParams,
    type SubscriptionLocalizationUpdateParams as SubscriptionLocalizationUpdateParams,
  };
}
