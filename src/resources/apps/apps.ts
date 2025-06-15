// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AgeRatingDeclarationsAPI from '../age-rating-declarations';
import * as AlternativeDistributionKeysAPI from '../alternative-distribution-keys';
import * as AppClipAdvancedExperienceImagesAPI from '../app-clip-advanced-experience-images';
import * as AppInfoLocalizationsAPI from '../app-info-localizations';
import * as AppStoreVersionPhasedReleasesAPI from '../app-store-version-phased-releases';
import * as BetaFeedbackScreenshotSubmissionsAPI from '../beta-feedback-screenshot-submissions';
import * as InAppPurchaseAppStoreReviewScreenshotsAPI from '../in-app-purchase-app-store-review-screenshots';
import * as InAppPurchaseContentsAPI from '../in-app-purchase-contents';
import * as InAppPurchaseImagesAPI from '../in-app-purchase-images';
import * as InAppPurchaseLocalizationsAPI from '../in-app-purchase-localizations';
import * as MarketplaceSearchDetailsAPI from '../marketplace-search-details';
import * as PromotedPurchasesAPI from '../promoted-purchases';
import * as RoutingAppCoveragesAPI from '../routing-app-coverages';
import * as SubscriptionGracePeriodsAPI from '../subscription-grace-periods';
import * as SubscriptionGroupLocalizationsAPI from '../subscription-group-localizations';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AlternativeDistributionPackagesAPI from '../alternative-distribution-packages/alternative-distribution-packages';
import * as AnalyticsReportRequestsAPI from '../analytics-report-requests/analytics-report-requests';
import * as AnalyticsReportsAPI from '../analytics-reports/analytics-reports';
import * as AppAvailabilitiesAPI from '../app-availabilities/app-availabilities';
import * as AppCategoriesAPI from '../app-categories/app-categories';
import * as AppClipDefaultExperiencesAPI from '../app-clip-default-experiences/app-clip-default-experiences';
import * as AppClipsAPI from '../app-clips/app-clips';
import * as AppCustomProductPageVersionsAPI from '../app-custom-product-page-versions/app-custom-product-page-versions';
import * as AppCustomProductPagesAPI from '../app-custom-product-pages/app-custom-product-pages';
import * as AppEncryptionDeclarationsAPI from '../app-encryption-declarations/app-encryption-declarations';
import * as AppEventLocalizationsAPI from '../app-event-localizations/app-event-localizations';
import * as AppEventsAPI from '../app-events/app-events';
import * as AppInfosAPI from '../app-infos/app-infos';
import * as AppPricePointsAPI from '../app-price-points/app-price-points';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as AppStoreReviewDetailsAPI from '../app-store-review-details/app-store-review-details';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as AppStoreVersionLocalizationsAPI from '../app-store-version-localizations/app-store-version-localizations';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as MetricsAPI from './metrics';
import {
  AppsBetaTesterUsagesV1MetricResponse,
  MetricRetrieveBetaTesterUsagesParams,
  Metrics,
} from './metrics';
import * as BackgroundAssetVersionsAPI from '../background-asset-versions/background-asset-versions';
import * as BackgroundAssetsAPI from '../background-assets/background-assets';
import * as BetaAppLocalizationsAPI from '../beta-app-localizations/beta-app-localizations';
import * as BetaAppReviewDetailsAPI from '../beta-app-review-details/beta-app-review-details';
import * as BetaFeedbackCrashSubmissionsAPI from '../beta-feedback-crash-submissions/beta-feedback-crash-submissions';
import * as BetaGroupsAPI from '../beta-groups/beta-groups';
import * as BetaLicenseAgreementsAPI from '../beta-license-agreements/beta-license-agreements';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import * as BuildsAPI from '../builds/builds';
import * as CiProductsAPI from '../ci-products/ci-products';
import * as EndUserLicenseAgreementsAPI from '../end-user-license-agreements/end-user-license-agreements';
import * as GameCenterAppVersionsAPI from '../game-center-app-versions/game-center-app-versions';
import * as GameCenterDetailsAPI from '../game-center-details/game-center-details';
import * as InAppPurchaseAvailabilitiesAPI from '../in-app-purchase-availabilities/in-app-purchase-availabilities';
import * as InAppPurchasePricePointsAPI from '../in-app-purchase-price-points/in-app-purchase-price-points';
import * as InAppPurchasePriceSchedulesAPI from '../in-app-purchase-price-schedules/in-app-purchase-price-schedules';
import * as InAppPurchasesAPI from '../in-app-purchases/in-app-purchases';
import * as PreReleaseVersionsAPI from '../pre-release-versions/pre-release-versions';
import * as ReviewSubmissionsAPI from '../review-submissions/review-submissions';
import * as SubscriptionGroupsAPI from '../subscription-groups/subscription-groups';
import * as SubscriptionsAPI from '../subscriptions/subscriptions';
import * as WebhooksAPI from '../webhooks/webhooks';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipDeleteBetaTestersParams,
  RelationshipRetrieveAccessibilityDeclarationsParams,
  RelationshipRetrieveAccessibilityDeclarationsResponse,
  RelationshipRetrieveAlternativeDistributionKeyResponse,
  RelationshipRetrieveAnalyticsReportRequestsParams,
  RelationshipRetrieveAnalyticsReportRequestsResponse,
  RelationshipRetrieveAppAvailabilityV2Response,
  RelationshipRetrieveAppClipsParams,
  RelationshipRetrieveAppClipsResponse,
  RelationshipRetrieveAppCustomProductPagesParams,
  RelationshipRetrieveAppCustomProductPagesResponse,
  RelationshipRetrieveAppEncryptionDeclarationsParams,
  RelationshipRetrieveAppEncryptionDeclarationsResponse,
  RelationshipRetrieveAppEventsParams,
  RelationshipRetrieveAppEventsResponse,
  RelationshipRetrieveAppInfosParams,
  RelationshipRetrieveAppInfosResponse,
  RelationshipRetrieveAppPricePointsParams,
  RelationshipRetrieveAppPricePointsResponse,
  RelationshipRetrieveAppPriceScheduleResponse,
  RelationshipRetrieveAppStoreVersionExperimentsV2Params,
  RelationshipRetrieveAppStoreVersionExperimentsV2Response,
  RelationshipRetrieveAppStoreVersionsParams,
  RelationshipRetrieveAppStoreVersionsResponse,
  RelationshipRetrieveBackgroundAssetsParams,
  RelationshipRetrieveBackgroundAssetsResponse,
  RelationshipRetrieveBetaAppLocalizationsParams,
  RelationshipRetrieveBetaAppLocalizationsResponse,
  RelationshipRetrieveBetaAppReviewDetailResponse,
  RelationshipRetrieveBetaFeedbackCrashSubmissionsParams,
  RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse,
  RelationshipRetrieveBetaFeedbackScreenshotSubmissionsParams,
  RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse,
  RelationshipRetrieveBetaGroupsParams,
  RelationshipRetrieveBetaGroupsResponse,
  RelationshipRetrieveBetaLicenseAgreementResponse,
  RelationshipRetrieveBuildsParams,
  RelationshipRetrieveBuildsResponse,
  RelationshipRetrieveCiProductResponse,
  RelationshipRetrieveCustomerReviewsParams,
  RelationshipRetrieveCustomerReviewsResponse,
  RelationshipRetrieveEndUserLicenseAgreementResponse,
  RelationshipRetrieveGameCenterDetailResponse,
  RelationshipRetrieveGameCenterEnabledVersionsParams,
  RelationshipRetrieveGameCenterEnabledVersionsResponse,
  RelationshipRetrieveInAppPurchasesParams,
  RelationshipRetrieveInAppPurchasesResponse,
  RelationshipRetrieveInAppPurchasesV2Params,
  RelationshipRetrieveInAppPurchasesV2Response,
  RelationshipRetrieveMarketplaceSearchDetailResponse,
  RelationshipRetrievePreReleaseVersionsParams,
  RelationshipRetrievePreReleaseVersionsResponse,
  RelationshipRetrieveReviewSubmissionsParams,
  RelationshipRetrieveReviewSubmissionsResponse,
  RelationshipRetrieveSubscriptionGracePeriodResponse,
  RelationshipRetrieveSubscriptionGroupsParams,
  RelationshipRetrieveSubscriptionGroupsResponse,
  RelationshipRetrieveWebhooksParams,
  RelationshipRetrieveWebhooksResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  retrieve(
    id: string,
    query: AppRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppResponse> {
    return this._client.get(path`/v1/apps/${id}`, { query, ...options });
  }

  update(id: string, body: AppUpdateParams, options?: RequestOptions): APIPromise<AppResponse> {
    return this._client.patch(path`/v1/apps/${id}`, { body, ...options });
  }

  list(query: AppListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/v1/apps', { query, ...options });
  }

  retrieveAccessibilityDeclarations(
    id: string,
    query: AppRetrieveAccessibilityDeclarationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAccessibilityDeclarationsResponse> {
    return this._client.get(path`/v1/apps/${id}/accessibilityDeclarations`, { query, ...options });
  }

  retrieveAlternativeDistributionKey(
    id: string,
    query: AppRetrieveAlternativeDistributionKeyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionKeysAPI.AlternativeDistributionKeyResponse> {
    return this._client.get(path`/v1/apps/${id}/alternativeDistributionKey`, { query, ...options });
  }

  retrieveAnalyticsReportRequests(
    id: string,
    query: AppRetrieveAnalyticsReportRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAnalyticsReportRequestsResponse> {
    return this._client.get(path`/v1/apps/${id}/analyticsReportRequests`, { query, ...options });
  }

  retrieveAppAvailabilityV2(
    id: string,
    query: AppRetrieveAppAvailabilityV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppAvailabilitiesAPI.AppAvailability> {
    return this._client.get(path`/v1/apps/${id}/appAvailabilityV2`, { query, ...options });
  }

  retrieveAppClips(
    id: string,
    query: AppRetrieveAppClipsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAppClipsResponse> {
    return this._client.get(path`/v1/apps/${id}/appClips`, { query, ...options });
  }

  retrieveAppCustomProductPages(
    id: string,
    query: AppRetrieveAppCustomProductPagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAppCustomProductPagesResponse> {
    return this._client.get(path`/v1/apps/${id}/appCustomProductPages`, { query, ...options });
  }

  retrieveAppEncryptionDeclarations(
    id: string,
    query: AppRetrieveAppEncryptionDeclarationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppEncryptionDeclarations> {
    return this._client.get(path`/v1/apps/${id}/appEncryptionDeclarations`, { query, ...options });
  }

  retrieveAppEvents(
    id: string,
    query: AppRetrieveAppEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAppEventsResponse> {
    return this._client.get(path`/v1/apps/${id}/appEvents`, { query, ...options });
  }

  retrieveAppInfos(
    id: string,
    query: AppRetrieveAppInfosParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAppInfosResponse> {
    return this._client.get(path`/v1/apps/${id}/appInfos`, { query, ...options });
  }

  retrieveAppPricePoints(
    id: string,
    query: AppRetrieveAppPricePointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPricePointsAPI.AppPricePoints> {
    return this._client.get(path`/v1/apps/${id}/appPricePoints`, { query, ...options });
  }

  retrieveAppPriceSchedule(
    id: string,
    query: AppRetrieveAppPriceScheduleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPriceSchedulesAPI.AppPriceSchedule> {
    return this._client.get(path`/v1/apps/${id}/appPriceSchedule`, { query, ...options });
  }

  retrieveAppStoreVersionExperimentsV2(
    id: string,
    query: AppRetrieveAppStoreVersionExperimentsV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.AppStoreVersionExperimentsV2> {
    return this._client.get(path`/v1/apps/${id}/appStoreVersionExperimentsV2`, { query, ...options });
  }

  retrieveAppStoreVersions(
    id: string,
    query: AppRetrieveAppStoreVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveAppStoreVersionsResponse> {
    return this._client.get(path`/v1/apps/${id}/appStoreVersions`, { query, ...options });
  }

  retrieveBackgroundAssets(
    id: string,
    query: AppRetrieveBackgroundAssetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveBackgroundAssetsResponse> {
    return this._client.get(path`/v1/apps/${id}/backgroundAssets`, { query, ...options });
  }

  retrieveBetaAppLocalizations(
    id: string,
    query: AppRetrieveBetaAppLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveBetaAppLocalizationsResponse> {
    return this._client.get(path`/v1/apps/${id}/betaAppLocalizations`, { query, ...options });
  }

  retrieveBetaAppReviewDetail(
    id: string,
    query: AppRetrieveBetaAppReviewDetailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveBetaAppReviewDetailResponse> {
    return this._client.get(path`/v1/apps/${id}/betaAppReviewDetail`, { query, ...options });
  }

  retrieveBetaFeedbackCrashSubmissions(
    id: string,
    query: AppRetrieveBetaFeedbackCrashSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveBetaFeedbackCrashSubmissionsResponse> {
    return this._client.get(path`/v1/apps/${id}/betaFeedbackCrashSubmissions`, { query, ...options });
  }

  retrieveBetaFeedbackScreenshotSubmissions(
    id: string,
    query: AppRetrieveBetaFeedbackScreenshotSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveBetaFeedbackScreenshotSubmissionsResponse> {
    return this._client.get(path`/v1/apps/${id}/betaFeedbackScreenshotSubmissions`, { query, ...options });
  }

  retrieveBetaGroups(
    id: string,
    query: AppRetrieveBetaGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupsWithoutIncludesResponse> {
    return this._client.get(path`/v1/apps/${id}/betaGroups`, { query, ...options });
  }

  retrieveBetaLicenseAgreement(
    id: string,
    query: AppRetrieveBetaLicenseAgreementParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveBetaLicenseAgreementResponse> {
    return this._client.get(path`/v1/apps/${id}/betaLicenseAgreement`, { query, ...options });
  }

  retrieveBuilds(
    id: string,
    query: AppRetrieveBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildsWithoutIncludesResponse> {
    return this._client.get(path`/v1/apps/${id}/builds`, { query, ...options });
  }

  retrieveCiProduct(
    id: string,
    query: AppRetrieveCiProductParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiProductsAPI.CiProductResponse> {
    return this._client.get(path`/v1/apps/${id}/ciProduct`, { query, ...options });
  }

  retrieveCustomerReviewSummarizations(
    id: string,
    query: AppRetrieveCustomerReviewSummarizationsParams,
    options?: RequestOptions,
  ): APIPromise<AppRetrieveCustomerReviewSummarizationsResponse> {
    return this._client.get(path`/v1/apps/${id}/customerReviewSummarizations`, { query, ...options });
  }

  retrieveCustomerReviews(
    id: string,
    query: AppRetrieveCustomerReviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.CustomerReviews> {
    return this._client.get(path`/v1/apps/${id}/customerReviews`, { query, ...options });
  }

  retrieveEndUserLicenseAgreement(
    id: string,
    query: AppRetrieveEndUserLicenseAgreementParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveEndUserLicenseAgreementResponse> {
    return this._client.get(path`/v1/apps/${id}/endUserLicenseAgreement`, { query, ...options });
  }

  retrieveGameCenterDetail(
    id: string,
    query: AppRetrieveGameCenterDetailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterDetailsAPI.GameCenterDetailResponse> {
    return this._client.get(path`/v1/apps/${id}/gameCenterDetail`, { query, ...options });
  }

  /**
   * @deprecated
   */
  retrieveGameCenterEnabledVersions(
    id: string,
    query: AppRetrieveGameCenterEnabledVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterEnabledVersionsResponse> {
    return this._client.get(path`/v1/apps/${id}/gameCenterEnabledVersions`, { query, ...options });
  }

  /**
   * @deprecated
   */
  retrieveInAppPurchases(
    id: string,
    query: AppRetrieveInAppPurchasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveInAppPurchasesResponse> {
    return this._client.get(path`/v1/apps/${id}/inAppPurchases`, { query, ...options });
  }

  retrieveInAppPurchasesV2(
    id: string,
    query: AppRetrieveInAppPurchasesV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveInAppPurchasesV2Response> {
    return this._client.get(path`/v1/apps/${id}/inAppPurchasesV2`, { query, ...options });
  }

  retrieveMarketplaceSearchDetail(
    id: string,
    query: AppRetrieveMarketplaceSearchDetailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketplaceSearchDetailsAPI.MarketplaceSearchDetail> {
    return this._client.get(path`/v1/apps/${id}/marketplaceSearchDetail`, { query, ...options });
  }

  retrievePerfPowerMetrics(
    id: string,
    query: AppRetrievePerfPowerMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<XcodeMetrics> {
    return this._client.get(path`/v1/apps/${id}/perfPowerMetrics`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.apple.xcode-metrics+json' }, options?.headers]),
    });
  }

  retrievePreReleaseVersions(
    id: string,
    query: AppRetrievePreReleaseVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrievePreReleaseVersionsResponse> {
    return this._client.get(path`/v1/apps/${id}/preReleaseVersions`, { query, ...options });
  }

  retrievePromotedPurchases(
    id: string,
    query: AppRetrievePromotedPurchasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrievePromotedPurchasesResponse> {
    return this._client.get(path`/v1/apps/${id}/promotedPurchases`, { query, ...options });
  }

  retrieveReviewSubmissions(
    id: string,
    query: AppRetrieveReviewSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReviewSubmissionsAPI.ReviewSubmissionsResponse> {
    return this._client.get(path`/v1/apps/${id}/reviewSubmissions`, { query, ...options });
  }

  retrieveSubscriptionGracePeriod(
    id: string,
    query: AppRetrieveSubscriptionGracePeriodParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionGracePeriodsAPI.SubscriptionGracePeriodResponse> {
    return this._client.get(path`/v1/apps/${id}/subscriptionGracePeriod`, { query, ...options });
  }

  retrieveSubscriptionGroups(
    id: string,
    query: AppRetrieveSubscriptionGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveSubscriptionGroupsResponse> {
    return this._client.get(path`/v1/apps/${id}/subscriptionGroups`, { query, ...options });
  }

  retrieveWebhooks(
    id: string,
    query: AppRetrieveWebhooksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveWebhooksResponse> {
    return this._client.get(path`/v1/apps/${id}/webhooks`, { query, ...options });
  }
}

export interface App {
  id: string;

  type: 'apps';

  attributes?: App.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: App.Relationships;
}

export namespace App {
  export interface Attributes {
    accessibilityUrl?: string;

    bundleId?: string;

    contentRightsDeclaration?: 'DOES_NOT_USE_THIRD_PARTY_CONTENT' | 'USES_THIRD_PARTY_CONTENT';

    isOrEverWasMadeForKids?: boolean;

    name?: string;

    primaryLocale?: string;

    sku?: string;

    streamlinedPurchasingEnabled?: boolean;

    subscriptionStatusUrl?: string;

    subscriptionStatusUrlForSandbox?: string;

    subscriptionStatusUrlVersion?: AppsAPI.SubscriptionStatusURLVersion;

    subscriptionStatusUrlVersionForSandbox?: AppsAPI.SubscriptionStatusURLVersion;
  }

  export interface Relationships {
    accessibilityDeclarations?: Relationships.AccessibilityDeclarations;

    alternativeDistributionKey?: Relationships.AlternativeDistributionKey;

    analyticsReportRequests?: Relationships.AnalyticsReportRequests;

    appAvailabilityV2?: Relationships.AppAvailabilityV2;

    appClips?: Relationships.AppClips;

    appCustomProductPages?: Relationships.AppCustomProductPages;

    appEncryptionDeclarations?: Relationships.AppEncryptionDeclarations;

    appEvents?: Relationships.AppEvents;

    appInfos?: Relationships.AppInfos;

    appPricePoints?: Relationships.AppPricePoints;

    appPriceSchedule?: Relationships.AppPriceSchedule;

    appStoreVersionExperimentsV2?: Relationships.AppStoreVersionExperimentsV2;

    appStoreVersions?: Relationships.AppStoreVersions;

    backgroundAssets?: Relationships.BackgroundAssets;

    betaAppLocalizations?: Relationships.BetaAppLocalizations;

    betaAppReviewDetail?: Relationships.BetaAppReviewDetail;

    betaFeedbackCrashSubmissions?: Relationships.BetaFeedbackCrashSubmissions;

    betaFeedbackScreenshotSubmissions?: Relationships.BetaFeedbackScreenshotSubmissions;

    betaGroups?: Relationships.BetaGroups;

    betaLicenseAgreement?: Relationships.BetaLicenseAgreement;

    betaTesters?: Relationships.BetaTesters;

    builds?: Relationships.Builds;

    ciProduct?: Relationships.CiProduct;

    customerReviews?: Relationships.CustomerReviews;

    customerReviewSummarizations?: Relationships.CustomerReviewSummarizations;

    endUserLicenseAgreement?: Relationships.EndUserLicenseAgreement;

    gameCenterDetail?: Relationships.GameCenterDetail;

    gameCenterEnabledVersions?: Relationships.GameCenterEnabledVersions;

    /**
     * @deprecated
     */
    inAppPurchases?: Relationships.InAppPurchases;

    inAppPurchasesV2?: Relationships.InAppPurchasesV2;

    marketplaceSearchDetail?: Relationships.MarketplaceSearchDetail;

    perfPowerMetrics?: Relationships.PerfPowerMetrics;

    preReleaseVersions?: Relationships.PreReleaseVersions;

    promotedPurchases?: Relationships.PromotedPurchases;

    reviewSubmissions?: Relationships.ReviewSubmissions;

    subscriptionGracePeriod?: Relationships.SubscriptionGracePeriod;

    subscriptionGroups?: Relationships.SubscriptionGroups;

    webhooks?: Relationships.Webhooks;
  }

  export namespace Relationships {
    export interface AccessibilityDeclarations {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AlternativeDistributionKey {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AnalyticsReportRequests {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AppAvailabilityV2 {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AppClips {
      data?: Array<AppClips.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppClips {
      export interface Data {
        id: string;

        type: 'appClips';
      }
    }

    export interface AppCustomProductPages {
      data?: Array<AppCustomProductPages.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppCustomProductPages {
      export interface Data {
        id: string;

        type: 'appCustomProductPages';
      }
    }

    export interface AppEncryptionDeclarations {
      data?: Array<AppEncryptionDeclarations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppEncryptionDeclarations {
      export interface Data {
        id: string;

        type: 'appEncryptionDeclarations';
      }
    }

    export interface AppEvents {
      data?: Array<AppEvents.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppEvents {
      export interface Data {
        id: string;

        type: 'appEvents';
      }
    }

    export interface AppInfos {
      data?: Array<AppInfos.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppInfos {
      export interface Data {
        id: string;

        type: 'appInfos';
      }
    }

    export interface AppPricePoints {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AppPriceSchedule {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface AppStoreVersionExperimentsV2 {
      data?: Array<AppStoreVersionExperimentsV2.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionExperimentsV2 {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }

    export interface AppStoreVersions {
      data?: Array<AppStoreVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersions {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface BackgroundAssets {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface BetaAppLocalizations {
      data?: Array<BetaAppLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BetaAppLocalizations {
      export interface Data {
        id: string;

        type: 'betaAppLocalizations';
      }
    }

    export interface BetaAppReviewDetail {
      data?: BetaAppReviewDetail.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BetaAppReviewDetail {
      export interface Data {
        id: string;

        type: 'betaAppReviewDetails';
      }
    }

    export interface BetaFeedbackCrashSubmissions {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface BetaFeedbackScreenshotSubmissions {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface BetaGroups {
      data?: Array<BetaGroups.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BetaGroups {
      export interface Data {
        id: string;

        type: 'betaGroups';
      }
    }

    export interface BetaLicenseAgreement {
      data?: BetaLicenseAgreement.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BetaLicenseAgreement {
      export interface Data {
        id: string;

        type: 'betaLicenseAgreements';
      }
    }

    export interface BetaTesters {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface Builds {
      data?: Array<Builds.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Builds {
      export interface Data {
        id: string;

        type: 'builds';
      }
    }

    export interface CiProduct {
      data?: CiProduct.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace CiProduct {
      export interface Data {
        id: string;

        type: 'ciProducts';
      }
    }

    export interface CustomerReviews {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface CustomerReviewSummarizations {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface EndUserLicenseAgreement {
      data?: EndUserLicenseAgreement.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace EndUserLicenseAgreement {
      export interface Data {
        id: string;

        type: 'endUserLicenseAgreements';
      }
    }

    export interface GameCenterDetail {
      data?: GameCenterDetail.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace GameCenterDetail {
      export interface Data {
        id: string;

        type: 'gameCenterDetails';
      }
    }

    export interface GameCenterEnabledVersions {
      data?: Array<GameCenterEnabledVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace GameCenterEnabledVersions {
      export interface Data {
        id: string;

        type: 'gameCenterEnabledVersions';
      }
    }

    /**
     * @deprecated
     */
    export interface InAppPurchases {
      data?: Array<InAppPurchases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace InAppPurchases {
      export interface Data {
        id: string;

        type: 'inAppPurchases';
      }
    }

    export interface InAppPurchasesV2 {
      data?: Array<InAppPurchasesV2.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace InAppPurchasesV2 {
      export interface Data {
        id: string;

        type: 'inAppPurchases';
      }
    }

    export interface MarketplaceSearchDetail {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface PerfPowerMetrics {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface PreReleaseVersions {
      data?: Array<PreReleaseVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace PreReleaseVersions {
      export interface Data {
        id: string;

        type: 'preReleaseVersions';
      }
    }

    export interface PromotedPurchases {
      data?: Array<PromotedPurchases.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace PromotedPurchases {
      export interface Data {
        id: string;

        type: 'promotedPurchases';
      }
    }

    export interface ReviewSubmissions {
      data?: Array<ReviewSubmissions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace ReviewSubmissions {
      export interface Data {
        id: string;

        type: 'reviewSubmissions';
      }
    }

    export interface SubscriptionGracePeriod {
      data?: SubscriptionGracePeriod.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace SubscriptionGracePeriod {
      export interface Data {
        id: string;

        type: 'subscriptionGracePeriods';
      }
    }

    export interface SubscriptionGroups {
      data?: Array<SubscriptionGroups.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace SubscriptionGroups {
      export interface Data {
        id: string;

        type: 'subscriptionGroups';
      }
    }

    export interface Webhooks {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface AppResponse {
  data: App;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppEncryptionDeclarationsAPI.AppEncryptionDeclarationDeclaration
    | CiProductsAPI.CiProductDetails
    | BetaGroupsAPI.BetaGroup
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | PreReleaseVersionsAPI.PrereleaseVersion
    | BetaAppLocalizationsAPI.BetaAppLocalization
    | BuildsAPI.Build
    | BetaLicenseAgreementsAPI.BetaLicenseAgreement
    | BetaAppReviewDetailsAPI.BetaAppReviewDetail
    | AppInfosAPI.AppInfo
    | AppClipsAPI.AppClip
    | EndUserLicenseAgreementsAPI.EndUserLicenseAgreement
    | InAppPurchasesAPI.InAppPurchase
    | SubscriptionGroupsAPI.SubscriptionGroup
    | GameCenterEnabledVersion
    | AppCustomProductPagesAPI.AppCustomProductPage
    | InAppPurchasesAPI.InAppPurchaseV2
    | PromotedPurchasesAPI.PromotedPurchase
    | AppEventsAPI.AppEvent
    | ReviewSubmissionsAPI.ReviewSubmission
    | SubscriptionGracePeriodsAPI.SubscriptionGracePeriodDetails
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
  >;
}

export interface BetaGroupsWithoutIncludesResponse {
  data: Array<BetaGroupsAPI.BetaGroup>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BuildsWithoutIncludesResponse {
  data: Array<BuildsAPI.Build>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

/**
 * @deprecated
 */
export interface GameCenterEnabledVersion {
  id: string;

  type: 'gameCenterEnabledVersions';

  attributes?: GameCenterEnabledVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterEnabledVersion.Relationships;
}

export namespace GameCenterEnabledVersion {
  export interface Attributes {
    iconAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    platform?: AppStoreVersionExperimentsAPI.Platform;

    versionString?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    compatibleVersions?: Relationships.CompatibleVersions;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface CompatibleVersions {
      data?: Array<CompatibleVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace CompatibleVersions {
      export interface Data {
        id: string;

        type: 'gameCenterEnabledVersions';
      }
    }
  }
}

/**
 * @deprecated
 */
export interface GameCenterEnabledVersionsResponse {
  data: Array<GameCenterEnabledVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterEnabledVersion | App>;

  meta?: ActorsAPI.PagingInformation;
}

export type MetricCategory = 'HANG' | 'LAUNCH' | 'MEMORY' | 'DISK' | 'BATTERY' | 'TERMINATION' | 'ANIMATION';

export interface MetricsInsight {
  highImpact?: boolean;

  latestVersion?: string;

  maxLatestVersionValue?: number;

  metric?: string;

  metricCategory?: MetricCategory;

  populations?: Array<MetricsInsight.Population>;

  referenceVersions?: string;

  subSystemLabel?: string;

  summaryString?: string;
}

export namespace MetricsInsight {
  export interface Population {
    deltaPercentage?: number;

    device?: string;

    latestVersionValue?: number;

    percentile?: string;

    referenceAverageValue?: number;

    summaryString?: string;
  }
}

export type SubscriptionStatusURLVersion = 'V1' | 'V2';

export interface XcodeMetrics {
  insights?: XcodeMetrics.Insights;

  productData?: Array<XcodeMetrics.ProductData>;

  version?: string;
}

export namespace XcodeMetrics {
  export interface Insights {
    regressions?: Array<AppsAPI.MetricsInsight>;

    trendingUp?: Array<AppsAPI.MetricsInsight>;
  }

  export interface ProductData {
    metricCategories?: Array<ProductData.MetricCategory>;

    platform?: string;
  }

  export namespace ProductData {
    export interface MetricCategory {
      identifier?: AppsAPI.MetricCategory;

      metrics?: Array<MetricCategory.Metric>;
    }

    export namespace MetricCategory {
      export interface Metric {
        datasets?: Array<Metric.Dataset>;

        goalKeys?: Array<Metric.GoalKey>;

        identifier?: string;

        unit?: Metric.Unit;
      }

      export namespace Metric {
        export interface Dataset {
          filterCriteria?: Dataset.FilterCriteria;

          points?: Array<Dataset.Point>;

          recommendedMetricGoal?: Dataset.RecommendedMetricGoal;
        }

        export namespace Dataset {
          export interface FilterCriteria {
            device?: string;

            deviceMarketingName?: string;

            percentile?: string;
          }

          export interface Point {
            errorMargin?: number;

            goal?: string;

            percentageBreakdown?: Point.PercentageBreakdown;

            value?: number;

            version?: string;
          }

          export namespace Point {
            export interface PercentageBreakdown {
              subSystemLabel?: string;

              value?: number;
            }
          }

          export interface RecommendedMetricGoal {
            detail?: string;

            value?: number;
          }
        }

        export interface GoalKey {
          goalKey?: string;

          lowerBound?: number;

          upperBound?: number;
        }

        export interface Unit {
          displayName?: string;

          identifier?: string;
        }
      }
    }
  }
}

export interface AppListResponse {
  data: Array<App>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppEncryptionDeclarationsAPI.AppEncryptionDeclarationDeclaration
    | CiProductsAPI.CiProductDetails
    | BetaGroupsAPI.BetaGroup
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | PreReleaseVersionsAPI.PrereleaseVersion
    | BetaAppLocalizationsAPI.BetaAppLocalization
    | BuildsAPI.Build
    | BetaLicenseAgreementsAPI.BetaLicenseAgreement
    | BetaAppReviewDetailsAPI.BetaAppReviewDetail
    | AppInfosAPI.AppInfo
    | AppClipsAPI.AppClip
    | EndUserLicenseAgreementsAPI.EndUserLicenseAgreement
    | InAppPurchasesAPI.InAppPurchase
    | SubscriptionGroupsAPI.SubscriptionGroup
    | GameCenterEnabledVersion
    | AppCustomProductPagesAPI.AppCustomProductPage
    | InAppPurchasesAPI.InAppPurchaseV2
    | PromotedPurchasesAPI.PromotedPurchase
    | AppEventsAPI.AppEvent
    | ReviewSubmissionsAPI.ReviewSubmission
    | SubscriptionGracePeriodsAPI.SubscriptionGracePeriodDetails
    | GameCenterDetailsAPI.GameCenterDetailDetail
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAccessibilityDeclarationsResponse {
  data: Array<AccessibilityDeclarationsAPI.AccessibilityDeclaration>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAnalyticsReportRequestsResponse {
  data: Array<AnalyticsReportRequestsAPI.AnalyticsReportRequest>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AnalyticsReportsAPI.AnalyticsReport>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAppClipsResponse {
  data: Array<AppClipsAPI.AppClip>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<App | AppClipDefaultExperiencesAPI.AppClipDefaultExperience>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAppCustomProductPagesResponse {
  data: Array<AppCustomProductPagesAPI.AppCustomProductPage>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<App | AppCustomProductPageVersionsAPI.AppCustomProductPageVersion>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAppEventsResponse {
  data: Array<AppEventsAPI.AppEvent>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppEventLocalizationsAPI.AppEventLocalization>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAppInfosResponse {
  data: Array<AppInfosAPI.AppInfo>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | App
    | AgeRatingDeclarationsAPI.AgeRatingDeclaration
    | AppInfoLocalizationsAPI.AppInfoLocalization
    | AppCategoriesAPI.AppCategory
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveAppStoreVersionsResponse {
  data: Array<AppStoreVersionsAPI.AppStoreVersionDetails>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | App
    | AgeRatingDeclarationsAPI.AgeRatingDeclaration
    | AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization
    | BuildsAPI.Build
    | AppStoreVersionPhasedReleasesAPI.AppStoreVersionPhasedRelease
    | GameCenterAppVersionsAPI.GameCenterAppVersion
    | RoutingAppCoveragesAPI.RoutingAppCoverage
    | AppStoreReviewDetailsAPI.AppStoreReviewDetail
    | AppStoreVersionsAPI.AppStoreVersionSubmission
    | AppClipDefaultExperiencesAPI.AppClipDefaultExperience
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperiment
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
    | AlternativeDistributionPackagesAPI.AlternativeDistributionPackage
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveBackgroundAssetsResponse {
  data: Array<BackgroundAssetsAPI.BackgroundAsset>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BackgroundAssetVersionsAPI.BackgroundAssetVersion>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveBetaAppLocalizationsResponse {
  data: Array<BetaAppLocalizationsAPI.BetaAppLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveBetaAppReviewDetailResponse {
  data: BetaAppReviewDetailsAPI.BetaAppReviewDetail;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppRetrieveBetaFeedbackCrashSubmissionsResponse {
  data: Array<BetaFeedbackCrashSubmissionsAPI.BetaFeedbackCrashSubmission>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BuildsAPI.Build | BetaTestersAPI.BetaTester>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveBetaFeedbackScreenshotSubmissionsResponse {
  data: Array<BetaFeedbackScreenshotSubmissionsAPI.BetaFeedbackScreenshotSubmission>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BuildsAPI.Build | BetaTestersAPI.BetaTester>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveBetaLicenseAgreementResponse {
  data: BetaLicenseAgreementsAPI.BetaLicenseAgreement;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppRetrieveCustomerReviewSummarizationsResponse {
  data: Array<AppRetrieveCustomerReviewSummarizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export namespace AppRetrieveCustomerReviewSummarizationsResponse {
  export interface Data {
    id: string;

    type: 'customerReviewSummarizations';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      createdDate?: string;

      locale?: string;

      platform?: AppStoreVersionExperimentsAPI.Platform;

      text?: string;
    }

    export interface Relationships {
      territory?: Relationships.Territory;
    }

    export namespace Relationships {
      export interface Territory {
        data?: Territory.Data;
      }

      export namespace Territory {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }
}

export interface AppRetrieveEndUserLicenseAgreementResponse {
  data: EndUserLicenseAgreementsAPI.EndUserLicenseAgreement;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

/**
 * @deprecated
 */
export interface AppRetrieveInAppPurchasesResponse {
  data: Array<InAppPurchasesAPI.InAppPurchase>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveInAppPurchasesV2Response {
  data: Array<InAppPurchasesAPI.InAppPurchaseV2>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | InAppPurchaseLocalizationsAPI.InAppPurchaseLocalization
    | InAppPurchasePricePointsAPI.PricePoint
    | InAppPurchaseContentsAPI.InAppPurchaseContent
    | InAppPurchaseAppStoreReviewScreenshotsAPI.InAppPurchaseAppStoreReviewScreenshot
    | PromotedPurchasesAPI.PromotedPurchase
    | InAppPurchasePriceSchedulesAPI.PriceSchedule
    | InAppPurchaseAvailabilitiesAPI.InAppPurchaseAvailability
    | InAppPurchaseImagesAPI.InAppPurchaseImage
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrievePreReleaseVersionsResponse {
  data: Array<PreReleaseVersionsAPI.PrereleaseVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrievePromotedPurchasesResponse {
  data: Array<PromotedPurchasesAPI.PromotedPurchase>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2 | SubscriptionsAPI.Subscription>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveSubscriptionGroupsResponse {
  data: Array<SubscriptionGroupsAPI.SubscriptionGroup>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    SubscriptionsAPI.Subscription | SubscriptionGroupLocalizationsAPI.SubscriptionGroupLocalization
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveWebhooksResponse {
  data: Array<WebhooksAPI.Webhook>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppRetrieveParams {
  /**
   * the fields to include for returned resources of type appClips
   */
  'fields[appClips]'?: Array<'bundleId' | 'app' | 'appClipDefaultExperiences' | 'appClipAdvancedExperiences'>;

  /**
   * the fields to include for returned resources of type appCustomProductPages
   */
  'fields[appCustomProductPages]'?: Array<
    'name' | 'url' | 'visible' | 'app' | 'appCustomProductPageVersions'
  >;

  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;

  /**
   * the fields to include for returned resources of type appEvents
   */
  'fields[appEvents]'?: Array<
    | 'referenceName'
    | 'badge'
    | 'eventState'
    | 'deepLink'
    | 'purchaseRequirement'
    | 'primaryLocale'
    | 'priority'
    | 'purpose'
    | 'territorySchedules'
    | 'archivedTerritorySchedules'
    | 'localizations'
  >;

  /**
   * the fields to include for returned resources of type appInfos
   */
  'fields[appInfos]'?: Array<
    | 'appStoreState'
    | 'state'
    | 'appStoreAgeRating'
    | 'australiaAgeRating'
    | 'brazilAgeRating'
    | 'brazilAgeRatingV2'
    | 'franceAgeRating'
    | 'koreaAgeRating'
    | 'kidsAgeBand'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

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
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'platform'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
    | 'appStoreVersionExperimentTreatments'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
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
   * the fields to include for returned resources of type betaGroups
   */
  'fields[betaGroups]'?: Array<
    | 'name'
    | 'createdDate'
    | 'isInternalGroup'
    | 'hasAccessToAllBuilds'
    | 'publicLinkEnabled'
    | 'publicLinkId'
    | 'publicLinkLimitEnabled'
    | 'publicLinkLimit'
    | 'publicLink'
    | 'feedbackEnabled'
    | 'iosBuildsAvailableForAppleSiliconMac'
    | 'iosBuildsAvailableForAppleVision'
    | 'app'
    | 'builds'
    | 'betaTesters'
    | 'betaRecruitmentCriteria'
    | 'betaRecruitmentCriterionCompatibleBuildCheck'
  >;

  /**
   * the fields to include for returned resources of type betaLicenseAgreements
   */
  'fields[betaLicenseAgreements]'?: Array<'agreementText' | 'app'>;

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
   * the fields to include for returned resources of type ciProducts
   */
  'fields[ciProducts]'?: Array<
    | 'name'
    | 'createdDate'
    | 'productType'
    | 'app'
    | 'bundleId'
    | 'workflows'
    | 'primaryRepositories'
    | 'additionalRepositories'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type endUserLicenseAgreements
   */
  'fields[endUserLicenseAgreements]'?: Array<'agreementText' | 'app' | 'territories'>;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterEnabledVersions
   */
  'fields[gameCenterEnabledVersions]'?: Array<
    'platform' | 'versionString' | 'iconAsset' | 'compatibleVersions' | 'app'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'referenceName'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'apps'
    | 'name'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissions
   */
  'fields[reviewSubmissions]'?: Array<
    | 'platform'
    | 'submittedDate'
    | 'state'
    | 'app'
    | 'items'
    | 'appStoreVersionForReview'
    | 'submittedByActor'
    | 'lastUpdatedByActor'
  >;

  /**
   * the fields to include for returned resources of type subscriptionGracePeriods
   */
  'fields[subscriptionGracePeriods]'?: Array<'optIn' | 'sandboxOptIn' | 'duration' | 'renewalType'>;

  /**
   * the fields to include for returned resources of type subscriptionGroups
   */
  'fields[subscriptionGroups]'?: Array<'referenceName' | 'subscriptions' | 'subscriptionGroupLocalizations'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'endUserLicenseAgreement'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
  >;

  /**
   * maximum number of related appClips returned (when they are included)
   */
  'limit[appClips]'?: number;

  /**
   * maximum number of related appCustomProductPages returned (when they are
   * included)
   */
  'limit[appCustomProductPages]'?: number;

  /**
   * maximum number of related appEncryptionDeclarations returned (when they are
   * included)
   */
  'limit[appEncryptionDeclarations]'?: number;

  /**
   * maximum number of related appEvents returned (when they are included)
   */
  'limit[appEvents]'?: number;

  /**
   * maximum number of related appInfos returned (when they are included)
   */
  'limit[appInfos]'?: number;

  /**
   * maximum number of related appStoreVersionExperimentsV2 returned (when they are
   * included)
   */
  'limit[appStoreVersionExperimentsV2]'?: number;

  /**
   * maximum number of related appStoreVersions returned (when they are included)
   */
  'limit[appStoreVersions]'?: number;

  /**
   * maximum number of related betaAppLocalizations returned (when they are included)
   */
  'limit[betaAppLocalizations]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * maximum number of related gameCenterEnabledVersions returned (when they are
   * included)
   */
  'limit[gameCenterEnabledVersions]'?: number;

  /**
   * maximum number of related inAppPurchases returned (when they are included)
   */
  'limit[inAppPurchases]'?: number;

  /**
   * maximum number of related inAppPurchasesV2 returned (when they are included)
   */
  'limit[inAppPurchasesV2]'?: number;

  /**
   * maximum number of related preReleaseVersions returned (when they are included)
   */
  'limit[preReleaseVersions]'?: number;

  /**
   * maximum number of related promotedPurchases returned (when they are included)
   */
  'limit[promotedPurchases]'?: number;

  /**
   * maximum number of related reviewSubmissions returned (when they are included)
   */
  'limit[reviewSubmissions]'?: number;

  /**
   * maximum number of related subscriptionGroups returned (when they are included)
   */
  'limit[subscriptionGroups]'?: number;
}

export interface AppUpdateParams {
  data: AppUpdateParams.Data;
}

export namespace AppUpdateParams {
  export interface Data {
    id: string;

    type: 'apps';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      accessibilityUrl?: string;

      bundleId?: string;

      contentRightsDeclaration?: 'DOES_NOT_USE_THIRD_PARTY_CONTENT' | 'USES_THIRD_PARTY_CONTENT';

      primaryLocale?: string;

      streamlinedPurchasingEnabled?: boolean;

      subscriptionStatusUrl?: string;

      subscriptionStatusUrlForSandbox?: string;

      subscriptionStatusUrlVersion?: AppsAPI.SubscriptionStatusURLVersion;

      subscriptionStatusUrlVersionForSandbox?: AppsAPI.SubscriptionStatusURLVersion;
    }
  }
}

export interface AppListParams {
  /**
   * filter by existence or non-existence of related 'gameCenterEnabledVersions'
   */
  'exists[gameCenterEnabledVersions]'?: boolean;

  /**
   * the fields to include for returned resources of type appClips
   */
  'fields[appClips]'?: Array<'bundleId' | 'app' | 'appClipDefaultExperiences' | 'appClipAdvancedExperiences'>;

  /**
   * the fields to include for returned resources of type appCustomProductPages
   */
  'fields[appCustomProductPages]'?: Array<
    'name' | 'url' | 'visible' | 'app' | 'appCustomProductPageVersions'
  >;

  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;

  /**
   * the fields to include for returned resources of type appEvents
   */
  'fields[appEvents]'?: Array<
    | 'referenceName'
    | 'badge'
    | 'eventState'
    | 'deepLink'
    | 'purchaseRequirement'
    | 'primaryLocale'
    | 'priority'
    | 'purpose'
    | 'territorySchedules'
    | 'archivedTerritorySchedules'
    | 'localizations'
  >;

  /**
   * the fields to include for returned resources of type appInfos
   */
  'fields[appInfos]'?: Array<
    | 'appStoreState'
    | 'state'
    | 'appStoreAgeRating'
    | 'australiaAgeRating'
    | 'brazilAgeRating'
    | 'brazilAgeRatingV2'
    | 'franceAgeRating'
    | 'koreaAgeRating'
    | 'kidsAgeBand'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

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
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'platform'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
    | 'appStoreVersionExperimentTreatments'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
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
   * the fields to include for returned resources of type betaGroups
   */
  'fields[betaGroups]'?: Array<
    | 'name'
    | 'createdDate'
    | 'isInternalGroup'
    | 'hasAccessToAllBuilds'
    | 'publicLinkEnabled'
    | 'publicLinkId'
    | 'publicLinkLimitEnabled'
    | 'publicLinkLimit'
    | 'publicLink'
    | 'feedbackEnabled'
    | 'iosBuildsAvailableForAppleSiliconMac'
    | 'iosBuildsAvailableForAppleVision'
    | 'app'
    | 'builds'
    | 'betaTesters'
    | 'betaRecruitmentCriteria'
    | 'betaRecruitmentCriterionCompatibleBuildCheck'
  >;

  /**
   * the fields to include for returned resources of type betaLicenseAgreements
   */
  'fields[betaLicenseAgreements]'?: Array<'agreementText' | 'app'>;

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
   * the fields to include for returned resources of type ciProducts
   */
  'fields[ciProducts]'?: Array<
    | 'name'
    | 'createdDate'
    | 'productType'
    | 'app'
    | 'bundleId'
    | 'workflows'
    | 'primaryRepositories'
    | 'additionalRepositories'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type endUserLicenseAgreements
   */
  'fields[endUserLicenseAgreements]'?: Array<'agreementText' | 'app' | 'territories'>;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterEnabledVersions
   */
  'fields[gameCenterEnabledVersions]'?: Array<
    'platform' | 'versionString' | 'iconAsset' | 'compatibleVersions' | 'app'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'referenceName'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'apps'
    | 'name'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissions
   */
  'fields[reviewSubmissions]'?: Array<
    | 'platform'
    | 'submittedDate'
    | 'state'
    | 'app'
    | 'items'
    | 'appStoreVersionForReview'
    | 'submittedByActor'
    | 'lastUpdatedByActor'
  >;

  /**
   * the fields to include for returned resources of type subscriptionGracePeriods
   */
  'fields[subscriptionGracePeriods]'?: Array<'optIn' | 'sandboxOptIn' | 'duration' | 'renewalType'>;

  /**
   * the fields to include for returned resources of type subscriptionGroups
   */
  'fields[subscriptionGroups]'?: Array<'referenceName' | 'subscriptions' | 'subscriptionGroupLocalizations'>;

  'filter[appStoreVersions'?: AppListParams.FilterAppStoreVersions;

  /**
   * filter by id(s) of related 'appStoreVersions'
   */
  'filter[appStoreVersions]'?: Array<string>;

  /**
   * filter by attribute 'bundleId'
   */
  'filter[bundleId]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  'filter[reviewSubmissions'?: AppListParams.FilterReviewSubmissions;

  /**
   * filter by attribute 'sku'
   */
  'filter[sku]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'endUserLicenseAgreement'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appClips returned (when they are included)
   */
  'limit[appClips]'?: number;

  /**
   * maximum number of related appCustomProductPages returned (when they are
   * included)
   */
  'limit[appCustomProductPages]'?: number;

  /**
   * maximum number of related appEncryptionDeclarations returned (when they are
   * included)
   */
  'limit[appEncryptionDeclarations]'?: number;

  /**
   * maximum number of related appEvents returned (when they are included)
   */
  'limit[appEvents]'?: number;

  /**
   * maximum number of related appInfos returned (when they are included)
   */
  'limit[appInfos]'?: number;

  /**
   * maximum number of related appStoreVersionExperimentsV2 returned (when they are
   * included)
   */
  'limit[appStoreVersionExperimentsV2]'?: number;

  /**
   * maximum number of related appStoreVersions returned (when they are included)
   */
  'limit[appStoreVersions]'?: number;

  /**
   * maximum number of related betaAppLocalizations returned (when they are included)
   */
  'limit[betaAppLocalizations]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * maximum number of related gameCenterEnabledVersions returned (when they are
   * included)
   */
  'limit[gameCenterEnabledVersions]'?: number;

  /**
   * maximum number of related inAppPurchases returned (when they are included)
   */
  'limit[inAppPurchases]'?: number;

  /**
   * maximum number of related inAppPurchasesV2 returned (when they are included)
   */
  'limit[inAppPurchasesV2]'?: number;

  /**
   * maximum number of related preReleaseVersions returned (when they are included)
   */
  'limit[preReleaseVersions]'?: number;

  /**
   * maximum number of related promotedPurchases returned (when they are included)
   */
  'limit[promotedPurchases]'?: number;

  /**
   * maximum number of related reviewSubmissions returned (when they are included)
   */
  'limit[reviewSubmissions]'?: number;

  /**
   * maximum number of related subscriptionGroups returned (when they are included)
   */
  'limit[subscriptionGroups]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'name' | '-name' | 'bundleId' | '-bundleId' | 'sku' | '-sku'>;
}

export namespace AppListParams {
  export interface FilterAppStoreVersions {
    /**
     * filter by attribute 'appStoreVersions.appStoreState'
     */
    'appStoreState]'?: Array<
      | 'ACCEPTED'
      | 'DEVELOPER_REMOVED_FROM_SALE'
      | 'DEVELOPER_REJECTED'
      | 'IN_REVIEW'
      | 'INVALID_BINARY'
      | 'METADATA_REJECTED'
      | 'PENDING_APPLE_RELEASE'
      | 'PENDING_CONTRACT'
      | 'PENDING_DEVELOPER_RELEASE'
      | 'PREPARE_FOR_SUBMISSION'
      | 'PREORDER_READY_FOR_SALE'
      | 'PROCESSING_FOR_APP_STORE'
      | 'READY_FOR_REVIEW'
      | 'READY_FOR_SALE'
      | 'REJECTED'
      | 'REMOVED_FROM_SALE'
      | 'WAITING_FOR_EXPORT_COMPLIANCE'
      | 'WAITING_FOR_REVIEW'
      | 'REPLACED_WITH_NEW_VERSION'
      | 'NOT_APPLICABLE'
    >;

    /**
     * filter by attribute 'appStoreVersions.appVersionState'
     */
    'appVersionState]'?: Array<
      | 'ACCEPTED'
      | 'DEVELOPER_REJECTED'
      | 'IN_REVIEW'
      | 'INVALID_BINARY'
      | 'METADATA_REJECTED'
      | 'PENDING_APPLE_RELEASE'
      | 'PENDING_DEVELOPER_RELEASE'
      | 'PREPARE_FOR_SUBMISSION'
      | 'PROCESSING_FOR_DISTRIBUTION'
      | 'READY_FOR_DISTRIBUTION'
      | 'READY_FOR_REVIEW'
      | 'REJECTED'
      | 'REPLACED_WITH_NEW_VERSION'
      | 'WAITING_FOR_EXPORT_COMPLIANCE'
      | 'WAITING_FOR_REVIEW'
    >;

    /**
     * filter by attribute 'appStoreVersions.platform'
     */
    'platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;
  }

  export interface FilterReviewSubmissions {
    /**
     * filter by attribute 'reviewSubmissions.platform'
     */
    'platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

    /**
     * filter by attribute 'reviewSubmissions.state'
     */
    'state]'?: Array<
      | 'READY_FOR_REVIEW'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'UNRESOLVED_ISSUES'
      | 'CANCELING'
      | 'COMPLETING'
      | 'COMPLETE'
    >;
  }
}

export interface AppRetrieveAccessibilityDeclarationsParams {
  /**
   * the fields to include for returned resources of type accessibilityDeclarations
   */
  'fields[accessibilityDeclarations]'?: Array<
    | 'deviceFamily'
    | 'state'
    | 'supportsAudioDescriptions'
    | 'supportsCaptions'
    | 'supportsDarkInterface'
    | 'supportsDifferentiateWithoutColorAlone'
    | 'supportsLargerText'
    | 'supportsReducedMotion'
    | 'supportsSufficientContrast'
    | 'supportsVoiceControl'
    | 'supportsVoiceover'
  >;

  /**
   * filter by attribute 'deviceFamily'
   */
  'filter[deviceFamily]'?: Array<'IPHONE' | 'IPAD' | 'APPLE_TV' | 'APPLE_WATCH' | 'MAC' | 'VISION'>;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<'DRAFT' | 'PUBLISHED' | 'REPLACED'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveAlternativeDistributionKeyParams {
  /**
   * the fields to include for returned resources of type alternativeDistributionKeys
   */
  'fields[alternativeDistributionKeys]'?: Array<'publicKey'>;
}

export interface AppRetrieveAnalyticsReportRequestsParams {
  /**
   * the fields to include for returned resources of type analyticsReportRequests
   */
  'fields[analyticsReportRequests]'?: Array<'accessType' | 'stoppedDueToInactivity' | 'reports'>;

  /**
   * the fields to include for returned resources of type analyticsReports
   */
  'fields[analyticsReports]'?: Array<'name' | 'category' | 'instances'>;

  /**
   * filter by attribute 'accessType'
   */
  'filter[accessType]'?: Array<'ONE_TIME_SNAPSHOT' | 'ONGOING'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'reports'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related reports returned (when they are included)
   */
  'limit[reports]'?: number;
}

export interface AppRetrieveAppAvailabilityV2Params {
  /**
   * the fields to include for returned resources of type appAvailabilities
   */
  'fields[appAvailabilities]'?: Array<'availableInNewTerritories' | 'territoryAvailabilities'>;

  /**
   * the fields to include for returned resources of type territoryAvailabilities
   */
  'fields[territoryAvailabilities]'?: Array<
    'available' | 'releaseDate' | 'preOrderEnabled' | 'preOrderPublishDate' | 'contentStatuses' | 'territory'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territoryAvailabilities'>;

  /**
   * maximum number of related territoryAvailabilities returned (when they are
   * included)
   */
  'limit[territoryAvailabilities]'?: number;
}

export interface AppRetrieveAppClipsParams {
  /**
   * the fields to include for returned resources of type appClipDefaultExperiences
   */
  'fields[appClipDefaultExperiences]'?: Array<
    | 'action'
    | 'appClip'
    | 'releaseWithAppStoreVersion'
    | 'appClipDefaultExperienceLocalizations'
    | 'appClipAppStoreReviewDetail'
  >;

  /**
   * the fields to include for returned resources of type appClips
   */
  'fields[appClips]'?: Array<'bundleId' | 'app' | 'appClipDefaultExperiences' | 'appClipAdvancedExperiences'>;

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
   * filter by attribute 'bundleId'
   */
  'filter[bundleId]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'appClipDefaultExperiences'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appClipDefaultExperiences returned (when they are
   * included)
   */
  'limit[appClipDefaultExperiences]'?: number;
}

export interface AppRetrieveAppCustomProductPagesParams {
  /**
   * the fields to include for returned resources of type appCustomProductPages
   */
  'fields[appCustomProductPages]'?: Array<
    'name' | 'url' | 'visible' | 'app' | 'appCustomProductPageVersions'
  >;

  /**
   * the fields to include for returned resources of type
   * appCustomProductPageVersions
   */
  'fields[appCustomProductPageVersions]'?: Array<
    'version' | 'state' | 'deepLink' | 'appCustomProductPage' | 'appCustomProductPageLocalizations'
  >;

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
   * filter by attribute 'visible'
   */
  'filter[visible]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'appCustomProductPageVersions'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appCustomProductPageVersions returned (when they are
   * included)
   */
  'limit[appCustomProductPageVersions]'?: number;
}

export interface AppRetrieveAppEncryptionDeclarationsParams {
  /**
   * the fields to include for returned resources of type
   * appEncryptionDeclarationDocuments
   */
  'fields[appEncryptionDeclarationDocuments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'assetToken'
    | 'downloadUrl'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;

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
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'builds' | 'appEncryptionDeclarationDocument'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface AppRetrieveAppEventsParams {
  /**
   * the fields to include for returned resources of type appEventLocalizations
   */
  'fields[appEventLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'shortDescription'
    | 'longDescription'
    | 'appEvent'
    | 'appEventScreenshots'
    | 'appEventVideoClips'
  >;

  /**
   * the fields to include for returned resources of type appEvents
   */
  'fields[appEvents]'?: Array<
    | 'referenceName'
    | 'badge'
    | 'eventState'
    | 'deepLink'
    | 'purchaseRequirement'
    | 'primaryLocale'
    | 'priority'
    | 'purpose'
    | 'territorySchedules'
    | 'archivedTerritorySchedules'
    | 'localizations'
  >;

  /**
   * filter by attribute 'eventState'
   */
  'filter[eventState]'?: Array<
    | 'DRAFT'
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'REJECTED'
    | 'ACCEPTED'
    | 'APPROVED'
    | 'PUBLISHED'
    | 'PAST'
    | 'ARCHIVED'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'localizations'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;
}

export interface AppRetrieveAppInfosParams {
  /**
   * the fields to include for returned resources of type ageRatingDeclarations
   */
  'fields[ageRatingDeclarations]'?: Array<
    | 'alcoholTobaccoOrDrugUseOrReferences'
    | 'contests'
    | 'gambling'
    | 'gamblingSimulated'
    | 'kidsAgeBand'
    | 'lootBox'
    | 'medicalOrTreatmentInformation'
    | 'profanityOrCrudeHumor'
    | 'sexualContentGraphicAndNudity'
    | 'sexualContentOrNudity'
    | 'horrorOrFearThemes'
    | 'matureOrSuggestiveThemes'
    | 'unrestrictedWebAccess'
    | 'violenceCartoonOrFantasy'
    | 'violenceRealisticProlongedGraphicOrSadistic'
    | 'violenceRealistic'
    | 'koreaAgeRatingOverride'
  >;

  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * the fields to include for returned resources of type appInfoLocalizations
   */
  'fields[appInfoLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'subtitle'
    | 'privacyPolicyUrl'
    | 'privacyChoicesUrl'
    | 'privacyPolicyText'
    | 'appInfo'
  >;

  /**
   * the fields to include for returned resources of type appInfos
   */
  'fields[appInfos]'?: Array<
    | 'appStoreState'
    | 'state'
    | 'appStoreAgeRating'
    | 'australiaAgeRating'
    | 'brazilAgeRating'
    | 'brazilAgeRatingV2'
    | 'franceAgeRating'
    | 'koreaAgeRating'
    | 'kidsAgeBand'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appInfoLocalizations returned (when they are included)
   */
  'limit[appInfoLocalizations]'?: number;
}

export interface AppRetrieveAppPricePointsParams {
  /**
   * the fields to include for returned resources of type appPricePoints
   */
  'fields[appPricePoints]'?: Array<'customerPrice' | 'proceeds' | 'app' | 'equalizations' | 'territory'>;

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
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveAppPriceScheduleParams {
  /**
   * the fields to include for returned resources of type appPrices
   */
  'fields[appPrices]'?: Array<'manual' | 'startDate' | 'endDate' | 'appPricePoint' | 'territory'>;

  /**
   * the fields to include for returned resources of type appPriceSchedules
   */
  'fields[appPriceSchedules]'?: Array<'app' | 'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

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
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * maximum number of related automaticPrices returned (when they are included)
   */
  'limit[automaticPrices]'?: number;

  /**
   * maximum number of related manualPrices returned (when they are included)
   */
  'limit[manualPrices]'?: number;
}

export interface AppRetrieveAppStoreVersionExperimentsV2Params {
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
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'platform'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
    | 'appStoreVersionExperimentTreatments'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatments
   */
  'fields[appStoreVersionExperimentTreatments]'?: Array<
    | 'name'
    | 'appIcon'
    | 'appIconName'
    | 'promotedDate'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appStoreVersionExperimentTreatmentLocalizations'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'PREPARE_FOR_SUBMISSION'
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'ACCEPTED'
    | 'APPROVED'
    | 'REJECTED'
    | 'COMPLETED'
    | 'STOPPED'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'latestControlVersion' | 'controlVersions' | 'appStoreVersionExperimentTreatments'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appStoreVersionExperimentTreatments returned (when
   * they are included)
   */
  'limit[appStoreVersionExperimentTreatments]'?: number;

  /**
   * maximum number of related controlVersions returned (when they are included)
   */
  'limit[controlVersions]'?: number;
}

export interface AppRetrieveAppStoreVersionsParams {
  /**
   * the fields to include for returned resources of type ageRatingDeclarations
   */
  'fields[ageRatingDeclarations]'?: Array<
    | 'alcoholTobaccoOrDrugUseOrReferences'
    | 'contests'
    | 'gambling'
    | 'gamblingSimulated'
    | 'kidsAgeBand'
    | 'lootBox'
    | 'medicalOrTreatmentInformation'
    | 'profanityOrCrudeHumor'
    | 'sexualContentGraphicAndNudity'
    | 'sexualContentOrNudity'
    | 'horrorOrFearThemes'
    | 'matureOrSuggestiveThemes'
    | 'unrestrictedWebAccess'
    | 'violenceCartoonOrFantasy'
    | 'violenceRealisticProlongedGraphicOrSadistic'
    | 'violenceRealistic'
    | 'koreaAgeRatingOverride'
  >;

  /**
   * the fields to include for returned resources of type
   * alternativeDistributionPackages
   */
  'fields[alternativeDistributionPackages]'?: Array<'versions'>;

  /**
   * the fields to include for returned resources of type appClipDefaultExperiences
   */
  'fields[appClipDefaultExperiences]'?: Array<
    | 'action'
    | 'appClip'
    | 'releaseWithAppStoreVersion'
    | 'appClipDefaultExperienceLocalizations'
    | 'appClipAppStoreReviewDetail'
  >;

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
   * the fields to include for returned resources of type appStoreReviewDetails
   */
  'fields[appStoreReviewDetails]'?: Array<
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'contactEmail'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
    | 'appStoreVersion'
    | 'appStoreReviewAttachments'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'appStoreVersion'
    | 'appStoreVersionExperimentTreatments'
    | 'platform'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionLocalizations
   */
  'fields[appStoreVersionLocalizations]'?: Array<
    | 'description'
    | 'locale'
    | 'keywords'
    | 'marketingUrl'
    | 'promotionalText'
    | 'supportUrl'
    | 'whatsNew'
    | 'appStoreVersion'
    | 'appScreenshotSets'
    | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionPhasedReleases
   */
  'fields[appStoreVersionPhasedReleases]'?: Array<
    'phasedReleaseState' | 'startDate' | 'totalPauseDuration' | 'currentDayNumber'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersionSubmissions
   */
  'fields[appStoreVersionSubmissions]'?: Array<'appStoreVersion'>;

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
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * the fields to include for returned resources of type routingAppCoverages
   */
  'fields[routingAppCoverages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreVersion'
  >;

  /**
   * filter by attribute 'appStoreState'
   */
  'filter[appStoreState]'?: Array<
    | 'ACCEPTED'
    | 'DEVELOPER_REMOVED_FROM_SALE'
    | 'DEVELOPER_REJECTED'
    | 'IN_REVIEW'
    | 'INVALID_BINARY'
    | 'METADATA_REJECTED'
    | 'PENDING_APPLE_RELEASE'
    | 'PENDING_CONTRACT'
    | 'PENDING_DEVELOPER_RELEASE'
    | 'PREPARE_FOR_SUBMISSION'
    | 'PREORDER_READY_FOR_SALE'
    | 'PROCESSING_FOR_APP_STORE'
    | 'READY_FOR_REVIEW'
    | 'READY_FOR_SALE'
    | 'REJECTED'
    | 'REMOVED_FROM_SALE'
    | 'WAITING_FOR_EXPORT_COMPLIANCE'
    | 'WAITING_FOR_REVIEW'
    | 'REPLACED_WITH_NEW_VERSION'
    | 'NOT_APPLICABLE'
  >;

  /**
   * filter by attribute 'appVersionState'
   */
  'filter[appVersionState]'?: Array<
    | 'ACCEPTED'
    | 'DEVELOPER_REJECTED'
    | 'IN_REVIEW'
    | 'INVALID_BINARY'
    | 'METADATA_REJECTED'
    | 'PENDING_APPLE_RELEASE'
    | 'PENDING_DEVELOPER_RELEASE'
    | 'PREPARE_FOR_SUBMISSION'
    | 'PROCESSING_FOR_DISTRIBUTION'
    | 'READY_FOR_DISTRIBUTION'
    | 'READY_FOR_REVIEW'
    | 'REJECTED'
    | 'REPLACED_WITH_NEW_VERSION'
    | 'WAITING_FOR_EXPORT_COMPLIANCE'
    | 'WAITING_FOR_REVIEW'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'versionString'
   */
  'filter[versionString]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionPackage'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appStoreVersionExperiments returned (when they are
   * included)
   */
  'limit[appStoreVersionExperiments]'?: number;

  /**
   * maximum number of related appStoreVersionExperimentsV2 returned (when they are
   * included)
   */
  'limit[appStoreVersionExperimentsV2]'?: number;

  /**
   * maximum number of related appStoreVersionLocalizations returned (when they are
   * included)
   */
  'limit[appStoreVersionLocalizations]'?: number;
}

export interface AppRetrieveBackgroundAssetsParams {
  /**
   * the fields to include for returned resources of type backgroundAssets
   */
  'fields[backgroundAssets]'?: Array<
    'assetPackIdentifier' | 'createdDate' | 'versions' | 'internalBetaVersion'
  >;

  /**
   * the fields to include for returned resources of type backgroundAssetVersions
   */
  'fields[backgroundAssetVersions]'?: Array<
    | 'createdDate'
    | 'platforms'
    | 'state'
    | 'version'
    | 'internalBetaRelease'
    | 'assetFile'
    | 'manifestFile'
    | 'backgroundAssetUploadFiles'
  >;

  /**
   * filter by attribute 'assetPackIdentifier'
   */
  'filter[assetPackIdentifier]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'internalBetaVersion'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveBetaAppLocalizationsParams {
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
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveBetaAppReviewDetailParams {
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
}

export interface AppRetrieveBetaFeedbackCrashSubmissionsParams {
  /**
   * the fields to include for returned resources of type
   * betaFeedbackCrashSubmissions
   */
  'fields[betaFeedbackCrashSubmissions]'?: Array<
    | 'createdDate'
    | 'comment'
    | 'email'
    | 'deviceModel'
    | 'osVersion'
    | 'locale'
    | 'timeZone'
    | 'architecture'
    | 'connectionType'
    | 'pairedAppleWatch'
    | 'appUptimeInMilliseconds'
    | 'diskBytesAvailable'
    | 'diskBytesTotal'
    | 'batteryPercentage'
    | 'screenWidthInPoints'
    | 'screenHeightInPoints'
    | 'appPlatform'
    | 'devicePlatform'
    | 'deviceFamily'
    | 'buildBundleId'
    | 'crashLog'
    | 'build'
    | 'tester'
  >;

  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

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
   * filter by attribute 'appPlatform'
   */
  'filter[appPlatform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  'filter[build'?: AppRetrieveBetaFeedbackCrashSubmissionsParams.FilterBuild;

  /**
   * filter by id(s) of related 'build'
   */
  'filter[build]'?: Array<string>;

  /**
   * filter by attribute 'deviceModel'
   */
  'filter[deviceModel]'?: Array<string>;

  /**
   * filter by attribute 'devicePlatform'
   */
  'filter[devicePlatform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'osVersion'
   */
  'filter[osVersion]'?: Array<string>;

  /**
   * filter by id(s) of related 'tester'
   */
  'filter[tester]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build' | 'tester'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'createdDate' | '-createdDate'>;
}

export namespace AppRetrieveBetaFeedbackCrashSubmissionsParams {
  export interface FilterBuild {
    /**
     * filter by id(s) of related 'build.preReleaseVersion'
     */
    'preReleaseVersion]'?: Array<string>;
  }
}

export interface AppRetrieveBetaFeedbackScreenshotSubmissionsParams {
  /**
   * the fields to include for returned resources of type
   * betaFeedbackScreenshotSubmissions
   */
  'fields[betaFeedbackScreenshotSubmissions]'?: Array<
    | 'createdDate'
    | 'comment'
    | 'email'
    | 'deviceModel'
    | 'osVersion'
    | 'locale'
    | 'timeZone'
    | 'architecture'
    | 'connectionType'
    | 'pairedAppleWatch'
    | 'appUptimeInMilliseconds'
    | 'diskBytesAvailable'
    | 'diskBytesTotal'
    | 'batteryPercentage'
    | 'screenWidthInPoints'
    | 'screenHeightInPoints'
    | 'appPlatform'
    | 'devicePlatform'
    | 'deviceFamily'
    | 'buildBundleId'
    | 'screenshots'
    | 'build'
    | 'tester'
  >;

  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

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
   * filter by attribute 'appPlatform'
   */
  'filter[appPlatform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  'filter[build'?: AppRetrieveBetaFeedbackScreenshotSubmissionsParams.FilterBuild;

  /**
   * filter by id(s) of related 'build'
   */
  'filter[build]'?: Array<string>;

  /**
   * filter by attribute 'deviceModel'
   */
  'filter[deviceModel]'?: Array<string>;

  /**
   * filter by attribute 'devicePlatform'
   */
  'filter[devicePlatform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'osVersion'
   */
  'filter[osVersion]'?: Array<string>;

  /**
   * filter by id(s) of related 'tester'
   */
  'filter[tester]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build' | 'tester'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'createdDate' | '-createdDate'>;
}

export namespace AppRetrieveBetaFeedbackScreenshotSubmissionsParams {
  export interface FilterBuild {
    /**
     * filter by id(s) of related 'build.preReleaseVersion'
     */
    'preReleaseVersion]'?: Array<string>;
  }
}

export interface AppRetrieveBetaGroupsParams {
  /**
   * the fields to include for returned resources of type betaGroups
   */
  'fields[betaGroups]'?: Array<
    | 'name'
    | 'createdDate'
    | 'isInternalGroup'
    | 'hasAccessToAllBuilds'
    | 'publicLinkEnabled'
    | 'publicLinkId'
    | 'publicLinkLimitEnabled'
    | 'publicLinkLimit'
    | 'publicLink'
    | 'feedbackEnabled'
    | 'iosBuildsAvailableForAppleSiliconMac'
    | 'iosBuildsAvailableForAppleVision'
    | 'app'
    | 'builds'
    | 'betaTesters'
    | 'betaRecruitmentCriteria'
    | 'betaRecruitmentCriterionCompatibleBuildCheck'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveBetaLicenseAgreementParams {
  /**
   * the fields to include for returned resources of type betaLicenseAgreements
   */
  'fields[betaLicenseAgreements]'?: Array<'agreementText' | 'app'>;
}

export interface AppRetrieveBuildsParams {
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
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveCiProductParams {
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
   * the fields to include for returned resources of type bundleIds
   */
  'fields[bundleIds]'?: Array<
    'name' | 'platform' | 'identifier' | 'seedId' | 'profiles' | 'bundleIdCapabilities' | 'app'
  >;

  /**
   * the fields to include for returned resources of type ciProducts
   */
  'fields[ciProducts]'?: Array<
    | 'name'
    | 'createdDate'
    | 'productType'
    | 'app'
    | 'bundleId'
    | 'workflows'
    | 'primaryRepositories'
    | 'additionalRepositories'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type scmRepositories
   */
  'fields[scmRepositories]'?: Array<
    | 'lastAccessedDate'
    | 'httpCloneUrl'
    | 'sshCloneUrl'
    | 'ownerName'
    | 'repositoryName'
    | 'scmProvider'
    | 'defaultBranch'
    | 'gitReferences'
    | 'pullRequests'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'bundleId' | 'primaryRepositories'>;

  /**
   * maximum number of related primaryRepositories returned (when they are included)
   */
  'limit[primaryRepositories]'?: number;
}

export interface AppRetrieveCustomerReviewSummarizationsParams {
  /**
   * filter by attribute 'platform'
   */
  'filter[platform]': Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * the fields to include for returned resources of type
   * customerReviewSummarizations
   */
  'fields[customerReviewSummarizations]'?: Array<
    'createdDate' | 'locale' | 'platform' | 'text' | 'territory'
  >;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveCustomerReviewsParams {
  /**
   * filter by publishedResponse
   */
  'exists[publishedResponse]'?: boolean;

  /**
   * the fields to include for returned resources of type customerReviewResponses
   */
  'fields[customerReviewResponses]'?: Array<'responseBody' | 'lastModifiedDate' | 'state' | 'review'>;

  /**
   * the fields to include for returned resources of type customerReviews
   */
  'fields[customerReviews]'?: Array<
    'rating' | 'title' | 'body' | 'reviewerNickname' | 'createdDate' | 'territory' | 'response'
  >;

  /**
   * filter by attribute 'rating'
   */
  'filter[rating]'?: Array<string>;

  /**
   * filter by attribute 'territory'
   */
  'filter[territory]'?: Array<
    | 'ABW'
    | 'AFG'
    | 'AGO'
    | 'AIA'
    | 'ALB'
    | 'AND'
    | 'ANT'
    | 'ARE'
    | 'ARG'
    | 'ARM'
    | 'ASM'
    | 'ATG'
    | 'AUS'
    | 'AUT'
    | 'AZE'
    | 'BDI'
    | 'BEL'
    | 'BEN'
    | 'BES'
    | 'BFA'
    | 'BGD'
    | 'BGR'
    | 'BHR'
    | 'BHS'
    | 'BIH'
    | 'BLR'
    | 'BLZ'
    | 'BMU'
    | 'BOL'
    | 'BRA'
    | 'BRB'
    | 'BRN'
    | 'BTN'
    | 'BWA'
    | 'CAF'
    | 'CAN'
    | 'CHE'
    | 'CHL'
    | 'CHN'
    | 'CIV'
    | 'CMR'
    | 'COD'
    | 'COG'
    | 'COK'
    | 'COL'
    | 'COM'
    | 'CPV'
    | 'CRI'
    | 'CUB'
    | 'CUW'
    | 'CXR'
    | 'CYM'
    | 'CYP'
    | 'CZE'
    | 'DEU'
    | 'DJI'
    | 'DMA'
    | 'DNK'
    | 'DOM'
    | 'DZA'
    | 'ECU'
    | 'EGY'
    | 'ERI'
    | 'ESP'
    | 'EST'
    | 'ETH'
    | 'FIN'
    | 'FJI'
    | 'FLK'
    | 'FRA'
    | 'FRO'
    | 'FSM'
    | 'GAB'
    | 'GBR'
    | 'GEO'
    | 'GGY'
    | 'GHA'
    | 'GIB'
    | 'GIN'
    | 'GLP'
    | 'GMB'
    | 'GNB'
    | 'GNQ'
    | 'GRC'
    | 'GRD'
    | 'GRL'
    | 'GTM'
    | 'GUF'
    | 'GUM'
    | 'GUY'
    | 'HKG'
    | 'HND'
    | 'HRV'
    | 'HTI'
    | 'HUN'
    | 'IDN'
    | 'IMN'
    | 'IND'
    | 'IRL'
    | 'IRQ'
    | 'ISL'
    | 'ISR'
    | 'ITA'
    | 'JAM'
    | 'JEY'
    | 'JOR'
    | 'JPN'
    | 'KAZ'
    | 'KEN'
    | 'KGZ'
    | 'KHM'
    | 'KIR'
    | 'KNA'
    | 'KOR'
    | 'KWT'
    | 'LAO'
    | 'LBN'
    | 'LBR'
    | 'LBY'
    | 'LCA'
    | 'LIE'
    | 'LKA'
    | 'LSO'
    | 'LTU'
    | 'LUX'
    | 'LVA'
    | 'MAC'
    | 'MAR'
    | 'MCO'
    | 'MDA'
    | 'MDG'
    | 'MDV'
    | 'MEX'
    | 'MHL'
    | 'MKD'
    | 'MLI'
    | 'MLT'
    | 'MMR'
    | 'MNE'
    | 'MNG'
    | 'MNP'
    | 'MOZ'
    | 'MRT'
    | 'MSR'
    | 'MTQ'
    | 'MUS'
    | 'MWI'
    | 'MYS'
    | 'MYT'
    | 'NAM'
    | 'NCL'
    | 'NER'
    | 'NFK'
    | 'NGA'
    | 'NIC'
    | 'NIU'
    | 'NLD'
    | 'NOR'
    | 'NPL'
    | 'NRU'
    | 'NZL'
    | 'OMN'
    | 'PAK'
    | 'PAN'
    | 'PER'
    | 'PHL'
    | 'PLW'
    | 'PNG'
    | 'POL'
    | 'PRI'
    | 'PRT'
    | 'PRY'
    | 'PSE'
    | 'PYF'
    | 'QAT'
    | 'REU'
    | 'ROU'
    | 'RUS'
    | 'RWA'
    | 'SAU'
    | 'SEN'
    | 'SGP'
    | 'SHN'
    | 'SLB'
    | 'SLE'
    | 'SLV'
    | 'SMR'
    | 'SOM'
    | 'SPM'
    | 'SRB'
    | 'SSD'
    | 'STP'
    | 'SUR'
    | 'SVK'
    | 'SVN'
    | 'SWE'
    | 'SWZ'
    | 'SXM'
    | 'SYC'
    | 'TCA'
    | 'TCD'
    | 'TGO'
    | 'THA'
    | 'TJK'
    | 'TKM'
    | 'TLS'
    | 'TON'
    | 'TTO'
    | 'TUN'
    | 'TUR'
    | 'TUV'
    | 'TWN'
    | 'TZA'
    | 'UGA'
    | 'UKR'
    | 'UMI'
    | 'URY'
    | 'USA'
    | 'UZB'
    | 'VAT'
    | 'VCT'
    | 'VEN'
    | 'VGB'
    | 'VIR'
    | 'VNM'
    | 'VUT'
    | 'WLF'
    | 'WSM'
    | 'YEM'
    | 'ZAF'
    | 'ZMB'
    | 'ZWE'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'response'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'rating' | '-rating' | 'createdDate' | '-createdDate'>;
}

export interface AppRetrieveEndUserLicenseAgreementParams {
  /**
   * the fields to include for returned resources of type endUserLicenseAgreements
   */
  'fields[endUserLicenseAgreements]'?: Array<'agreementText' | 'app' | 'territories'>;
}

export interface AppRetrieveGameCenterDetailParams {
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
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterAchievementReleases
   */
  'fields[gameCenterAchievementReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterAchievement'>;

  /**
   * the fields to include for returned resources of type gameCenterAchievements
   */
  'fields[gameCenterAchievements]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'points'
    | 'showBeforeEarned'
    | 'repeatable'
    | 'archived'
    | 'activityProperties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupAchievement'
    | 'localizations'
    | 'releases'
    | 'activity'
  >;

  /**
   * the fields to include for returned resources of type gameCenterActivities
   */
  'fields[gameCenterActivities]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'playStyle'
    | 'minimumPlayersCount'
    | 'maximumPlayersCount'
    | 'supportsPartyCode'
    | 'archived'
    | 'properties'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'achievements'
    | 'leaderboards'
    | 'versions'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterActivityVersionReleases
   */
  'fields[gameCenterActivityVersionReleases]'?: Array<'version'>;

  /**
   * the fields to include for returned resources of type gameCenterAppVersions
   */
  'fields[gameCenterAppVersions]'?: Array<'enabled' | 'compatibilityVersions' | 'appStoreVersion'>;

  /**
   * the fields to include for returned resources of type gameCenterChallenges
   */
  'fields[gameCenterChallenges]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'allowedDurations'
    | 'archived'
    | 'challengeType'
    | 'repeatable'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'versions'
    | 'leaderboard'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterChallengeVersionReleases
   */
  'fields[gameCenterChallengeVersionReleases]'?: Array<'version'>;

  /**
   * the fields to include for returned resources of type gameCenterDetails
   */
  'fields[gameCenterDetails]'?: Array<
    | 'arcadeEnabled'
    | 'challengeEnabled'
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * the fields to include for returned resources of type gameCenterGroups
   */
  'fields[gameCenterGroups]'?: Array<
    | 'referenceName'
    | 'gameCenterDetails'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardReleases
   */
  'fields[gameCenterLeaderboardReleases]'?: Array<'live' | 'gameCenterDetail' | 'gameCenterLeaderboard'>;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboards
   */
  'fields[gameCenterLeaderboards]'?: Array<
    | 'defaultFormatter'
    | 'referenceName'
    | 'vendorIdentifier'
    | 'submissionType'
    | 'scoreSortType'
    | 'scoreRangeStart'
    | 'scoreRangeEnd'
    | 'recurrenceStartDate'
    | 'recurrenceDuration'
    | 'recurrenceRule'
    | 'archived'
    | 'activityProperties'
    | 'visibility'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboard'
    | 'gameCenterLeaderboardSets'
    | 'localizations'
    | 'releases'
    | 'activity'
    | 'challenge'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterLeaderboardSetReleases
   */
  'fields[gameCenterLeaderboardSetReleases]'?: Array<
    'live' | 'gameCenterDetail' | 'gameCenterLeaderboardSet'
  >;

  /**
   * the fields to include for returned resources of type gameCenterLeaderboardSets
   */
  'fields[gameCenterLeaderboardSets]'?: Array<
    | 'referenceName'
    | 'vendorIdentifier'
    | 'gameCenterDetail'
    | 'gameCenterGroup'
    | 'groupLeaderboardSet'
    | 'localizations'
    | 'gameCenterLeaderboards'
    | 'releases'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'app'
    | 'gameCenterAppVersions'
    | 'gameCenterGroup'
    | 'gameCenterLeaderboards'
    | 'gameCenterLeaderboardSets'
    | 'gameCenterAchievements'
    | 'gameCenterActivities'
    | 'gameCenterChallenges'
    | 'defaultLeaderboard'
    | 'defaultGroupLeaderboard'
    | 'achievementReleases'
    | 'activityReleases'
    | 'challengeReleases'
    | 'leaderboardReleases'
    | 'leaderboardSetReleases'
    | 'challengesMinimumPlatformVersions'
  >;

  /**
   * maximum number of related achievementReleases returned (when they are included)
   */
  'limit[achievementReleases]'?: number;

  /**
   * maximum number of related activityReleases returned (when they are included)
   */
  'limit[activityReleases]'?: number;

  /**
   * maximum number of related challengeReleases returned (when they are included)
   */
  'limit[challengeReleases]'?: number;

  /**
   * maximum number of related challengesMinimumPlatformVersions returned (when they
   * are included)
   */
  'limit[challengesMinimumPlatformVersions]'?: number;

  /**
   * maximum number of related gameCenterAchievements returned (when they are
   * included)
   */
  'limit[gameCenterAchievements]'?: number;

  /**
   * maximum number of related gameCenterActivities returned (when they are included)
   */
  'limit[gameCenterActivities]'?: number;

  /**
   * maximum number of related gameCenterAppVersions returned (when they are
   * included)
   */
  'limit[gameCenterAppVersions]'?: number;

  /**
   * maximum number of related gameCenterChallenges returned (when they are included)
   */
  'limit[gameCenterChallenges]'?: number;

  /**
   * maximum number of related gameCenterLeaderboards returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboards]'?: number;

  /**
   * maximum number of related gameCenterLeaderboardSets returned (when they are
   * included)
   */
  'limit[gameCenterLeaderboardSets]'?: number;

  /**
   * maximum number of related leaderboardReleases returned (when they are included)
   */
  'limit[leaderboardReleases]'?: number;

  /**
   * maximum number of related leaderboardSetReleases returned (when they are
   * included)
   */
  'limit[leaderboardSetReleases]'?: number;
}

export interface AppRetrieveGameCenterEnabledVersionsParams {
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
   * the fields to include for returned resources of type gameCenterEnabledVersions
   */
  'fields[gameCenterEnabledVersions]'?: Array<
    'platform' | 'versionString' | 'iconAsset' | 'compatibleVersions' | 'app'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'versionString'
   */
  'filter[versionString]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'compatibleVersions' | 'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related compatibleVersions returned (when they are included)
   */
  'limit[compatibleVersions]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'versionString' | '-versionString'>;
}

export interface AppRetrieveInAppPurchasesParams {
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
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<'referenceName' | 'productId' | 'inAppPurchaseType' | 'state' | 'apps'>;

  /**
   * filter by canBeSubmitted
   */
  'filter[canBeSubmitted]'?: Array<string>;

  /**
   * filter by attribute 'inAppPurchaseType'
   */
  'filter[inAppPurchaseType]'?: Array<
    | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
    | 'NON_CONSUMABLE'
    | 'CONSUMABLE'
    | 'NON_RENEWING_SUBSCRIPTION'
    | 'FREE_SUBSCRIPTION'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'apps'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related apps returned (when they are included)
   */
  'limit[apps]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    | 'referenceName'
    | '-referenceName'
    | 'productId'
    | '-productId'
    | 'inAppPurchaseType'
    | '-inAppPurchaseType'
  >;
}

export interface AppRetrieveInAppPurchasesV2Params {
  /**
   * the fields to include for returned resources of type
   * inAppPurchaseAppStoreReviewScreenshots
   */
  'fields[inAppPurchaseAppStoreReviewScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchaseAvailabilities
   */
  'fields[inAppPurchaseAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

  /**
   * the fields to include for returned resources of type inAppPurchaseContents
   */
  'fields[inAppPurchaseContents]'?: Array<
    'fileName' | 'fileSize' | 'url' | 'lastModifiedDate' | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchaseImages
   */
  'fields[inAppPurchaseImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'assetToken'
    | 'imageAsset'
    | 'uploadOperations'
    | 'state'
    | 'inAppPurchase'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchaseLocalizations
   */
  'fields[inAppPurchaseLocalizations]'?: Array<
    'name' | 'locale' | 'description' | 'state' | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchasePriceSchedules
   */
  'fields[inAppPurchasePriceSchedules]'?: Array<'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * filter by attribute 'inAppPurchaseType'
   */
  'filter[inAppPurchaseType]'?: Array<'CONSUMABLE' | 'NON_CONSUMABLE' | 'NON_RENEWING_SUBSCRIPTION'>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * filter by attribute 'productId'
   */
  'filter[productId]'?: Array<string>;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'MISSING_METADATA'
    | 'WAITING_FOR_UPLOAD'
    | 'PROCESSING_CONTENT'
    | 'READY_TO_SUBMIT'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'DEVELOPER_ACTION_NEEDED'
    | 'PENDING_BINARY_APPROVAL'
    | 'APPROVED'
    | 'DEVELOPER_REMOVED_FROM_SALE'
    | 'REMOVED_FROM_SALE'
    | 'REJECTED'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'inAppPurchaseLocalizations'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related images returned (when they are included)
   */
  'limit[images]'?: number;

  /**
   * maximum number of related inAppPurchaseLocalizations returned (when they are
   * included)
   */
  'limit[inAppPurchaseLocalizations]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'name' | '-name' | 'inAppPurchaseType' | '-inAppPurchaseType'>;
}

export interface AppRetrieveMarketplaceSearchDetailParams {
  /**
   * the fields to include for returned resources of type marketplaceSearchDetails
   */
  'fields[marketplaceSearchDetails]'?: Array<'catalogUrl'>;
}

export interface AppRetrievePerfPowerMetricsParams {
  /**
   * filter by attribute 'deviceType'
   */
  'filter[deviceType]'?: Array<string>;

  /**
   * filter by attribute 'metricType'
   */
  'filter[metricType]'?: Array<
    'DISK' | 'HANG' | 'BATTERY' | 'LAUNCH' | 'MEMORY' | 'ANIMATION' | 'TERMINATION'
  >;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS'>;
}

export interface AppRetrievePreReleaseVersionsParams {
  /**
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrievePromotedPurchasesParams {
  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2' | 'subscription'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppRetrieveReviewSubmissionsParams {
  /**
   * the fields to include for returned resources of type actors
   */
  'fields[actors]'?: Array<'actorType' | 'userFirstName' | 'userLastName' | 'userEmail' | 'apiKeyId'>;

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
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissionItems
   */
  'fields[reviewSubmissionItems]'?: Array<
    | 'state'
    | 'appStoreVersion'
    | 'appCustomProductPageVersion'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appEvent'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissions
   */
  'fields[reviewSubmissions]'?: Array<
    | 'platform'
    | 'submittedDate'
    | 'state'
    | 'app'
    | 'items'
    | 'appStoreVersionForReview'
    | 'submittedByActor'
    | 'lastUpdatedByActor'
  >;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'UNRESOLVED_ISSUES'
    | 'CANCELING'
    | 'COMPLETING'
    | 'COMPLETE'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'items' | 'appStoreVersionForReview' | 'submittedByActor' | 'lastUpdatedByActor'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related items returned (when they are included)
   */
  'limit[items]'?: number;
}

export interface AppRetrieveSubscriptionGracePeriodParams {
  /**
   * the fields to include for returned resources of type subscriptionGracePeriods
   */
  'fields[subscriptionGracePeriods]'?: Array<'optIn' | 'sandboxOptIn' | 'duration' | 'renewalType'>;
}

export interface AppRetrieveSubscriptionGroupsParams {
  /**
   * the fields to include for returned resources of type
   * subscriptionGroupLocalizations
   */
  'fields[subscriptionGroupLocalizations]'?: Array<
    'name' | 'customAppName' | 'locale' | 'state' | 'subscriptionGroup'
  >;

  /**
   * the fields to include for returned resources of type subscriptionGroups
   */
  'fields[subscriptionGroups]'?: Array<'referenceName' | 'subscriptions' | 'subscriptionGroupLocalizations'>;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * filter by attribute 'referenceName'
   */
  'filter[referenceName]'?: Array<string>;

  'filter[subscriptions'?: AppRetrieveSubscriptionGroupsParams.FilterSubscriptions;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subscriptions' | 'subscriptionGroupLocalizations'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related subscriptionGroupLocalizations returned (when they are
   * included)
   */
  'limit[subscriptionGroupLocalizations]'?: number;

  /**
   * maximum number of related subscriptions returned (when they are included)
   */
  'limit[subscriptions]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'referenceName' | '-referenceName'>;
}

export namespace AppRetrieveSubscriptionGroupsParams {
  export interface FilterSubscriptions {
    /**
     * filter by attribute 'subscriptions.state'
     */
    'state]'?: Array<
      | 'MISSING_METADATA'
      | 'READY_TO_SUBMIT'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'DEVELOPER_ACTION_NEEDED'
      | 'PENDING_BINARY_APPROVAL'
      | 'APPROVED'
      | 'DEVELOPER_REMOVED_FROM_SALE'
      | 'REMOVED_FROM_SALE'
      | 'REJECTED'
    >;
  }
}

export interface AppRetrieveWebhooksParams {
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
   * the fields to include for returned resources of type webhooks
   */
  'fields[webhooks]'?: Array<'enabled' | 'eventTypes' | 'name' | 'url' | 'app' | 'deliveries'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

Apps.Relationships = RelationshipsAPIRelationships;
Apps.Metrics = Metrics;

export declare namespace Apps {
  export {
    type App as App,
    type AppResponse as AppResponse,
    type BetaGroupsWithoutIncludesResponse as BetaGroupsWithoutIncludesResponse,
    type BuildsWithoutIncludesResponse as BuildsWithoutIncludesResponse,
    type GameCenterEnabledVersion as GameCenterEnabledVersion,
    type GameCenterEnabledVersionsResponse as GameCenterEnabledVersionsResponse,
    type MetricCategory as MetricCategory,
    type MetricsInsight as MetricsInsight,
    type SubscriptionStatusURLVersion as SubscriptionStatusURLVersion,
    type XcodeMetrics as XcodeMetrics,
    type AppListResponse as AppListResponse,
    type AppRetrieveAccessibilityDeclarationsResponse as AppRetrieveAccessibilityDeclarationsResponse,
    type AppRetrieveAnalyticsReportRequestsResponse as AppRetrieveAnalyticsReportRequestsResponse,
    type AppRetrieveAppClipsResponse as AppRetrieveAppClipsResponse,
    type AppRetrieveAppCustomProductPagesResponse as AppRetrieveAppCustomProductPagesResponse,
    type AppRetrieveAppEventsResponse as AppRetrieveAppEventsResponse,
    type AppRetrieveAppInfosResponse as AppRetrieveAppInfosResponse,
    type AppRetrieveAppStoreVersionsResponse as AppRetrieveAppStoreVersionsResponse,
    type AppRetrieveBackgroundAssetsResponse as AppRetrieveBackgroundAssetsResponse,
    type AppRetrieveBetaAppLocalizationsResponse as AppRetrieveBetaAppLocalizationsResponse,
    type AppRetrieveBetaAppReviewDetailResponse as AppRetrieveBetaAppReviewDetailResponse,
    type AppRetrieveBetaFeedbackCrashSubmissionsResponse as AppRetrieveBetaFeedbackCrashSubmissionsResponse,
    type AppRetrieveBetaFeedbackScreenshotSubmissionsResponse as AppRetrieveBetaFeedbackScreenshotSubmissionsResponse,
    type AppRetrieveBetaLicenseAgreementResponse as AppRetrieveBetaLicenseAgreementResponse,
    type AppRetrieveCustomerReviewSummarizationsResponse as AppRetrieveCustomerReviewSummarizationsResponse,
    type AppRetrieveEndUserLicenseAgreementResponse as AppRetrieveEndUserLicenseAgreementResponse,
    type AppRetrieveInAppPurchasesResponse as AppRetrieveInAppPurchasesResponse,
    type AppRetrieveInAppPurchasesV2Response as AppRetrieveInAppPurchasesV2Response,
    type AppRetrievePreReleaseVersionsResponse as AppRetrievePreReleaseVersionsResponse,
    type AppRetrievePromotedPurchasesResponse as AppRetrievePromotedPurchasesResponse,
    type AppRetrieveSubscriptionGroupsResponse as AppRetrieveSubscriptionGroupsResponse,
    type AppRetrieveWebhooksResponse as AppRetrieveWebhooksResponse,
    type AppRetrieveParams as AppRetrieveParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppRetrieveAccessibilityDeclarationsParams as AppRetrieveAccessibilityDeclarationsParams,
    type AppRetrieveAlternativeDistributionKeyParams as AppRetrieveAlternativeDistributionKeyParams,
    type AppRetrieveAnalyticsReportRequestsParams as AppRetrieveAnalyticsReportRequestsParams,
    type AppRetrieveAppAvailabilityV2Params as AppRetrieveAppAvailabilityV2Params,
    type AppRetrieveAppClipsParams as AppRetrieveAppClipsParams,
    type AppRetrieveAppCustomProductPagesParams as AppRetrieveAppCustomProductPagesParams,
    type AppRetrieveAppEncryptionDeclarationsParams as AppRetrieveAppEncryptionDeclarationsParams,
    type AppRetrieveAppEventsParams as AppRetrieveAppEventsParams,
    type AppRetrieveAppInfosParams as AppRetrieveAppInfosParams,
    type AppRetrieveAppPricePointsParams as AppRetrieveAppPricePointsParams,
    type AppRetrieveAppPriceScheduleParams as AppRetrieveAppPriceScheduleParams,
    type AppRetrieveAppStoreVersionExperimentsV2Params as AppRetrieveAppStoreVersionExperimentsV2Params,
    type AppRetrieveAppStoreVersionsParams as AppRetrieveAppStoreVersionsParams,
    type AppRetrieveBackgroundAssetsParams as AppRetrieveBackgroundAssetsParams,
    type AppRetrieveBetaAppLocalizationsParams as AppRetrieveBetaAppLocalizationsParams,
    type AppRetrieveBetaAppReviewDetailParams as AppRetrieveBetaAppReviewDetailParams,
    type AppRetrieveBetaFeedbackCrashSubmissionsParams as AppRetrieveBetaFeedbackCrashSubmissionsParams,
    type AppRetrieveBetaFeedbackScreenshotSubmissionsParams as AppRetrieveBetaFeedbackScreenshotSubmissionsParams,
    type AppRetrieveBetaGroupsParams as AppRetrieveBetaGroupsParams,
    type AppRetrieveBetaLicenseAgreementParams as AppRetrieveBetaLicenseAgreementParams,
    type AppRetrieveBuildsParams as AppRetrieveBuildsParams,
    type AppRetrieveCiProductParams as AppRetrieveCiProductParams,
    type AppRetrieveCustomerReviewSummarizationsParams as AppRetrieveCustomerReviewSummarizationsParams,
    type AppRetrieveCustomerReviewsParams as AppRetrieveCustomerReviewsParams,
    type AppRetrieveEndUserLicenseAgreementParams as AppRetrieveEndUserLicenseAgreementParams,
    type AppRetrieveGameCenterDetailParams as AppRetrieveGameCenterDetailParams,
    type AppRetrieveGameCenterEnabledVersionsParams as AppRetrieveGameCenterEnabledVersionsParams,
    type AppRetrieveInAppPurchasesParams as AppRetrieveInAppPurchasesParams,
    type AppRetrieveInAppPurchasesV2Params as AppRetrieveInAppPurchasesV2Params,
    type AppRetrieveMarketplaceSearchDetailParams as AppRetrieveMarketplaceSearchDetailParams,
    type AppRetrievePerfPowerMetricsParams as AppRetrievePerfPowerMetricsParams,
    type AppRetrievePreReleaseVersionsParams as AppRetrievePreReleaseVersionsParams,
    type AppRetrievePromotedPurchasesParams as AppRetrievePromotedPurchasesParams,
    type AppRetrieveReviewSubmissionsParams as AppRetrieveReviewSubmissionsParams,
    type AppRetrieveSubscriptionGracePeriodParams as AppRetrieveSubscriptionGracePeriodParams,
    type AppRetrieveSubscriptionGroupsParams as AppRetrieveSubscriptionGroupsParams,
    type AppRetrieveWebhooksParams as AppRetrieveWebhooksParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAccessibilityDeclarationsResponse as RelationshipRetrieveAccessibilityDeclarationsResponse,
    type RelationshipRetrieveAlternativeDistributionKeyResponse as RelationshipRetrieveAlternativeDistributionKeyResponse,
    type RelationshipRetrieveAnalyticsReportRequestsResponse as RelationshipRetrieveAnalyticsReportRequestsResponse,
    type RelationshipRetrieveAppAvailabilityV2Response as RelationshipRetrieveAppAvailabilityV2Response,
    type RelationshipRetrieveAppClipsResponse as RelationshipRetrieveAppClipsResponse,
    type RelationshipRetrieveAppCustomProductPagesResponse as RelationshipRetrieveAppCustomProductPagesResponse,
    type RelationshipRetrieveAppEncryptionDeclarationsResponse as RelationshipRetrieveAppEncryptionDeclarationsResponse,
    type RelationshipRetrieveAppEventsResponse as RelationshipRetrieveAppEventsResponse,
    type RelationshipRetrieveAppInfosResponse as RelationshipRetrieveAppInfosResponse,
    type RelationshipRetrieveAppPricePointsResponse as RelationshipRetrieveAppPricePointsResponse,
    type RelationshipRetrieveAppPriceScheduleResponse as RelationshipRetrieveAppPriceScheduleResponse,
    type RelationshipRetrieveAppStoreVersionExperimentsV2Response as RelationshipRetrieveAppStoreVersionExperimentsV2Response,
    type RelationshipRetrieveAppStoreVersionsResponse as RelationshipRetrieveAppStoreVersionsResponse,
    type RelationshipRetrieveBackgroundAssetsResponse as RelationshipRetrieveBackgroundAssetsResponse,
    type RelationshipRetrieveBetaAppLocalizationsResponse as RelationshipRetrieveBetaAppLocalizationsResponse,
    type RelationshipRetrieveBetaAppReviewDetailResponse as RelationshipRetrieveBetaAppReviewDetailResponse,
    type RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse as RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse,
    type RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse as RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse,
    type RelationshipRetrieveBetaGroupsResponse as RelationshipRetrieveBetaGroupsResponse,
    type RelationshipRetrieveBetaLicenseAgreementResponse as RelationshipRetrieveBetaLicenseAgreementResponse,
    type RelationshipRetrieveBuildsResponse as RelationshipRetrieveBuildsResponse,
    type RelationshipRetrieveCiProductResponse as RelationshipRetrieveCiProductResponse,
    type RelationshipRetrieveCustomerReviewsResponse as RelationshipRetrieveCustomerReviewsResponse,
    type RelationshipRetrieveEndUserLicenseAgreementResponse as RelationshipRetrieveEndUserLicenseAgreementResponse,
    type RelationshipRetrieveGameCenterDetailResponse as RelationshipRetrieveGameCenterDetailResponse,
    type RelationshipRetrieveGameCenterEnabledVersionsResponse as RelationshipRetrieveGameCenterEnabledVersionsResponse,
    type RelationshipRetrieveInAppPurchasesResponse as RelationshipRetrieveInAppPurchasesResponse,
    type RelationshipRetrieveInAppPurchasesV2Response as RelationshipRetrieveInAppPurchasesV2Response,
    type RelationshipRetrieveMarketplaceSearchDetailResponse as RelationshipRetrieveMarketplaceSearchDetailResponse,
    type RelationshipRetrievePreReleaseVersionsResponse as RelationshipRetrievePreReleaseVersionsResponse,
    type RelationshipRetrieveReviewSubmissionsResponse as RelationshipRetrieveReviewSubmissionsResponse,
    type RelationshipRetrieveSubscriptionGracePeriodResponse as RelationshipRetrieveSubscriptionGracePeriodResponse,
    type RelationshipRetrieveSubscriptionGroupsResponse as RelationshipRetrieveSubscriptionGroupsResponse,
    type RelationshipRetrieveWebhooksResponse as RelationshipRetrieveWebhooksResponse,
    type RelationshipDeleteBetaTestersParams as RelationshipDeleteBetaTestersParams,
    type RelationshipRetrieveAccessibilityDeclarationsParams as RelationshipRetrieveAccessibilityDeclarationsParams,
    type RelationshipRetrieveAnalyticsReportRequestsParams as RelationshipRetrieveAnalyticsReportRequestsParams,
    type RelationshipRetrieveAppClipsParams as RelationshipRetrieveAppClipsParams,
    type RelationshipRetrieveAppCustomProductPagesParams as RelationshipRetrieveAppCustomProductPagesParams,
    type RelationshipRetrieveAppEncryptionDeclarationsParams as RelationshipRetrieveAppEncryptionDeclarationsParams,
    type RelationshipRetrieveAppEventsParams as RelationshipRetrieveAppEventsParams,
    type RelationshipRetrieveAppInfosParams as RelationshipRetrieveAppInfosParams,
    type RelationshipRetrieveAppPricePointsParams as RelationshipRetrieveAppPricePointsParams,
    type RelationshipRetrieveAppStoreVersionExperimentsV2Params as RelationshipRetrieveAppStoreVersionExperimentsV2Params,
    type RelationshipRetrieveAppStoreVersionsParams as RelationshipRetrieveAppStoreVersionsParams,
    type RelationshipRetrieveBackgroundAssetsParams as RelationshipRetrieveBackgroundAssetsParams,
    type RelationshipRetrieveBetaAppLocalizationsParams as RelationshipRetrieveBetaAppLocalizationsParams,
    type RelationshipRetrieveBetaFeedbackCrashSubmissionsParams as RelationshipRetrieveBetaFeedbackCrashSubmissionsParams,
    type RelationshipRetrieveBetaFeedbackScreenshotSubmissionsParams as RelationshipRetrieveBetaFeedbackScreenshotSubmissionsParams,
    type RelationshipRetrieveBetaGroupsParams as RelationshipRetrieveBetaGroupsParams,
    type RelationshipRetrieveBuildsParams as RelationshipRetrieveBuildsParams,
    type RelationshipRetrieveCustomerReviewsParams as RelationshipRetrieveCustomerReviewsParams,
    type RelationshipRetrieveGameCenterEnabledVersionsParams as RelationshipRetrieveGameCenterEnabledVersionsParams,
    type RelationshipRetrieveInAppPurchasesParams as RelationshipRetrieveInAppPurchasesParams,
    type RelationshipRetrieveInAppPurchasesV2Params as RelationshipRetrieveInAppPurchasesV2Params,
    type RelationshipRetrievePreReleaseVersionsParams as RelationshipRetrievePreReleaseVersionsParams,
    type RelationshipRetrieveReviewSubmissionsParams as RelationshipRetrieveReviewSubmissionsParams,
    type RelationshipRetrieveSubscriptionGroupsParams as RelationshipRetrieveSubscriptionGroupsParams,
    type RelationshipRetrieveWebhooksParams as RelationshipRetrieveWebhooksParams,
  };

  export {
    Metrics as Metrics,
    type AppsBetaTesterUsagesV1MetricResponse as AppsBetaTesterUsagesV1MetricResponse,
    type MetricRetrieveBetaTesterUsagesParams as MetricRetrieveBetaTesterUsagesParams,
  };
}
