// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SubscriptionGracePeriodsAPI from './subscription-grace-periods';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubscriptionGracePeriods extends APIResource {
  retrieve(
    id: string,
    query: SubscriptionGracePeriodRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionGracePeriodResponse> {
    return this._client.get(path`/v1/subscriptionGracePeriods/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: SubscriptionGracePeriodUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGracePeriodResponse> {
    return this._client.patch(path`/v1/subscriptionGracePeriods/${id}`, { body, ...options });
  }
}

export interface SubscriptionGracePeriodDetails {
  id: string;

  type: 'subscriptionGracePeriods';

  attributes?: SubscriptionGracePeriodDetails.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace SubscriptionGracePeriodDetails {
  export interface Attributes {
    duration?: SubscriptionGracePeriodsAPI.SubscriptionGracePeriodDuration;

    optIn?: boolean;

    renewalType?: 'ALL_RENEWALS' | 'PAID_TO_PAID_ONLY';

    sandboxOptIn?: boolean;
  }
}

export type SubscriptionGracePeriodDuration = 'THREE_DAYS' | 'SIXTEEN_DAYS' | 'TWENTY_EIGHT_DAYS';

export interface SubscriptionGracePeriodResponse {
  data: SubscriptionGracePeriodDetails;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface SubscriptionGracePeriodRetrieveParams {
  /**
   * the fields to include for returned resources of type subscriptionGracePeriods
   */
  'fields[subscriptionGracePeriods]'?: Array<'optIn' | 'sandboxOptIn' | 'duration' | 'renewalType'>;
}

export interface SubscriptionGracePeriodUpdateParams {
  data: SubscriptionGracePeriodUpdateParams.Data;
}

export namespace SubscriptionGracePeriodUpdateParams {
  export interface Data {
    id: string;

    type: 'subscriptionGracePeriods';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      duration?: SubscriptionGracePeriodsAPI.SubscriptionGracePeriodDuration;

      optIn?: boolean;

      renewalType?: 'ALL_RENEWALS' | 'PAID_TO_PAID_ONLY';

      sandboxOptIn?: boolean;
    }
  }
}

export declare namespace SubscriptionGracePeriods {
  export {
    type SubscriptionGracePeriodDetails as SubscriptionGracePeriodDetails,
    type SubscriptionGracePeriodDuration as SubscriptionGracePeriodDuration,
    type SubscriptionGracePeriodResponse as SubscriptionGracePeriodResponse,
    type SubscriptionGracePeriodRetrieveParams as SubscriptionGracePeriodRetrieveParams,
    type SubscriptionGracePeriodUpdateParams as SubscriptionGracePeriodUpdateParams,
  };
}
