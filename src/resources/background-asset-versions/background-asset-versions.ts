// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as BackgroundAssetUploadFilesAPI from '../background-asset-upload-files';
import * as BackgroundAssetVersionInternalBetaReleasesAPI from '../background-asset-version-internal-beta-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListUploadFilesParams,
  RelationshipListUploadFilesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BackgroundAssetVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: BackgroundAssetVersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetVersionResponse> {
    return this._client.post('/v1/backgroundAssetVersions', { body, ...options });
  }

  retrieve(
    id: string,
    query: BackgroundAssetVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetVersionResponse> {
    return this._client.get(path`/v1/backgroundAssetVersions/${id}`, { query, ...options });
  }

  listUploadFiles(
    id: string,
    query: BackgroundAssetVersionListUploadFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetVersionListUploadFilesResponse> {
    return this._client.get(path`/v1/backgroundAssetVersions/${id}/backgroundAssetUploadFiles`, {
      query,
      ...options,
    });
  }
}

export interface BackgroundAssetVersion {
  id: string;

  type: 'backgroundAssetVersions';

  attributes?: BackgroundAssetVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BackgroundAssetVersion.Relationships;
}

export namespace BackgroundAssetVersion {
  export interface Attributes {
    createdDate?: string;

    platforms?: Array<AppStoreVersionExperimentsAPI.Platform>;

    state?: 'AWAITING_UPLOAD' | 'PROCESSING' | 'FAILED' | 'COMPLETE';

    version?: string;
  }

  export interface Relationships {
    assetFile?: Relationships.AssetFile;

    backgroundAssetUploadFiles?: Relationships.BackgroundAssetUploadFiles;

    internalBetaRelease?: Relationships.InternalBetaRelease;

    manifestFile?: Relationships.ManifestFile;
  }

  export namespace Relationships {
    export interface AssetFile {
      data?: AssetFile.Data;
    }

    export namespace AssetFile {
      export interface Data {
        id: string;

        type: 'backgroundAssetUploadFiles';
      }
    }

    export interface BackgroundAssetUploadFiles {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface InternalBetaRelease {
      data?: InternalBetaRelease.Data;
    }

    export namespace InternalBetaRelease {
      export interface Data {
        id: string;

        type: 'backgroundAssetVersionInternalBetaReleases';
      }
    }

    export interface ManifestFile {
      data?: ManifestFile.Data;
    }

    export namespace ManifestFile {
      export interface Data {
        id: string;

        type: 'backgroundAssetUploadFiles';
      }
    }
  }
}

export interface BackgroundAssetVersionResponse {
  data: BackgroundAssetVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | BackgroundAssetVersionInternalBetaReleasesAPI.BackgroundAssetVersionInternalBetaRelease
    | BackgroundAssetUploadFilesAPI.BackgroundAssetUploadFile
  >;
}

export interface BackgroundAssetVersionListUploadFilesResponse {
  data: Array<BackgroundAssetUploadFilesAPI.BackgroundAssetUploadFile>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BackgroundAssetVersionCreateParams {
  data: BackgroundAssetVersionCreateParams.Data;
}

export namespace BackgroundAssetVersionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'backgroundAssetVersions';
  }

  export namespace Data {
    export interface Relationships {
      backgroundAsset: Relationships.BackgroundAsset;
    }

    export namespace Relationships {
      export interface BackgroundAsset {
        data: BackgroundAsset.Data;
      }

      export namespace BackgroundAsset {
        export interface Data {
          id: string;

          type: 'backgroundAssets';
        }
      }
    }
  }
}

export interface BackgroundAssetVersionRetrieveParams {
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

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'internalBetaRelease' | 'assetFile' | 'manifestFile'>;
}

export interface BackgroundAssetVersionListUploadFilesParams {
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
   * maximum resources per page
   */
  limit?: number;
}

BackgroundAssetVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace BackgroundAssetVersions {
  export {
    type BackgroundAssetVersion as BackgroundAssetVersion,
    type BackgroundAssetVersionResponse as BackgroundAssetVersionResponse,
    type BackgroundAssetVersionListUploadFilesResponse as BackgroundAssetVersionListUploadFilesResponse,
    type BackgroundAssetVersionCreateParams as BackgroundAssetVersionCreateParams,
    type BackgroundAssetVersionRetrieveParams as BackgroundAssetVersionRetrieveParams,
    type BackgroundAssetVersionListUploadFilesParams as BackgroundAssetVersionListUploadFilesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListUploadFilesResponse as RelationshipListUploadFilesResponse,
    type RelationshipListUploadFilesParams as RelationshipListUploadFilesParams,
  };
}
