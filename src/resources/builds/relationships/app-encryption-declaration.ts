// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as AppEncryptionDeclarationsAPI from '../../app-encryption-declarations/app-encryption-declarations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AppEncryptionDeclaration extends APIResource {
  retrieve(
    id: string,
    query: AppEncryptionDeclarationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationRetrieveResponse> {
    return this._client.get(path`/v1/builds/${id}/appEncryptionDeclaration`, { query, ...options });
  }

  update(id: string, body: AppEncryptionDeclarationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/builds/${id}/relationships/appEncryptionDeclaration`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppEncryptionDeclarationRetrieveResponse {
  data: AppEncryptionDeclarationsAPI.AppEncryptionDeclarationDeclaration;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppEncryptionDeclarationRetrieveParams {
  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;
}

export interface AppEncryptionDeclarationUpdateParams {
  data: AppEncryptionDeclarationUpdateParams.Data;
}

export namespace AppEncryptionDeclarationUpdateParams {
  export interface Data {
    id: string;

    type: 'appEncryptionDeclarations';
  }
}

export declare namespace AppEncryptionDeclaration {
  export {
    type AppEncryptionDeclarationRetrieveResponse as AppEncryptionDeclarationRetrieveResponse,
    type AppEncryptionDeclarationRetrieveParams as AppEncryptionDeclarationRetrieveParams,
    type AppEncryptionDeclarationUpdateParams as AppEncryptionDeclarationUpdateParams,
  };
}
