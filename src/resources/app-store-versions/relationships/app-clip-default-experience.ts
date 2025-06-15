// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AppClipDefaultExperience extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<AppClipDefaultExperienceRetrieveResponse> {
    return this._client.get(path`/v1/appStoreVersions/${id}/relationships/appClipDefaultExperience`, options);
  }

  update(id: string, body: AppClipDefaultExperienceUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/appStoreVersions/${id}/relationships/appClipDefaultExperience`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppClipDefaultExperienceRetrieveResponse {
  data: AppClipDefaultExperienceRetrieveResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace AppClipDefaultExperienceRetrieveResponse {
  export interface Data {
    id: string;

    type: 'appClipDefaultExperiences';
  }
}

export interface AppClipDefaultExperienceUpdateParams {
  data: AppClipDefaultExperienceUpdateParams.Data;
}

export namespace AppClipDefaultExperienceUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipDefaultExperiences';
  }
}

export declare namespace AppClipDefaultExperience {
  export {
    type AppClipDefaultExperienceRetrieveResponse as AppClipDefaultExperienceRetrieveResponse,
    type AppClipDefaultExperienceUpdateParams as AppClipDefaultExperienceUpdateParams,
  };
}
