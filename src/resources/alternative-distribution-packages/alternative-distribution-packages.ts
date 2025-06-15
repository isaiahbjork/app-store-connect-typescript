// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageDeltasAPI from '../alternative-distribution-package-deltas';
import * as AlternativeDistributionPackageVariantsAPI from '../alternative-distribution-package-variants';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListVersionsParams,
  RelationshipListVersionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AlternativeDistributionPackages extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AlternativeDistributionPackageCreateParams,
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageResponse> {
    return this._client.post('/v1/alternativeDistributionPackages', { body, ...options });
  }

  retrieve(
    id: string,
    query: AlternativeDistributionPackageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackages/${id}`, { query, ...options });
  }

  listVersions(
    id: string,
    query: AlternativeDistributionPackageListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageListVersionsResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackages/${id}/versions`, { query, ...options });
  }
}

export interface AlternativeDistributionPackage {
  id: string;

  type: 'alternativeDistributionPackages';

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AlternativeDistributionPackage.Relationships;
}

export namespace AlternativeDistributionPackage {
  export interface Relationships {
    versions?: Relationships.Versions;
  }

  export namespace Relationships {
    export interface Versions {
      data?: Array<Versions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Versions {
      export interface Data {
        id: string;

        type: 'alternativeDistributionPackageVersions';
      }
    }
  }
}

export interface AlternativeDistributionPackageResponse {
  data: AlternativeDistributionPackage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AlternativeDistributionPackageVersionsAPI.AlternativeDistributionPackageVersion>;
}

export interface AlternativeDistributionPackageListVersionsResponse {
  data: Array<AlternativeDistributionPackageVersionsAPI.AlternativeDistributionPackageVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AlternativeDistributionPackageVariantsAPI.AlternativeDistributionPackageVariant
    | AlternativeDistributionPackageDeltasAPI.AlternativeDistributionPackageDelta
    | AlternativeDistributionPackage
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AlternativeDistributionPackageCreateParams {
  data: AlternativeDistributionPackageCreateParams.Data;
}

export namespace AlternativeDistributionPackageCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'alternativeDistributionPackages';
  }

  export namespace Data {
    export interface Relationships {
      appStoreVersion: Relationships.AppStoreVersion;
    }

    export namespace Relationships {
      export interface AppStoreVersion {
        data: AppStoreVersion.Data;
      }

      export namespace AppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }
    }
  }
}

export interface AlternativeDistributionPackageRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackages
   */
  'fields[alternativeDistributionPackages]'?: Array<'versions'>;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageVersions
   */
  'fields[alternativeDistributionPackageVersions]'?: Array<
    | 'url'
    | 'urlExpirationDate'
    | 'version'
    | 'fileChecksum'
    | 'state'
    | 'variants'
    | 'deltas'
    | 'alternativeDistributionPackage'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'versions'>;

  /**
   * maximum number of related versions returned (when they are included)
   */
  'limit[versions]'?: number;
}

export interface AlternativeDistributionPackageListVersionsParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageDeltas
   */
  'fields[alternativeDistributionPackageDeltas]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackages
   */
  'fields[alternativeDistributionPackages]'?: Array<'versions'>;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageVariants
   */
  'fields[alternativeDistributionPackageVariants]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageVersions
   */
  'fields[alternativeDistributionPackageVersions]'?: Array<
    | 'url'
    | 'urlExpirationDate'
    | 'version'
    | 'fileChecksum'
    | 'state'
    | 'variants'
    | 'deltas'
    | 'alternativeDistributionPackage'
  >;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<'COMPLETED' | 'REPLACED'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'variants' | 'deltas' | 'alternativeDistributionPackage'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related deltas returned (when they are included)
   */
  'limit[deltas]'?: number;

  /**
   * maximum number of related variants returned (when they are included)
   */
  'limit[variants]'?: number;
}

AlternativeDistributionPackages.Relationships = RelationshipsAPIRelationships;

export declare namespace AlternativeDistributionPackages {
  export {
    type AlternativeDistributionPackage as AlternativeDistributionPackage,
    type AlternativeDistributionPackageResponse as AlternativeDistributionPackageResponse,
    type AlternativeDistributionPackageListVersionsResponse as AlternativeDistributionPackageListVersionsResponse,
    type AlternativeDistributionPackageCreateParams as AlternativeDistributionPackageCreateParams,
    type AlternativeDistributionPackageRetrieveParams as AlternativeDistributionPackageRetrieveParams,
    type AlternativeDistributionPackageListVersionsParams as AlternativeDistributionPackageListVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
  };
}
