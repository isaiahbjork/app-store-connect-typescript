// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listAppPreviewSets(
    id: string,
    query: RelationshipListAppPreviewSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAppPreviewSetsResponse> {
    return this._client.get(path`/v1/appStoreVersionLocalizations/${id}/relationships/appPreviewSets`, {
      query,
      ...options,
    });
  }

  listAppScreenshotSets(
    id: string,
    query: RelationshipListAppScreenshotSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListAppScreenshotSetsResponse> {
    return this._client.get(path`/v1/appStoreVersionLocalizations/${id}/relationships/appScreenshotSets`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListAppPreviewSetsResponse {
  data: Array<RelationshipListAppPreviewSetsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAppPreviewSetsResponse {
  export interface Data {
    id: string;

    type: 'appPreviewSets';
  }
}

export interface RelationshipListAppScreenshotSetsResponse {
  data: Array<RelationshipListAppScreenshotSetsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListAppScreenshotSetsResponse {
  export interface Data {
    id: string;

    type: 'appScreenshotSets';
  }
}

export interface RelationshipListAppPreviewSetsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListAppScreenshotSetsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListAppPreviewSetsResponse as RelationshipListAppPreviewSetsResponse,
    type RelationshipListAppScreenshotSetsResponse as RelationshipListAppScreenshotSetsResponse,
    type RelationshipListAppPreviewSetsParams as RelationshipListAppPreviewSetsParams,
    type RelationshipListAppScreenshotSetsParams as RelationshipListAppScreenshotSetsParams,
  };
}
