// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Apps extends APIResource {
  list(
    id: string,
    query: AppListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppListResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/relationships/apps`, { query, ...options });
  }

  delete(id: string, body: AppDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaTesters/${id}/relationships/apps`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppListResponse {
  data: Array<AppListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace AppListResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface AppListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppDeleteParams {
  data: Array<AppDeleteParams.Data>;
}

export namespace AppDeleteParams {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export declare namespace Apps {
  export {
    type AppListResponse as AppListResponse,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
  };
}
