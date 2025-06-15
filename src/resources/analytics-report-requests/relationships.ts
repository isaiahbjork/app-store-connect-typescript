// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listReports(
    id: string,
    query: RelationshipListReportsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListReportsResponse> {
    return this._client.get(path`/v1/analyticsReportRequests/${id}/relationships/reports`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListReportsResponse {
  data: Array<RelationshipListReportsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListReportsResponse {
  export interface Data {
    id: string;

    type: 'analyticsReports';
  }
}

export interface RelationshipListReportsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListReportsResponse as RelationshipListReportsResponse,
    type RelationshipListReportsParams as RelationshipListReportsParams,
  };
}
