// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Builds extends APIResource {
  create(id: string, body: BuildCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/betaTesters/${id}/relationships/builds`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(
    id: string,
    query: BuildListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildListResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/relationships/builds`, { query, ...options });
  }

  delete(id: string, body: BuildDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaTesters/${id}/relationships/builds`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaTesterBuildsLinkagesRequest {
  data: Array<BetaTesterBuildsLinkagesRequest.Data>;
}

export namespace BetaTesterBuildsLinkagesRequest {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface BuildListResponse {
  data: Array<BuildListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace BuildListResponse {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface BuildCreateParams {
  data: Array<BuildCreateParams.Data>;
}

export namespace BuildCreateParams {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface BuildListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildDeleteParams {
  data: Array<BuildDeleteParams.Data>;
}

export namespace BuildDeleteParams {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export declare namespace Builds {
  export {
    type BetaTesterBuildsLinkagesRequest as BetaTesterBuildsLinkagesRequest,
    type BuildListResponse as BuildListResponse,
    type BuildCreateParams as BuildCreateParams,
    type BuildListParams as BuildListParams,
    type BuildDeleteParams as BuildDeleteParams,
  };
}
