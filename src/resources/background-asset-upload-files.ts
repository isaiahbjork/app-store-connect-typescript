// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BackgroundAssetUploadFiles extends APIResource {
  create(
    body: BackgroundAssetUploadFileCreateParams,
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetUploadFileResponse> {
    return this._client.post('/v1/backgroundAssetUploadFiles', { body, ...options });
  }

  retrieve(
    id: string,
    query: BackgroundAssetUploadFileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetUploadFileResponse> {
    return this._client.get(path`/v1/backgroundAssetUploadFiles/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BackgroundAssetUploadFileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BackgroundAssetUploadFileResponse> {
    return this._client.patch(path`/v1/backgroundAssetUploadFiles/${id}`, { body, ...options });
  }
}

export interface BackgroundAssetUploadFile {
  id: string;

  type: 'backgroundAssetUploadFiles';

  attributes?: BackgroundAssetUploadFile.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace BackgroundAssetUploadFile {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    assetToken?: string;

    assetType?: 'ASSET' | 'MANIFEST';

    fileName?: string;

    fileSize?: number;

    sourceFileChecksum?: string;

    uploadOperations?: Array<Attributes.UploadOperation>;
  }

  export namespace Attributes {
    export interface UploadOperation {
      entityTag?: string;

      expiration?: string;

      length?: number;

      method?: string;

      offset?: number;

      partNumber?: number;

      requestHeaders?: Array<AppClipAdvancedExperienceImagesAPI.HTTPHeader>;

      url?: string;
    }
  }
}

export interface BackgroundAssetUploadFileResponse {
  data: BackgroundAssetUploadFile;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface BackgroundAssetUploadFileCreateParams {
  data: BackgroundAssetUploadFileCreateParams.Data;
}

export namespace BackgroundAssetUploadFileCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'backgroundAssetUploadFiles';
  }

  export namespace Data {
    export interface Attributes {
      assetType: 'ASSET' | 'MANIFEST';

      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      backgroundAssetVersion: Relationships.BackgroundAssetVersion;
    }

    export namespace Relationships {
      export interface BackgroundAssetVersion {
        data: BackgroundAssetVersion.Data;
      }

      export namespace BackgroundAssetVersion {
        export interface Data {
          id: string;

          type: 'backgroundAssetVersions';
        }
      }
    }
  }
}

export interface BackgroundAssetUploadFileRetrieveParams {
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
}

export interface BackgroundAssetUploadFileUpdateParams {
  data: BackgroundAssetUploadFileUpdateParams.Data;
}

export namespace BackgroundAssetUploadFileUpdateParams {
  export interface Data {
    id: string;

    type: 'backgroundAssetUploadFiles';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace BackgroundAssetUploadFiles {
  export {
    type BackgroundAssetUploadFile as BackgroundAssetUploadFile,
    type BackgroundAssetUploadFileResponse as BackgroundAssetUploadFileResponse,
    type BackgroundAssetUploadFileCreateParams as BackgroundAssetUploadFileCreateParams,
    type BackgroundAssetUploadFileRetrieveParams as BackgroundAssetUploadFileRetrieveParams,
    type BackgroundAssetUploadFileUpdateParams as BackgroundAssetUploadFileUpdateParams,
  };
}
