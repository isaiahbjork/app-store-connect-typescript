// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CompatibilityVersions extends APIResource {
  create(id: string, body: CompatibilityVersionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/gameCenterAppVersions/${id}/relationships/compatibilityVersions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(
    id: string,
    query: CompatibilityVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompatibilityVersionListResponse> {
    return this._client.get(path`/v1/gameCenterAppVersions/${id}/relationships/compatibilityVersions`, {
      query,
      ...options,
    });
  }

  delete(id: string, body: CompatibilityVersionDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterAppVersions/${id}/relationships/compatibilityVersions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CompatibilityVersionsLinkagesRequest {
  data: Array<CompatibilityVersionsLinkagesRequest.Data>;
}

export namespace CompatibilityVersionsLinkagesRequest {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';
  }
}

export interface CompatibilityVersionListResponse {
  data: Array<CompatibilityVersionListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace CompatibilityVersionListResponse {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';
  }
}

export interface CompatibilityVersionCreateParams {
  data: Array<CompatibilityVersionCreateParams.Data>;
}

export namespace CompatibilityVersionCreateParams {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';
  }
}

export interface CompatibilityVersionListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CompatibilityVersionDeleteParams {
  data: Array<CompatibilityVersionDeleteParams.Data>;
}

export namespace CompatibilityVersionDeleteParams {
  export interface Data {
    id: string;

    type: 'gameCenterAppVersions';
  }
}

export declare namespace CompatibilityVersions {
  export {
    type CompatibilityVersionsLinkagesRequest as CompatibilityVersionsLinkagesRequest,
    type CompatibilityVersionListResponse as CompatibilityVersionListResponse,
    type CompatibilityVersionCreateParams as CompatibilityVersionCreateParams,
    type CompatibilityVersionListParams as CompatibilityVersionListParams,
    type CompatibilityVersionDeleteParams as CompatibilityVersionDeleteParams,
  };
}
