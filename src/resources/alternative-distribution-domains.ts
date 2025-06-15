// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlternativeDistributionDomains extends APIResource {
  create(
    body: AlternativeDistributionDomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionDomainResponse> {
    return this._client.post('/v1/alternativeDistributionDomains', { body, ...options });
  }

  retrieve(
    id: string,
    query: AlternativeDistributionDomainRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionDomainResponse> {
    return this._client.get(path`/v1/alternativeDistributionDomains/${id}`, { query, ...options });
  }

  list(
    query: AlternativeDistributionDomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionDomainListResponse> {
    return this._client.get('/v1/alternativeDistributionDomains', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/alternativeDistributionDomains/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AlternativeDistributionDomain {
  id: string;

  type: 'alternativeDistributionDomains';

  attributes?: AlternativeDistributionDomain.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AlternativeDistributionDomain {
  export interface Attributes {
    createdDate?: string;

    domain?: string;

    referenceName?: string;
  }
}

export interface AlternativeDistributionDomainResponse {
  data: AlternativeDistributionDomain;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AlternativeDistributionDomainListResponse {
  data: Array<AlternativeDistributionDomain>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AlternativeDistributionDomainCreateParams {
  data: AlternativeDistributionDomainCreateParams.Data;
}

export namespace AlternativeDistributionDomainCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'alternativeDistributionDomains';
  }

  export namespace Data {
    export interface Attributes {
      domain: string;

      referenceName: string;
    }
  }
}

export interface AlternativeDistributionDomainRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionDomains
   */
  'fields[alternativeDistributionDomains]'?: Array<'domain' | 'referenceName' | 'createdDate'>;
}

export interface AlternativeDistributionDomainListParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionDomains
   */
  'fields[alternativeDistributionDomains]'?: Array<'domain' | 'referenceName' | 'createdDate'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace AlternativeDistributionDomains {
  export {
    type AlternativeDistributionDomain as AlternativeDistributionDomain,
    type AlternativeDistributionDomainResponse as AlternativeDistributionDomainResponse,
    type AlternativeDistributionDomainListResponse as AlternativeDistributionDomainListResponse,
    type AlternativeDistributionDomainCreateParams as AlternativeDistributionDomainCreateParams,
    type AlternativeDistributionDomainRetrieveParams as AlternativeDistributionDomainRetrieveParams,
    type AlternativeDistributionDomainListParams as AlternativeDistributionDomainListParams,
  };
}
