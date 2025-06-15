// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as PromotedPurchasesAPI from './promoted-purchases';
import {
  PromotedPurchaseRetrievePromotedPurchasesParams,
  PromotedPurchaseRetrievePromotedPurchasesResponse,
  PromotedPurchaseUpdatePromotedPurchasesParams,
  PromotedPurchases,
} from './promoted-purchases';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  promotedPurchases: PromotedPurchasesAPI.PromotedPurchases = new PromotedPurchasesAPI.PromotedPurchases(
    this._client,
  );

  deleteBetaTesters(
    id: string,
    body: RelationshipDeleteBetaTestersParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.delete(path`/v1/apps/${id}/relationships/betaTesters`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveAccessibilityDeclarations(
    id: string,
    query: RelationshipRetrieveAccessibilityDeclarationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAccessibilityDeclarationsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/accessibilityDeclarations`, {
      query,
      ...options,
    });
  }

  retrieveAlternativeDistributionKey(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAlternativeDistributionKeyResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/alternativeDistributionKey`, options);
  }

  retrieveAnalyticsReportRequests(
    id: string,
    query: RelationshipRetrieveAnalyticsReportRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAnalyticsReportRequestsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/analyticsReportRequests`, {
      query,
      ...options,
    });
  }

  retrieveAppAvailabilityV2(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppAvailabilityV2Response> {
    return this._client.get(path`/v1/apps/${id}/relationships/appAvailabilityV2`, options);
  }

  retrieveAppClips(
    id: string,
    query: RelationshipRetrieveAppClipsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppClipsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appClips`, { query, ...options });
  }

  retrieveAppCustomProductPages(
    id: string,
    query: RelationshipRetrieveAppCustomProductPagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppCustomProductPagesResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appCustomProductPages`, { query, ...options });
  }

  retrieveAppEncryptionDeclarations(
    id: string,
    query: RelationshipRetrieveAppEncryptionDeclarationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppEncryptionDeclarationsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appEncryptionDeclarations`, {
      query,
      ...options,
    });
  }

  retrieveAppEvents(
    id: string,
    query: RelationshipRetrieveAppEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppEventsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appEvents`, { query, ...options });
  }

  retrieveAppInfos(
    id: string,
    query: RelationshipRetrieveAppInfosParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppInfosResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appInfos`, { query, ...options });
  }

  retrieveAppPricePoints(
    id: string,
    query: RelationshipRetrieveAppPricePointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppPricePointsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appPricePoints`, { query, ...options });
  }

  retrieveAppPriceSchedule(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppPriceScheduleResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appPriceSchedule`, options);
  }

  retrieveAppStoreVersionExperimentsV2(
    id: string,
    query: RelationshipRetrieveAppStoreVersionExperimentsV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionExperimentsV2Response> {
    return this._client.get(path`/v1/apps/${id}/relationships/appStoreVersionExperimentsV2`, {
      query,
      ...options,
    });
  }

  retrieveAppStoreVersions(
    id: string,
    query: RelationshipRetrieveAppStoreVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/appStoreVersions`, { query, ...options });
  }

  retrieveBackgroundAssets(
    id: string,
    query: RelationshipRetrieveBackgroundAssetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBackgroundAssetsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/backgroundAssets`, { query, ...options });
  }

  retrieveBetaAppLocalizations(
    id: string,
    query: RelationshipRetrieveBetaAppLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaAppLocalizationsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/betaAppLocalizations`, { query, ...options });
  }

  retrieveBetaAppReviewDetail(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaAppReviewDetailResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/betaAppReviewDetail`, options);
  }

  retrieveBetaFeedbackCrashSubmissions(
    id: string,
    query: RelationshipRetrieveBetaFeedbackCrashSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/betaFeedbackCrashSubmissions`, {
      query,
      ...options,
    });
  }

  retrieveBetaFeedbackScreenshotSubmissions(
    id: string,
    query: RelationshipRetrieveBetaFeedbackScreenshotSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/betaFeedbackScreenshotSubmissions`, {
      query,
      ...options,
    });
  }

  retrieveBetaGroups(
    id: string,
    query: RelationshipRetrieveBetaGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaGroupsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/betaGroups`, { query, ...options });
  }

  retrieveBetaLicenseAgreement(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBetaLicenseAgreementResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/betaLicenseAgreement`, options);
  }

  retrieveBuilds(
    id: string,
    query: RelationshipRetrieveBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBuildsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/builds`, { query, ...options });
  }

  retrieveCiProduct(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveCiProductResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/ciProduct`, options);
  }

  retrieveCustomerReviews(
    id: string,
    query: RelationshipRetrieveCustomerReviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveCustomerReviewsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/customerReviews`, { query, ...options });
  }

  retrieveEndUserLicenseAgreement(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveEndUserLicenseAgreementResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/endUserLicenseAgreement`, options);
  }

  retrieveGameCenterDetail(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterDetailResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/gameCenterDetail`, options);
  }

  /**
   * @deprecated
   */
  retrieveGameCenterEnabledVersions(
    id: string,
    query: RelationshipRetrieveGameCenterEnabledVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveGameCenterEnabledVersionsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/gameCenterEnabledVersions`, {
      query,
      ...options,
    });
  }

  /**
   * @deprecated
   */
  retrieveInAppPurchases(
    id: string,
    query: RelationshipRetrieveInAppPurchasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveInAppPurchasesResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/inAppPurchases`, { query, ...options });
  }

  retrieveInAppPurchasesV2(
    id: string,
    query: RelationshipRetrieveInAppPurchasesV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveInAppPurchasesV2Response> {
    return this._client.get(path`/v1/apps/${id}/relationships/inAppPurchasesV2`, { query, ...options });
  }

  retrieveMarketplaceSearchDetail(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveMarketplaceSearchDetailResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/marketplaceSearchDetail`, options);
  }

  retrievePreReleaseVersions(
    id: string,
    query: RelationshipRetrievePreReleaseVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePreReleaseVersionsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/preReleaseVersions`, { query, ...options });
  }

  retrieveReviewSubmissions(
    id: string,
    query: RelationshipRetrieveReviewSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveReviewSubmissionsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/reviewSubmissions`, { query, ...options });
  }

  retrieveSubscriptionGracePeriod(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveSubscriptionGracePeriodResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/subscriptionGracePeriod`, options);
  }

  retrieveSubscriptionGroups(
    id: string,
    query: RelationshipRetrieveSubscriptionGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveSubscriptionGroupsResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/subscriptionGroups`, { query, ...options });
  }

  retrieveWebhooks(
    id: string,
    query: RelationshipRetrieveWebhooksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveWebhooksResponse> {
    return this._client.get(path`/v1/apps/${id}/relationships/webhooks`, { query, ...options });
  }
}

