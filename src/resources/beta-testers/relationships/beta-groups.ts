// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BetaGroups extends APIResource {
  create(id: string, body: BetaGroupCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/betaTesters/${id}/relationships/betaGroups`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(
    id: string,
    query: BetaGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupListResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/relationships/betaGroups`, { query, ...options });
  }

  delete(id: string, body: BetaGroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaTesters/${id}/relationships/betaGroups`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaTesterBetaGroupsLinkagesRequest {
  data: Array<BetaTesterBetaGroupsLinkagesRequest.Data>;
}

export namespace BetaTesterBetaGroupsLinkagesRequest {
  export interface Data {
    id: string;

    type: 'betaGroups';
  }
}

export interface BetaGroupListResponse {
  data: Array<BetaGroupListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace BetaGroupListResponse {
  export interface Data {
    id: string;

    type: 'betaGroups';
  }
}

export interface BetaGroupCreateParams {
  data: Array<BetaGroupCreateParams.Data>;
}

export namespace BetaGroupCreateParams {
  export interface Data {
    id: string;

    type: 'betaGroups';
  }
}

export interface BetaGroupListParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaGroupDeleteParams {
  data: Array<BetaGroupDeleteParams.Data>;
}

export namespace BetaGroupDeleteParams {
  export interface Data {
    id: string;

    type: 'betaGroups';
  }
}

export declare namespace BetaGroups {
  export {
    type BetaTesterBetaGroupsLinkagesRequest as BetaTesterBetaGroupsLinkagesRequest,
    type BetaGroupListResponse as BetaGroupListResponse,
    type BetaGroupCreateParams as BetaGroupCreateParams,
    type BetaGroupListParams as BetaGroupListParams,
    type BetaGroupDeleteParams as BetaGroupDeleteParams,
  };
}
