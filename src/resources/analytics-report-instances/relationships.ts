// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listSegments(
    id: string,
    query: RelationshipListSegmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListSegmentsResponse> {
    return this._client.get(path`/v1/analyticsReportInstances/${id}/relationships/segments`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListSegmentsResponse {
  data: Array<RelationshipListSegmentsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListSegmentsResponse {
  export interface Data {
    id: string;

    type: 'analyticsReportSegments';
  }
}

export interface RelationshipListSegmentsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListSegmentsResponse as RelationshipListSegmentsResponse,
    type RelationshipListSegmentsParams as RelationshipListSegmentsParams,
  };
}
