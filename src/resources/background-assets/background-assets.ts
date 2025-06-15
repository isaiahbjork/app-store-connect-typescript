// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as BackgroundAssetUploadFilesAPI from '../background-asset-upload-files';
import * as BackgroundAssetVersionInternalBetaReleasesAPI from '../background-asset-version-internal-beta-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as BackgroundAssetVersionsAPI from '../background-asset-versions/background-asset-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListVersionsParams,
  RelationshipListVersionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BackgroundAssets extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: BackgroundAssetCreateParams, options?: RequestOptions): APIPromise<BackgroundAssetResponse> {
    return this._client.post('/v1/backgroundAssets', { body, ...options });
  }

  retrieve(
    id: string,
    query: BackgroundAssetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetResponse> {
    return this._client.get(path`/v1/backgroundAssets/${id}`, { query, ...options });
  }

  listVersions(
    id: string,
    query: BackgroundAssetListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetListVersionsResponse> {
    return this._client.get(path`/v1/backgroundAssets/${id}/versions`, { query, ...options });
  }
}

export interface BackgroundAsset {
  id: string;

  type: 'backgroundAssets';

  attributes?: BackgroundAsset.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BackgroundAsset.Relationships;
}

export namespace BackgroundAsset {
  export interface Attributes {
    assetPackIdentifier?: string;

    createdDate?: string;
  }

  export interface Relationships {
    internalBetaVersion?: Relationships.InternalBetaVersion;

    versions?: Relationships.Versions;
  }

  export namespace Relationships {
    export interface InternalBetaVersion {
      data?: InternalBetaVersion.Data;
    }

    export namespace InternalBetaVersion {
      export interface Data {
        id: string;

        type: 'backgroundAssetVersions';
      }
    }

    export interface Versions {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface BackgroundAssetResponse {
  data: BackgroundAsset;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BackgroundAssetVersionsAPI.BackgroundAssetVersion>;
}

export interface BackgroundAssetListVersionsResponse {
  data: Array<BackgroundAssetVersionsAPI.BackgroundAssetVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | BackgroundAssetVersionInternalBetaReleasesAPI.BackgroundAssetVersionInternalBetaRelease
    | BackgroundAssetUploadFilesAPI.BackgroundAssetUploadFile
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface BackgroundAssetCreateParams {
  data: BackgroundAssetCreateParams.Data;
}

export namespace BackgroundAssetCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'backgroundAssets';
  }

  export namespace Data {
    export interface Attributes {
      assetPackIdentifier: string;
    }

    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface BackgroundAssetRetrieveParams {
  /**
   * the fields to include for returned resources of type backgroundAssets
   */
  'fields[backgroundAssets]'?: Array<
    'assetPackIdentifier' | 'createdDate' | 'versions' | 'internalBetaVersion'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'internalBetaVersion'>;
}

export interface BackgroundAssetListVersionsParams {
  /**
   * the fields to include for returned resources of type backgroundAssetUploadFiles
   */
  'fields[backgroundAssetUploadFiles]'?: Array<
    | 'assetDeliveryState'
    | 'assetToken'
    | 'assetType'
    | 'fileName'
    | 'fileSize'
    | 'sourceFileChecksum'
    | 'uploadOperations'
  >;

  /**
   * the fields to include for returned resources of type
   * backgroundAssetVersionInternalBetaReleases
   */
  'fields[backgroundAssetVersionInternalBetaReleases]'?: Array<'state' | 'backgroundAssetVersion'>;

  /**
   * the fields to include for returned resources of type backgroundAssetVersions
   */
  'fields[backgroundAssetVersions]'?: Array<
    | 'createdDate'
    | 'platforms'
    | 'state'
    | 'version'
    | 'internalBetaRelease'
    | 'assetFile'
    | 'manifestFile'
    | 'backgroundAssetUploadFiles'
  >;

  'filter[internalBetaRelease'?: BackgroundAssetListVersionsParams.FilterInternalBetaRelease;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<'AWAITING_UPLOAD' | 'PROCESSING' | 'FAILED' | 'COMPLETE'>;

  /**
   * filter by attribute 'version'
   */
  'filter[version]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'internalBetaRelease' | 'assetFile' | 'manifestFile'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'version' | '-version'>;
}

export namespace BackgroundAssetListVersionsParams {
  export interface FilterInternalBetaRelease {
    /**
     * filter by attribute 'internalBetaRelease.state'
     */
    'state]'?: Array<'READY_FOR_TESTING' | 'SUPERSEDED'>;
  }
}

BackgroundAssets.Relationships = RelationshipsAPIRelationships;

export declare namespace BackgroundAssets {
  export {
    type BackgroundAsset as BackgroundAsset,
    type BackgroundAssetResponse as BackgroundAssetResponse,
    type BackgroundAssetListVersionsResponse as BackgroundAssetListVersionsResponse,
    type BackgroundAssetCreateParams as BackgroundAssetCreateParams,
    type BackgroundAssetRetrieveParams as BackgroundAssetRetrieveParams,
    type BackgroundAssetListVersionsParams as BackgroundAssetListVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
  };
}
