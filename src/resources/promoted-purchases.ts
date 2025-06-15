// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as InAppPurchasesAPI from './in-app-purchases/in-app-purchases';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PromotedPurchases extends APIResource {
  create(body: PromotedPurchaseCreateParams, options?: RequestOptions): APIPromise<PromotedPurchaseResponse> {
    return this._client.post('/v1/promotedPurchases', { body, ...options });
  }

  retrieve(
    id: string,
    query: PromotedPurchaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromotedPurchaseResponse> {
    return this._client.get(path`/v1/promotedPurchases/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: PromotedPurchaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PromotedPurchaseResponse> {
    return this._client.patch(path`/v1/promotedPurchases/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/promotedPurchases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PromotedPurchase {
  id: string;

  type: 'promotedPurchases';

  attributes?: PromotedPurchase.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: PromotedPurchase.Relationships;
}

export namespace PromotedPurchase {
  export interface Attributes {
    enabled?: boolean;

    state?: 'APPROVED' | 'IN_REVIEW' | 'PREPARE_FOR_SUBMISSION' | 'REJECTED';

    visibleForAllUsers?: boolean;
  }

  export interface Relationships {
    inAppPurchaseV2?: Relationships.InAppPurchaseV2;

    subscription?: Relationships.Subscription;
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

export interface PromotedPurchaseResponse {
  data: PromotedPurchase;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2 | SubscriptionsAPI.Subscription>;
}

export interface PromotedPurchaseCreateParams {
  data: PromotedPurchaseCreateParams.Data;
}

export namespace PromotedPurchaseCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'promotedPurchases';
  }

  export namespace Data {
    export interface Attributes {
      visibleForAllUsers: boolean;

      enabled?: boolean;
    }

    export interface Relationships {
      app: Relationships.App;

      inAppPurchaseV2?: Relationships.InAppPurchaseV2;

      subscription?: Relationships.Subscription;
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

      export interface InAppPurchaseV2 {
        data?: InAppPurchaseV2.Data;
      }

      export namespace InAppPurchaseV2 {
        export interface Data {
          id: string;

          type: 'inAppPurchases';
        }
      }

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

export interface PromotedPurchaseRetrieveParams {
  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2' | 'subscription'>;
}

export interface PromotedPurchaseUpdateParams {
  data: PromotedPurchaseUpdateParams.Data;
}

export namespace PromotedPurchaseUpdateParams {
  export interface Data {
    id: string;

    type: 'promotedPurchases';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      enabled?: boolean;

      visibleForAllUsers?: boolean;
    }
  }
}

export declare namespace PromotedPurchases {
  export {
    type PromotedPurchase as PromotedPurchase,
    type PromotedPurchaseResponse as PromotedPurchaseResponse,
    type PromotedPurchaseCreateParams as PromotedPurchaseCreateParams,
    type PromotedPurchaseRetrieveParams as PromotedPurchaseRetrieveParams,
    type PromotedPurchaseUpdateParams as PromotedPurchaseUpdateParams,
  };
}
