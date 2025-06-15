// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AppStoreVersionReleaseRequests extends APIResource {
  create(
    body: AppStoreVersionReleaseRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionReleaseRequestCreateResponse> {
    return this._client.post('/v1/appStoreVersionReleaseRequests', { body, ...options });
  }
}

export interface AppStoreVersionReleaseRequestCreateResponse {
  data: AppStoreVersionReleaseRequestCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace AppStoreVersionReleaseRequestCreateResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionReleaseRequests';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface AppStoreVersionReleaseRequestCreateParams {
  data: AppStoreVersionReleaseRequestCreateParams.Data;
}

export namespace AppStoreVersionReleaseRequestCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appStoreVersionReleaseRequests';
  }

  export namespace Data {
    export interface Relationships {
      appStoreVersion: Relationships.AppStoreVersion;
    }

    export namespace Relationships {
      export interface AppStoreVersion {
        data: AppStoreVersion.Data;
      }

      export namespace AppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }
    }
  }
}

export declare namespace AppStoreVersionReleaseRequests {
  export {
    type AppStoreVersionReleaseRequestCreateResponse as AppStoreVersionReleaseRequestCreateResponse,
    type AppStoreVersionReleaseRequestCreateParams as AppStoreVersionReleaseRequestCreateParams,
  };
}
