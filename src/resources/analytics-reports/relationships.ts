// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listInstances(
    id: string,
    query: RelationshipListInstancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListInstancesResponse> {
    return this._client.get(path`/v1/analyticsReports/${id}/relationships/instances`, { query, ...options });
  }
}

export interface RelationshipListInstancesResponse {
  data: Array<RelationshipListInstancesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListInstancesResponse {
  export interface Data {
    id: string;

    type: 'analyticsReportInstances';
  }
}

export interface RelationshipListInstancesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListInstancesResponse as RelationshipListInstancesResponse,
    type RelationshipListInstancesParams as RelationshipListInstancesParams,
  };
}
