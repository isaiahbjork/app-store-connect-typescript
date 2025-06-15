// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CompatibleVersions extends APIResource {
  /**
   * @deprecated
   */
  create(id: string, body: CompatibleVersionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @deprecated
   */
  retrieve(
    id: string,
    query: CompatibleVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompatibleVersionRetrieveResponse> {
    return this._client.get(path`/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`, {
      query,
      ...options,
    });
  }

  /**
   * @deprecated
   */
  update(id: string, body: CompatibleVersionUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @deprecated
   */
  delete(id: string, body: CompatibleVersionDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * @deprecated
 */
export interface Linkages {
  data: Array<Linkages.Data>;
}

export namespace Linkages {
  export interface Data {
    id: string;

    type: 'gameCenterEnabledVersions';
  }
}

/**
 * @deprecated
 */
export interface CompatibleVersionRetrieveResponse {
  data: Array<CompatibleVersionRetrieveResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace CompatibleVersionRetrieveResponse {
  export interface Data {
    id: string;

    type: 'gameCenterEnabledVersions';
  }
}

export interface CompatibleVersionCreateParams {
  data: Array<CompatibleVersionCreateParams.Data>;
}

export namespace CompatibleVersionCreateParams {
  export interface Data {
    id: string;

    type: 'gameCenterEnabledVersions';
  }
}

export interface CompatibleVersionRetrieveParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CompatibleVersionUpdateParams {
  data: Array<CompatibleVersionUpdateParams.Data>;
}

export namespace CompatibleVersionUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterEnabledVersions';
  }
}

export interface CompatibleVersionDeleteParams {
  data: Array<CompatibleVersionDeleteParams.Data>;
}

export namespace CompatibleVersionDeleteParams {
  export interface Data {
    id: string;

    type: 'gameCenterEnabledVersions';
  }
}

export declare namespace CompatibleVersions {
  export {
    type Linkages as Linkages,
    type CompatibleVersionRetrieveResponse as CompatibleVersionRetrieveResponse,
    type CompatibleVersionCreateParams as CompatibleVersionCreateParams,
    type CompatibleVersionRetrieveParams as CompatibleVersionRetrieveParams,
    type CompatibleVersionUpdateParams as CompatibleVersionUpdateParams,
    type CompatibleVersionDeleteParams as CompatibleVersionDeleteParams,
  };
}
