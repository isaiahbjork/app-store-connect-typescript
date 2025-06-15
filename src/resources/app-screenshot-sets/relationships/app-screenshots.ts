// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AppScreenshots extends APIResource {
  retrieve(
    id: string,
    query: AppScreenshotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppScreenshotRetrieveResponse> {
    return this._client.get(path`/v1/appScreenshotSets/${id}/relationships/appScreenshots`, {
      query,
      ...options,
    });
  }

  update(id: string, body: AppScreenshotUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/appScreenshotSets/${id}/relationships/appScreenshots`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppScreenshotRetrieveResponse {
  data: Array<AppScreenshotRetrieveResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace AppScreenshotRetrieveResponse {
  export interface Data {
    id: string;

    type: 'appScreenshots';
  }
}

export interface AppScreenshotRetrieveParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppScreenshotUpdateParams {
  data: Array<AppScreenshotUpdateParams.Data>;
}

export namespace AppScreenshotUpdateParams {
  export interface Data {
    id: string;

    type: 'appScreenshots';
  }
}

export declare namespace AppScreenshots {
  export {
    type AppScreenshotRetrieveResponse as AppScreenshotRetrieveResponse,
    type AppScreenshotRetrieveParams as AppScreenshotRetrieveParams,
    type AppScreenshotUpdateParams as AppScreenshotUpdateParams,
  };
}
