// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Build extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<BuildRetrieveResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/build`, options);
  }

  update(id: string, body: BuildUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/appStoreVersions/${id}/relationships/build`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BuildRetrieveResponse {
  data: BuildRetrieveResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace BuildRetrieveResponse {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface BuildUpdateParams {
  data: BuildUpdateParams.Data;
}

export namespace BuildUpdateParams {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export declare namespace Build {
  export { type BuildRetrieveResponse as BuildRetrieveResponse, type BuildUpdateParams as BuildUpdateParams };
}
