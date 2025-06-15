// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listVersions(
    id: string,
    query: RelationshipListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListVersionsResponse> {
    return this._client.get(path`/v1/backgroundAssets/${id}/relationships/versions`, { query, ...options });
  }
}

export interface RelationshipListVersionsResponse {
  data: Array<RelationshipListVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListVersionsResponse {
  export interface Data {
    id: string;

    type: 'backgroundAssetVersions';
  }
}

export interface RelationshipListVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
  };
}
