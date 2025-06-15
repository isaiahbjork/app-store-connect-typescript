// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as SubscriptionGroupsAPI from './subscription-groups/subscription-groups';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionGroupLocalizations extends APIResource {
  create(
    body: SubscriptionGroupLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupLocalizationResponse> {
    return this._client.post('/v1/subscriptionGroupLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: SubscriptionGroupLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupLocalizationResponse> {
    return this._client.get(path`/v1/subscriptionGroupLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionGroupLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupLocalizationResponse> {
    return this._client.patch(path`/v1/subscriptionGroupLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptionGroupLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionGroupLocalization {
  id: string;

  type: 'subscriptionGroupLocalizations';

  attributes?: SubscriptionGroupLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: SubscriptionGroupLocalization.Relationships;
}

export namespace SubscriptionGroupLocalization {
  export interface Attributes {
    customAppName?: string;

    locale?: string;

    name?: string;

    state?: 'PREPARE_FOR_SUBMISSION' | 'WAITING_FOR_REVIEW' | 'APPROVED' | 'REJECTED';
  }

  export interface Relationships {
    subscriptionGroup?: Relationships.SubscriptionGroup;
  }

  export namespace Relationships {
    export interface SubscriptionGroup {
      data?: SubscriptionGroup.Data;
    }

    export namespace SubscriptionGroup {
      export interface Data {
        id: string;

        type: 'subscriptionGroups';
      }
    }
  }
}

export interface SubscriptionGroupLocalizationResponse {
  data: SubscriptionGroupLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<SubscriptionGroupsAPI.SubscriptionGroup>;
}

export interface SubscriptionGroupLocalizationCreateParams {
  data: SubscriptionGroupLocalizationCreateParams.Data;
}

export namespace SubscriptionGroupLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'subscriptionGroupLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;

      customAppName?: string;
    }

    export interface Relationships {
      subscriptionGroup: Relationships.SubscriptionGroup;
    }

    export namespace Relationships {
      export interface SubscriptionGroup {
        data: SubscriptionGroup.Data;
      }

      export namespace SubscriptionGroup {
        export interface Data {
          id: string;

          type: 'subscriptionGroups';
        }
      }
    }
  }
}

export interface SubscriptionGroupLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionGroupLocalizations
   */
  'fields[subscriptionGroupLocalizations]'?: Array<
    'name' | 'customAppName' | 'locale' | 'state' | 'subscriptionGroup'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscriptionGroup'>;
}

export interface SubscriptionGroupLocalizationUpdateParams {
  data: SubscriptionGroupLocalizationUpdateParams.Data;
}

export namespace SubscriptionGroupLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionGroupLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      customAppName?: string;

      name?: string;
    }
  }
}

export declare namespace SubscriptionGroupLocalizations {
  export {
    type SubscriptionGroupLocalization as SubscriptionGroupLocalization,
    type SubscriptionGroupLocalizationResponse as SubscriptionGroupLocalizationResponse,
    type SubscriptionGroupLocalizationCreateParams as SubscriptionGroupLocalizationCreateParams,
    type SubscriptionGroupLocalizationRetrieveParams as SubscriptionGroupLocalizationRetrieveParams,
    type SubscriptionGroupLocalizationUpdateParams as SubscriptionGroupLocalizationUpdateParams,
  };
}
