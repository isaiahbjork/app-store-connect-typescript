// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as BetaAppClipInvocationLocalizationsAPI from '../beta-app-clip-invocation-localizations';
import * as BetaAppClipInvocationsAPI from '../beta-app-clip-invocations';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveAppClipDomainCacheStatusResponse,
  RelationshipRetrieveAppClipDomainDebugStatusResponse,
  RelationshipRetrieveBetaAppClipInvocationsParams,
  RelationshipRetrieveBetaAppClipInvocationsResponse,
  RelationshipRetrieveBuildBundleFileSizesParams,
  RelationshipRetrieveBuildBundleFileSizesResponse,
  Relationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BuildBundles extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieveAppClipDomainCacheStatus(
    id: string,
    query: BuildBundleRetrieveAppClipDomainCacheStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipDomainStatus> {
    return this._client.get(path`/v1/buildBundles/${id}/appClipDomainCacheStatus`, { query, ...options });
  }

  retrieveAppClipDomainDebugStatus(
    id: string,
    query: BuildBundleRetrieveAppClipDomainDebugStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipDomainStatus> {
    return this._client.get(path`/v1/buildBundles/${id}/appClipDomainDebugStatus`, { query, ...options });
  }

  retrieveBetaAppClipInvocations(
    id: string,
    query: BuildBundleRetrieveBetaAppClipInvocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildBundleRetrieveBetaAppClipInvocationsResponse> {
    return this._client.get(path`/v1/buildBundles/${id}/betaAppClipInvocations`, { query, ...options });
  }

  retrieveBuildBundleFileSizes(
    id: string,
    query: BuildBundleRetrieveBuildBundleFileSizesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildBundleRetrieveBuildBundleFileSizesResponse> {
    return this._client.get(path`/v1/buildBundles/${id}/buildBundleFileSizes`, { query, ...options });
  }
}

export interface AppClipDomainStatus {
  data: AppClipDomainStatus.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace AppClipDomainStatus {
  export interface Data {
    id: string;

    type: 'appClipDomainStatuses';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      domains?: Array<Attributes.Domain>;

      lastUpdatedDate?: string;
    }

    export namespace Attributes {
      export interface Domain {
        domain?: string;

        errorCode?:
          | 'BAD_HTTP_RESPONSE'
          | 'BAD_JSON_CONTENT'
          | 'BAD_PKCS7_SIGNATURE'
          | 'CANNOT_REACH_AASA_FILE'
          | 'CROSS_SITE_REDIRECTS_FORBIDDEN'
          | 'DNS_ERROR'
          | 'INSECURE_REDIRECTS_FORBIDDEN'
          | 'INVALID_ENTITLEMENT_MISSING_SECTION'
          | 'INVALID_ENTITLEMENT_SYNTAX_ERROR'
          | 'INVALID_ENTITLEMENT_UNHANDLED_SECTION'
          | 'INVALID_ENTITLEMENT_UNKNOWN_ID'
          | 'NETWORK_ERROR'
          | 'NETWORK_ERROR_TEMPORARY'
          | 'OTHER_ERROR'
          | 'TIMEOUT'
          | 'TLS_ERROR'
          | 'TOO_MANY_REDIRECTS'
          | 'UNEXPECTED_ERROR';

        isValid?: boolean;

        lastUpdatedDate?: string;
      }
    }
  }
}

export interface BuildBundleRetrieveBetaAppClipInvocationsResponse {
  data: Array<BetaAppClipInvocationsAPI.BetaAppClipInvocation>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BetaAppClipInvocationLocalizationsAPI.BetaAppClipInvocationLocalization>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BuildBundleRetrieveBuildBundleFileSizesResponse {
  data: Array<BuildBundleRetrieveBuildBundleFileSizesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace BuildBundleRetrieveBuildBundleFileSizesResponse {
  export interface Data {
    id: string;

    type: 'buildBundleFileSizes';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      deviceModel?: string;

      downloadBytes?: number;

      installBytes?: number;

      osVersion?: string;
    }
  }
}

export interface BuildBundleRetrieveAppClipDomainCacheStatusParams {
  /**
   * the fields to include for returned resources of type appClipDomainStatuses
   */
  'fields[appClipDomainStatuses]'?: Array<'domains' | 'lastUpdatedDate'>;
}

export interface BuildBundleRetrieveAppClipDomainDebugStatusParams {
  /**
   * the fields to include for returned resources of type appClipDomainStatuses
   */
  'fields[appClipDomainStatuses]'?: Array<'domains' | 'lastUpdatedDate'>;
}

export interface BuildBundleRetrieveBetaAppClipInvocationsParams {
  /**
   * the fields to include for returned resources of type
   * betaAppClipInvocationLocalizations
   */
  'fields[betaAppClipInvocationLocalizations]'?: Array<'title' | 'locale'>;

  /**
   * the fields to include for returned resources of type betaAppClipInvocations
   */
  'fields[betaAppClipInvocations]'?: Array<'url' | 'betaAppClipInvocationLocalizations'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'betaAppClipInvocationLocalizations'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related betaAppClipInvocationLocalizations returned (when they
   * are included)
   */
  'limit[betaAppClipInvocationLocalizations]'?: number;
}

export interface BuildBundleRetrieveBuildBundleFileSizesParams {
  /**
   * the fields to include for returned resources of type buildBundleFileSizes
   */
  'fields[buildBundleFileSizes]'?: Array<'deviceModel' | 'osVersion' | 'downloadBytes' | 'installBytes'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

BuildBundles.Relationships = Relationships;

export declare namespace BuildBundles {
  export {
    type AppClipDomainStatus as AppClipDomainStatus,
    type BuildBundleRetrieveBetaAppClipInvocationsResponse as BuildBundleRetrieveBetaAppClipInvocationsResponse,
    type BuildBundleRetrieveBuildBundleFileSizesResponse as BuildBundleRetrieveBuildBundleFileSizesResponse,
    type BuildBundleRetrieveAppClipDomainCacheStatusParams as BuildBundleRetrieveAppClipDomainCacheStatusParams,
    type BuildBundleRetrieveAppClipDomainDebugStatusParams as BuildBundleRetrieveAppClipDomainDebugStatusParams,
    type BuildBundleRetrieveBetaAppClipInvocationsParams as BuildBundleRetrieveBetaAppClipInvocationsParams,
    type BuildBundleRetrieveBuildBundleFileSizesParams as BuildBundleRetrieveBuildBundleFileSizesParams,
  };

  export {
    Relationships as Relationships,
    type RelationshipRetrieveAppClipDomainCacheStatusResponse as RelationshipRetrieveAppClipDomainCacheStatusResponse,
    type RelationshipRetrieveAppClipDomainDebugStatusResponse as RelationshipRetrieveAppClipDomainDebugStatusResponse,
    type RelationshipRetrieveBetaAppClipInvocationsResponse as RelationshipRetrieveBetaAppClipInvocationsResponse,
    type RelationshipRetrieveBuildBundleFileSizesResponse as RelationshipRetrieveBuildBundleFileSizesResponse,
    type RelationshipRetrieveBetaAppClipInvocationsParams as RelationshipRetrieveBetaAppClipInvocationsParams,
    type RelationshipRetrieveBuildBundleFileSizesParams as RelationshipRetrieveBuildBundleFileSizesParams,
  };
}
