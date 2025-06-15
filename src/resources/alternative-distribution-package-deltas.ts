// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlternativeDistributionPackageDeltas extends APIResource {
  retrieve(
    id: string,
    query: AlternativeDistributionPackageDeltaRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageDeltaRetrieveResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageDeltas/${id}`, { query, ...options });
  }
}

export interface AlternativeDistributionPackageDelta {
  id: string;

  type: 'alternativeDistributionPackageDeltas';

  attributes?: AlternativeDistributionPackageDelta.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AlternativeDistributionPackageDelta {
  export interface Attributes {
    alternativeDistributionKeyBlob?: string;

    fileChecksum?: string;

    url?: string;

    urlExpirationDate?: string;
  }
}

export interface AlternativeDistributionPackageDeltaRetrieveResponse {
  data: AlternativeDistributionPackageDelta;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AlternativeDistributionPackageDeltaRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageDeltas
   */
  'fields[alternativeDistributionPackageDeltas]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;
}

export declare namespace AlternativeDistributionPackageDeltas {
  export {
    type AlternativeDistributionPackageDelta as AlternativeDistributionPackageDelta,
    type AlternativeDistributionPackageDeltaRetrieveResponse as AlternativeDistributionPackageDeltaRetrieveResponse,
    type AlternativeDistributionPackageDeltaRetrieveParams as AlternativeDistributionPackageDeltaRetrieveParams,
  };
}
