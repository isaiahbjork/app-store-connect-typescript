// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppStoreVersionsAPI from './app-store-versions/app-store-versions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoutingAppCoverages extends APIResource {
  create(
    body: RoutingAppCoverageCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAppCoverageResponse> {
    return this._client.post('/v1/routingAppCoverages', { body, ...options });
  }

  retrieve(
    id: string,
    query: RoutingAppCoverageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutingAppCoverageResponse> {
    return this._client.get(path`/v1/routingAppCoverages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: RoutingAppCoverageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAppCoverageResponse> {
    return this._client.patch(path`/v1/routingAppCoverages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/routingAppCoverages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RoutingAppCoverage {
  id: string;

  type: 'routingAppCoverages';

  attributes?: RoutingAppCoverage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: RoutingAppCoverage.Relationships;
}

export namespace RoutingAppCoverage {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    fileName?: string;

    fileSize?: number;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }

  export interface Relationships {
    appStoreVersion?: Relationships.AppStoreVersion;
  }

  export namespace Relationships {
    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }
  }
}

export interface RoutingAppCoverageResponse {
  data: RoutingAppCoverage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppStoreVersionsAPI.AppStoreVersionDetails>;
}

export interface RoutingAppCoverageCreateParams {
  data: RoutingAppCoverageCreateParams.Data;
}

export namespace RoutingAppCoverageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'routingAppCoverages';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

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

export interface RoutingAppCoverageRetrieveParams {
  /**
   * the fields to include for returned resources of type routingAppCoverages
   */
  'fields[routingAppCoverages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreVersion'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion'>;
}

export interface RoutingAppCoverageUpdateParams {
  data: RoutingAppCoverageUpdateParams.Data;
}

export namespace RoutingAppCoverageUpdateParams {
  export interface Data {
    id: string;

    type: 'routingAppCoverages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace RoutingAppCoverages {
  export {
    type RoutingAppCoverage as RoutingAppCoverage,
    type RoutingAppCoverageResponse as RoutingAppCoverageResponse,
    type RoutingAppCoverageCreateParams as RoutingAppCoverageCreateParams,
    type RoutingAppCoverageRetrieveParams as RoutingAppCoverageRetrieveParams,
    type RoutingAppCoverageUpdateParams as RoutingAppCoverageUpdateParams,
  };
}
