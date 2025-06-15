// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CiXcodeVersionsAPI from './ci-xcode-versions';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as CiMacOsVersionsAPI from '../ci-mac-os-versions/ci-mac-os-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveMacOsVersionsParams,
  RelationshipRetrieveMacOsVersionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CiXcodeVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: CiXcodeVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiXcodeVersionRetrieveResponse> {
    return this._client.get(path`/v1/ciXcodeVersions/${id}`, { query, ...options });
  }

  list(
    query: CiXcodeVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiXcodeVersions> {
    return this._client.get('/v1/ciXcodeVersions', { query, ...options });
  }

  listMacOsVersions(
    id: string,
    query: CiXcodeVersionListMacOsVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiMacOsVersionsAPI.CiMacOsVersionsResponse> {
    return this._client.get(path`/v1/ciXcodeVersions/${id}/macOsVersions`, { query, ...options });
  }
}

export type CiTestDestinationKind = 'SIMULATOR' | 'MAC';

export interface CiXcodeVersion {
  id: string;

  type: 'ciXcodeVersions';

  attributes?: CiXcodeVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CiXcodeVersion.Relationships;
}

export namespace CiXcodeVersion {
  export interface Attributes {
    name?: string;

    testDestinations?: Array<Attributes.TestDestination>;

    version?: string;
  }

  export namespace Attributes {
    export interface TestDestination {
      availableRuntimes?: Array<TestDestination.AvailableRuntime>;

      deviceTypeIdentifier?: string;

      deviceTypeName?: string;

      kind?: CiXcodeVersionsAPI.CiTestDestinationKind;
    }

    export namespace TestDestination {
      export interface AvailableRuntime {
        runtimeIdentifier?: string;

        runtimeName?: string;
      }
    }
  }

  export interface Relationships {
    macOsVersions?: Relationships.MacOsVersions;
  }

  export namespace Relationships {
    export interface MacOsVersions {
      data?: Array<MacOsVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace MacOsVersions {
      export interface Data {
        id: string;

        type: 'ciMacOsVersions';
      }
    }
  }
}

export interface CiXcodeVersions {
  data: Array<CiXcodeVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<CiMacOsVersionsAPI.CiMacOsVersion>;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiXcodeVersionRetrieveResponse {
  data: CiXcodeVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<CiMacOsVersionsAPI.CiMacOsVersion>;
}

export interface CiXcodeVersionRetrieveParams {
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
   * maximum number of related macOsVersions returned (when they are included)
   */
  'limit[macOsVersions]'?: number;
}

export interface CiXcodeVersionListParams {
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

export interface CiXcodeVersionListMacOsVersionsParams {
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

CiXcodeVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace CiXcodeVersions {
  export {
    type CiTestDestinationKind as CiTestDestinationKind,
    type CiXcodeVersion as CiXcodeVersion,
    type CiXcodeVersions as CiXcodeVersions,
    type CiXcodeVersionRetrieveResponse as CiXcodeVersionRetrieveResponse,
    type CiXcodeVersionRetrieveParams as CiXcodeVersionRetrieveParams,
    type CiXcodeVersionListParams as CiXcodeVersionListParams,
    type CiXcodeVersionListMacOsVersionsParams as CiXcodeVersionListMacOsVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveMacOsVersionsResponse as RelationshipRetrieveMacOsVersionsResponse,
    type RelationshipRetrieveMacOsVersionsParams as RelationshipRetrieveMacOsVersionsParams,
  };
}
