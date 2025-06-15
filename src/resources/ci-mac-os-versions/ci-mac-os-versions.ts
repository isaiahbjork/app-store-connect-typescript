// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveXcodeVersionsParams,
  RelationshipRetrieveXcodeVersionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as CiXcodeVersionsAPI from '../ci-xcode-versions/ci-xcode-versions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CiMacOsVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: CiMacOsVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiMacOsVersionRetrieveResponse> {
    return this._client.get(path`/v1/ciMacOsVersions/${id}`, { query, ...options });
  }

  list(
    query: CiMacOsVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiMacOsVersionsResponse> {
    return this._client.get('/v1/ciMacOsVersions', { query, ...options });
  }

  listXcodeVersions(
    id: string,
    query: CiMacOsVersionListXcodeVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiXcodeVersionsAPI.CiXcodeVersions> {
    return this._client.get(path`/v1/ciMacOsVersions/${id}/xcodeVersions`, { query, ...options });
  }
}

export interface CiMacOsVersion {
  id: string;

  type: 'ciMacOsVersions';

  attributes?: CiMacOsVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CiMacOsVersion.Relationships;
}

export namespace CiMacOsVersion {
  export interface Attributes {
    name?: string;

    version?: string;
  }

  export interface Relationships {
    xcodeVersions?: Relationships.XcodeVersions;
  }

  export namespace Relationships {
    export interface XcodeVersions {
      data?: Array<XcodeVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace XcodeVersions {
      export interface Data {
        id: string;

        type: 'ciXcodeVersions';
      }
    }
  }
}

export interface CiMacOsVersionsResponse {
  data: Array<CiMacOsVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<CiXcodeVersionsAPI.CiXcodeVersion>;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiMacOsVersionRetrieveResponse {
  data: CiMacOsVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<CiXcodeVersionsAPI.CiXcodeVersion>;
}

export interface CiMacOsVersionRetrieveParams {
  /**
   * the fields to include for returned resources of type ciMacOsVersions
   */
  'fields[ciMacOsVersions]'?: Array<'version' | 'name' | 'xcodeVersions'>;

  /**
   * the fields to include for returned resources of type ciXcodeVersions
   */
  'fields[ciXcodeVersions]'?: Array<'version' | 'name' | 'testDestinations' | 'macOsVersions'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'xcodeVersions'>;

  /**
   * maximum number of related xcodeVersions returned (when they are included)
   */
  'limit[xcodeVersions]'?: number;
}

export interface CiMacOsVersionListParams {
  /**
   * the fields to include for returned resources of type ciMacOsVersions
   */
  'fields[ciMacOsVersions]'?: Array<'version' | 'name' | 'xcodeVersions'>;

  /**
   * the fields to include for returned resources of type ciXcodeVersions
   */
  'fields[ciXcodeVersions]'?: Array<'version' | 'name' | 'testDestinations' | 'macOsVersions'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'xcodeVersions'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related xcodeVersions returned (when they are included)
   */
  'limit[xcodeVersions]'?: number;
}

export interface CiMacOsVersionListXcodeVersionsParams {
  /**
   * the fields to include for returned resources of type ciMacOsVersions
   */
  'fields[ciMacOsVersions]'?: Array<'version' | 'name' | 'xcodeVersions'>;

  /**
   * the fields to include for returned resources of type ciXcodeVersions
   */
  'fields[ciXcodeVersions]'?: Array<'version' | 'name' | 'testDestinations' | 'macOsVersions'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'macOsVersions'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related macOsVersions returned (when they are included)
   */
  'limit[macOsVersions]'?: number;
}

CiMacOsVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace CiMacOsVersions {
  export {
    type CiMacOsVersion as CiMacOsVersion,
    type CiMacOsVersionsResponse as CiMacOsVersionsResponse,
    type CiMacOsVersionRetrieveResponse as CiMacOsVersionRetrieveResponse,
    type CiMacOsVersionRetrieveParams as CiMacOsVersionRetrieveParams,
    type CiMacOsVersionListParams as CiMacOsVersionListParams,
    type CiMacOsVersionListXcodeVersionsParams as CiMacOsVersionListXcodeVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveXcodeVersionsResponse as RelationshipRetrieveXcodeVersionsResponse,
    type RelationshipRetrieveXcodeVersionsParams as RelationshipRetrieveXcodeVersionsParams,
  };
}
