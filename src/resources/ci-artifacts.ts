// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CiArtifacts extends APIResource {
  retrieve(
    id: string,
    query: CiArtifactRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiArtifactRetrieveResponse> {
    return this._client.get(path`/v1/ciArtifacts/${id}`, { query, ...options });
  }
}

export interface CiArtifact {
  id: string;

  type: 'ciArtifacts';

  attributes?: CiArtifact.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace CiArtifact {
  export interface Attributes {
    downloadUrl?: string;

    fileName?: string;

    fileSize?: number;

    fileType?:
      | 'ARCHIVE'
      | 'ARCHIVE_EXPORT'
      | 'LOG_BUNDLE'
      | 'RESULT_BUNDLE'
      | 'TEST_PRODUCTS'
      | 'XCODEBUILD_PRODUCTS'
      | 'STAPLED_NOTARIZED_ARCHIVE';
  }
}

export interface CiArtifactRetrieveResponse {
  data: CiArtifact;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface CiArtifactRetrieveParams {
  /**
   * the fields to include for returned resources of type ciArtifacts
   */
  'fields[ciArtifacts]'?: Array<'fileType' | 'fileName' | 'fileSize' | 'downloadUrl'>;
}

export declare namespace CiArtifacts {
  export {
    type CiArtifact as CiArtifact,
    type CiArtifactRetrieveResponse as CiArtifactRetrieveResponse,
    type CiArtifactRetrieveParams as CiArtifactRetrieveParams,
  };
}
