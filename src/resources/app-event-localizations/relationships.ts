// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listScreenshots(
    id: string,
    query: RelationshipListScreenshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListScreenshotsResponse> {
    return this._client.get(path`/v1/appEventLocalizations/${id}/relationships/appEventScreenshots`, {
      query,
      ...options,
    });
  }

  listVideoClips(
    id: string,
    query: RelationshipListVideoClipsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListVideoClipsResponse> {
    return this._client.get(path`/v1/appEventLocalizations/${id}/relationships/appEventVideoClips`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListScreenshotsResponse {
  data: Array<RelationshipListScreenshotsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListScreenshotsResponse {
  export interface Data {
    id: string;

    type: 'appEventScreenshots';
  }
}

export interface RelationshipListVideoClipsResponse {
  data: Array<RelationshipListVideoClipsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListVideoClipsResponse {
  export interface Data {
    id: string;

    type: 'appEventVideoClips';
  }
}

export interface RelationshipListScreenshotsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListVideoClipsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListScreenshotsResponse as RelationshipListScreenshotsResponse,
    type RelationshipListVideoClipsResponse as RelationshipListVideoClipsResponse,
    type RelationshipListScreenshotsParams as RelationshipListScreenshotsParams,
    type RelationshipListVideoClipsParams as RelationshipListVideoClipsParams,
  };
}
