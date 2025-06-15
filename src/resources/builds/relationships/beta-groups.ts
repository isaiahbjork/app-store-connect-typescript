// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BetaGroups extends APIResource {
  create(id: string, body: BetaGroupCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/builds/${id}/relationships/betaGroups`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(id: string, body: BetaGroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/builds/${id}/relationships/betaGroups`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LinkagesRequestBetaGroups {
  data: Array<LinkagesRequestBetaGroups.Data>;
}

export namespace LinkagesRequestBetaGroups {
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
    type LinkagesRequestBetaGroups as LinkagesRequestBetaGroups,
    type BetaGroupCreateParams as BetaGroupCreateParams,
    type BetaGroupDeleteParams as BetaGroupDeleteParams,
  };
}
