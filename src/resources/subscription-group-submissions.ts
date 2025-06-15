// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SubscriptionGroupSubmissions extends APIResource {
  create(
    body: SubscriptionGroupSubmissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGroupSubmissionCreateResponse> {
    return this._client.post('/v1/subscriptionGroupSubmissions', { body, ...options });
  }
}

export interface SubscriptionGroupSubmissionCreateResponse {
  data: SubscriptionGroupSubmissionCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace SubscriptionGroupSubmissionCreateResponse {
  export interface Data {
    id: string;

    type: 'subscriptionGroupSubmissions';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface SubscriptionGroupSubmissionCreateParams {
  data: SubscriptionGroupSubmissionCreateParams.Data;
}

export namespace SubscriptionGroupSubmissionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'subscriptionGroupSubmissions';
  }

  export namespace Data {
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

export declare namespace SubscriptionGroupSubmissions {
  export {
    type SubscriptionGroupSubmissionCreateResponse as SubscriptionGroupSubmissionCreateResponse,
    type SubscriptionGroupSubmissionCreateParams as SubscriptionGroupSubmissionCreateParams,
  };
}
