// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listLocalizations(
    id: string,
    query: RelationshipListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListLocalizationsResponse> {
    return this._client.get(path`/v1/subscriptionGroups/${id}/relationships/subscriptionGroupLocalizations`, {
      query,
      ...options,
    });
  }

  listSubscriptions(
    id: string,
    query: RelationshipListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListSubscriptionsResponse> {
    return this._client.get(path`/v1/subscriptionGroups/${id}/relationships/subscriptions`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListLocalizationsResponse {
  data: Array<RelationshipListLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'subscriptionGroupLocalizations';
  }
}

export interface RelationshipListSubscriptionsResponse {
  data: Array<RelationshipListSubscriptionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListSubscriptionsResponse {
  export interface Data {
    id: string;

    type: 'subscriptions';
  }
}

export interface RelationshipListLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListSubscriptionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListSubscriptionsResponse as RelationshipListSubscriptionsResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
    type RelationshipListSubscriptionsParams as RelationshipListSubscriptionsParams,
  };
}
