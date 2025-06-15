// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listUploadFiles(
    id: string,
    query: RelationshipListUploadFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListUploadFilesResponse> {
    return this._client.get(
      path`/v1/backgroundAssetVersions/${id}/relationships/backgroundAssetUploadFiles`,
      { query, ...options },
    );
  }
}

export interface RelationshipListUploadFilesResponse {
  data: Array<RelationshipListUploadFilesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListUploadFilesResponse {
  export interface Data {
    id: string;

    type: 'backgroundAssetUploadFiles';
  }
}

export interface RelationshipListUploadFilesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListUploadFilesResponse as RelationshipListUploadFilesResponse,
    type RelationshipListUploadFilesParams as RelationshipListUploadFilesParams,
  };
}
