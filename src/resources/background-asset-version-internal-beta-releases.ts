// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as BackgroundAssetVersionsAPI from './background-asset-versions/background-asset-versions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BackgroundAssetVersionInternalBetaReleases extends APIResource {
  retrieve(
    id: string,
    query: BackgroundAssetVersionInternalBetaReleaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetVersionInternalBetaReleaseRetrieveResponse> {
    return this._client.get(path`/v1/backgroundAssetVersionInternalBetaReleases/${id}`, {
      query,
      ...options,
    });
  }
}

export interface BackgroundAssetVersionInternalBetaRelease {
  id: string;

  type: 'backgroundAssetVersionInternalBetaReleases';

  attributes?: BackgroundAssetVersionInternalBetaRelease.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BackgroundAssetVersionInternalBetaRelease.Relationships;
}

export namespace BackgroundAssetVersionInternalBetaRelease {
  export interface Attributes {
    state?: 'READY_FOR_TESTING' | 'SUPERSEDED';
  }

  export interface Relationships {
    backgroundAssetVersion?: Relationships.BackgroundAssetVersion;
  }

  export namespace Relationships {
    export interface BackgroundAssetVersion {
      data?: BackgroundAssetVersion.Data;
    }

    export namespace BackgroundAssetVersion {
      export interface Data {
        id: string;

        type: 'backgroundAssetVersions';
      }
    }
  }
}

export interface BackgroundAssetVersionInternalBetaReleaseRetrieveResponse {
  data: BackgroundAssetVersionInternalBetaRelease;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BackgroundAssetVersionsAPI.BackgroundAssetVersion>;
}

export interface BackgroundAssetVersionInternalBetaReleaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * backgroundAssetVersionInternalBetaReleases
   */
  'fields[backgroundAssetVersionInternalBetaReleases]'?: Array<'state' | 'backgroundAssetVersion'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'backgroundAssetVersion'>;
}

export declare namespace BackgroundAssetVersionInternalBetaReleases {
  export {
    type BackgroundAssetVersionInternalBetaRelease as BackgroundAssetVersionInternalBetaRelease,
    type BackgroundAssetVersionInternalBetaReleaseRetrieveResponse as BackgroundAssetVersionInternalBetaReleaseRetrieveResponse,
    type BackgroundAssetVersionInternalBetaReleaseRetrieveParams as BackgroundAssetVersionInternalBetaReleaseRetrieveParams,
  };
}
