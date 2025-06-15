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
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaBuildLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: BetaBuildLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaBuildLocalizationResponse> {
    return this._client.post('/v1/betaBuildLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: BetaBuildLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaBuildLocalizationResponse> {
    return this._client.get(path`/v1/betaBuildLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BetaBuildLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaBuildLocalizationResponse> {
    return this._client.patch(path`/v1/betaBuildLocalizations/${id}`, { body, ...options });
  }

  list(
    query: BetaBuildLocalizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaBuildLocalizationListResponse> {
    return this._client.get('/v1/betaBuildLocalizations', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaBuildLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveBuild(
    id: string,
    query: BetaBuildLocalizationRetrieveBuildParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.BuildWithoutIncludes> {
    return this._client.get(path`/v1/betaBuildLocalizations/${id}/build`, { query, ...options });
  }
}

export interface BetaBuildLocalization {
  id: string;

  type: 'betaBuildLocalizations';

  attributes?: BetaBuildLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaBuildLocalization.Relationships;
}

export namespace BetaBuildLocalization {
  export interface Attributes {
    locale?: string;

    whatsNew?: string;
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

export interface BetaBuildLocalizationResponse {
  data: BetaBuildLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BuildsAPI.Build>;
}

export interface BetaBuildLocalizationListResponse {
  data: Array<BetaBuildLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BuildsAPI.Build>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaBuildLocalizationCreateParams {
  data: BetaBuildLocalizationCreateParams.Data;
}

export namespace BetaBuildLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'betaBuildLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      whatsNew?: string;
    }

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

export interface BetaBuildLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type betaBuildLocalizations
   */
  'fields[betaBuildLocalizations]'?: Array<'whatsNew' | 'locale' | 'build'>;

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

export interface BetaBuildLocalizationUpdateParams {
  data: BetaBuildLocalizationUpdateParams.Data;
}

export namespace BetaBuildLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'betaBuildLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      whatsNew?: string;
    }
  }
}

export interface BetaBuildLocalizationListParams {
  /**
   * the fields to include for returned resources of type betaBuildLocalizations
   */
  'fields[betaBuildLocalizations]'?: Array<'whatsNew' | 'locale' | 'build'>;

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
   * filter by id(s) of related 'build'
   */
  'filter[build]'?: Array<string>;

  /**
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaBuildLocalizationRetrieveBuildParams {
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

BetaBuildLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace BetaBuildLocalizations {
  export {
    type BetaBuildLocalization as BetaBuildLocalization,
    type BetaBuildLocalizationResponse as BetaBuildLocalizationResponse,
    type BetaBuildLocalizationListResponse as BetaBuildLocalizationListResponse,
    type BetaBuildLocalizationCreateParams as BetaBuildLocalizationCreateParams,
    type BetaBuildLocalizationRetrieveParams as BetaBuildLocalizationRetrieveParams,
    type BetaBuildLocalizationUpdateParams as BetaBuildLocalizationUpdateParams,
    type BetaBuildLocalizationListParams as BetaBuildLocalizationListParams,
    type BetaBuildLocalizationRetrieveBuildParams as BetaBuildLocalizationRetrieveBuildParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveBuildResponse as RelationshipRetrieveBuildResponse,
  };
}
