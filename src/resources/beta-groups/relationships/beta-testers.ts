// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BetaGroupsAPI from '../beta-groups';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BetaTesters extends APIResource {
  list(
    id: string,
    query: BetaTesterListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupsAPI.BetaTestersWithoutIncludesResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/betaTesters`, { query, ...options });
  }

  add(id: string, body: BetaTesterAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/betaGroups/${id}/relationships/betaTesters`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  remove(id: string, body: BetaTesterRemoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaGroups/${id}/relationships/betaTesters`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaGroupBetaTestersLinkagesRequest {
  data: Array<BetaGroupBetaTestersLinkagesRequest.Data>;
}

export namespace BetaGroupBetaTestersLinkagesRequest {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface BetaTesterListParams {
  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaTesterAddParams {
  data: Array<BetaTesterAddParams.Data>;
}

export namespace BetaTesterAddParams {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface BetaTesterRemoveParams {
  data: Array<BetaTesterRemoveParams.Data>;
}

export namespace BetaTesterRemoveParams {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export declare namespace BetaTesters {
  export {
    type BetaGroupBetaTestersLinkagesRequest as BetaGroupBetaTestersLinkagesRequest,
    type BetaTesterListParams as BetaTesterListParams,
    type BetaTesterAddParams as BetaTesterAddParams,
    type BetaTesterRemoveParams as BetaTesterRemoveParams,
  };
}
