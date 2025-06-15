// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ReleaseWithAppStoreVersion extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<ReleaseWithAppStoreVersionRetrieveResponse> {
    return this._client.get(
      path`/v1/appClipDefaultExperiences/${id}/relationships/releaseWithAppStoreVersion`,
      options,
    );
  }

  update(
    id: string,
    body: ReleaseWithAppStoreVersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(
      path`/v1/appClipDefaultExperiences/${id}/relationships/releaseWithAppStoreVersion`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface ReleaseWithAppStoreVersionRetrieveResponse {
  data: ReleaseWithAppStoreVersionRetrieveResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace ReleaseWithAppStoreVersionRetrieveResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersions';
  }
}

export interface ReleaseWithAppStoreVersionUpdateParams {
  data: ReleaseWithAppStoreVersionUpdateParams.Data;
}

export namespace ReleaseWithAppStoreVersionUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreVersions';
  }
}

export declare namespace ReleaseWithAppStoreVersion {
  export {
    type ReleaseWithAppStoreVersionRetrieveResponse as ReleaseWithAppStoreVersionRetrieveResponse,
    type ReleaseWithAppStoreVersionUpdateParams as ReleaseWithAppStoreVersionUpdateParams,
  };
}