export interface RelationshipRetrieveAccessibilityDeclarationsResponse {
  data: Array<RelationshipRetrieveAccessibilityDeclarationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAccessibilityDeclarationsResponse {
  export interface Data {
    id: string;

    type: 'accessibilityDeclarations';
  }
}

export interface RelationshipRetrieveAlternativeDistributionKeyResponse {
  data: RelationshipRetrieveAlternativeDistributionKeyResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAlternativeDistributionKeyResponse {
  export interface Data {
    id: string;

    type: 'alternativeDistributionKeys';
  }
}

export interface RelationshipRetrieveAnalyticsReportRequestsResponse {
  data: Array<RelationshipRetrieveAnalyticsReportRequestsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAnalyticsReportRequestsResponse {
  export interface Data {
    id: string;

    type: 'analyticsReportRequests';
  }
}

export interface RelationshipRetrieveAppAvailabilityV2Response {
  data: RelationshipRetrieveAppAvailabilityV2Response.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppAvailabilityV2Response {
  export interface Data {
    id: string;

    type: 'appAvailabilities';
  }
}

export interface RelationshipRetrieveAppClipsResponse {
  data: Array<RelationshipRetrieveAppClipsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppClipsResponse {
  export interface Data {
    id: string;

    type: 'appClips';
  }
}

export interface RelationshipRetrieveAppCustomProductPagesResponse {
  data: Array<RelationshipRetrieveAppCustomProductPagesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppCustomProductPagesResponse {
  export interface Data {
    id: string;

    type: 'appCustomProductPages';
  }
}

export interface RelationshipRetrieveAppEncryptionDeclarationsResponse {
  data: Array<RelationshipRetrieveAppEncryptionDeclarationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppEncryptionDeclarationsResponse {
  export interface Data {
    id: string;

    type: 'appEncryptionDeclarations';
  }
}

export interface RelationshipRetrieveAppEventsResponse {
  data: Array<RelationshipRetrieveAppEventsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppEventsResponse {
  export interface Data {
    id: string;

    type: 'appEvents';
  }
}

export interface RelationshipRetrieveAppInfosResponse {
  data: Array<RelationshipRetrieveAppInfosResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppInfosResponse {
  export interface Data {
    id: string;

    type: 'appInfos';
  }
}

export interface RelationshipRetrieveAppPricePointsResponse {
  data: Array<RelationshipRetrieveAppPricePointsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppPricePointsResponse {
  export interface Data {
    id: string;

    type: 'appPricePoints';
  }
}

export interface RelationshipRetrieveAppPriceScheduleResponse {
  data: RelationshipRetrieveAppPriceScheduleResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppPriceScheduleResponse {
  export interface Data {
    id: string;

    type: 'appPriceSchedules';
  }
}

export interface RelationshipRetrieveAppStoreVersionExperimentsV2Response {
  data: Array<RelationshipRetrieveAppStoreVersionExperimentsV2Response.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppStoreVersionExperimentsV2Response {
  export interface Data {
    id: string;

    type: 'appStoreVersionExperiments';
  }
}

export interface RelationshipRetrieveAppStoreVersionsResponse {
  data: Array<RelationshipRetrieveAppStoreVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveAppStoreVersionsResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersions';
  }
}

export interface RelationshipRetrieveBackgroundAssetsResponse {
  data: Array<RelationshipRetrieveBackgroundAssetsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBackgroundAssetsResponse {
  export interface Data {
    id: string;

    type: 'backgroundAssets';
  }
}

export interface RelationshipRetrieveBetaAppLocalizationsResponse {
  data: Array<RelationshipRetrieveBetaAppLocalizationsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBetaAppLocalizationsResponse {
  export interface Data {
    id: string;

    type: 'betaAppLocalizations';
  }
}

export interface RelationshipRetrieveBetaAppReviewDetailResponse {
  data: RelationshipRetrieveBetaAppReviewDetailResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBetaAppReviewDetailResponse {
  export interface Data {
    id: string;

    type: 'betaAppReviewDetails';
  }
}

export interface RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse {
  data: Array<RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBetaFeedbackCrashSubmissionsResponse {
  export interface Data {
    id: string;

    type: 'betaFeedbackCrashSubmissions';
  }
}

export interface RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse {
  data: Array<RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBetaFeedbackScreenshotSubmissionsResponse {
  export interface Data {
    id: string;

    type: 'betaFeedbackScreenshotSubmissions';
  }
}

export interface RelationshipRetrieveBetaGroupsResponse {
  data: Array<RelationshipRetrieveBetaGroupsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBetaGroupsResponse {
  export interface Data {
    id: string;

    type: 'betaGroups';
  }
}

export interface RelationshipRetrieveBetaLicenseAgreementResponse {
  data: RelationshipRetrieveBetaLicenseAgreementResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBetaLicenseAgreementResponse {
  export interface Data {
    id: string;

    type: 'betaLicenseAgreements';
  }
}

export interface RelationshipRetrieveBuildsResponse {
  data: Array<RelationshipRetrieveBuildsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBuildsResponse {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface RelationshipRetrieveCiProductResponse {
  data: RelationshipRetrieveCiProductResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveCiProductResponse {
  export interface Data {
    id: string;

    type: 'ciProducts';
  }
}

export interface RelationshipRetrieveCustomerReviewsResponse {
  data: Array<RelationshipRetrieveCustomerReviewsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveCustomerReviewsResponse {
  export interface Data {
    id: string;

    type: 'customerReviews';
  }
}

export interface RelationshipRetrieveEndUserLicenseAgreementResponse {
  data: RelationshipRetrieveEndUserLicenseAgreementResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveEndUserLicenseAgreementResponse {
  export interface Data {
    id: string;

    type: 'endUserLicenseAgreements';
  }
}

export interface RelationshipRetrieveGameCenterDetailResponse {
  data: RelationshipRetrieveGameCenterDetailResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveGameCenterDetailResponse {
  export interface Data {
    id: string;

    type: 'gameCenterDetails';
  }
}

/**
 * @deprecated
 */
export interface RelationshipRetrieveGameCenterEnabledVersionsResponse {
  data: Array<RelationshipRetrieveGameCenterEnabledVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveGameCenterEnabledVersionsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterEnabledVersions';
  }
}

/**
 * @deprecated
 */
export interface RelationshipRetrieveInAppPurchasesResponse {
  data: Array<RelationshipRetrieveInAppPurchasesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveInAppPurchasesResponse {
  export interface Data {
    id: string;

    type: 'inAppPurchases';
  }
}

export interface RelationshipRetrieveInAppPurchasesV2Response {
  data: Array<RelationshipRetrieveInAppPurchasesV2Response.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveInAppPurchasesV2Response {
  export interface Data {
    id: string;

    type: 'inAppPurchases';
  }
}

export interface RelationshipRetrieveMarketplaceSearchDetailResponse {
  data: RelationshipRetrieveMarketplaceSearchDetailResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveMarketplaceSearchDetailResponse {
  export interface Data {
    id: string;

    type: 'marketplaceSearchDetails';
  }
}

export interface RelationshipRetrievePreReleaseVersionsResponse {
  data: Array<RelationshipRetrievePreReleaseVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrievePreReleaseVersionsResponse {
  export interface Data {
    id: string;

    type: 'preReleaseVersions';
  }
}

export interface RelationshipRetrieveReviewSubmissionsResponse {
  data: Array<RelationshipRetrieveReviewSubmissionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveReviewSubmissionsResponse {
  export interface Data {
    id: string;

    type: 'reviewSubmissions';
  }
}

export interface RelationshipRetrieveSubscriptionGracePeriodResponse {
  data: RelationshipRetrieveSubscriptionGracePeriodResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveSubscriptionGracePeriodResponse {
  export interface Data {
    id: string;

    type: 'subscriptionGracePeriods';
  }
}

export interface RelationshipRetrieveSubscriptionGroupsResponse {
  data: Array<RelationshipRetrieveSubscriptionGroupsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveSubscriptionGroupsResponse {
  export interface Data {
    id: string;

    type: 'subscriptionGroups';
  }
}

export interface RelationshipRetrieveWebhooksResponse {
  data: Array<RelationshipRetrieveWebhooksResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveWebhooksResponse {
  export interface Data {
    id: string;

    type: 'webhooks';
  }
}

export interface RelationshipDeleteBetaTestersParams {
  data: Array<RelationshipDeleteBetaTestersParams.Data>;
}

export namespace RelationshipDeleteBetaTestersParams {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface RelationshipRetrieveAccessibilityDeclarationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAnalyticsReportRequestsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppClipsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppCustomProductPagesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppEncryptionDeclarationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppEventsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppInfosParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppPricePointsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppStoreVersionExperimentsV2Params {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveAppStoreVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBackgroundAssetsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBetaAppLocalizationsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBetaFeedbackCrashSubmissionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBetaFeedbackScreenshotSubmissionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBetaGroupsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveBuildsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveCustomerReviewsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveGameCenterEnabledVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveInAppPurchasesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveInAppPurchasesV2Params {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrievePreReleaseVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveReviewSubmissionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveSubscriptionGroupsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveWebhooksParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.PromotedPurchases = PromotedPurchases;

export declare namespace Relationships {
  export {
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
    PromotedPurchases as PromotedPurchases,
    type PromotedPurchaseRetrievePromotedPurchasesResponse as PromotedPurchaseRetrievePromotedPurchasesResponse,
    type PromotedPurchaseRetrievePromotedPurchasesParams as PromotedPurchaseRetrievePromotedPurchasesParams,
    type PromotedPurchaseUpdatePromotedPurchasesParams as PromotedPurchaseUpdatePromotedPurchasesParams,
  };
}
