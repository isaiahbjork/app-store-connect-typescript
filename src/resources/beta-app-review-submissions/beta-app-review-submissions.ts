// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveBuildResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as BuildsAPI from '../builds/builds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaAppReviewSubmissions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: BetaAppReviewSubmissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppReviewSubmissionResponse> {
    return this._client.post('/v1/betaAppReviewSubmissions', { body, ...options });
  }

  retrieve(
    id: string,
    query: BetaAppReviewSubmissionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaAppReviewSubmissionResponse> {
    return this._client.get(path`/v1/betaAppReviewSubmissions/${id}`, { query, ...options });
  }

  list(
    query: BetaAppReviewSubmissionListParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppReviewSubmissionListResponse> {
    return this._client.get('/v1/betaAppReviewSubmissions', { query, ...options });
  }

  retrieveBuild(
    id: string,
    query: BetaAppReviewSubmissionRetrieveBuildParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.BuildWithoutIncludes> {
    return this._client.get(path`/v1/betaAppReviewSubmissions/${id}/build`, { query, ...options });
  }
}

export interface BetaAppReviewSubmission {
  id: string;

  type: 'betaAppReviewSubmissions';

  attributes?: BetaAppReviewSubmission.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaAppReviewSubmission.Relationships;
}

export namespace BetaAppReviewSubmission {
  export interface Attributes {
    betaReviewState?: 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED';

    submittedDate?: string;
  }

  export interface Relationships {
    build?: Relationships.Build;
  }

  export namespace Relationships {
    export interface Build {
      data?: Build.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Build {
      export interface Data {
        id: string;

        type: 'builds';
      }
    }
  }
}

export interface BetaAppReviewSubmissionResponse {
  data: BetaAppReviewSubmission;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BuildsAPI.Build>;
}

export interface BetaAppReviewSubmissionListResponse {
  data: Array<BetaAppReviewSubmission>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BuildsAPI.Build>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaAppReviewSubmissionCreateParams {
  data: BetaAppReviewSubmissionCreateParams.Data;
}

export namespace BetaAppReviewSubmissionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'betaAppReviewSubmissions';
  }

  export namespace Data {
    export interface Relationships {
      build: Relationships.Build;
    }

    export namespace Relationships {
      export interface Build {
        data: Build.Data;
      }

      export namespace Build {
        export interface Data {
          id: string;

          type: 'builds';
        }
      }
    }
  }
}

export interface BetaAppReviewSubmissionRetrieveParams {
  /**
   * the fields to include for returned resources of type betaAppReviewSubmissions
   */
  'fields[betaAppReviewSubmissions]'?: Array<'betaReviewState' | 'submittedDate' | 'build'>;

  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build'>;
}

export interface BetaAppReviewSubmissionListParams {
  /**
   * filter by id(s) of related 'build'
   */
  'filter[build]': Array<string>;

  /**
   * the fields to include for returned resources of type betaAppReviewSubmissions
   */
  'fields[betaAppReviewSubmissions]'?: Array<'betaReviewState' | 'submittedDate' | 'build'>;

  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * filter by attribute 'betaReviewState'
   */
  'filter[betaReviewState]'?: Array<'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaAppReviewSubmissionRetrieveBuildParams {
  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;
}

BetaAppReviewSubmissions.Relationships = RelationshipsAPIRelationships;

export declare namespace BetaAppReviewSubmissions {
  export {
    type BetaAppReviewSubmission as BetaAppReviewSubmission,
    type BetaAppReviewSubmissionResponse as BetaAppReviewSubmissionResponse,
    type BetaAppReviewSubmissionListResponse as BetaAppReviewSubmissionListResponse,
    type BetaAppReviewSubmissionCreateParams as BetaAppReviewSubmissionCreateParams,
    type BetaAppReviewSubmissionRetrieveParams as BetaAppReviewSubmissionRetrieveParams,
    type BetaAppReviewSubmissionListParams as BetaAppReviewSubmissionListParams,
    type BetaAppReviewSubmissionRetrieveBuildParams as BetaAppReviewSubmissionRetrieveBuildParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveBuildResponse as RelationshipRetrieveBuildResponse,
  };
}
