// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlternativeDistributionPackageVariants extends APIResource {
  retrieve(
    id: string,
    query: AlternativeDistributionPackageVariantRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageVariantRetrieveResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageVariants/${id}`, { query, ...options });
  }
}

export interface AlternativeDistributionPackageVariant {
  id: string;

  type: 'alternativeDistributionPackageVariants';

  attributes?: AlternativeDistributionPackageVariant.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AlternativeDistributionPackageVariant {
  export interface Attributes {
    alternativeDistributionKeyBlob?: string;

    fileChecksum?: string;

    url?: string;

    urlExpirationDate?: string;
  }
}

export interface AlternativeDistributionPackageVariantRetrieveResponse {
  data: AlternativeDistributionPackageVariant;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AlternativeDistributionPackageVariantRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageVariants
   */
  'fields[alternativeDistributionPackageVariants]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;
}

export declare namespace AlternativeDistributionPackageVariants {
  export {
    type AlternativeDistributionPackageVariant as AlternativeDistributionPackageVariant,
    type AlternativeDistributionPackageVariantRetrieveResponse as AlternativeDistributionPackageVariantRetrieveResponse,
    type AlternativeDistributionPackageVariantRetrieveParams as AlternativeDistributionPackageVariantRetrieveParams,
  };
}
