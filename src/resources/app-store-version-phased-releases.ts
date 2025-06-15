// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AppStoreVersionPhasedReleasesAPI from './app-store-version-phased-releases';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppStoreVersionPhasedReleases extends APIResource {
  create(
    body: AppStoreVersionPhasedReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionPhasedReleaseResponse> {
    return this._client.post('/v1/appStoreVersionPhasedReleases', { body, ...options });
  }

  update(
    id: string,
    body: AppStoreVersionPhasedReleaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionPhasedReleaseResponse> {
    return this._client.patch(path`/v1/appStoreVersionPhasedReleases/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appStoreVersionPhasedReleases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppStoreVersionPhasedRelease {
  id: string;

  type: 'appStoreVersionPhasedReleases';

  attributes?: AppStoreVersionPhasedRelease.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AppStoreVersionPhasedRelease {
  export interface Attributes {
    currentDayNumber?: number;

    phasedReleaseState?: AppStoreVersionPhasedReleasesAPI.PhasedReleaseState;

    startDate?: string;

    totalPauseDuration?: number;
  }
}

export interface AppStoreVersionPhasedReleaseResponse {
  data: AppStoreVersionPhasedRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export type PhasedReleaseState = 'INACTIVE' | 'ACTIVE' | 'PAUSED' | 'COMPLETE';

export interface AppStoreVersionPhasedReleaseCreateParams {
  data: AppStoreVersionPhasedReleaseCreateParams.Data;
}

export namespace AppStoreVersionPhasedReleaseCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appStoreVersionPhasedReleases';

    attributes?: Data.Attributes;
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

    export interface Attributes {
      phasedReleaseState?: AppStoreVersionPhasedReleasesAPI.PhasedReleaseState;
    }
  }
}

export interface AppStoreVersionPhasedReleaseUpdateParams {
  data: AppStoreVersionPhasedReleaseUpdateParams.Data;
}

export namespace AppStoreVersionPhasedReleaseUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreVersionPhasedReleases';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      phasedReleaseState?: AppStoreVersionPhasedReleasesAPI.PhasedReleaseState;
    }
  }
}

export declare namespace AppStoreVersionPhasedReleases {
  export {
    type AppStoreVersionPhasedRelease as AppStoreVersionPhasedRelease,
    type AppStoreVersionPhasedReleaseResponse as AppStoreVersionPhasedReleaseResponse,
    type PhasedReleaseState as PhasedReleaseState,
    type AppStoreVersionPhasedReleaseCreateParams as AppStoreVersionPhasedReleaseCreateParams,
    type AppStoreVersionPhasedReleaseUpdateParams as AppStoreVersionPhasedReleaseUpdateParams,
  };
}
