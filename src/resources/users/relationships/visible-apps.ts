// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VisibleApps extends APIResource {
  create(id: string, body: VisibleAppCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/users/${id}/relationships/visibleApps`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: string, body: VisibleAppUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/users/${id}/relationships/visibleApps`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(id: string, body: VisibleAppDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/users/${id}/relationships/visibleApps`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  get(
    id: string,
    query: VisibleAppGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VisibleAppGetResponse> {
    return this._client.get(path`/v1/users/${id}/relationships/visibleApps`, { query, ...options });
  }
}

export interface LinkagesRequestVisibleApps {
  data: Array<LinkagesRequestVisibleApps.Data>;
}

export namespace LinkagesRequestVisibleApps {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface VisibleAppGetResponse {
  data: Array<VisibleAppGetResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace VisibleAppGetResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface VisibleAppCreateParams {
  data: Array<VisibleAppCreateParams.Data>;
}

export namespace VisibleAppCreateParams {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface VisibleAppUpdateParams {
  data: Array<VisibleAppUpdateParams.Data>;
}

export namespace VisibleAppUpdateParams {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface VisibleAppDeleteParams {
  data: Array<VisibleAppDeleteParams.Data>;
}

export namespace VisibleAppDeleteParams {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface VisibleAppGetParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace VisibleApps {
  export {
    type LinkagesRequestVisibleApps as LinkagesRequestVisibleApps,
    type VisibleAppGetResponse as VisibleAppGetResponse,
    type VisibleAppCreateParams as VisibleAppCreateParams,
    type VisibleAppUpdateParams as VisibleAppUpdateParams,
    type VisibleAppDeleteParams as VisibleAppDeleteParams,
    type VisibleAppGetParams as VisibleAppGetParams,
  };
}
