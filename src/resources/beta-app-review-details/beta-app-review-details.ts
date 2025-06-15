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

export class BetaAppReviewDetails extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: BetaAppReviewDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaAppReviewDetailResponse> {
    return this._client.get(path`/v1/betaAppReviewDetails/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BetaAppReviewDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppReviewDetailResponse> {
    return this._client.patch(path`/v1/betaAppReviewDetails/${id}`, { body, ...options });
  }

  list(
    query: BetaAppReviewDetailListParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppReviewDetailListResponse> {
    return this._client.get('/v1/betaAppReviewDetails', { query, ...options });
  }

  retrieveApp(
    id: string,
    query: BetaAppReviewDetailRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/betaAppReviewDetails/${id}/app`, { query, ...options });
  }
}

export interface BetaAppReviewDetail {
  id: string;

  type: 'betaAppReviewDetails';

  attributes?: BetaAppReviewDetail.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaAppReviewDetail.Relationships;
}

export namespace BetaAppReviewDetail {
  export interface Attributes {
    contactEmail?: string;

    contactFirstName?: string;

    contactLastName?: string;

    contactPhone?: string;

    demoAccountName?: string;

    demoAccountPassword?: string;

    demoAccountRequired?: boolean;

    notes?: string;
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

export interface BetaAppReviewDetailResponse {
  data: BetaAppReviewDetail;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App>;
}

export interface BetaAppReviewDetailListResponse {
  data: Array<BetaAppReviewDetail>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaAppReviewDetailRetrieveParams {
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
   * the fields to include for returned resources of type betaAppReviewDetails
   */
  'fields[betaAppReviewDetails]'?: Array<
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'contactEmail'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
    | 'app'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;
}

export interface BetaAppReviewDetailUpdateParams {
  data: BetaAppReviewDetailUpdateParams.Data;
}

export namespace BetaAppReviewDetailUpdateParams {
  export interface Data {
    id: string;

    type: 'betaAppReviewDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      contactEmail?: string;

      contactFirstName?: string;

      contactLastName?: string;

      contactPhone?: string;

      demoAccountName?: string;

      demoAccountPassword?: string;

      demoAccountRequired?: boolean;

      notes?: string;
    }
  }
}

export interface BetaAppReviewDetailListParams {
  /**
   * filter by id(s) of related 'app'
   */
  'filter[app]': Array<string>;

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
   * the fields to include for returned resources of type betaAppReviewDetails
   */
  'fields[betaAppReviewDetails]'?: Array<
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'contactEmail'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
    | 'app'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaAppReviewDetailRetrieveAppParams {
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

BetaAppReviewDetails.Relationships = RelationshipsAPIRelationships;

export declare namespace BetaAppReviewDetails {
  export {
    type BetaAppReviewDetail as BetaAppReviewDetail,
    type BetaAppReviewDetailResponse as BetaAppReviewDetailResponse,
    type BetaAppReviewDetailListResponse as BetaAppReviewDetailListResponse,
    type BetaAppReviewDetailRetrieveParams as BetaAppReviewDetailRetrieveParams,
    type BetaAppReviewDetailUpdateParams as BetaAppReviewDetailUpdateParams,
    type BetaAppReviewDetailListParams as BetaAppReviewDetailListParams,
    type BetaAppReviewDetailRetrieveAppParams as BetaAppReviewDetailRetrieveAppParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
  };
}
