// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  /**
   * @deprecated
   */
  createBuild(id: string, body: RelationshipCreateBuildParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/appEncryptionDeclarations/${id}/relationships/builds`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @deprecated
   */
  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/appEncryptionDeclarations/${id}/relationships/app`, options);
  }

  retrieveAppEncryptionDeclarationDocument(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppEncryptionDeclarationDocumentResponse> {
    return this._client.get(
      path`/v1/appEncryptionDeclarations/${id}/relationships/appEncryptionDeclarationDocument`,
      options,
    );
  }
}

/**
 * @deprecated
 */
export interface RelationshipRetrieveAppResponse {
  data: RelationshipRetrieveAppResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface RelationshipRetrieveAppEncryptionDeclarationDocumentResponse {
  data: RelationshipRetrieveAppEncryptionDeclarationDocumentResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppEncryptionDeclarationDocumentResponse {
  export interface Data {
    id: string;

    type: 'appEncryptionDeclarationDocuments';
  }
}

export interface RelationshipCreateBuildParams {
  data: Array<RelationshipCreateBuildParams.Data>;
}

export namespace RelationshipCreateBuildParams {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrieveAppEncryptionDeclarationDocumentResponse as RelationshipRetrieveAppEncryptionDeclarationDocumentResponse,
    type RelationshipCreateBuildParams as RelationshipCreateBuildParams,
  };
}
