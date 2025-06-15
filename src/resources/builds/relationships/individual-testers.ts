// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IndividualTesters extends APIResource {
  create(id: string, body: IndividualTesterCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/builds/${id}/relationships/individualTesters`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(
    id: string,
    query: IndividualTesterRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndividualTesterRetrieveResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/individualTesters`, { query, ...options });
  }

  delete(id: string, body: IndividualTesterDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/builds/${id}/relationships/individualTesters`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LinkagesRequestIndividualTesters {
  data: Array<LinkagesRequestIndividualTesters.Data>;
}

export namespace LinkagesRequestIndividualTesters {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface IndividualTesterRetrieveResponse {
  data: Array<IndividualTesterRetrieveResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace IndividualTesterRetrieveResponse {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface IndividualTesterCreateParams {
  data: Array<IndividualTesterCreateParams.Data>;
}

export namespace IndividualTesterCreateParams {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface IndividualTesterRetrieveParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface IndividualTesterDeleteParams {
  data: Array<IndividualTesterDeleteParams.Data>;
}

export namespace IndividualTesterDeleteParams {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export declare namespace IndividualTesters {
  export {
    type LinkagesRequestIndividualTesters as LinkagesRequestIndividualTesters,
    type IndividualTesterRetrieveResponse as IndividualTesterRetrieveResponse,
    type IndividualTesterCreateParams as IndividualTesterCreateParams,
    type IndividualTesterRetrieveParams as IndividualTesterRetrieveParams,
    type IndividualTesterDeleteParams as IndividualTesterDeleteParams,
  };
}
