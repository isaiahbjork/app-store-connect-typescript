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
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaAppLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: BetaAppLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppLocalizationResponse> {
    return this._client.post('/v1/betaAppLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: BetaAppLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaAppLocalizationResponse> {
    return this._client.get(path`/v1/betaAppLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BetaAppLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppLocalizationResponse> {
    return this._client.patch(path`/v1/betaAppLocalizations/${id}`, { body, ...options });
  }

  list(
    query: BetaAppLocalizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaAppLocalizationListResponse> {
    return this._client.get('/v1/betaAppLocalizations', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaAppLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveApp(
    id: string,
    query: BetaAppLocalizationRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/betaAppLocalizations/${id}/app`, { query, ...options });
  }
}

export interface BetaAppLocalization {
  id: string;

  type: 'betaAppLocalizations';

  attributes?: BetaAppLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaAppLocalization.Relationships;
}

export namespace BetaAppLocalization {
  export interface Attributes {
    description?: string;

    feedbackEmail?: string;

    locale?: string;

    marketingUrl?: string;

    privacyPolicyUrl?: string;

    tvOsPrivacyPolicy?: string;
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

export interface BetaAppLocalizationResponse {
  data: BetaAppLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App>;
}

export interface BetaAppLocalizationListResponse {
  data: Array<BetaAppLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaAppLocalizationCreateParams {
  data: BetaAppLocalizationCreateParams.Data;
}

export namespace BetaAppLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'betaAppLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      description?: string;

      feedbackEmail?: string;

      marketingUrl?: string;

      privacyPolicyUrl?: string;

      tvOsPrivacyPolicy?: string;
    }

    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface BetaAppLocalizationRetrieveParams {
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
   * the fields to include for returned resources of type betaAppLocalizations
   */
  'fields[betaAppLocalizations]'?: Array<
    | 'feedbackEmail'
    | 'marketingUrl'
    | 'privacyPolicyUrl'
    | 'tvOsPrivacyPolicy'
    | 'description'
    | 'locale'
    | 'app'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;
}

export interface BetaAppLocalizationUpdateParams {
  data: BetaAppLocalizationUpdateParams.Data;
}

export namespace BetaAppLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'betaAppLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      feedbackEmail?: string;

      marketingUrl?: string;

      privacyPolicyUrl?: string;

      tvOsPrivacyPolicy?: string;
    }
  }
}

export interface BetaAppLocalizationListParams {
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
   * the fields to include for returned resources of type betaAppLocalizations
   */
  'fields[betaAppLocalizations]'?: Array<
    | 'feedbackEmail'
    | 'marketingUrl'
    | 'privacyPolicyUrl'
    | 'tvOsPrivacyPolicy'
    | 'description'
    | 'locale'
    | 'app'
  >;

  /**
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaAppLocalizationRetrieveAppParams {
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

BetaAppLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace BetaAppLocalizations {
  export {
    type BetaAppLocalization as BetaAppLocalization,
    type BetaAppLocalizationResponse as BetaAppLocalizationResponse,
    type BetaAppLocalizationListResponse as BetaAppLocalizationListResponse,
    type BetaAppLocalizationCreateParams as BetaAppLocalizationCreateParams,
    type BetaAppLocalizationRetrieveParams as BetaAppLocalizationRetrieveParams,
    type BetaAppLocalizationUpdateParams as BetaAppLocalizationUpdateParams,
    type BetaAppLocalizationListParams as BetaAppLocalizationListParams,
    type BetaAppLocalizationRetrieveAppParams as BetaAppLocalizationRetrieveAppParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
  };
}
