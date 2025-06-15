// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listItems(
    id: string,
    query: RelationshipListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListItemsResponse> {
    return this._client.get(path`/v1/reviewSubmissions/${id}/relationships/items`, { query, ...options });
  }
}

export interface RelationshipListItemsResponse {
  data: Array<RelationshipListItemsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListItemsResponse {
  export interface Data {
    id: string;

    type: 'reviewSubmissionItems';
  }
}

export interface RelationshipListItemsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListItemsResponse as RelationshipListItemsResponse,
    type RelationshipListItemsParams as RelationshipListItemsParams,
  };
}
