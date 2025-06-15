// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AlternativeDistributionPackageVersionsAPI from './alternative-distribution-package-versions';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageDeltasAPI from '../alternative-distribution-package-deltas';
import * as AlternativeDistributionPackageVariantsAPI from '../alternative-distribution-package-variants';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListDeltasParams,
  RelationshipListDeltasResponse,
  RelationshipListVariantsParams,
  RelationshipListVariantsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AlternativeDistributionPackagesAPI from '../alternative-distribution-packages/alternative-distribution-packages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AlternativeDistributionPackageVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AlternativeDistributionPackageVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageVersionRetrieveResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageVersions/${id}`, { query, ...options });
  }

  listDeltas(
    id: string,
    query: AlternativeDistributionPackageVersionListDeltasParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageVersionListDeltasResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageVersions/${id}/deltas`, {
      query,
      ...options,
    });
  }

  listVariants(
    id: string,
    query: AlternativeDistributionPackageVersionListVariantsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionPackageVersionListVariantsResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageVersions/${id}/variants`, {
      query,
      ...options,
    });
  }
}

export interface AlternativeDistributionPackageVersion {
  id: string;

  type: 'alternativeDistributionPackageVersions';

  attributes?: AlternativeDistributionPackageVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AlternativeDistributionPackageVersion.Relationships;
}

export namespace AlternativeDistributionPackageVersion {
  export interface Attributes {
    fileChecksum?: string;

    state?: 'COMPLETED' | 'REPLACED';

    url?: string;

    urlExpirationDate?: string;

    version?: string;
  }

  export interface Relationships {
    alternativeDistributionPackage?: Relationships.AlternativeDistributionPackage;

    deltas?: Relationships.Deltas;

    variants?: Relationships.Variants;
  }

  export namespace Relationships {
    export interface AlternativeDistributionPackage {
      data?: AlternativeDistributionPackage.Data;
    }

    export namespace AlternativeDistributionPackage {
      export interface Data {
        id: string;

        type: 'alternativeDistributionPackages';
      }
    }

    export interface Deltas {
      data?: Array<Deltas.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Deltas {
      export interface Data {
        id: string;

        type: 'alternativeDistributionPackageDeltas';
      }
    }

    export interface Variants {
      data?: Array<Variants.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Variants {
      export interface Data {
        id: string;

        type: 'alternativeDistributionPackageVariants';
      }
    }
  }
}

export interface RelationshipLinks {
  related?: string;

  self?: string;
}

export interface AlternativeDistributionPackageVersionRetrieveResponse {
  data: AlternativeDistributionPackageVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AlternativeDistributionPackageVariantsAPI.AlternativeDistributionPackageVariant
    | AlternativeDistributionPackageDeltasAPI.AlternativeDistributionPackageDelta
    | AlternativeDistributionPackagesAPI.AlternativeDistributionPackage
  >;
}

export interface AlternativeDistributionPackageVersionListDeltasResponse {
  data: Array<AlternativeDistributionPackageDeltasAPI.AlternativeDistributionPackageDelta>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AlternativeDistributionPackageVersionListVariantsResponse {
  data: Array<AlternativeDistributionPackageVariantsAPI.AlternativeDistributionPackageVariant>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AlternativeDistributionPackageVersionRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageDeltas
   */
  'fields[alternativeDistributionPackageDeltas]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'variants' | 'deltas' | 'alternativeDistributionPackage'>;

  /**
   * maximum number of related deltas returned (when they are included)
   */
  'limit[deltas]'?: number;

  /**
   * maximum number of related variants returned (when they are included)
   */
  'limit[variants]'?: number;
}

export interface AlternativeDistributionPackageVersionListDeltasParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageDeltas
   */
  'fields[alternativeDistributionPackageDeltas]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AlternativeDistributionPackageVersionListVariantsParams {
  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackageVariants
   */
  'fields[alternativeDistributionPackageVariants]'?: Array<
    'url' | 'urlExpirationDate' | 'alternativeDistributionKeyBlob' | 'fileChecksum'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AlternativeDistributionPackageVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace AlternativeDistributionPackageVersions {
  export {
    type AlternativeDistributionPackageVersion as AlternativeDistributionPackageVersion,
    type RelationshipLinks as RelationshipLinks,
    type AlternativeDistributionPackageVersionRetrieveResponse as AlternativeDistributionPackageVersionRetrieveResponse,
    type AlternativeDistributionPackageVersionListDeltasResponse as AlternativeDistributionPackageVersionListDeltasResponse,
    type AlternativeDistributionPackageVersionListVariantsResponse as AlternativeDistributionPackageVersionListVariantsResponse,
    type AlternativeDistributionPackageVersionRetrieveParams as AlternativeDistributionPackageVersionRetrieveParams,
    type AlternativeDistributionPackageVersionListDeltasParams as AlternativeDistributionPackageVersionListDeltasParams,
    type AlternativeDistributionPackageVersionListVariantsParams as AlternativeDistributionPackageVersionListVariantsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListDeltasResponse as RelationshipListDeltasResponse,
    type RelationshipListVariantsResponse as RelationshipListVariantsResponse,
    type RelationshipListDeltasParams as RelationshipListDeltasParams,
    type RelationshipListVariantsParams as RelationshipListVariantsParams,
  };
}
