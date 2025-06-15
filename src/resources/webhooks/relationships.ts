// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listDeliveries(
    id: string,
    query: RelationshipListDeliveriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListDeliveriesResponse> {
    return this._client.get(path`/v1/webhooks/${id}/relationships/deliveries`, { query, ...options });
  }
}

export interface RelationshipListDeliveriesResponse {
  data: Array<RelationshipListDeliveriesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListDeliveriesResponse {
  export interface Data {
    id: string;

    type: 'webhookDeliveries';
  }
}

export interface RelationshipListDeliveriesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListDeliveriesResponse as RelationshipListDeliveriesResponse,
    type RelationshipListDeliveriesParams as RelationshipListDeliveriesParams,
  };
}
