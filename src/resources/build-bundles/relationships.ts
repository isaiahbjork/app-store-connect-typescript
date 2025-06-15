// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveAppClipDomainCacheStatus(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppClipDomainCacheStatusResponse> {
    return this._client.get(path`/v1/buildBundles/${id}/relationships/appClipDomainCacheStatus`, options);
  }

  retrieveAppClipDomainDebugStatus(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppClipDomainDebugStatusResponse> {
    return this._client.get(path`/v1/buildBundles/${id}/relationships/appClipDomainDebugStatus`, options);
  }

  retrieveBetaAppClipInvocations(
    id: string,
    query: RelationshipRetrieveBetaAppClipInvocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaAppClipInvocationsResponse> {
    return this._client.get(path`/v1/buildBundles/${id}/relationships/betaAppClipInvocations`, {
      query,
      ...options,
    });
  }

  retrieveBuildBundleFileSizes(
    id: string,
    query: RelationshipRetrieveBuildBundleFileSizesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBuildBundleFileSizesResponse> {
    return this._client.get(path`/v1/buildBundles/${id}/relationships/buildBundleFileSizes`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipRetrieveAppClipDomainCacheStatusResponse {
  data: RelationshipRetrieveAppClipDomainCacheStatusResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppClipDomainCacheStatusResponse {
  export interface Data {
    id: string;

    type: 'appClipDomainStatuses';
  }
}

export interface RelationshipRetrieveAppClipDomainDebugStatusResponse {
  data: RelationshipRetrieveAppClipDomainDebugStatusResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppClipDomainDebugStatusResponse {
  export interface Data {
    id: string;

    type: 'appClipDomainStatuses';
  }
}

export interface RelationshipRetrieveBetaAppClipInvocationsResponse {
  data: Array<RelationshipRetrieveBetaAppClipInvocationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBetaAppClipInvocationsResponse {
  export interface Data {
    id: string;

    type: 'betaAppClipInvocations';
  }
}

export interface RelationshipRetrieveBuildBundleFileSizesResponse {
  data: Array<RelationshipRetrieveBuildBundleFileSizesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBuildBundleFileSizesResponse {
  export interface Data {
    id: string;

    type: 'buildBundleFileSizes';
  }
}

export interface RelationshipRetrieveBetaAppClipInvocationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBuildBundleFileSizesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAppClipDomainCacheStatusResponse as RelationshipRetrieveAppClipDomainCacheStatusResponse,
    type RelationshipRetrieveAppClipDomainDebugStatusResponse as RelationshipRetrieveAppClipDomainDebugStatusResponse,
    type RelationshipRetrieveBetaAppClipInvocationsResponse as RelationshipRetrieveBetaAppClipInvocationsResponse,
    type RelationshipRetrieveBuildBundleFileSizesResponse as RelationshipRetrieveBuildBundleFileSizesResponse,
    type RelationshipRetrieveBetaAppClipInvocationsParams as RelationshipRetrieveBetaAppClipInvocationsParams,
    type RelationshipRetrieveBuildBundleFileSizesParams as RelationshipRetrieveBuildBundleFileSizesParams,
  };
}
