// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as AppEncryptionDeclarationAPI from './app-encryption-declaration';
import {
  AppEncryptionDeclaration,
  AppEncryptionDeclarationRetrieveParams,
  AppEncryptionDeclarationRetrieveResponse,
  AppEncryptionDeclarationUpdateParams,
} from './app-encryption-declaration';
import * as BetaGroupsAPI from './beta-groups';
import {
  BetaGroupCreateParams,
  BetaGroupDeleteParams,
  BetaGroups,
  LinkagesRequestBetaGroups,
} from './beta-groups';
import * as IndividualTestersAPI from './individual-testers';
import {
  IndividualTesterCreateParams,
  IndividualTesterDeleteParams,
  IndividualTesterRetrieveParams,
  IndividualTesterRetrieveResponse,
  IndividualTesters,
  LinkagesRequestIndividualTesters,
} from './individual-testers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  appEncryptionDeclaration: AppEncryptionDeclarationAPI.AppEncryptionDeclaration =
    new AppEncryptionDeclarationAPI.AppEncryptionDeclaration(this._client);
  betaGroups: BetaGroupsAPI.BetaGroups = new BetaGroupsAPI.BetaGroups(this._client);
  individualTesters: IndividualTestersAPI.IndividualTesters = new IndividualTestersAPI.IndividualTesters(
    this._client,
  );

  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/app`, options);
  }

  retrieveAppEncryptionDeclaration(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppEncryptionDeclarationResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/appEncryptionDeclaration`, options);
  }

  retrieveAppStoreVersion(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/appStoreVersion`, options);
  }

  retrieveBetaAppReviewSubmission(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaAppReviewSubmissionResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/betaAppReviewSubmission`, options);
  }

  retrieveBetaBuildLocalizations(
    id: string,
    query: RelationshipRetrieveBetaBuildLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaBuildLocalizationsResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/betaBuildLocalizations`, {
      query,
      ...options,
    });
  }

  retrieveBuildBetaDetail(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBuildBetaDetailResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/buildBetaDetail`, options);
  }

  retrieveDiagnosticSignatures(
    id: string,
    query: RelationshipRetrieveDiagnosticSignaturesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveDiagnosticSignaturesResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/diagnosticSignatures`, { query, ...options });
  }

  retrieveIcons(
    id: string,
    query: RelationshipRetrieveIconsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveIconsResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/icons`, { query, ...options });
  }

  retrievePreReleaseVersion(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePreReleaseVersionResponse> {
    return this._client.get(path`/v1/builds/${id}/relationships/preReleaseVersion`, options);
  }
}

export interface RelationshipRetrieveAppResponse {
  data: RelationshipRetrieveAppResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface RelationshipRetrieveAppEncryptionDeclarationResponse {
  data: RelationshipRetrieveAppEncryptionDeclarationResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppEncryptionDeclarationResponse {
  export interface Data {
    id: string;

    type: 'appEncryptionDeclarations';
  }
}

export interface RelationshipRetrieveAppStoreVersionResponse {
  data: RelationshipRetrieveAppStoreVersionResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreVersionResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersions';
  }
}

export interface RelationshipRetrieveBetaAppReviewSubmissionResponse {
  data: RelationshipRetrieveBetaAppReviewSubmissionResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBetaAppReviewSubmissionResponse {
  export interface Data {
    id: string;

    type: 'betaAppReviewSubmissions';
  }
}

export interface RelationshipRetrieveBetaBuildLocalizationsResponse {
  data: Array<RelationshipRetrieveBetaBuildLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBetaBuildLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'betaBuildLocalizations';
  }
}

export interface RelationshipRetrieveBuildBetaDetailResponse {
  data: RelationshipRetrieveBuildBetaDetailResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBuildBetaDetailResponse {
  export interface Data {
    id: string;

    type: 'buildBetaDetails';
  }
}

export interface RelationshipRetrieveDiagnosticSignaturesResponse {
  data: Array<RelationshipRetrieveDiagnosticSignaturesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveDiagnosticSignaturesResponse {
  export interface Data {
    id: string;

    type: 'diagnosticSignatures';
  }
}

export interface RelationshipRetrieveIconsResponse {
  data: Array<RelationshipRetrieveIconsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveIconsResponse {
  export interface Data {
    id: string;

    type: 'buildIcons';
  }
}

export interface RelationshipRetrievePreReleaseVersionResponse {
  data: RelationshipRetrievePreReleaseVersionResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrievePreReleaseVersionResponse {
  export interface Data {
    id: string;

    type: 'preReleaseVersions';
  }
}

export interface RelationshipRetrieveBetaBuildLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveDiagnosticSignaturesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveIconsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.AppEncryptionDeclaration = AppEncryptionDeclaration;
Relationships.BetaGroups = BetaGroups;
Relationships.IndividualTesters = IndividualTesters;

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrieveAppEncryptionDeclarationResponse as RelationshipRetrieveAppEncryptionDeclarationResponse,
    type RelationshipRetrieveAppStoreVersionResponse as RelationshipRetrieveAppStoreVersionResponse,
    type RelationshipRetrieveBetaAppReviewSubmissionResponse as RelationshipRetrieveBetaAppReviewSubmissionResponse,
    type RelationshipRetrieveBetaBuildLocalizationsResponse as RelationshipRetrieveBetaBuildLocalizationsResponse,
    type RelationshipRetrieveBuildBetaDetailResponse as RelationshipRetrieveBuildBetaDetailResponse,
    type RelationshipRetrieveDiagnosticSignaturesResponse as RelationshipRetrieveDiagnosticSignaturesResponse,
    type RelationshipRetrieveIconsResponse as RelationshipRetrieveIconsResponse,
    type RelationshipRetrievePreReleaseVersionResponse as RelationshipRetrievePreReleaseVersionResponse,
    type RelationshipRetrieveBetaBuildLocalizationsParams as RelationshipRetrieveBetaBuildLocalizationsParams,
    type RelationshipRetrieveDiagnosticSignaturesParams as RelationshipRetrieveDiagnosticSignaturesParams,
    type RelationshipRetrieveIconsParams as RelationshipRetrieveIconsParams,
  };

  export {
    AppEncryptionDeclaration as AppEncryptionDeclaration,
    type AppEncryptionDeclarationRetrieveResponse as AppEncryptionDeclarationRetrieveResponse,
    type AppEncryptionDeclarationRetrieveParams as AppEncryptionDeclarationRetrieveParams,
    type AppEncryptionDeclarationUpdateParams as AppEncryptionDeclarationUpdateParams,
  };

  export {
    BetaGroups as BetaGroups,
    type LinkagesRequestBetaGroups as LinkagesRequestBetaGroups,
    type BetaGroupCreateParams as BetaGroupCreateParams,
    type BetaGroupDeleteParams as BetaGroupDeleteParams,
  };

  export {
    IndividualTesters as IndividualTesters,
    type LinkagesRequestIndividualTesters as LinkagesRequestIndividualTesters,
    type IndividualTesterRetrieveResponse as IndividualTesterRetrieveResponse,
    type IndividualTesterCreateParams as IndividualTesterCreateParams,
    type IndividualTesterRetrieveParams as IndividualTesterRetrieveParams,
    type IndividualTesterDeleteParams as IndividualTesterDeleteParams,
  };
}
