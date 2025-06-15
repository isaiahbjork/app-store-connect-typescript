// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppEncryptionDeclarationsAPI from '../app-encryption-declarations/app-encryption-declarations';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveAppResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaLicenseAgreements extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: BetaLicenseAgreementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaLicenseAgreementResponse> {
    return this._client.get(path`/v1/betaLicenseAgreements/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BetaLicenseAgreementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaLicenseAgreementResponse> {
    return this._client.patch(path`/v1/betaLicenseAgreements/${id}`, { body, ...options });
  }

  list(
    query: BetaLicenseAgreementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaLicenseAgreementListResponse> {
    return this._client.get('/v1/betaLicenseAgreements', { query, ...options });
  }

  retrieveApp(
    id: string,
    query: BetaLicenseAgreementRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/betaLicenseAgreements/${id}/app`, { query, ...options });
  }
}

export interface BetaLicenseAgreement {
  id: string;

  type: 'betaLicenseAgreements';

  attributes?: BetaLicenseAgreement.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaLicenseAgreement.Relationships;
}

export namespace BetaLicenseAgreement {
  export interface Attributes {
    agreementText?: string;
  }

  export interface Relationships {
    app?: Relationships.App;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }
  }
}

export interface BetaLicenseAgreementResponse {
  data: BetaLicenseAgreement;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App>;
}

export interface BetaLicenseAgreementListResponse {
  data: Array<BetaLicenseAgreement>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaLicenseAgreementRetrieveParams {
  /**
   * the fields to include for returned resources of type apps
   */
  'fields[apps]'?: Array<
    | 'accessibilityUrl'
    | 'name'
    | 'bundleId'
    | 'sku'
    | 'primaryLocale'
    | 'isOrEverWasMadeForKids'
    | 'subscriptionStatusUrl'
    | 'subscriptionStatusUrlVersion'
    | 'subscriptionStatusUrlForSandbox'
    | 'subscriptionStatusUrlVersionForSandbox'
    | 'contentRightsDeclaration'
    | 'streamlinedPurchasingEnabled'
    | 'accessibilityDeclarations'
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaTesters'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'appPricePoints'
    | 'endUserLicenseAgreement'
    | 'appPriceSchedule'
    | 'appAvailabilityV2'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'perfPowerMetrics'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'customerReviews'
    | 'customerReviewSummarizations'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionKey'
    | 'analyticsReportRequests'
    | 'marketplaceSearchDetail'
    | 'backgroundAssets'
    | 'betaFeedbackScreenshotSubmissions'
    | 'betaFeedbackCrashSubmissions'
    | 'webhooks'
  >;

  /**
   * the fields to include for returned resources of type betaLicenseAgreements
   */
  'fields[betaLicenseAgreements]'?: Array<'agreementText' | 'app'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;
}

export interface BetaLicenseAgreementUpdateParams {
  data: BetaLicenseAgreementUpdateParams.Data;
}

export namespace BetaLicenseAgreementUpdateParams {
  export interface Data {
    id: string;

    type: 'betaLicenseAgreements';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      agreementText?: string;
    }
  }
}

export interface BetaLicenseAgreementListParams {
  /**
   * the fields to include for returned resources of type apps
   */
  'fields[apps]'?: Array<
    | 'accessibilityUrl'
    | 'name'
    | 'bundleId'
    | 'sku'
    | 'primaryLocale'
    | 'isOrEverWasMadeForKids'
    | 'subscriptionStatusUrl'
    | 'subscriptionStatusUrlVersion'
    | 'subscriptionStatusUrlForSandbox'
    | 'subscriptionStatusUrlVersionForSandbox'
    | 'contentRightsDeclaration'
    | 'streamlinedPurchasingEnabled'
    | 'accessibilityDeclarations'
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaTesters'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'appPricePoints'
    | 'endUserLicenseAgreement'
    | 'appPriceSchedule'
    | 'appAvailabilityV2'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'perfPowerMetrics'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'customerReviews'
    | 'customerReviewSummarizations'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionKey'
    | 'analyticsReportRequests'
    | 'marketplaceSearchDetail'
    | 'backgroundAssets'
    | 'betaFeedbackScreenshotSubmissions'
    | 'betaFeedbackCrashSubmissions'
    | 'webhooks'
  >;

  /**
   * the fields to include for returned resources of type betaLicenseAgreements
   */
  'fields[betaLicenseAgreements]'?: Array<'agreementText' | 'app'>;

  /**
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaLicenseAgreementRetrieveAppParams {
  /**
   * the fields to include for returned resources of type apps
   */
  'fields[apps]'?: Array<
    | 'accessibilityUrl'
    | 'name'
    | 'bundleId'
    | 'sku'
    | 'primaryLocale'
    | 'isOrEverWasMadeForKids'
    | 'subscriptionStatusUrl'
    | 'subscriptionStatusUrlVersion'
    | 'subscriptionStatusUrlForSandbox'
    | 'subscriptionStatusUrlVersionForSandbox'
    | 'contentRightsDeclaration'
    | 'streamlinedPurchasingEnabled'
    | 'accessibilityDeclarations'
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaTesters'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'appPricePoints'
    | 'endUserLicenseAgreement'
    | 'appPriceSchedule'
    | 'appAvailabilityV2'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'perfPowerMetrics'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'customerReviews'
    | 'customerReviewSummarizations'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionKey'
    | 'analyticsReportRequests'
    | 'marketplaceSearchDetail'
    | 'backgroundAssets'
    | 'betaFeedbackScreenshotSubmissions'
    | 'betaFeedbackCrashSubmissions'
    | 'webhooks'
  >;
}

BetaLicenseAgreements.Relationships = RelationshipsAPIRelationships;

export declare namespace BetaLicenseAgreements {
  export {
    type BetaLicenseAgreement as BetaLicenseAgreement,
    type BetaLicenseAgreementResponse as BetaLicenseAgreementResponse,
    type BetaLicenseAgreementListResponse as BetaLicenseAgreementListResponse,
    type BetaLicenseAgreementRetrieveParams as BetaLicenseAgreementRetrieveParams,
    type BetaLicenseAgreementUpdateParams as BetaLicenseAgreementUpdateParams,
    type BetaLicenseAgreementListParams as BetaLicenseAgreementListParams,
    type BetaLicenseAgreementRetrieveAppParams as BetaLicenseAgreementRetrieveAppParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
  };
}
