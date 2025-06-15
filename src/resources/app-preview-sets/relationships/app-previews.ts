// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AppPreviews extends APIResource {
  retrieve(
    id: string,
    query: AppPreviewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPreviewRetrieveResponse> {
    return this._client.get(path`/v1/appPreviewSets/${id}/relationships/appPreviews`, { query, ...options });
  }

  update(id: string, body: AppPreviewUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/appPreviewSets/${id}/relationships/appPreviews`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppPreviewRetrieveResponse {
  data: Array<AppPreviewRetrieveResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace AppPreviewRetrieveResponse {
  export interface Data {
    id: string;

    type: 'appPreviews';
  }
}

export interface AppPreviewRetrieveParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppPreviewUpdateParams {
  data: Array<AppPreviewUpdateParams.Data>;
}

export namespace AppPreviewUpdateParams {
  export interface Data {
    id: string;

    type: 'appPreviews';
  }
}

export declare namespace AppPreviews {
  export {
    type AppPreviewRetrieveResponse as AppPreviewRetrieveResponse,
    type AppPreviewRetrieveParams as AppPreviewRetrieveParams,
    type AppPreviewUpdateParams as AppPreviewUpdateParams,
  };
}
