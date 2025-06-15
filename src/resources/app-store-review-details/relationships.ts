// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listAttachments(
    id: string,
    query: RelationshipListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAttachmentsResponse> {
    return this._client.get(path`/v1/appStoreReviewDetails/${id}/relationships/appStoreReviewAttachments`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListAttachmentsResponse {
  data: Array<RelationshipListAttachmentsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAttachmentsResponse {
  export interface Data {
    id: string;

    type: 'appStoreReviewAttachments';
  }
}

export interface RelationshipListAttachmentsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListAttachmentsResponse as RelationshipListAttachmentsResponse,
    type RelationshipListAttachmentsParams as RelationshipListAttachmentsParams,
  };
}
