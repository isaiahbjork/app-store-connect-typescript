// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppEncryptionDeclarationDocuments extends APIResource {
  create(
    body: AppEncryptionDeclarationDocumentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationDocumentResponse> {
    return this._client.post('/v1/appEncryptionDeclarationDocuments', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppEncryptionDeclarationDocumentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationDocumentResponse> {
    return this._client.get(path`/v1/appEncryptionDeclarationDocuments/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppEncryptionDeclarationDocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationDocumentResponse> {
    return this._client.patch(path`/v1/appEncryptionDeclarationDocuments/${id}`, { body, ...options });
  }
}

export interface AppEncryptionDeclarationDocument {
  id: string;

  type: 'appEncryptionDeclarationDocuments';

  attributes?: AppEncryptionDeclarationDocument.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AppEncryptionDeclarationDocument {
  export interface Attributes {
    assetDeliveryState?: AppClipAdvancedExperienceImagesAPI.AppMediaAssetState;

    assetToken?: string;

    downloadUrl?: string;

    fileName?: string;

    fileSize?: number;

    sourceFileChecksum?: string;

    uploadOperations?: Array<AppClipAdvancedExperienceImagesAPI.UploadOperation>;
  }
}

export interface AppEncryptionDeclarationDocumentResponse {
  data: AppEncryptionDeclarationDocument;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppEncryptionDeclarationDocumentCreateParams {
  data: AppEncryptionDeclarationDocumentCreateParams.Data;
}

export namespace AppEncryptionDeclarationDocumentCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appEncryptionDeclarationDocuments';
  }

  export namespace Data {
    export interface Attributes {
      fileName: string;

      fileSize: number;
    }

    export interface Relationships {
      appEncryptionDeclaration: Relationships.AppEncryptionDeclaration;
    }

    export namespace Relationships {
      export interface AppEncryptionDeclaration {
        data: AppEncryptionDeclaration.Data;
      }

      export namespace AppEncryptionDeclaration {
        export interface Data {
          id: string;

          type: 'appEncryptionDeclarations';
        }
      }
    }
  }
}

export interface AppEncryptionDeclarationDocumentRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appEncryptionDeclarationDocuments
   */
  'fields[appEncryptionDeclarationDocuments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'assetToken'
    | 'downloadUrl'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
  >;
}

export interface AppEncryptionDeclarationDocumentUpdateParams {
  data: AppEncryptionDeclarationDocumentUpdateParams.Data;
}

export namespace AppEncryptionDeclarationDocumentUpdateParams {
  export interface Data {
    id: string;

    type: 'appEncryptionDeclarationDocuments';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      sourceFileChecksum?: string;

      uploaded?: boolean;
    }
  }
}

export declare namespace AppEncryptionDeclarationDocuments {
  export {
    type AppEncryptionDeclarationDocument as AppEncryptionDeclarationDocument,
    type AppEncryptionDeclarationDocumentResponse as AppEncryptionDeclarationDocumentResponse,
    type AppEncryptionDeclarationDocumentCreateParams as AppEncryptionDeclarationDocumentCreateParams,
    type AppEncryptionDeclarationDocumentRetrieveParams as AppEncryptionDeclarationDocumentRetrieveParams,
    type AppEncryptionDeclarationDocumentUpdateParams as AppEncryptionDeclarationDocumentUpdateParams,
  };
}
