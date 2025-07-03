// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AccessibilityDeclaration,
  AccessibilityDeclarationCreateParams,
  AccessibilityDeclarationResponse,
  AccessibilityDeclarationRetrieveParams,
  AccessibilityDeclarationUpdateParams,
  AccessibilityDeclarations,
  DeviceFamily,
  DocumentLinks,
  ResourceLinks,
} from './resources/accessibility-declarations';
import {
  Actor,
  ActorListParams,
  ActorListResponse,
  ActorRetrieveParams,
  ActorRetrieveResponse,
  Actors,
  PagedDocumentLinks,
  PagingInformation,
} from './resources/actors';
import {
  AgeRatingDeclaration,
  AgeRatingDeclarationResponse,
  AgeRatingDeclarationUpdateParams,
  AgeRatingDeclarations,
  KidsAgeBand,
} from './resources/age-rating-declarations';
import {
  AlternativeDistributionDomain,
  AlternativeDistributionDomainCreateParams,
  AlternativeDistributionDomainListParams,
  AlternativeDistributionDomainListResponse,
  AlternativeDistributionDomainResponse,
  AlternativeDistributionDomainRetrieveParams,
  AlternativeDistributionDomains,
} from './resources/alternative-distribution-domains';
import {
  AlternativeDistributionKey,
  AlternativeDistributionKeyCreateParams,
  AlternativeDistributionKeyListParams,
  AlternativeDistributionKeyListResponse,
  AlternativeDistributionKeyResponse,
  AlternativeDistributionKeyRetrieveParams,
  AlternativeDistributionKeys,
} from './resources/alternative-distribution-keys';
import {
  AlternativeDistributionPackageDelta,
  AlternativeDistributionPackageDeltaRetrieveParams,
  AlternativeDistributionPackageDeltaRetrieveResponse,
  AlternativeDistributionPackageDeltas,
} from './resources/alternative-distribution-package-deltas';
import {
  AlternativeDistributionPackageVariant,
  AlternativeDistributionPackageVariantRetrieveParams,
  AlternativeDistributionPackageVariantRetrieveResponse,
  AlternativeDistributionPackageVariants,
} from './resources/alternative-distribution-package-variants';
import {
  AnalyticsReportSegment,
  AnalyticsReportSegmentRetrieveParams,
  AnalyticsReportSegmentRetrieveResponse,
  AnalyticsReportSegments,
} from './resources/analytics-report-segments';
import {
  AppClipAdvancedExperienceImage,
  AppClipAdvancedExperienceImageCreateParams,
  AppClipAdvancedExperienceImageResponse,
  AppClipAdvancedExperienceImageRetrieveParams,
  AppClipAdvancedExperienceImageUpdateParams,
  AppClipAdvancedExperienceImages,
  AppMediaAssetState,
  AppMediaStateError,
  HTTPHeader,
  ImageAsset,
  UploadOperation,
} from './resources/app-clip-advanced-experience-images';
import {
  AppClipAction,
  AppClipAdvancedExperience,
  AppClipAdvancedExperienceCreateParams,
  AppClipAdvancedExperienceLanguage,
  AppClipAdvancedExperienceLocalization,
  AppClipAdvancedExperienceLocalizationInlineCreate,
  AppClipAdvancedExperienceResponse,
  AppClipAdvancedExperienceRetrieveParams,
  AppClipAdvancedExperienceUpdateParams,
  AppClipAdvancedExperiences,
} from './resources/app-clip-advanced-experiences';
import {
  AppClipAppStoreReviewDetail,
  AppClipAppStoreReviewDetailCreateParams,
  AppClipAppStoreReviewDetailResponse,
  AppClipAppStoreReviewDetailRetrieveParams,
  AppClipAppStoreReviewDetailUpdateParams,
  AppClipAppStoreReviewDetails,
} from './resources/app-clip-app-store-review-details';
import {
  AppClipHeaderImage,
  AppClipHeaderImageCreateParams,
  AppClipHeaderImageResponse,
  AppClipHeaderImageRetrieveParams,
  AppClipHeaderImageUpdateParams,
  AppClipHeaderImages,
} from './resources/app-clip-header-images';
import {
  AppEncryptionDeclarationDocument,
  AppEncryptionDeclarationDocumentCreateParams,
  AppEncryptionDeclarationDocumentResponse,
  AppEncryptionDeclarationDocumentRetrieveParams,
  AppEncryptionDeclarationDocumentUpdateParams,
  AppEncryptionDeclarationDocuments,
} from './resources/app-encryption-declaration-documents';
import {
  AppEventAssetType,
  AppEventScreenshot,
  AppEventScreenshotCreateParams,
  AppEventScreenshotResponse,
  AppEventScreenshotRetrieveParams,
  AppEventScreenshotUpdateParams,
  AppEventScreenshots,
} from './resources/app-event-screenshots';
import {
  AppEventVideoClip,
  AppEventVideoClipCreateParams,
  AppEventVideoClipResponse,
  AppEventVideoClipRetrieveParams,
  AppEventVideoClipUpdateParams,
  AppEventVideoClips,
  AppMediaVideoState,
  PreviewFrameImage,
} from './resources/app-event-video-clips';
import {
  AppInfoLocalization,
  AppInfoLocalizationCreateParams,
  AppInfoLocalizationResponse,
  AppInfoLocalizationRetrieveParams,
  AppInfoLocalizationUpdateParams,
  AppInfoLocalizations,
} from './resources/app-info-localizations';
import {
  AppPreview,
  AppPreviewCreateParams,
  AppPreviewResponse,
  AppPreviewRetrieveParams,
  AppPreviewUpdateParams,
  AppPreviews,
} from './resources/app-previews';
import {
  AppScreenshot,
  AppScreenshotCreateParams,
  AppScreenshotResponse,
  AppScreenshotRetrieveParams,
  AppScreenshotUpdateParams,
  AppScreenshots,
} from './resources/app-screenshots';
import {
  AppStoreReviewAttachment,
  AppStoreReviewAttachmentCreateParams,
  AppStoreReviewAttachmentResponse,
  AppStoreReviewAttachmentRetrieveParams,
  AppStoreReviewAttachmentUpdateParams,
  AppStoreReviewAttachments,
} from './resources/app-store-review-attachments';
import {
  AppStoreVersionPhasedRelease,
  AppStoreVersionPhasedReleaseCreateParams,
  AppStoreVersionPhasedReleaseResponse,
  AppStoreVersionPhasedReleaseUpdateParams,
  AppStoreVersionPhasedReleases,
  PhasedReleaseState,
} from './resources/app-store-version-phased-releases';
import {
  AppStoreVersionPromotionCreateParams,
  AppStoreVersionPromotionCreateResponse,
  AppStoreVersionPromotions,
} from './resources/app-store-version-promotions';
import {
  AppStoreVersionReleaseRequestCreateParams,
  AppStoreVersionReleaseRequestCreateResponse,
  AppStoreVersionReleaseRequests,
} from './resources/app-store-version-release-requests';
import { AppStoreVersionSubmissions } from './resources/app-store-version-submissions';
import {
  BackgroundAssetUploadFile,
  BackgroundAssetUploadFileCreateParams,
  BackgroundAssetUploadFileResponse,
  BackgroundAssetUploadFileRetrieveParams,
  BackgroundAssetUploadFileUpdateParams,
  BackgroundAssetUploadFiles,
} from './resources/background-asset-upload-files';
import {
  BackgroundAssetVersionInternalBetaRelease,
  BackgroundAssetVersionInternalBetaReleaseRetrieveParams,
  BackgroundAssetVersionInternalBetaReleaseRetrieveResponse,
  BackgroundAssetVersionInternalBetaReleases,
} from './resources/background-asset-version-internal-beta-releases';
import {
  BetaAppClipInvocationLocalization,
  BetaAppClipInvocationLocalizationCreateParams,
  BetaAppClipInvocationLocalizationResponse,
  BetaAppClipInvocationLocalizationUpdateParams,
  BetaAppClipInvocationLocalizations,
} from './resources/beta-app-clip-invocation-localizations';
import {
  BetaAppClipInvocation,
  BetaAppClipInvocationCreateParams,
  BetaAppClipInvocationResponse,
  BetaAppClipInvocationRetrieveParams,
  BetaAppClipInvocationUpdateParams,
  BetaAppClipInvocations,
} from './resources/beta-app-clip-invocations';
import { BetaCrashLog, BetaCrashLogRetrieveParams, BetaCrashLogs } from './resources/beta-crash-logs';
import {
  BetaFeedbackScreenshotSubmission,
  BetaFeedbackScreenshotSubmissionRetrieveParams,
  BetaFeedbackScreenshotSubmissionRetrieveResponse,
  BetaFeedbackScreenshotSubmissions,
} from './resources/beta-feedback-screenshot-submissions';
import {
  BetaRecruitmentCriteria,
  BetaRecruitmentCriterion,
  BetaRecruitmentCriterionCreateParams,
  BetaRecruitmentCriterionResponse,
  BetaRecruitmentCriterionUpdateParams,
  DeviceFamilyOsVersionFilter,
} from './resources/beta-recruitment-criteria';
import {
  BetaRecruitmentCriterionOptionListParams,
  BetaRecruitmentCriterionOptionListResponse,
  BetaRecruitmentCriterionOptions,
} from './resources/beta-recruitment-criterion-options';
import {
  BetaTesterInvitationCreateParams,
  BetaTesterInvitationCreateResponse,
  BetaTesterInvitations,
} from './resources/beta-tester-invitations';
import {
  BuildBetaNotificationCreateParams,
  BuildBetaNotificationCreateResponse,
  BuildBetaNotifications,
} from './resources/build-beta-notifications';
import {
  BundleIDCapabilities,
  BundleIDCapability,
  BundleIDCapabilityCreateParams,
  BundleIDCapabilityResponse,
  BundleIDCapabilityUpdateParams,
  CapabilitySetting,
  CapabilityType,
} from './resources/bundle-id-capabilities';
import {
  CiArtifact,
  CiArtifactRetrieveParams,
  CiArtifactRetrieveResponse,
  CiArtifacts,
} from './resources/ci-artifacts';
import {
  CiIssue,
  CiIssueRetrieveParams,
  CiIssueRetrieveResponse,
  CiIssues,
  FileLocation,
} from './resources/ci-issues';
import {
  CiTestResult,
  CiTestResultRetrieveParams,
  CiTestResultRetrieveResponse,
  CiTestResults,
  CiTestStatus,
} from './resources/ci-test-results';
import {
  CustomerReviewResponseCreateParams,
  CustomerReviewResponseRetrieveParams,
  CustomerReviewResponseV1,
  CustomerReviewResponseV1Response,
  CustomerReviewResponses,
} from './resources/customer-review-responses';
import {
  Device,
  DeviceCreateParams,
  DeviceListParams,
  DeviceListResponse,
  DeviceResponse,
  DeviceRetrieveParams,
  DeviceUpdateParams,
  Devices,
} from './resources/devices';
import {
  DiagnosticLogCallStackNode,
  DiagnosticSignatureRetrieveLogsParams,
  DiagnosticSignatureRetrieveLogsResponse,
  DiagnosticSignatures,
} from './resources/diagnostic-signatures';
import {
  EndAppAvailabilityPreOrderCreateParams,
  EndAppAvailabilityPreOrderCreateResponse,
  EndAppAvailabilityPreOrders,
} from './resources/end-app-availability-pre-orders';
import { FinanceReportListParams, FinanceReports } from './resources/finance-reports';
import {
  GameCenterAchievementImage,
  GameCenterAchievementImageCreateParams,
  GameCenterAchievementImageResponse,
  GameCenterAchievementImageRetrieveParams,
  GameCenterAchievementImageUpdateParams,
  GameCenterAchievementImages,
} from './resources/game-center-achievement-images';
import {
  GameCenterAchievementRelease,
  GameCenterAchievementReleaseCreateParams,
  GameCenterAchievementReleaseResponse,
  GameCenterAchievementReleaseRetrieveParams,
  GameCenterAchievementReleases,
} from './resources/game-center-achievement-releases';
import {
  GameCenterActivityImage,
  GameCenterActivityImageCreateParams,
  GameCenterActivityImageResponse,
  GameCenterActivityImageRetrieveParams,
  GameCenterActivityImageUpdateParams,
  GameCenterActivityImages,
} from './resources/game-center-activity-images';
import {
  GameCenterActivityVersionRelease,
  GameCenterActivityVersionReleaseCreateParams,
  GameCenterActivityVersionReleaseResponse,
  GameCenterActivityVersionReleaseRetrieveParams,
  GameCenterActivityVersionReleases,
} from './resources/game-center-activity-version-releases';
import {
  GameCenterChallengeImage,
  GameCenterChallengeImageCreateParams,
  GameCenterChallengeImageResponse,
  GameCenterChallengeImageRetrieveParams,
  GameCenterChallengeImageUpdateParams,
  GameCenterChallengeImages,
} from './resources/game-center-challenge-images';
import {
  GameCenterChallengeVersionRelease,
  GameCenterChallengeVersionReleaseCreateParams,
  GameCenterChallengeVersionReleaseResponse,
  GameCenterChallengeVersionReleaseRetrieveParams,
  GameCenterChallengeVersionReleases,
} from './resources/game-center-challenge-version-releases';
import {
  GameCenterLeaderboardEntrySubmissionCreateParams,
  GameCenterLeaderboardEntrySubmissionCreateResponse,
  GameCenterLeaderboardEntrySubmissions,
} from './resources/game-center-leaderboard-entry-submissions';
import {
  GameCenterLeaderboardImage,
  GameCenterLeaderboardImageCreateParams,
  GameCenterLeaderboardImageResponse,
  GameCenterLeaderboardImageRetrieveParams,
  GameCenterLeaderboardImageUpdateParams,
  GameCenterLeaderboardImages,
} from './resources/game-center-leaderboard-images';
import {
  GameCenterLeaderboardRelease,
  GameCenterLeaderboardReleaseCreateParams,
  GameCenterLeaderboardReleaseResponse,
  GameCenterLeaderboardReleaseRetrieveParams,
  GameCenterLeaderboardReleases,
} from './resources/game-center-leaderboard-releases';
import {
  GameCenterLeaderboardSetImage,
  GameCenterLeaderboardSetImageCreateParams,
  GameCenterLeaderboardSetImageResponse,
  GameCenterLeaderboardSetImageRetrieveParams,
  GameCenterLeaderboardSetImageUpdateParams,
  GameCenterLeaderboardSetImages,
} from './resources/game-center-leaderboard-set-images';
import {
  GameCenterLeaderboardSetRelease,
  GameCenterLeaderboardSetReleaseCreateParams,
  GameCenterLeaderboardSetReleaseResponse,
  GameCenterLeaderboardSetReleaseRetrieveParams,
  GameCenterLeaderboardSetReleases,
} from './resources/game-center-leaderboard-set-releases';
import {
  GameCenterMatchmakingRuleSetTestCreateParams,
  GameCenterMatchmakingRuleSetTestCreateResponse,
  GameCenterMatchmakingRuleSetTests,
} from './resources/game-center-matchmaking-rule-set-tests';
import {
  GameCenterMatchmakingTeam,
  GameCenterMatchmakingTeamCreateParams,
  GameCenterMatchmakingTeamResponse,
  GameCenterMatchmakingTeamUpdateParams,
  GameCenterMatchmakingTeams,
} from './resources/game-center-matchmaking-teams';
import {
  GameCenterPlayerAchievementSubmissionCreateParams,
  GameCenterPlayerAchievementSubmissionCreateResponse,
  GameCenterPlayerAchievementSubmissions,
} from './resources/game-center-player-achievement-submissions';
import {
  InAppPurchaseAppStoreReviewScreenshot,
  InAppPurchaseAppStoreReviewScreenshotCreateParams,
  InAppPurchaseAppStoreReviewScreenshotResponse,
  InAppPurchaseAppStoreReviewScreenshotRetrieveParams,
  InAppPurchaseAppStoreReviewScreenshotUpdateParams,
  InAppPurchaseAppStoreReviewScreenshots,
} from './resources/in-app-purchase-app-store-review-screenshots';
import {
  InAppPurchaseContent,
  InAppPurchaseContentResponse,
  InAppPurchaseContentRetrieveParams,
  InAppPurchaseContents,
} from './resources/in-app-purchase-contents';
import {
  InAppPurchaseImage,
  InAppPurchaseImageCreateParams,
  InAppPurchaseImageResponse,
  InAppPurchaseImageRetrieveParams,
  InAppPurchaseImageUpdateParams,
  InAppPurchaseImages,
} from './resources/in-app-purchase-images';
import {
  InAppPurchaseLocalization,
  InAppPurchaseLocalizationCreateParams,
  InAppPurchaseLocalizationResponse,
  InAppPurchaseLocalizationRetrieveParams,
  InAppPurchaseLocalizationUpdateParams,
  InAppPurchaseLocalizations,
} from './resources/in-app-purchase-localizations';
import {
  InAppPurchaseSubmissionCreateParams,
  InAppPurchaseSubmissionCreateResponse,
  InAppPurchaseSubmissions,
} from './resources/in-app-purchase-submissions';
import {
  MarketplaceSearchDetail,
  MarketplaceSearchDetailCreateParams,
  MarketplaceSearchDetailUpdateParams,
  MarketplaceSearchDetails,
} from './resources/marketplace-search-details';
import {
  MarketplaceWebhook,
  MarketplaceWebhookCreateParams,
  MarketplaceWebhookListParams,
  MarketplaceWebhookListResponse,
  MarketplaceWebhookResponse,
  MarketplaceWebhookUpdateParams,
  MarketplaceWebhooks,
} from './resources/marketplace-webhooks';
import {
  Nomination,
  NominationCreateParams,
  NominationListParams,
  NominationListResponse,
  NominationResponse,
  NominationRetrieveParams,
  NominationUpdateParams,
  Nominations,
} from './resources/nominations';
import {
  PromotedPurchase,
  PromotedPurchaseCreateParams,
  PromotedPurchaseResponse,
  PromotedPurchaseRetrieveParams,
  PromotedPurchaseUpdateParams,
  PromotedPurchases,
} from './resources/promoted-purchases';
import {
  ReviewSubmissionItem,
  ReviewSubmissionItemCreateParams,
  ReviewSubmissionItemResponse,
  ReviewSubmissionItemUpdateParams,
  ReviewSubmissionItems,
} from './resources/review-submission-items';
import {
  RoutingAppCoverage,
  RoutingAppCoverageCreateParams,
  RoutingAppCoverageResponse,
  RoutingAppCoverageRetrieveParams,
  RoutingAppCoverageUpdateParams,
  RoutingAppCoverages,
} from './resources/routing-app-coverages';
import { SalesReportListParams, SalesReports } from './resources/sales-reports';
import {
  SandboxTesterListParams,
  SandboxTesterListResponse,
  SandboxTesterUpdateParams,
  SandboxTesterUpdateResponse,
  SandboxTesterV2,
  SandboxTesters,
  TerritoryCode,
} from './resources/sandbox-testers';
import {
  SandboxTestersClearPurchaseHistoryRequest,
  SandboxTestersClearPurchaseHistoryRequestCreateParams,
  SandboxTestersClearPurchaseHistoryRequestCreateResponse,
} from './resources/sandbox-testers-clear-purchase-history-request';
import {
  ScmGitReference,
  ScmGitReferenceRetrieveParams,
  ScmGitReferenceRetrieveResponse,
  ScmGitReferences,
} from './resources/scm-git-references';
import {
  ScmPullRequest,
  ScmPullRequestRetrieveParams,
  ScmPullRequestRetrieveResponse,
  ScmPullRequests,
} from './resources/scm-pull-requests';
import {
  SubscriptionAppStoreReviewScreenshot,
  SubscriptionAppStoreReviewScreenshotCreateParams,
  SubscriptionAppStoreReviewScreenshotResponse,
  SubscriptionAppStoreReviewScreenshotRetrieveParams,
  SubscriptionAppStoreReviewScreenshotUpdateParams,
  SubscriptionAppStoreReviewScreenshots,
} from './resources/subscription-app-store-review-screenshots';
import {
  SubscriptionGracePeriodDetails,
  SubscriptionGracePeriodDuration,
  SubscriptionGracePeriodResponse,
  SubscriptionGracePeriodRetrieveParams,
  SubscriptionGracePeriodUpdateParams,
  SubscriptionGracePeriods,
} from './resources/subscription-grace-periods';
import {
  SubscriptionGroupLocalization,
  SubscriptionGroupLocalizationCreateParams,
  SubscriptionGroupLocalizationResponse,
  SubscriptionGroupLocalizationRetrieveParams,
  SubscriptionGroupLocalizationUpdateParams,
  SubscriptionGroupLocalizations,
} from './resources/subscription-group-localizations';
import {
  SubscriptionGroupSubmissionCreateParams,
  SubscriptionGroupSubmissionCreateResponse,
  SubscriptionGroupSubmissions,
} from './resources/subscription-group-submissions';
import {
  SubscriptionImage,
  SubscriptionImageCreateParams,
  SubscriptionImageResponse,
  SubscriptionImageRetrieveParams,
  SubscriptionImageUpdateParams,
  SubscriptionImages,
} from './resources/subscription-images';
import {
  SubscriptionIntroductoryOffer,
  SubscriptionIntroductoryOfferCreateParams,
  SubscriptionIntroductoryOfferResponse,
  SubscriptionIntroductoryOfferUpdateParams,
  SubscriptionIntroductoryOffers,
  SubscriptionOfferDuration,
  SubscriptionOfferMode,
} from './resources/subscription-introductory-offers';
import {
  SubscriptionLocalization,
  SubscriptionLocalizationCreateParams,
  SubscriptionLocalizationResponse,
  SubscriptionLocalizationRetrieveParams,
  SubscriptionLocalizationUpdateParams,
  SubscriptionLocalizations,
} from './resources/subscription-localizations';
import {
  SubscriptionOfferCodeCustomCode,
  SubscriptionOfferCodeCustomCodeCreateParams,
  SubscriptionOfferCodeCustomCodeResponse,
  SubscriptionOfferCodeCustomCodeRetrieveParams,
  SubscriptionOfferCodeCustomCodeUpdateParams,
  SubscriptionOfferCodeCustomCodes,
} from './resources/subscription-offer-code-custom-codes';
import {
  SubscriptionOfferCodeOneTimeUseCode,
  SubscriptionOfferCodeOneTimeUseCodeCreateParams,
  SubscriptionOfferCodeOneTimeUseCodeListValuesResponse,
  SubscriptionOfferCodeOneTimeUseCodeResponse,
  SubscriptionOfferCodeOneTimeUseCodeRetrieveParams,
  SubscriptionOfferCodeOneTimeUseCodeUpdateParams,
  SubscriptionOfferCodeOneTimeUseCodes,
} from './resources/subscription-offer-code-one-time-use-codes';
import {
  SubscriptionPrice,
  SubscriptionPriceCreateParams,
  SubscriptionPriceCreateResponse,
  SubscriptionPrices,
} from './resources/subscription-prices';
import {
  SubscriptionSubmissionCreateParams,
  SubscriptionSubmissionCreateResponse,
  SubscriptionSubmissions,
} from './resources/subscription-submissions';
import { Territories, TerritoriesResponse, TerritoryListParams } from './resources/territories';
import {
  TerritoryAvailabilities,
  TerritoryAvailability,
  TerritoryAvailabilityUpdateParams,
  TerritoryAvailabilityUpdateResponse,
} from './resources/territory-availabilities';
import {
  WebhookDeliveries,
  WebhookDelivery,
  WebhookDeliveryCreateParams,
  WebhookDeliveryCreateResponse,
  WebhookEvent,
} from './resources/webhook-deliveries';
import { WebhookPingCreateParams, WebhookPingCreateResponse, WebhookPings } from './resources/webhook-pings';
import {
  AlternativeDistributionPackageVersion,
  AlternativeDistributionPackageVersionListDeltasParams,
  AlternativeDistributionPackageVersionListDeltasResponse,
  AlternativeDistributionPackageVersionListVariantsParams,
  AlternativeDistributionPackageVersionListVariantsResponse,
  AlternativeDistributionPackageVersionRetrieveParams,
  AlternativeDistributionPackageVersionRetrieveResponse,
  AlternativeDistributionPackageVersions,
  RelationshipLinks,
} from './resources/alternative-distribution-package-versions/alternative-distribution-package-versions';
import {
  AlternativeDistributionPackage,
  AlternativeDistributionPackageCreateParams,
  AlternativeDistributionPackageListVersionsParams,
  AlternativeDistributionPackageListVersionsResponse,
  AlternativeDistributionPackageResponse,
  AlternativeDistributionPackageRetrieveParams,
  AlternativeDistributionPackages,
} from './resources/alternative-distribution-packages/alternative-distribution-packages';
import {
  AnalyticsReportInstance,
  AnalyticsReportInstanceListSegmentsParams,
  AnalyticsReportInstanceListSegmentsResponse,
  AnalyticsReportInstanceRetrieveParams,
  AnalyticsReportInstanceRetrieveResponse,
  AnalyticsReportInstances,
} from './resources/analytics-report-instances/analytics-report-instances';
import {
  AnalyticsReportRequest,
  AnalyticsReportRequestCreateParams,
  AnalyticsReportRequestListReportsParams,
  AnalyticsReportRequestListReportsResponse,
  AnalyticsReportRequestResponse,
  AnalyticsReportRequestRetrieveParams,
  AnalyticsReportRequests,
} from './resources/analytics-report-requests/analytics-report-requests';
import {
  AnalyticsReport,
  AnalyticsReportListInstancesParams,
  AnalyticsReportListInstancesResponse,
  AnalyticsReportRetrieveParams,
  AnalyticsReportRetrieveResponse,
  AnalyticsReports,
} from './resources/analytics-reports/analytics-reports';
import {
  AppAvailabilities,
  AppAvailability,
  AppAvailabilityCreateParams,
  AppAvailabilityListTerritoryAvailabilitiesParams,
  AppAvailabilityListTerritoryAvailabilitiesResponse,
  AppAvailabilityRetrieveParams,
} from './resources/app-availabilities/app-availabilities';
import {
  AppCategories,
  AppCategory,
  AppCategoryListParams,
  AppCategoryListResponse,
  AppCategoryListSubcategoriesParams,
  AppCategoryListSubcategoriesResponse,
  AppCategoryResponse,
  AppCategoryRetrieveParams,
  AppCategoryRetrieveParentParams,
  AppCategoryRetrieveParentResponse,
} from './resources/app-categories/app-categories';
import {
  AppClipDefaultExperienceLocalization,
  AppClipDefaultExperienceLocalizationCreateParams,
  AppClipDefaultExperienceLocalizationResponse,
  AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams,
  AppClipDefaultExperienceLocalizationRetrieveParams,
  AppClipDefaultExperienceLocalizationUpdateParams,
  AppClipDefaultExperienceLocalizations,
} from './resources/app-clip-default-experience-localizations/app-clip-default-experience-localizations';
import {
  AppClipDefaultExperience,
  AppClipDefaultExperienceCreateParams,
  AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams,
  AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse,
  AppClipDefaultExperienceResponse,
  AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams,
  AppClipDefaultExperienceRetrieveParams,
  AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams,
  AppClipDefaultExperienceUpdateParams,
  AppClipDefaultExperiences,
} from './resources/app-clip-default-experiences/app-clip-default-experiences';
import {
  AppClip,
  AppClipListAdvancedExperiencesParams,
  AppClipListAdvancedExperiencesResponse,
  AppClipListDefaultExperiencesParams,
  AppClipListDefaultExperiencesResponse,
  AppClipRetrieveParams,
  AppClipRetrieveResponse,
  AppClips,
} from './resources/app-clips/app-clips';
import {
  AppCustomProductPageLocalizationCreateParams,
  AppCustomProductPageLocalizationListAppPreviewSetsParams,
  AppCustomProductPageLocalizationListAppScreenshotSetsParams,
  AppCustomProductPageLocalizationRetrieveParams,
  AppCustomProductPageLocalizationUpdateParams,
  AppCustomProductPageLocalizations,
  Localization,
  LocalizationResponse,
  PreviewSetsResponse,
  ScreenshotSetsResponse,
} from './resources/app-custom-product-page-localizations/app-custom-product-page-localizations';
import {
  AppCustomProductPageVersion,
  AppCustomProductPageVersionCreateParams,
  AppCustomProductPageVersionListLocalizationsParams,
  AppCustomProductPageVersionListLocalizationsResponse,
  AppCustomProductPageVersionResponse,
  AppCustomProductPageVersionRetrieveParams,
  AppCustomProductPageVersionUpdateParams,
  AppCustomProductPageVersions,
} from './resources/app-custom-product-page-versions/app-custom-product-page-versions';
import {
  AppCustomProductPage,
  AppCustomProductPageCreateParams,
  AppCustomProductPageListVersionsParams,
  AppCustomProductPageListVersionsResponse,
  AppCustomProductPageResponse,
  AppCustomProductPageRetrieveParams,
  AppCustomProductPageUpdateParams,
  AppCustomProductPages,
} from './resources/app-custom-product-pages/app-custom-product-pages';
import {
  AppEncryptionDeclarationCreateParams,
  AppEncryptionDeclarationDeclaration,
  AppEncryptionDeclarationListParams,
  AppEncryptionDeclarationResponse,
  AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams,
  AppEncryptionDeclarationRetrieveAppParams,
  AppEncryptionDeclarationRetrieveParams,
  AppEncryptionDeclarations,
  AppWithoutIncludes,
} from './resources/app-encryption-declarations/app-encryption-declarations';
import {
  AppEventLocalization,
  AppEventLocalizationCreateParams,
  AppEventLocalizationListScreenshotsParams,
  AppEventLocalizationListScreenshotsResponse,
  AppEventLocalizationListVideoClipsParams,
  AppEventLocalizationListVideoClipsResponse,
  AppEventLocalizationResponse,
  AppEventLocalizationRetrieveParams,
  AppEventLocalizationUpdateParams,
  AppEventLocalizations,
} from './resources/app-event-localizations/app-event-localizations';
import {
  AppEvent,
  AppEventCreateParams,
  AppEventListLocalizationsParams,
  AppEventListLocalizationsResponse,
  AppEventResponse,
  AppEventRetrieveParams,
  AppEventUpdateParams,
  AppEvents,
} from './resources/app-events/app-events';
import {
  AppInfo,
  AppInfoListAppInfoLocalizationsParams,
  AppInfoListAppInfoLocalizationsResponse,
  AppInfoResponse,
  AppInfoRetrieveAgeRatingDeclarationParams,
  AppInfoRetrieveParams,
  AppInfoRetrievePrimaryCategoryParams,
  AppInfoRetrievePrimarySubcategoryOneParams,
  AppInfoRetrievePrimarySubcategoryTwoParams,
  AppInfoRetrieveSecondaryCategoryParams,
  AppInfoRetrieveSecondarySubcategoryOneParams,
  AppInfoRetrieveSecondarySubcategoryTwoParams,
  AppInfoUpdateParams,
  AppInfos,
  AppStoreVersionState,
} from './resources/app-infos/app-infos';
import {
  AppPreviewSet,
  AppPreviewSetCreateParams,
  AppPreviewSetListAppPreviewsParams,
  AppPreviewSetListAppPreviewsResponse,
  AppPreviewSetResponse,
  AppPreviewSetRetrieveParams,
  AppPreviewSets,
  PreviewType,
} from './resources/app-preview-sets/app-preview-sets';
import {
  AppPricePoint,
  AppPricePointListEqualizationsParams,
  AppPricePointRetrieveParams,
  AppPricePointRetrieveResponse,
  AppPricePoints,
} from './resources/app-price-points/app-price-points';
import {
  AppPriceSchedule,
  AppPriceScheduleCreateParams,
  AppPriceScheduleListAutomaticPricesParams,
  AppPriceScheduleListManualPricesParams,
  AppPriceScheduleRetrieveBaseTerritoryParams,
  AppPriceScheduleRetrieveParams,
  AppPriceSchedules,
  AppPriceV2,
  AppPricesV2,
  Territory,
  TerritoryInlineCreate,
  TerritoryResponse,
} from './resources/app-price-schedules/app-price-schedules';
import {
  AppScreenshotSet,
  AppScreenshotSetCreateParams,
  AppScreenshotSetListAppScreenshotsParams,
  AppScreenshotSetListAppScreenshotsResponse,
  AppScreenshotSetResponse,
  AppScreenshotSetRetrieveParams,
  AppScreenshotSets,
  ScreenshotDisplayType,
} from './resources/app-screenshot-sets/app-screenshot-sets';
import {
  AppStoreReviewDetail,
  AppStoreReviewDetailCreateParams,
  AppStoreReviewDetailListAttachmentsParams,
  AppStoreReviewDetailListAttachmentsResponse,
  AppStoreReviewDetailResponse,
  AppStoreReviewDetailRetrieveParams,
  AppStoreReviewDetailUpdateParams,
  AppStoreReviewDetails,
} from './resources/app-store-review-details/app-store-review-details';
import {
  AppStoreVersionExperimentTreatmentLocalization,
  AppStoreVersionExperimentTreatmentLocalizationCreateParams,
  AppStoreVersionExperimentTreatmentLocalizationListAppPreviewSetsParams,
  AppStoreVersionExperimentTreatmentLocalizationListAppScreenshotSetsParams,
  AppStoreVersionExperimentTreatmentLocalizationResponse,
  AppStoreVersionExperimentTreatmentLocalizationRetrieveParams,
  AppStoreVersionExperimentTreatmentLocalizations,
} from './resources/app-store-version-experiment-treatment-localizations/app-store-version-experiment-treatment-localizations';
import {
  AppStoreVersionExperimentTreatment,
  AppStoreVersionExperimentTreatmentCreateParams,
  AppStoreVersionExperimentTreatmentListLocalizationsParams,
  AppStoreVersionExperimentTreatmentListLocalizationsResponse,
  AppStoreVersionExperimentTreatmentResponse,
  AppStoreVersionExperimentTreatmentRetrieveParams,
  AppStoreVersionExperimentTreatmentUpdateParams,
  AppStoreVersionExperimentTreatments,
} from './resources/app-store-version-experiment-treatments/app-store-version-experiment-treatments';
import {
  AppStoreVersionExperiment,
  AppStoreVersionExperimentCreateParams,
  AppStoreVersionExperimentResponse,
  AppStoreVersionExperimentRetrieveParams,
  AppStoreVersionExperimentUpdateParams,
  AppStoreVersionExperimentV2,
  AppStoreVersionExperimentV2Response,
  AppStoreVersionExperiments,
  Platform,
} from './resources/app-store-version-experiments/app-store-version-experiments';
import {
  AppStoreVersionLocalization,
  AppStoreVersionLocalizationCreateParams,
  AppStoreVersionLocalizationListAppPreviewSetsParams,
  AppStoreVersionLocalizationListAppScreenshotSetsParams,
  AppStoreVersionLocalizationResponse,
  AppStoreVersionLocalizationRetrieveParams,
  AppStoreVersionLocalizationUpdateParams,
  AppStoreVersionLocalizations,
} from './resources/app-store-version-localizations/app-store-version-localizations';
import {
  AppStoreVersionCreateParams,
  AppStoreVersionDetails,
  AppStoreVersionExperimentsV2,
  AppStoreVersionResponse,
  AppStoreVersionRetrieveAgeRatingDeclarationParams,
  AppStoreVersionRetrieveAgeRatingDeclarationResponse,
  AppStoreVersionRetrieveAlternativeDistributionPackageParams,
  AppStoreVersionRetrieveAppClipDefaultExperienceParams,
  AppStoreVersionRetrieveAppStoreReviewDetailParams,
  AppStoreVersionRetrieveAppStoreVersionExperimentsParams,
  AppStoreVersionRetrieveAppStoreVersionExperimentsResponse,
  AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params,
  AppStoreVersionRetrieveAppStoreVersionLocalizationsParams,
  AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse,
  AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams,
  AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse,
  AppStoreVersionRetrieveAppStoreVersionSubmissionParams,
  AppStoreVersionRetrieveAppStoreVersionSubmissionResponse,
  AppStoreVersionRetrieveBuildParams,
  AppStoreVersionRetrieveCustomerReviewsParams,
  AppStoreVersionRetrieveGameCenterAppVersionParams,
  AppStoreVersionRetrieveParams,
  AppStoreVersionRetrieveRoutingAppCoverageParams,
  AppStoreVersionRetrieveRoutingAppCoverageResponse,
  AppStoreVersionSubmission,
  AppStoreVersionUpdateParams,
  AppStoreVersions,
  BuildWithoutIncludes,
  CustomerReviews,
} from './resources/app-store-versions/app-store-versions';
import {
  App,
  AppListParams,
  AppListResponse,
  AppResponse,
  AppRetrieveAccessibilityDeclarationsParams,
  AppRetrieveAccessibilityDeclarationsResponse,
  AppRetrieveAlternativeDistributionKeyParams,
  AppRetrieveAnalyticsReportRequestsParams,
  AppRetrieveAnalyticsReportRequestsResponse,
  AppRetrieveAppAvailabilityV2Params,
  AppRetrieveAppClipsParams,
  AppRetrieveAppClipsResponse,
  AppRetrieveAppCustomProductPagesParams,
  AppRetrieveAppCustomProductPagesResponse,
  AppRetrieveAppEncryptionDeclarationsParams,
  AppRetrieveAppEventsParams,
  AppRetrieveAppEventsResponse,
  AppRetrieveAppInfosParams,
  AppRetrieveAppInfosResponse,
  AppRetrieveAppPricePointsParams,
  AppRetrieveAppPriceScheduleParams,
  AppRetrieveAppStoreVersionExperimentsV2Params,
  AppRetrieveAppStoreVersionsParams,
  AppRetrieveAppStoreVersionsResponse,
  AppRetrieveBackgroundAssetsParams,
  AppRetrieveBackgroundAssetsResponse,
  AppRetrieveBetaAppLocalizationsParams,
  AppRetrieveBetaAppLocalizationsResponse,
  AppRetrieveBetaAppReviewDetailParams,
  AppRetrieveBetaAppReviewDetailResponse,
  AppRetrieveBetaFeedbackCrashSubmissionsParams,
  AppRetrieveBetaFeedbackCrashSubmissionsResponse,
  AppRetrieveBetaFeedbackScreenshotSubmissionsParams,
  AppRetrieveBetaFeedbackScreenshotSubmissionsResponse,
  AppRetrieveBetaGroupsParams,
  AppRetrieveBetaLicenseAgreementParams,
  AppRetrieveBetaLicenseAgreementResponse,
  AppRetrieveBuildsParams,
  AppRetrieveCiProductParams,
  AppRetrieveCustomerReviewSummarizationsParams,
  AppRetrieveCustomerReviewSummarizationsResponse,
  AppRetrieveCustomerReviewsParams,
  AppRetrieveEndUserLicenseAgreementParams,
  AppRetrieveEndUserLicenseAgreementResponse,
  AppRetrieveGameCenterDetailParams,
  AppRetrieveGameCenterEnabledVersionsParams,
  AppRetrieveInAppPurchasesParams,
  AppRetrieveInAppPurchasesResponse,
  AppRetrieveInAppPurchasesV2Params,
  AppRetrieveInAppPurchasesV2Response,
  AppRetrieveMarketplaceSearchDetailParams,
  AppRetrieveParams,
  AppRetrievePerfPowerMetricsParams,
  AppRetrievePreReleaseVersionsParams,
  AppRetrievePreReleaseVersionsResponse,
  AppRetrievePromotedPurchasesParams,
  AppRetrievePromotedPurchasesResponse,
  AppRetrieveReviewSubmissionsParams,
  AppRetrieveSubscriptionGracePeriodParams,
  AppRetrieveSubscriptionGroupsParams,
  AppRetrieveSubscriptionGroupsResponse,
  AppRetrieveWebhooksParams,
  AppRetrieveWebhooksResponse,
  AppUpdateParams,
  Apps,
  BetaGroupsWithoutIncludesResponse,
  BuildsWithoutIncludesResponse,
  GameCenterEnabledVersion,
  GameCenterEnabledVersionsResponse,
  MetricCategory,
  MetricsInsight,
  SubscriptionStatusURLVersion,
  XcodeMetrics,
} from './resources/apps/apps';
import {
  BackgroundAssetVersion,
  BackgroundAssetVersionCreateParams,
  BackgroundAssetVersionListUploadFilesParams,
  BackgroundAssetVersionListUploadFilesResponse,
  BackgroundAssetVersionResponse,
  BackgroundAssetVersionRetrieveParams,
  BackgroundAssetVersions,
} from './resources/background-asset-versions/background-asset-versions';
import {
  BackgroundAsset,
  BackgroundAssetCreateParams,
  BackgroundAssetListVersionsParams,
  BackgroundAssetListVersionsResponse,
  BackgroundAssetResponse,
  BackgroundAssetRetrieveParams,
  BackgroundAssets,
} from './resources/background-assets/background-assets';
import {
  BetaAppLocalization,
  BetaAppLocalizationCreateParams,
  BetaAppLocalizationListParams,
  BetaAppLocalizationListResponse,
  BetaAppLocalizationResponse,
  BetaAppLocalizationRetrieveAppParams,
  BetaAppLocalizationRetrieveParams,
  BetaAppLocalizationUpdateParams,
  BetaAppLocalizations,
} from './resources/beta-app-localizations/beta-app-localizations';
import {
  BetaAppReviewDetail,
  BetaAppReviewDetailListParams,
  BetaAppReviewDetailListResponse,
  BetaAppReviewDetailResponse,
  BetaAppReviewDetailRetrieveAppParams,
  BetaAppReviewDetailRetrieveParams,
  BetaAppReviewDetailUpdateParams,
  BetaAppReviewDetails,
} from './resources/beta-app-review-details/beta-app-review-details';
import {
  BetaAppReviewSubmission,
  BetaAppReviewSubmissionCreateParams,
  BetaAppReviewSubmissionListParams,
  BetaAppReviewSubmissionListResponse,
  BetaAppReviewSubmissionResponse,
  BetaAppReviewSubmissionRetrieveBuildParams,
  BetaAppReviewSubmissionRetrieveParams,
  BetaAppReviewSubmissions,
} from './resources/beta-app-review-submissions/beta-app-review-submissions';
import {
  BetaBuildLocalization,
  BetaBuildLocalizationCreateParams,
  BetaBuildLocalizationListParams,
  BetaBuildLocalizationListResponse,
  BetaBuildLocalizationResponse,
  BetaBuildLocalizationRetrieveBuildParams,
  BetaBuildLocalizationRetrieveParams,
  BetaBuildLocalizationUpdateParams,
  BetaBuildLocalizations,
} from './resources/beta-build-localizations/beta-build-localizations';
import {
  BetaFeedbackCrashSubmission,
  BetaFeedbackCrashSubmissionGetCrashLogParams,
  BetaFeedbackCrashSubmissionRetrieveParams,
  BetaFeedbackCrashSubmissionRetrieveResponse,
  BetaFeedbackCrashSubmissions,
  DeviceConnectionType,
} from './resources/beta-feedback-crash-submissions/beta-feedback-crash-submissions';
import {
  BetaGroup,
  BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildParams,
  BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse,
  BetaGroupCreateParams,
  BetaGroupListBetaRecruitmentCriteriaParams,
  BetaGroupListParams,
  BetaGroupListResponse,
  BetaGroupResponse,
  BetaGroupRetrieveAppParams,
  BetaGroupRetrieveParams,
  BetaGroupUpdateParams,
  BetaGroups,
  BetaTestersWithoutIncludesResponse,
} from './resources/beta-groups/beta-groups';
import {
  BetaLicenseAgreement,
  BetaLicenseAgreementListParams,
  BetaLicenseAgreementListResponse,
  BetaLicenseAgreementResponse,
  BetaLicenseAgreementRetrieveAppParams,
  BetaLicenseAgreementRetrieveParams,
  BetaLicenseAgreementUpdateParams,
  BetaLicenseAgreements,
} from './resources/beta-license-agreements/beta-license-agreements';
import {
  AppsWithoutIncludesResponse,
  BetaTester,
  BetaTesterCreateParams,
  BetaTesterListAppsParams,
  BetaTesterListBetaGroupsParams,
  BetaTesterListBuildsParams,
  BetaTesterListParams,
  BetaTesterListResponse,
  BetaTesterResponse,
  BetaTesterRetrieveParams,
  BetaTesters,
} from './resources/beta-testers/beta-testers';
import {
  BuildBetaDetail,
  BuildBetaDetailListParams,
  BuildBetaDetailListResponse,
  BuildBetaDetailResponse,
  BuildBetaDetailRetrieveBuildParams,
  BuildBetaDetailRetrieveParams,
  BuildBetaDetailUpdateParams,
  BuildBetaDetails,
} from './resources/build-beta-details/build-beta-details';
import {
  AppClipDomainStatus,
  BuildBundleRetrieveAppClipDomainCacheStatusParams,
  BuildBundleRetrieveAppClipDomainDebugStatusParams,
  BuildBundleRetrieveBetaAppClipInvocationsParams,
  BuildBundleRetrieveBetaAppClipInvocationsResponse,
  BuildBundleRetrieveBuildBundleFileSizesParams,
  BuildBundleRetrieveBuildBundleFileSizesResponse,
  BuildBundles,
} from './resources/build-bundles/build-bundles';
import {
  Build,
  BuildBundle,
  BuildIcon,
  BuildListParams,
  BuildResponse,
  BuildRetrieveAppParams,
  BuildRetrieveAppStoreVersionParams,
  BuildRetrieveBetaAppReviewSubmissionParams,
  BuildRetrieveBetaAppReviewSubmissionResponse,
  BuildRetrieveBetaBuildLocalizationsParams,
  BuildRetrieveBetaBuildLocalizationsResponse,
  BuildRetrieveBuildBetaDetailParams,
  BuildRetrieveDiagnosticSignaturesParams,
  BuildRetrieveDiagnosticSignaturesResponse,
  BuildRetrieveIconsParams,
  BuildRetrieveIconsResponse,
  BuildRetrieveIndividualTestersParams,
  BuildRetrieveParams,
  BuildRetrievePerfPowerMetricsParams,
  BuildRetrievePreReleaseVersionParams,
  BuildRetrievePreReleaseVersionResponse,
  BuildUpdateParams,
  Builds,
  BuildsResponse,
} from './resources/builds/builds';
import {
  BundleID,
  BundleIDCreateParams,
  BundleIDListParams,
  BundleIDListResponse,
  BundleIDPlatform,
  BundleIDResponse,
  BundleIDRetrieveAppParams,
  BundleIDRetrieveBundleIDCapabilitiesParams,
  BundleIDRetrieveBundleIDCapabilitiesResponse,
  BundleIDRetrieveParams,
  BundleIDRetrieveProfilesParams,
  BundleIDRetrieveProfilesResponse,
  BundleIDUpdateParams,
  BundleIDs,
} from './resources/bundle-ids/bundle-ids';
import {
  Certificate,
  CertificateCreateParams,
  CertificateListParams,
  CertificateResponse,
  CertificateRetrieveParams,
  CertificateRetrievePassTypeIDParams,
  CertificateType,
  CertificateUpdateParams,
  Certificates,
  CertificatesResponse,
} from './resources/certificates/certificates';
import {
  CiBuildAction,
  CiBuildActionListArtifactsParams,
  CiBuildActionListArtifactsResponse,
  CiBuildActionListIssuesParams,
  CiBuildActionListIssuesResponse,
  CiBuildActionListTestResultsParams,
  CiBuildActionListTestResultsResponse,
  CiBuildActionRetrieveBuildRunParams,
  CiBuildActionRetrieveParams,
  CiBuildActionRetrieveResponse,
  CiBuildActions,
  CiCompletionStatus,
  CiExecutionProgress,
  CiIssueCounts,
} from './resources/ci-build-actions/ci-build-actions';
import {
  CiBuildRun,
  CiBuildRunCreateParams,
  CiBuildRunListActionsParams,
  CiBuildRunListActionsResponse,
  CiBuildRunListBuildsParams,
  CiBuildRunResponse,
  CiBuildRunRetrieveParams,
  CiBuildRuns,
  CiGitUser,
} from './resources/ci-build-runs/ci-build-runs';
import {
  CiMacOsVersion,
  CiMacOsVersionListParams,
  CiMacOsVersionListXcodeVersionsParams,
  CiMacOsVersionRetrieveParams,
  CiMacOsVersionRetrieveResponse,
  CiMacOsVersions,
  CiMacOsVersionsResponse,
} from './resources/ci-mac-os-versions/ci-mac-os-versions';
import {
  CiBuildRuns as CiProductsAPICiBuildRuns,
  CiProductDetails,
  CiProductListBuildRunsParams,
  CiProductListParams,
  CiProductListResponse,
  CiProductListWorkflowsParams,
  CiProductListWorkflowsResponse,
  CiProductResponse,
  CiProductRetrieveAdditionalRepositoriesParams,
  CiProductRetrieveAppParams,
  CiProductRetrieveParams,
  CiProductRetrievePrimaryRepositoriesParams,
  CiProducts,
} from './resources/ci-products/ci-products';
import {
  BuildAudienceType,
  CiAction,
  CiActionType,
  CiBranchPatterns,
  CiBranchStartCondition,
  CiFilesAndFoldersRule,
  CiManualBranchStartCondition,
  CiManualPullRequestStartCondition,
  CiManualTagStartCondition,
  CiPullRequestStartCondition,
  CiScheduledStartCondition,
  CiTagPatterns,
  CiTagStartCondition,
  CiWorkflow,
  CiWorkflowCreateParams,
  CiWorkflowListBuildRunsParams,
  CiWorkflowResponse,
  CiWorkflowRetrieveParams,
  CiWorkflowRetrieveRepositoryParams,
  CiWorkflowUpdateParams,
  CiWorkflows,
} from './resources/ci-workflows/ci-workflows';
import {
  CiTestDestinationKind,
  CiXcodeVersion,
  CiXcodeVersionListMacOsVersionsParams,
  CiXcodeVersionListParams,
  CiXcodeVersionRetrieveParams,
  CiXcodeVersionRetrieveResponse,
  CiXcodeVersions,
} from './resources/ci-xcode-versions/ci-xcode-versions';
import {
  CustomerReview,
  CustomerReviewRetrieveParams,
  CustomerReviewRetrieveResponse,
  CustomerReviewRetrieveResponseParams,
  CustomerReviews as CustomerReviewsAPICustomerReviews,
} from './resources/customer-reviews/customer-reviews';
import {
  EndUserLicenseAgreement,
  EndUserLicenseAgreementCreateParams,
  EndUserLicenseAgreementListTerritoriesParams,
  EndUserLicenseAgreementListTerritoriesResponse,
  EndUserLicenseAgreementResponse,
  EndUserLicenseAgreementRetrieveParams,
  EndUserLicenseAgreementUpdateParams,
  EndUserLicenseAgreements,
} from './resources/end-user-license-agreements/end-user-license-agreements';
import {
  AchievementLocalization,
  AchievementLocalizationResponse,
  GameCenterAchievementLocalizationCreateParams,
  GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams,
  GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams,
  GameCenterAchievementLocalizationRetrieveParams,
  GameCenterAchievementLocalizationUpdateParams,
  GameCenterAchievementLocalizations,
} from './resources/game-center-achievement-localizations/game-center-achievement-localizations';
import {
  AchievementRecord,
  AchievementReleases,
  AchievementResponse,
  GameCenterAchievementCreateParams,
  GameCenterAchievementListLocalizationsParams,
  GameCenterAchievementListLocalizationsResponse,
  GameCenterAchievementListReleasesParams,
  GameCenterAchievementRetrieveParams,
  GameCenterAchievementUpdateParams,
  GameCenterAchievements,
} from './resources/game-center-achievements/game-center-achievements';
import {
  GameCenterActivities,
  GameCenterActivity,
  GameCenterActivityCreateParams,
  GameCenterActivityListVersionsParams,
  GameCenterActivityListVersionsResponse,
  GameCenterActivityResponse,
  GameCenterActivityRetrieveParams,
  GameCenterActivityUpdateParams,
} from './resources/game-center-activities/game-center-activities';
import {
  GameCenterActivityLocalization,
  GameCenterActivityLocalizationCreateParams,
  GameCenterActivityLocalizationResponse,
  GameCenterActivityLocalizationRetrieveImageParams,
  GameCenterActivityLocalizationRetrieveParams,
  GameCenterActivityLocalizationUpdateParams,
  GameCenterActivityLocalizations,
} from './resources/game-center-activity-localizations/game-center-activity-localizations';
import {
  GameCenterActivityVersion,
  GameCenterActivityVersionCreateParams,
  GameCenterActivityVersionListLocalizationsParams,
  GameCenterActivityVersionListLocalizationsResponse,
  GameCenterActivityVersionResponse,
  GameCenterActivityVersionRetrieveDefaultImageParams,
  GameCenterActivityVersionRetrieveParams,
  GameCenterActivityVersionUpdateParams,
  GameCenterActivityVersions,
  GameCenterVersionState,
} from './resources/game-center-activity-versions/game-center-activity-versions';
import {
  GameCenterAppVersion,
  GameCenterAppVersionCreateParams,
  GameCenterAppVersionListCompatibilityVersionsParams,
  GameCenterAppVersionResponse,
  GameCenterAppVersionRetrieveAppStoreVersionParams,
  GameCenterAppVersionRetrieveParams,
  GameCenterAppVersionUpdateParams,
  GameCenterAppVersions,
  GameCenterAppVersionsResponse,
} from './resources/game-center-app-versions/game-center-app-versions';
import {
  GameCenterChallengeLocalization,
  GameCenterChallengeLocalizationCreateParams,
  GameCenterChallengeLocalizationResponse,
  GameCenterChallengeLocalizationRetrieveImageParams,
  GameCenterChallengeLocalizationRetrieveParams,
  GameCenterChallengeLocalizationUpdateParams,
  GameCenterChallengeLocalizations,
} from './resources/game-center-challenge-localizations/game-center-challenge-localizations';
import {
  GameCenterChallengeVersion,
  GameCenterChallengeVersionCreateParams,
  GameCenterChallengeVersionListLocalizationsParams,
  GameCenterChallengeVersionListLocalizationsResponse,
  GameCenterChallengeVersionResponse,
  GameCenterChallengeVersionRetrieveDefaultImageParams,
  GameCenterChallengeVersionRetrieveParams,
  GameCenterChallengeVersions,
} from './resources/game-center-challenge-versions/game-center-challenge-versions';
import {
  GameCenterChallenge,
  GameCenterChallengeCreateParams,
  GameCenterChallengeListVersionsParams,
  GameCenterChallengeListVersionsResponse,
  GameCenterChallengeResponse,
  GameCenterChallengeRetrieveParams,
  GameCenterChallengeUpdateParams,
  GameCenterChallenges,
} from './resources/game-center-challenges/game-center-challenges';
import {
  GameCenterAchievements as GameCenterDetailsAPIGameCenterAchievements,
  GameCenterActivities as GameCenterDetailsAPIGameCenterActivities,
  GameCenterChallenges as GameCenterDetailsAPIGameCenterChallenges,
  GameCenterDetailDetail,
  GameCenterDetailGameCenterDetailsParams,
  GameCenterDetailResponse,
  GameCenterDetailRetrieveAchievementReleasesParams,
  GameCenterDetailRetrieveActivityReleasesParams,
  GameCenterDetailRetrieveActivityReleasesResponse,
  GameCenterDetailRetrieveChallengeReleasesParams,
  GameCenterDetailRetrieveChallengeReleasesResponse,
  GameCenterDetailRetrieveGameCenterAchievementsParams,
  GameCenterDetailRetrieveGameCenterActivitiesParams,
  GameCenterDetailRetrieveGameCenterAppVersionsParams,
  GameCenterDetailRetrieveGameCenterChallengesParams,
  GameCenterDetailRetrieveGameCenterGroupParams,
  GameCenterDetailRetrieveGameCenterLeaderboardSetsParams,
  GameCenterDetailRetrieveGameCenterLeaderboardsParams,
  GameCenterDetailRetrieveLeaderboardReleasesParams,
  GameCenterDetailRetrieveLeaderboardSetReleasesParams,
  GameCenterDetailRetrieveParams,
  GameCenterDetailUpdateParams,
  GameCenterDetails,
  GameCenterLeaderboardReleases as GameCenterDetailsAPIGameCenterLeaderboardReleases,
  GameCenterLeaderboardSetReleases as GameCenterDetailsAPIGameCenterLeaderboardSetReleases,
  GameCenterLeaderboardSets,
  GameCenterLeaderboards,
} from './resources/game-center-details/game-center-details';
import {
  GameCenterEnabledVersionListCompatibleVersionsParams,
  GameCenterEnabledVersions,
} from './resources/game-center-enabled-versions/game-center-enabled-versions';
import {
  GameCenterGroup,
  GameCenterGroupCreateParams,
  GameCenterGroupListGameCenterAchievementsParams,
  GameCenterGroupListGameCenterActivitiesParams,
  GameCenterGroupListGameCenterChallengesParams,
  GameCenterGroupListGameCenterLeaderboardSetsParams,
  GameCenterGroupListGameCenterLeaderboardsParams,
  GameCenterGroupListParams,
  GameCenterGroupListResponse,
  GameCenterGroupResponse,
  GameCenterGroupRetrieveGameCenterDetailsParams,
  GameCenterGroupRetrieveGameCenterDetailsResponse,
  GameCenterGroupRetrieveParams,
  GameCenterGroupUpdateParams,
  GameCenterGroups,
} from './resources/game-center-groups/game-center-groups';
import {
  GameCenterLeaderboardLocalizationCreateParams,
  GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams,
  GameCenterLeaderboardLocalizationRetrieveParams,
  GameCenterLeaderboardLocalizationUpdateParams,
  GameCenterLeaderboardLocalizations,
  LeaderboardFormatter,
  LeaderboardLocalization,
  LeaderboardLocalizationResponse,
} from './resources/game-center-leaderboard-localizations/game-center-leaderboard-localizations';
import {
  GameCenterLeaderboardSetLocalizationCreateParams,
  GameCenterLeaderboardSetLocalizationRetrieveImageParams,
  GameCenterLeaderboardSetLocalizationRetrieveParams,
  GameCenterLeaderboardSetLocalizationUpdateParams,
  GameCenterLeaderboardSetLocalizations,
  LeaderboardSetLocalization,
  LeaderboardSetLocalizationResponse,
} from './resources/game-center-leaderboard-set-localizations/game-center-leaderboard-set-localizations';
import {
  GameCenterLeaderboardSetMemberLocalizationCreateParams,
  GameCenterLeaderboardSetMemberLocalizationListParams,
  GameCenterLeaderboardSetMemberLocalizationListResponse,
  GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams,
  GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams,
  GameCenterLeaderboardSetMemberLocalizationUpdateParams,
  GameCenterLeaderboardSetMemberLocalizations,
  LeaderboardSetMemberLocalization,
  LeaderboardSetMemberLocalizationResponse,
} from './resources/game-center-leaderboard-set-member-localizations/game-center-leaderboard-set-member-localizations';
import {
  GameCenterLeaderboardSet,
  GameCenterLeaderboardSetCreateParams,
  GameCenterLeaderboardSetListGameCenterLeaderboardsParams,
  GameCenterLeaderboardSetListLocalizationsParams,
  GameCenterLeaderboardSetListLocalizationsResponse,
  GameCenterLeaderboardSetListReleasesParams,
  GameCenterLeaderboardSetResponse,
  GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams,
  GameCenterLeaderboardSetRetrieveParams,
  GameCenterLeaderboardSetUpdateParams,
  GameCenterLeaderboardSets as GameCenterLeaderboardSetsAPIGameCenterLeaderboardSets,
} from './resources/game-center-leaderboard-sets/game-center-leaderboard-sets';
import {
  GameCenterLeaderboard,
  GameCenterLeaderboardCreateParams,
  GameCenterLeaderboardListLocalizationsParams,
  GameCenterLeaderboardListLocalizationsResponse,
  GameCenterLeaderboardListReleasesParams,
  GameCenterLeaderboardResponse,
  GameCenterLeaderboardRetrieveParams,
  GameCenterLeaderboardUpdateParams,
  GameCenterLeaderboards as GameCenterLeaderboardsAPIGameCenterLeaderboards,
} from './resources/game-center-leaderboards/game-center-leaderboards';
import {
  GameCenterMatchmakingQueueCreateParams,
  GameCenterMatchmakingQueueListParams,
  GameCenterMatchmakingQueueRetrieveParams,
  GameCenterMatchmakingQueueUpdateParams,
  GameCenterMatchmakingQueues,
  MatchmakingQueue,
  MatchmakingQueueResponse,
  MatchmakingQueuesResponse,
} from './resources/game-center-matchmaking-queues/game-center-matchmaking-queues';
import {
  GameCenterMatchmakingRuleSetCreateParams,
  GameCenterMatchmakingRuleSetListMatchmakingQueuesParams,
  GameCenterMatchmakingRuleSetListParams,
  GameCenterMatchmakingRuleSetListResponse,
  GameCenterMatchmakingRuleSetListRulesParams,
  GameCenterMatchmakingRuleSetListRulesResponse,
  GameCenterMatchmakingRuleSetListTeamsParams,
  GameCenterMatchmakingRuleSetListTeamsResponse,
  GameCenterMatchmakingRuleSetRetrieveParams,
  GameCenterMatchmakingRuleSetUpdateParams,
  GameCenterMatchmakingRuleSets,
  RuleSet,
  RuleSetResponse,
} from './resources/game-center-matchmaking-rule-sets/game-center-matchmaking-rule-sets';
import {
  GameCenterMatchmakingRuleCreateParams,
  GameCenterMatchmakingRuleUpdateParams,
  GameCenterMatchmakingRules,
  MatchmakingRule,
  MatchmakingRuleResponse,
} from './resources/game-center-matchmaking-rules/game-center-matchmaking-rules';
import {
  InAppPurchaseAvailabilities,
  InAppPurchaseAvailability,
  InAppPurchaseAvailabilityCreateParams,
  InAppPurchaseAvailabilityListAvailableTerritoriesParams,
  InAppPurchaseAvailabilityResponse,
  InAppPurchaseAvailabilityRetrieveParams,
} from './resources/in-app-purchase-availabilities/in-app-purchase-availabilities';
import {
  InAppPurchasePricePointListEqualizationsParams,
  InAppPurchasePricePoints,
  PricePoint,
  PricePointsResponse,
} from './resources/in-app-purchase-price-points/in-app-purchase-price-points';
import {
  InAppPurchasePriceScheduleCreateParams,
  InAppPurchasePriceScheduleListAutomaticPricesParams,
  InAppPurchasePriceScheduleListManualPricesParams,
  InAppPurchasePriceScheduleRetrieveBaseTerritoryParams,
  InAppPurchasePriceScheduleRetrieveParams,
  InAppPurchasePriceSchedules,
  Price,
  PriceSchedule,
  PriceScheduleResponse,
  PricesResponse,
} from './resources/in-app-purchase-price-schedules/in-app-purchase-price-schedules';
import {
  InAppPurchase,
  InAppPurchaseInAppPurchasesParams,
  InAppPurchaseRetrieveAppStoreReviewScreenshotParams,
  InAppPurchaseRetrieveContentParams,
  InAppPurchaseRetrieveIapPriceScheduleParams,
  InAppPurchaseRetrieveImagesParams,
  InAppPurchaseRetrieveImagesResponse,
  InAppPurchaseRetrieveInAppPurchaseAvailabilityParams,
  InAppPurchaseRetrieveInAppPurchaseLocalizationsParams,
  InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse,
  InAppPurchaseRetrieveParams,
  InAppPurchaseRetrievePricePointsParams,
  InAppPurchaseRetrievePromotedPurchaseParams,
  InAppPurchaseType,
  InAppPurchaseUpdateParams,
  InAppPurchaseV2,
  InAppPurchaseV2Response,
  InAppPurchases,
} from './resources/in-app-purchases/in-app-purchases';
import {
  MerchantID,
  MerchantIDCreateParams,
  MerchantIDListCertificatesParams,
  MerchantIDListParams,
  MerchantIDListResponse,
  MerchantIDResponse,
  MerchantIDRetrieveParams,
  MerchantIDUpdateParams,
  MerchantIDs,
} from './resources/merchant-ids/merchant-ids';
import {
  PassTypeID,
  PassTypeIDCreateParams,
  PassTypeIDListCertificatesParams,
  PassTypeIDListParams,
  PassTypeIDListResponse,
  PassTypeIDResponse,
  PassTypeIDRetrieveParams,
  PassTypeIDUpdateParams,
  PassTypeIDs,
} from './resources/pass-type-ids/pass-type-ids';
import {
  PreReleaseVersionListBuildsParams,
  PreReleaseVersionListParams,
  PreReleaseVersionListResponse,
  PreReleaseVersionRetrieveAppParams,
  PreReleaseVersionRetrieveParams,
  PreReleaseVersionRetrieveResponse,
  PreReleaseVersions,
  PrereleaseVersion,
} from './resources/pre-release-versions/pre-release-versions';
import {
  Profile,
  ProfileCreateParams,
  ProfileListCertificatesParams,
  ProfileListCertificatesResponse,
  ProfileListDevicesParams,
  ProfileListDevicesResponse,
  ProfileListParams,
  ProfileListResponse,
  ProfileResponse,
  ProfileRetrieveBundleIDParams,
  ProfileRetrieveBundleIDResponse,
  ProfileRetrieveParams,
  Profiles,
} from './resources/profiles/profiles';
import {
  ReviewSubmission,
  ReviewSubmissionCreateParams,
  ReviewSubmissionListItemsParams,
  ReviewSubmissionListItemsResponse,
  ReviewSubmissionListParams,
  ReviewSubmissionResponse,
  ReviewSubmissionRetrieveParams,
  ReviewSubmissionUpdateParams,
  ReviewSubmissions,
  ReviewSubmissionsResponse,
} from './resources/review-submissions/review-submissions';
import {
  ScmProvider,
  ScmProviderListParams,
  ScmProviderListRepositoriesParams,
  ScmProviderListResponse,
  ScmProviderRetrieveParams,
  ScmProviderRetrieveResponse,
  ScmProviders,
} from './resources/scm-providers/scm-providers';
import {
  ScmRepositories,
  ScmRepositoryDetails,
  ScmRepositoryListGitReferencesParams,
  ScmRepositoryListGitReferencesResponse,
  ScmRepositoryListParams,
  ScmRepositoryListPullRequestsParams,
  ScmRepositoryListPullRequestsResponse,
  ScmRepositoryResponse,
  ScmRepositoryRetrieveParams,
} from './resources/scm-repositories/scm-repositories';
import {
  SubscriptionAvailabilities,
  SubscriptionAvailability,
  SubscriptionAvailabilityCreateParams,
  SubscriptionAvailabilityListAvailableTerritoriesParams,
  SubscriptionAvailabilityResponse,
  SubscriptionAvailabilityRetrieveParams,
} from './resources/subscription-availabilities/subscription-availabilities';
import {
  SubscriptionGroup,
  SubscriptionGroupCreateParams,
  SubscriptionGroupListLocalizationsParams,
  SubscriptionGroupListLocalizationsResponse,
  SubscriptionGroupListSubscriptionsParams,
  SubscriptionGroupListSubscriptionsResponse,
  SubscriptionGroupResponse,
  SubscriptionGroupRetrieveParams,
  SubscriptionGroupUpdateParams,
  SubscriptionGroups,
} from './resources/subscription-groups/subscription-groups';
import {
  SubscriptionCustomerEligibility,
  SubscriptionOfferCode,
  SubscriptionOfferCodeCreateParams,
  SubscriptionOfferCodeListCustomCodesParams,
  SubscriptionOfferCodeListCustomCodesResponse,
  SubscriptionOfferCodeListOneTimeUseCodesParams,
  SubscriptionOfferCodeListOneTimeUseCodesResponse,
  SubscriptionOfferCodeListPricesParams,
  SubscriptionOfferCodeListPricesResponse,
  SubscriptionOfferCodePrice,
  SubscriptionOfferCodeResponse,
  SubscriptionOfferCodeRetrieveParams,
  SubscriptionOfferCodeUpdateParams,
  SubscriptionOfferCodes,
  SubscriptionOfferEligibility,
} from './resources/subscription-offer-codes/subscription-offer-codes';
import {
  SubscriptionPricePoint,
  SubscriptionPricePointListEqualizationsParams,
  SubscriptionPricePointRetrieveParams,
  SubscriptionPricePointRetrieveResponse,
  SubscriptionPricePoints,
  SubscriptionPricePointsResponse,
} from './resources/subscription-price-points/subscription-price-points';
import {
  SubscriptionPromotionalOffer,
  SubscriptionPromotionalOfferCreateParams,
  SubscriptionPromotionalOfferListPricesParams,
  SubscriptionPromotionalOfferListPricesResponse,
  SubscriptionPromotionalOfferPrice,
  SubscriptionPromotionalOfferPriceInlineCreate,
  SubscriptionPromotionalOfferResponse,
  SubscriptionPromotionalOfferRetrieveParams,
  SubscriptionPromotionalOfferUpdateParams,
  SubscriptionPromotionalOffers,
} from './resources/subscription-promotional-offers/subscription-promotional-offers';
import {
  Subscription,
  SubscriptionCheckSubscriptionAvailabilityParams,
  SubscriptionCreateParams,
  SubscriptionListImagesParams,
  SubscriptionListImagesResponse,
  SubscriptionListIntroductoryOffersParams,
  SubscriptionListIntroductoryOffersResponse,
  SubscriptionListOfferCodesParams,
  SubscriptionListOfferCodesResponse,
  SubscriptionListPricePointsParams,
  SubscriptionListPricesParams,
  SubscriptionListPricesResponse,
  SubscriptionListPromotionalOffersParams,
  SubscriptionListPromotionalOffersResponse,
  SubscriptionListSubscriptionLocalizationsParams,
  SubscriptionListSubscriptionLocalizationsResponse,
  SubscriptionListWinBackOffersParams,
  SubscriptionListWinBackOffersResponse,
  SubscriptionResponse,
  SubscriptionRetrieveAppStoreReviewScreenshotParams,
  SubscriptionRetrieveParams,
  SubscriptionRetrievePromotedPurchaseParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './resources/subscriptions/subscriptions';
import {
  UserInvitation,
  UserInvitationCreateParams,
  UserInvitationListParams,
  UserInvitationListResponse,
  UserInvitationResponse,
  UserInvitationRetrieveParams,
  UserInvitationRetrieveVisibleAppsParams,
  UserInvitations,
  UserRole,
} from './resources/user-invitations/user-invitations';
import {
  User,
  UserGetVisibleAppsParams,
  UserListParams,
  UserListResponse,
  UserResponse,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
} from './resources/users/users';
import {
  Webhook,
  WebhookCreateParams,
  WebhookEventType,
  WebhookListDeliveriesParams,
  WebhookListDeliveriesResponse,
  WebhookResponse,
  WebhookRetrieveParams,
  WebhookUpdateParams,
  Webhooks,
} from './resources/webhooks/webhooks';
import {
  IntegerRange,
  WinBackOffer,
  WinBackOfferCreateParams,
  WinBackOfferListPricesParams,
  WinBackOfferListPricesResponse,
  WinBackOfferPrice,
  WinBackOfferResponse,
  WinBackOfferRetrieveParams,
  WinBackOfferUpdateParams,
  WinBackOffers,
} from './resources/win-back-offers/win-back-offers';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['APP_STORE_CONNECT_API_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['APP_STORE_CONNECT_API_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['APP_STORE_CONNECT_API_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the App Store Connect API API.
 */
export class AppStoreConnectAPI {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the App Store Connect API API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['APP_STORE_CONNECT_API_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['APP_STORE_CONNECT_API_BASE_URL'] ?? https://api.appstoreconnect.apple.com/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('APP_STORE_CONNECT_API_BASE_URL'),
    apiKey = readEnv('APP_STORE_CONNECT_API_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.AppStoreConnectAPIError(
        "The APP_STORE_CONNECT_API_API_KEY environment variable is missing or empty; either provide it, or instantiate the AppStoreConnectAPI client with an apiKey option, like new AppStoreConnectAPI({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.appstoreconnect.apple.com/`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? AppStoreConnectAPI.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('APP_STORE_CONNECT_API_LOG'), "process.env['APP_STORE_CONNECT_API_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    return new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.appstoreconnect.apple.com/';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static AppStoreConnectAPI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static AppStoreConnectAPIError = Errors.AppStoreConnectAPIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  accessibilityDeclarations: API.AccessibilityDeclarations = new API.AccessibilityDeclarations(this);
  actors: API.Actors = new API.Actors(this);
  ageRatingDeclarations: API.AgeRatingDeclarations = new API.AgeRatingDeclarations(this);
  alternativeDistributionDomains: API.AlternativeDistributionDomains = new API.AlternativeDistributionDomains(
    this,
  );
  alternativeDistributionKeys: API.AlternativeDistributionKeys = new API.AlternativeDistributionKeys(this);
  alternativeDistributionPackageDeltas: API.AlternativeDistributionPackageDeltas =
    new API.AlternativeDistributionPackageDeltas(this);
  alternativeDistributionPackageVariants: API.AlternativeDistributionPackageVariants =
    new API.AlternativeDistributionPackageVariants(this);
  alternativeDistributionPackageVersions: API.AlternativeDistributionPackageVersions =
    new API.AlternativeDistributionPackageVersions(this);
  alternativeDistributionPackages: API.AlternativeDistributionPackages =
    new API.AlternativeDistributionPackages(this);
  analyticsReportInstances: API.AnalyticsReportInstances = new API.AnalyticsReportInstances(this);
  analyticsReportRequests: API.AnalyticsReportRequests = new API.AnalyticsReportRequests(this);
  analyticsReportSegments: API.AnalyticsReportSegments = new API.AnalyticsReportSegments(this);
  analyticsReports: API.AnalyticsReports = new API.AnalyticsReports(this);
  appAvailabilities: API.AppAvailabilities = new API.AppAvailabilities(this);
  appCategories: API.AppCategories = new API.AppCategories(this);
  appClipAdvancedExperienceImages: API.AppClipAdvancedExperienceImages =
    new API.AppClipAdvancedExperienceImages(this);
  appClipAdvancedExperiences: API.AppClipAdvancedExperiences = new API.AppClipAdvancedExperiences(this);
  appClipAppStoreReviewDetails: API.AppClipAppStoreReviewDetails = new API.AppClipAppStoreReviewDetails(this);
  appClipDefaultExperienceLocalizations: API.AppClipDefaultExperienceLocalizations =
    new API.AppClipDefaultExperienceLocalizations(this);
  appClipDefaultExperiences: API.AppClipDefaultExperiences = new API.AppClipDefaultExperiences(this);
  appClipHeaderImages: API.AppClipHeaderImages = new API.AppClipHeaderImages(this);
  appClips: API.AppClips = new API.AppClips(this);
  appCustomProductPageLocalizations: API.AppCustomProductPageLocalizations =
    new API.AppCustomProductPageLocalizations(this);
  appCustomProductPageVersions: API.AppCustomProductPageVersions = new API.AppCustomProductPageVersions(this);
  appCustomProductPages: API.AppCustomProductPages = new API.AppCustomProductPages(this);
  appEncryptionDeclarationDocuments: API.AppEncryptionDeclarationDocuments =
    new API.AppEncryptionDeclarationDocuments(this);
  appEncryptionDeclarations: API.AppEncryptionDeclarations = new API.AppEncryptionDeclarations(this);
  appEventLocalizations: API.AppEventLocalizations = new API.AppEventLocalizations(this);
  appEventScreenshots: API.AppEventScreenshots = new API.AppEventScreenshots(this);
  appEventVideoClips: API.AppEventVideoClips = new API.AppEventVideoClips(this);
  appEvents: API.AppEvents = new API.AppEvents(this);
  appInfoLocalizations: API.AppInfoLocalizations = new API.AppInfoLocalizations(this);
  appInfos: API.AppInfos = new API.AppInfos(this);
  appPreviewSets: API.AppPreviewSets = new API.AppPreviewSets(this);
  appPreviews: API.AppPreviews = new API.AppPreviews(this);
  appPricePoints: API.AppPricePoints = new API.AppPricePoints(this);
  appPriceSchedules: API.AppPriceSchedules = new API.AppPriceSchedules(this);
  appScreenshotSets: API.AppScreenshotSets = new API.AppScreenshotSets(this);
  appScreenshots: API.AppScreenshots = new API.AppScreenshots(this);
  appStoreReviewAttachments: API.AppStoreReviewAttachments = new API.AppStoreReviewAttachments(this);
  appStoreReviewDetails: API.AppStoreReviewDetails = new API.AppStoreReviewDetails(this);
  appStoreVersionExperimentTreatmentLocalizations: API.AppStoreVersionExperimentTreatmentLocalizations =
    new API.AppStoreVersionExperimentTreatmentLocalizations(this);
  appStoreVersionExperimentTreatments: API.AppStoreVersionExperimentTreatments =
    new API.AppStoreVersionExperimentTreatments(this);
  appStoreVersionExperiments: API.AppStoreVersionExperiments = new API.AppStoreVersionExperiments(this);
  appStoreVersionLocalizations: API.AppStoreVersionLocalizations = new API.AppStoreVersionLocalizations(this);
  appStoreVersionPhasedReleases: API.AppStoreVersionPhasedReleases = new API.AppStoreVersionPhasedReleases(
    this,
  );
  appStoreVersionPromotions: API.AppStoreVersionPromotions = new API.AppStoreVersionPromotions(this);
  appStoreVersionReleaseRequests: API.AppStoreVersionReleaseRequests = new API.AppStoreVersionReleaseRequests(
    this,
  );
  appStoreVersionSubmissions: API.AppStoreVersionSubmissions = new API.AppStoreVersionSubmissions(this);
  appStoreVersions: API.AppStoreVersions = new API.AppStoreVersions(this);
  apps: API.Apps = new API.Apps(this);
  backgroundAssetUploadFiles: API.BackgroundAssetUploadFiles = new API.BackgroundAssetUploadFiles(this);
  backgroundAssetVersionInternalBetaReleases: API.BackgroundAssetVersionInternalBetaReleases =
    new API.BackgroundAssetVersionInternalBetaReleases(this);
  backgroundAssetVersions: API.BackgroundAssetVersions = new API.BackgroundAssetVersions(this);
  backgroundAssets: API.BackgroundAssets = new API.BackgroundAssets(this);
  betaAppClipInvocationLocalizations: API.BetaAppClipInvocationLocalizations =
    new API.BetaAppClipInvocationLocalizations(this);
  betaAppClipInvocations: API.BetaAppClipInvocations = new API.BetaAppClipInvocations(this);
  betaAppLocalizations: API.BetaAppLocalizations = new API.BetaAppLocalizations(this);
  betaAppReviewDetails: API.BetaAppReviewDetails = new API.BetaAppReviewDetails(this);
  betaAppReviewSubmissions: API.BetaAppReviewSubmissions = new API.BetaAppReviewSubmissions(this);
  betaBuildLocalizations: API.BetaBuildLocalizations = new API.BetaBuildLocalizations(this);
  betaCrashLogs: API.BetaCrashLogs = new API.BetaCrashLogs(this);
  betaFeedbackCrashSubmissions: API.BetaFeedbackCrashSubmissions = new API.BetaFeedbackCrashSubmissions(this);
  betaFeedbackScreenshotSubmissions: API.BetaFeedbackScreenshotSubmissions =
    new API.BetaFeedbackScreenshotSubmissions(this);
  betaGroups: API.BetaGroups = new API.BetaGroups(this);
  betaLicenseAgreements: API.BetaLicenseAgreements = new API.BetaLicenseAgreements(this);
  betaRecruitmentCriteria: API.BetaRecruitmentCriteria = new API.BetaRecruitmentCriteria(this);
  betaRecruitmentCriterionOptions: API.BetaRecruitmentCriterionOptions =
    new API.BetaRecruitmentCriterionOptions(this);
  betaTesterInvitations: API.BetaTesterInvitations = new API.BetaTesterInvitations(this);
  betaTesters: API.BetaTesters = new API.BetaTesters(this);
  buildBetaDetails: API.BuildBetaDetails = new API.BuildBetaDetails(this);
  buildBetaNotifications: API.BuildBetaNotifications = new API.BuildBetaNotifications(this);
  builds: API.Builds = new API.Builds(this);
  bundleIDCapabilities: API.BundleIDCapabilities = new API.BundleIDCapabilities(this);
  bundleIDs: API.BundleIDs = new API.BundleIDs(this);
  certificates: API.Certificates = new API.Certificates(this);
  ciArtifacts: API.CiArtifacts = new API.CiArtifacts(this);
  ciBuildActions: API.CiBuildActions = new API.CiBuildActions(this);
  ciBuildRuns: API.CiBuildRuns = new API.CiBuildRuns(this);
  ciIssues: API.CiIssues = new API.CiIssues(this);
  ciMacOsVersions: API.CiMacOsVersions = new API.CiMacOsVersions(this);
  ciProducts: API.CiProducts = new API.CiProducts(this);
  ciTestResults: API.CiTestResults = new API.CiTestResults(this);
  ciWorkflows: API.CiWorkflows = new API.CiWorkflows(this);
  ciXcodeVersions: API.CiXcodeVersions = new API.CiXcodeVersions(this);
  customerReviewResponses: API.CustomerReviewResponses = new API.CustomerReviewResponses(this);
  customerReviews: API.CustomerReviews = new API.CustomerReviews(this);
  devices: API.Devices = new API.Devices(this);
  endAppAvailabilityPreOrders: API.EndAppAvailabilityPreOrders = new API.EndAppAvailabilityPreOrders(this);
  endUserLicenseAgreements: API.EndUserLicenseAgreements = new API.EndUserLicenseAgreements(this);
  financeReports: API.FinanceReports = new API.FinanceReports(this);
  gameCenterAchievementImages: API.GameCenterAchievementImages = new API.GameCenterAchievementImages(this);
  gameCenterAchievementLocalizations: API.GameCenterAchievementLocalizations =
    new API.GameCenterAchievementLocalizations(this);
  gameCenterAchievementReleases: API.GameCenterAchievementReleases = new API.GameCenterAchievementReleases(
    this,
  );
  gameCenterAchievements: API.GameCenterAchievements = new API.GameCenterAchievements(this);
  gameCenterActivities: API.GameCenterActivities = new API.GameCenterActivities(this);
  gameCenterActivityImages: API.GameCenterActivityImages = new API.GameCenterActivityImages(this);
  gameCenterActivityLocalizations: API.GameCenterActivityLocalizations =
    new API.GameCenterActivityLocalizations(this);
  gameCenterActivityVersionReleases: API.GameCenterActivityVersionReleases =
    new API.GameCenterActivityVersionReleases(this);
  gameCenterActivityVersions: API.GameCenterActivityVersions = new API.GameCenterActivityVersions(this);
  gameCenterAppVersions: API.GameCenterAppVersions = new API.GameCenterAppVersions(this);
  gameCenterChallengeImages: API.GameCenterChallengeImages = new API.GameCenterChallengeImages(this);
  gameCenterChallengeLocalizations: API.GameCenterChallengeLocalizations =
    new API.GameCenterChallengeLocalizations(this);
  gameCenterChallengeVersionReleases: API.GameCenterChallengeVersionReleases =
    new API.GameCenterChallengeVersionReleases(this);
  gameCenterChallengeVersions: API.GameCenterChallengeVersions = new API.GameCenterChallengeVersions(this);
  gameCenterChallenges: API.GameCenterChallenges = new API.GameCenterChallenges(this);
  gameCenterDetails: API.GameCenterDetails = new API.GameCenterDetails(this);
  gameCenterGroups: API.GameCenterGroups = new API.GameCenterGroups(this);
  gameCenterLeaderboardEntrySubmissions: API.GameCenterLeaderboardEntrySubmissions =
    new API.GameCenterLeaderboardEntrySubmissions(this);
  gameCenterLeaderboardImages: API.GameCenterLeaderboardImages = new API.GameCenterLeaderboardImages(this);
  gameCenterLeaderboardLocalizations: API.GameCenterLeaderboardLocalizations =
    new API.GameCenterLeaderboardLocalizations(this);
  gameCenterLeaderboardReleases: API.GameCenterLeaderboardReleases = new API.GameCenterLeaderboardReleases(
    this,
  );
  gameCenterLeaderboardSetImages: API.GameCenterLeaderboardSetImages = new API.GameCenterLeaderboardSetImages(
    this,
  );
  gameCenterLeaderboardSetLocalizations: API.GameCenterLeaderboardSetLocalizations =
    new API.GameCenterLeaderboardSetLocalizations(this);
  gameCenterLeaderboardSetMemberLocalizations: API.GameCenterLeaderboardSetMemberLocalizations =
    new API.GameCenterLeaderboardSetMemberLocalizations(this);
  gameCenterLeaderboardSetReleases: API.GameCenterLeaderboardSetReleases =
    new API.GameCenterLeaderboardSetReleases(this);
  gameCenterLeaderboardSets: API.GameCenterLeaderboardSets = new API.GameCenterLeaderboardSets(this);
  gameCenterLeaderboards: API.GameCenterLeaderboards = new API.GameCenterLeaderboards(this);
  gameCenterMatchmakingQueues: API.GameCenterMatchmakingQueues = new API.GameCenterMatchmakingQueues(this);
  gameCenterMatchmakingRuleSetTests: API.GameCenterMatchmakingRuleSetTests =
    new API.GameCenterMatchmakingRuleSetTests(this);
  gameCenterMatchmakingRuleSets: API.GameCenterMatchmakingRuleSets = new API.GameCenterMatchmakingRuleSets(
    this,
  );
  gameCenterMatchmakingRules: API.GameCenterMatchmakingRules = new API.GameCenterMatchmakingRules(this);
  gameCenterMatchmakingTeams: API.GameCenterMatchmakingTeams = new API.GameCenterMatchmakingTeams(this);
  gameCenterPlayerAchievementSubmissions: API.GameCenterPlayerAchievementSubmissions =
    new API.GameCenterPlayerAchievementSubmissions(this);
  inAppPurchaseAppStoreReviewScreenshots: API.InAppPurchaseAppStoreReviewScreenshots =
    new API.InAppPurchaseAppStoreReviewScreenshots(this);
  inAppPurchaseAvailabilities: API.InAppPurchaseAvailabilities = new API.InAppPurchaseAvailabilities(this);
  inAppPurchaseContents: API.InAppPurchaseContents = new API.InAppPurchaseContents(this);
  inAppPurchaseImages: API.InAppPurchaseImages = new API.InAppPurchaseImages(this);
  inAppPurchaseLocalizations: API.InAppPurchaseLocalizations = new API.InAppPurchaseLocalizations(this);
  inAppPurchasePriceSchedules: API.InAppPurchasePriceSchedules = new API.InAppPurchasePriceSchedules(this);
  inAppPurchaseSubmissions: API.InAppPurchaseSubmissions = new API.InAppPurchaseSubmissions(this);
  inAppPurchases: API.InAppPurchases = new API.InAppPurchases(this);
  marketplaceSearchDetails: API.MarketplaceSearchDetails = new API.MarketplaceSearchDetails(this);
  marketplaceWebhooks: API.MarketplaceWebhooks = new API.MarketplaceWebhooks(this);
  merchantIDs: API.MerchantIDs = new API.MerchantIDs(this);
  nominations: API.Nominations = new API.Nominations(this);
  passTypeIDs: API.PassTypeIDs = new API.PassTypeIDs(this);
  preReleaseVersions: API.PreReleaseVersions = new API.PreReleaseVersions(this);
  profiles: API.Profiles = new API.Profiles(this);
  promotedPurchases: API.PromotedPurchases = new API.PromotedPurchases(this);
  reviewSubmissionItems: API.ReviewSubmissionItems = new API.ReviewSubmissionItems(this);
  reviewSubmissions: API.ReviewSubmissions = new API.ReviewSubmissions(this);
  routingAppCoverages: API.RoutingAppCoverages = new API.RoutingAppCoverages(this);
  salesReports: API.SalesReports = new API.SalesReports(this);
  sandboxTesters: API.SandboxTesters = new API.SandboxTesters(this);
  sandboxTestersClearPurchaseHistoryRequest: API.SandboxTestersClearPurchaseHistoryRequest =
    new API.SandboxTestersClearPurchaseHistoryRequest(this);
  scmGitReferences: API.ScmGitReferences = new API.ScmGitReferences(this);
  scmProviders: API.ScmProviders = new API.ScmProviders(this);
  scmPullRequests: API.ScmPullRequests = new API.ScmPullRequests(this);
  scmRepositories: API.ScmRepositories = new API.ScmRepositories(this);
  subscriptionAppStoreReviewScreenshots: API.SubscriptionAppStoreReviewScreenshots =
    new API.SubscriptionAppStoreReviewScreenshots(this);
  subscriptionAvailabilities: API.SubscriptionAvailabilities = new API.SubscriptionAvailabilities(this);
  subscriptionGracePeriods: API.SubscriptionGracePeriods = new API.SubscriptionGracePeriods(this);
  subscriptionGroupLocalizations: API.SubscriptionGroupLocalizations = new API.SubscriptionGroupLocalizations(
    this,
  );
  subscriptionGroupSubmissions: API.SubscriptionGroupSubmissions = new API.SubscriptionGroupSubmissions(this);
  subscriptionGroups: API.SubscriptionGroups = new API.SubscriptionGroups(this);
  subscriptionImages: API.SubscriptionImages = new API.SubscriptionImages(this);
  subscriptionIntroductoryOffers: API.SubscriptionIntroductoryOffers = new API.SubscriptionIntroductoryOffers(
    this,
  );
  subscriptionLocalizations: API.SubscriptionLocalizations = new API.SubscriptionLocalizations(this);
  subscriptionOfferCodeCustomCodes: API.SubscriptionOfferCodeCustomCodes =
    new API.SubscriptionOfferCodeCustomCodes(this);
  subscriptionOfferCodeOneTimeUseCodes: API.SubscriptionOfferCodeOneTimeUseCodes =
    new API.SubscriptionOfferCodeOneTimeUseCodes(this);
  subscriptionOfferCodes: API.SubscriptionOfferCodes = new API.SubscriptionOfferCodes(this);
  subscriptionPricePoints: API.SubscriptionPricePoints = new API.SubscriptionPricePoints(this);
  subscriptionPrices: API.SubscriptionPrices = new API.SubscriptionPrices(this);
  subscriptionPromotionalOffers: API.SubscriptionPromotionalOffers = new API.SubscriptionPromotionalOffers(
    this,
  );
  subscriptionSubmissions: API.SubscriptionSubmissions = new API.SubscriptionSubmissions(this);
  subscriptions: API.Subscriptions = new API.Subscriptions(this);
  territories: API.Territories = new API.Territories(this);
  territoryAvailabilities: API.TerritoryAvailabilities = new API.TerritoryAvailabilities(this);
  userInvitations: API.UserInvitations = new API.UserInvitations(this);
  users: API.Users = new API.Users(this);
  webhookDeliveries: API.WebhookDeliveries = new API.WebhookDeliveries(this);
  webhookPings: API.WebhookPings = new API.WebhookPings(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  winBackOffers: API.WinBackOffers = new API.WinBackOffers(this);
  buildBundles: API.BuildBundles = new API.BuildBundles(this);
  diagnosticSignatures: API.DiagnosticSignatures = new API.DiagnosticSignatures(this);
  gameCenterEnabledVersions: API.GameCenterEnabledVersions = new API.GameCenterEnabledVersions(this);
  inAppPurchasePricePoints: API.InAppPurchasePricePoints = new API.InAppPurchasePricePoints(this);
}
AppStoreConnectAPI.AccessibilityDeclarations = AccessibilityDeclarations;
AppStoreConnectAPI.Actors = Actors;
AppStoreConnectAPI.AgeRatingDeclarations = AgeRatingDeclarations;
AppStoreConnectAPI.AlternativeDistributionDomains = AlternativeDistributionDomains;
AppStoreConnectAPI.AlternativeDistributionKeys = AlternativeDistributionKeys;
AppStoreConnectAPI.AlternativeDistributionPackageDeltas = AlternativeDistributionPackageDeltas;
AppStoreConnectAPI.AlternativeDistributionPackageVariants = AlternativeDistributionPackageVariants;
AppStoreConnectAPI.AlternativeDistributionPackageVersions = AlternativeDistributionPackageVersions;
AppStoreConnectAPI.AlternativeDistributionPackages = AlternativeDistributionPackages;
AppStoreConnectAPI.AnalyticsReportInstances = AnalyticsReportInstances;
AppStoreConnectAPI.AnalyticsReportRequests = AnalyticsReportRequests;
AppStoreConnectAPI.AnalyticsReportSegments = AnalyticsReportSegments;
AppStoreConnectAPI.AnalyticsReports = AnalyticsReports;
AppStoreConnectAPI.AppAvailabilities = AppAvailabilities;
AppStoreConnectAPI.AppCategories = AppCategories;
AppStoreConnectAPI.AppClipAdvancedExperienceImages = AppClipAdvancedExperienceImages;
AppStoreConnectAPI.AppClipAdvancedExperiences = AppClipAdvancedExperiences;
AppStoreConnectAPI.AppClipAppStoreReviewDetails = AppClipAppStoreReviewDetails;
AppStoreConnectAPI.AppClipDefaultExperienceLocalizations = AppClipDefaultExperienceLocalizations;
AppStoreConnectAPI.AppClipDefaultExperiences = AppClipDefaultExperiences;
AppStoreConnectAPI.AppClipHeaderImages = AppClipHeaderImages;
AppStoreConnectAPI.AppClips = AppClips;
AppStoreConnectAPI.AppCustomProductPageLocalizations = AppCustomProductPageLocalizations;
AppStoreConnectAPI.AppCustomProductPageVersions = AppCustomProductPageVersions;
AppStoreConnectAPI.AppCustomProductPages = AppCustomProductPages;
AppStoreConnectAPI.AppEncryptionDeclarationDocuments = AppEncryptionDeclarationDocuments;
AppStoreConnectAPI.AppEventLocalizations = AppEventLocalizations;
AppStoreConnectAPI.AppEventScreenshots = AppEventScreenshots;
AppStoreConnectAPI.AppEventVideoClips = AppEventVideoClips;
AppStoreConnectAPI.AppEvents = AppEvents;
AppStoreConnectAPI.AppInfoLocalizations = AppInfoLocalizations;
AppStoreConnectAPI.AppInfos = AppInfos;
AppStoreConnectAPI.AppPreviewSets = AppPreviewSets;
AppStoreConnectAPI.AppPreviews = AppPreviews;
AppStoreConnectAPI.AppPriceSchedules = AppPriceSchedules;
AppStoreConnectAPI.AppScreenshotSets = AppScreenshotSets;
AppStoreConnectAPI.AppScreenshots = AppScreenshots;
AppStoreConnectAPI.AppStoreReviewAttachments = AppStoreReviewAttachments;
AppStoreConnectAPI.AppStoreReviewDetails = AppStoreReviewDetails;
AppStoreConnectAPI.AppStoreVersionExperimentTreatmentLocalizations =
  AppStoreVersionExperimentTreatmentLocalizations;
AppStoreConnectAPI.AppStoreVersionExperimentTreatments = AppStoreVersionExperimentTreatments;
AppStoreConnectAPI.AppStoreVersionExperiments = AppStoreVersionExperiments;
AppStoreConnectAPI.AppStoreVersionLocalizations = AppStoreVersionLocalizations;
AppStoreConnectAPI.AppStoreVersionPhasedReleases = AppStoreVersionPhasedReleases;
AppStoreConnectAPI.AppStoreVersionPromotions = AppStoreVersionPromotions;
AppStoreConnectAPI.AppStoreVersionReleaseRequests = AppStoreVersionReleaseRequests;
AppStoreConnectAPI.AppStoreVersionSubmissions = AppStoreVersionSubmissions;
AppStoreConnectAPI.AppStoreVersions = AppStoreVersions;
AppStoreConnectAPI.Apps = Apps;
AppStoreConnectAPI.BackgroundAssetUploadFiles = BackgroundAssetUploadFiles;
AppStoreConnectAPI.BackgroundAssetVersionInternalBetaReleases = BackgroundAssetVersionInternalBetaReleases;
AppStoreConnectAPI.BackgroundAssetVersions = BackgroundAssetVersions;
AppStoreConnectAPI.BackgroundAssets = BackgroundAssets;
AppStoreConnectAPI.BetaAppClipInvocationLocalizations = BetaAppClipInvocationLocalizations;
AppStoreConnectAPI.BetaAppClipInvocations = BetaAppClipInvocations;
AppStoreConnectAPI.BetaAppLocalizations = BetaAppLocalizations;
AppStoreConnectAPI.BetaAppReviewDetails = BetaAppReviewDetails;
AppStoreConnectAPI.BetaAppReviewSubmissions = BetaAppReviewSubmissions;
AppStoreConnectAPI.BetaBuildLocalizations = BetaBuildLocalizations;
AppStoreConnectAPI.BetaCrashLogs = BetaCrashLogs;
AppStoreConnectAPI.BetaFeedbackCrashSubmissions = BetaFeedbackCrashSubmissions;
AppStoreConnectAPI.BetaFeedbackScreenshotSubmissions = BetaFeedbackScreenshotSubmissions;
AppStoreConnectAPI.BetaGroups = BetaGroups;
AppStoreConnectAPI.BetaLicenseAgreements = BetaLicenseAgreements;
AppStoreConnectAPI.BetaRecruitmentCriteria = BetaRecruitmentCriteria;
AppStoreConnectAPI.BetaRecruitmentCriterionOptions = BetaRecruitmentCriterionOptions;
AppStoreConnectAPI.BetaTesterInvitations = BetaTesterInvitations;
AppStoreConnectAPI.BetaTesters = BetaTesters;
AppStoreConnectAPI.BuildBetaDetails = BuildBetaDetails;
AppStoreConnectAPI.BuildBetaNotifications = BuildBetaNotifications;
AppStoreConnectAPI.Builds = Builds;
AppStoreConnectAPI.BundleIDCapabilities = BundleIDCapabilities;
AppStoreConnectAPI.BundleIDs = BundleIDs;
AppStoreConnectAPI.Certificates = Certificates;
AppStoreConnectAPI.CiArtifacts = CiArtifacts;
AppStoreConnectAPI.CiBuildActions = CiBuildActions;
AppStoreConnectAPI.CiBuildRuns = CiBuildRuns;
AppStoreConnectAPI.CiIssues = CiIssues;
AppStoreConnectAPI.CiMacOsVersions = CiMacOsVersions;
AppStoreConnectAPI.CiProducts = CiProducts;
AppStoreConnectAPI.CiTestResults = CiTestResults;
AppStoreConnectAPI.CiWorkflows = CiWorkflows;
AppStoreConnectAPI.CustomerReviewResponses = CustomerReviewResponses;
AppStoreConnectAPI.CustomerReviews = CustomerReviewsAPICustomerReviews;
AppStoreConnectAPI.Devices = Devices;
AppStoreConnectAPI.EndAppAvailabilityPreOrders = EndAppAvailabilityPreOrders;
AppStoreConnectAPI.EndUserLicenseAgreements = EndUserLicenseAgreements;
AppStoreConnectAPI.FinanceReports = FinanceReports;
AppStoreConnectAPI.GameCenterAchievementImages = GameCenterAchievementImages;
AppStoreConnectAPI.GameCenterAchievementLocalizations = GameCenterAchievementLocalizations;
AppStoreConnectAPI.GameCenterAchievementReleases = GameCenterAchievementReleases;
AppStoreConnectAPI.GameCenterAchievements = GameCenterAchievements;
AppStoreConnectAPI.GameCenterActivities = GameCenterActivities;
AppStoreConnectAPI.GameCenterActivityImages = GameCenterActivityImages;
AppStoreConnectAPI.GameCenterActivityLocalizations = GameCenterActivityLocalizations;
AppStoreConnectAPI.GameCenterActivityVersionReleases = GameCenterActivityVersionReleases;
AppStoreConnectAPI.GameCenterActivityVersions = GameCenterActivityVersions;
AppStoreConnectAPI.GameCenterAppVersions = GameCenterAppVersions;
AppStoreConnectAPI.GameCenterChallengeImages = GameCenterChallengeImages;
AppStoreConnectAPI.GameCenterChallengeLocalizations = GameCenterChallengeLocalizations;
AppStoreConnectAPI.GameCenterChallengeVersionReleases = GameCenterChallengeVersionReleases;
AppStoreConnectAPI.GameCenterChallengeVersions = GameCenterChallengeVersions;
AppStoreConnectAPI.GameCenterChallenges = GameCenterChallenges;
AppStoreConnectAPI.GameCenterDetails = GameCenterDetails;
AppStoreConnectAPI.GameCenterGroups = GameCenterGroups;
AppStoreConnectAPI.GameCenterLeaderboardEntrySubmissions = GameCenterLeaderboardEntrySubmissions;
AppStoreConnectAPI.GameCenterLeaderboardImages = GameCenterLeaderboardImages;
AppStoreConnectAPI.GameCenterLeaderboardLocalizations = GameCenterLeaderboardLocalizations;
AppStoreConnectAPI.GameCenterLeaderboardReleases = GameCenterLeaderboardReleases;
AppStoreConnectAPI.GameCenterLeaderboardSetImages = GameCenterLeaderboardSetImages;
AppStoreConnectAPI.GameCenterLeaderboardSetLocalizations = GameCenterLeaderboardSetLocalizations;
AppStoreConnectAPI.GameCenterLeaderboardSetMemberLocalizations = GameCenterLeaderboardSetMemberLocalizations;
AppStoreConnectAPI.GameCenterLeaderboardSetReleases = GameCenterLeaderboardSetReleases;
AppStoreConnectAPI.GameCenterLeaderboardSets = GameCenterLeaderboardSetsAPIGameCenterLeaderboardSets;
AppStoreConnectAPI.GameCenterLeaderboards = GameCenterLeaderboardsAPIGameCenterLeaderboards;
AppStoreConnectAPI.GameCenterMatchmakingQueues = GameCenterMatchmakingQueues;
AppStoreConnectAPI.GameCenterMatchmakingRuleSetTests = GameCenterMatchmakingRuleSetTests;
AppStoreConnectAPI.GameCenterMatchmakingRuleSets = GameCenterMatchmakingRuleSets;
AppStoreConnectAPI.GameCenterMatchmakingRules = GameCenterMatchmakingRules;
AppStoreConnectAPI.GameCenterMatchmakingTeams = GameCenterMatchmakingTeams;
AppStoreConnectAPI.GameCenterPlayerAchievementSubmissions = GameCenterPlayerAchievementSubmissions;
AppStoreConnectAPI.InAppPurchaseAppStoreReviewScreenshots = InAppPurchaseAppStoreReviewScreenshots;
AppStoreConnectAPI.InAppPurchaseAvailabilities = InAppPurchaseAvailabilities;
AppStoreConnectAPI.InAppPurchaseContents = InAppPurchaseContents;
AppStoreConnectAPI.InAppPurchaseImages = InAppPurchaseImages;
AppStoreConnectAPI.InAppPurchaseLocalizations = InAppPurchaseLocalizations;
AppStoreConnectAPI.InAppPurchasePriceSchedules = InAppPurchasePriceSchedules;
AppStoreConnectAPI.InAppPurchaseSubmissions = InAppPurchaseSubmissions;
AppStoreConnectAPI.InAppPurchases = InAppPurchases;
AppStoreConnectAPI.MarketplaceSearchDetails = MarketplaceSearchDetails;
AppStoreConnectAPI.MarketplaceWebhooks = MarketplaceWebhooks;
AppStoreConnectAPI.MerchantIDs = MerchantIDs;
AppStoreConnectAPI.Nominations = Nominations;
AppStoreConnectAPI.PassTypeIDs = PassTypeIDs;
AppStoreConnectAPI.PreReleaseVersions = PreReleaseVersions;
AppStoreConnectAPI.Profiles = Profiles;
AppStoreConnectAPI.PromotedPurchases = PromotedPurchases;
AppStoreConnectAPI.ReviewSubmissionItems = ReviewSubmissionItems;
AppStoreConnectAPI.ReviewSubmissions = ReviewSubmissions;
AppStoreConnectAPI.RoutingAppCoverages = RoutingAppCoverages;
AppStoreConnectAPI.SalesReports = SalesReports;
AppStoreConnectAPI.SandboxTesters = SandboxTesters;
AppStoreConnectAPI.SandboxTestersClearPurchaseHistoryRequest = SandboxTestersClearPurchaseHistoryRequest;
AppStoreConnectAPI.ScmGitReferences = ScmGitReferences;
AppStoreConnectAPI.ScmProviders = ScmProviders;
AppStoreConnectAPI.ScmPullRequests = ScmPullRequests;
AppStoreConnectAPI.SubscriptionAppStoreReviewScreenshots = SubscriptionAppStoreReviewScreenshots;
AppStoreConnectAPI.SubscriptionAvailabilities = SubscriptionAvailabilities;
AppStoreConnectAPI.SubscriptionGracePeriods = SubscriptionGracePeriods;
AppStoreConnectAPI.SubscriptionGroupLocalizations = SubscriptionGroupLocalizations;
AppStoreConnectAPI.SubscriptionGroupSubmissions = SubscriptionGroupSubmissions;
AppStoreConnectAPI.SubscriptionGroups = SubscriptionGroups;
AppStoreConnectAPI.SubscriptionImages = SubscriptionImages;
AppStoreConnectAPI.SubscriptionIntroductoryOffers = SubscriptionIntroductoryOffers;
AppStoreConnectAPI.SubscriptionLocalizations = SubscriptionLocalizations;
AppStoreConnectAPI.SubscriptionOfferCodeCustomCodes = SubscriptionOfferCodeCustomCodes;
AppStoreConnectAPI.SubscriptionOfferCodeOneTimeUseCodes = SubscriptionOfferCodeOneTimeUseCodes;
AppStoreConnectAPI.SubscriptionOfferCodes = SubscriptionOfferCodes;
AppStoreConnectAPI.SubscriptionPricePoints = SubscriptionPricePoints;
AppStoreConnectAPI.SubscriptionPrices = SubscriptionPrices;
AppStoreConnectAPI.SubscriptionPromotionalOffers = SubscriptionPromotionalOffers;
AppStoreConnectAPI.SubscriptionSubmissions = SubscriptionSubmissions;
AppStoreConnectAPI.Subscriptions = Subscriptions;
AppStoreConnectAPI.Territories = Territories;
AppStoreConnectAPI.TerritoryAvailabilities = TerritoryAvailabilities;
AppStoreConnectAPI.UserInvitations = UserInvitations;
AppStoreConnectAPI.Users = Users;
AppStoreConnectAPI.WebhookDeliveries = WebhookDeliveries;
AppStoreConnectAPI.WebhookPings = WebhookPings;
AppStoreConnectAPI.Webhooks = Webhooks;
AppStoreConnectAPI.WinBackOffers = WinBackOffers;
AppStoreConnectAPI.BuildBundles = BuildBundles;
AppStoreConnectAPI.DiagnosticSignatures = DiagnosticSignatures;
AppStoreConnectAPI.GameCenterEnabledVersions = GameCenterEnabledVersions;
AppStoreConnectAPI.InAppPurchasePricePoints = InAppPurchasePricePoints;
export declare namespace AppStoreConnectAPI {
  export type RequestOptions = Opts.RequestOptions;

  export {
    AccessibilityDeclarations as AccessibilityDeclarations,
    type AccessibilityDeclaration as AccessibilityDeclaration,
    type AccessibilityDeclarationResponse as AccessibilityDeclarationResponse,
    type DeviceFamily as DeviceFamily,
    type DocumentLinks as DocumentLinks,
    type ResourceLinks as ResourceLinks,
    type AccessibilityDeclarationCreateParams as AccessibilityDeclarationCreateParams,
    type AccessibilityDeclarationRetrieveParams as AccessibilityDeclarationRetrieveParams,
    type AccessibilityDeclarationUpdateParams as AccessibilityDeclarationUpdateParams,
  };

  export {
    Actors as Actors,
    type Actor as Actor,
    type PagedDocumentLinks as PagedDocumentLinks,
    type PagingInformation as PagingInformation,
    type ActorRetrieveResponse as ActorRetrieveResponse,
    type ActorListResponse as ActorListResponse,
    type ActorRetrieveParams as ActorRetrieveParams,
    type ActorListParams as ActorListParams,
  };

  export {
    AgeRatingDeclarations as AgeRatingDeclarations,
    type AgeRatingDeclaration as AgeRatingDeclaration,
    type AgeRatingDeclarationResponse as AgeRatingDeclarationResponse,
    type KidsAgeBand as KidsAgeBand,
    type AgeRatingDeclarationUpdateParams as AgeRatingDeclarationUpdateParams,
  };

  export {
    AlternativeDistributionDomains as AlternativeDistributionDomains,
    type AlternativeDistributionDomain as AlternativeDistributionDomain,
    type AlternativeDistributionDomainResponse as AlternativeDistributionDomainResponse,
    type AlternativeDistributionDomainListResponse as AlternativeDistributionDomainListResponse,
    type AlternativeDistributionDomainCreateParams as AlternativeDistributionDomainCreateParams,
    type AlternativeDistributionDomainRetrieveParams as AlternativeDistributionDomainRetrieveParams,
    type AlternativeDistributionDomainListParams as AlternativeDistributionDomainListParams,
  };

  export {
    AlternativeDistributionKeys as AlternativeDistributionKeys,
    type AlternativeDistributionKey as AlternativeDistributionKey,
    type AlternativeDistributionKeyResponse as AlternativeDistributionKeyResponse,
    type AlternativeDistributionKeyListResponse as AlternativeDistributionKeyListResponse,
    type AlternativeDistributionKeyCreateParams as AlternativeDistributionKeyCreateParams,
    type AlternativeDistributionKeyRetrieveParams as AlternativeDistributionKeyRetrieveParams,
    type AlternativeDistributionKeyListParams as AlternativeDistributionKeyListParams,
  };

  export {
    AlternativeDistributionPackageDeltas as AlternativeDistributionPackageDeltas,
    type AlternativeDistributionPackageDelta as AlternativeDistributionPackageDelta,
    type AlternativeDistributionPackageDeltaRetrieveResponse as AlternativeDistributionPackageDeltaRetrieveResponse,
    type AlternativeDistributionPackageDeltaRetrieveParams as AlternativeDistributionPackageDeltaRetrieveParams,
  };

  export {
    AlternativeDistributionPackageVariants as AlternativeDistributionPackageVariants,
    type AlternativeDistributionPackageVariant as AlternativeDistributionPackageVariant,
    type AlternativeDistributionPackageVariantRetrieveResponse as AlternativeDistributionPackageVariantRetrieveResponse,
    type AlternativeDistributionPackageVariantRetrieveParams as AlternativeDistributionPackageVariantRetrieveParams,
  };

  export {
    AlternativeDistributionPackageVersions as AlternativeDistributionPackageVersions,
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
    AlternativeDistributionPackages as AlternativeDistributionPackages,
    type AlternativeDistributionPackage as AlternativeDistributionPackage,
    type AlternativeDistributionPackageResponse as AlternativeDistributionPackageResponse,
    type AlternativeDistributionPackageListVersionsResponse as AlternativeDistributionPackageListVersionsResponse,
    type AlternativeDistributionPackageCreateParams as AlternativeDistributionPackageCreateParams,
    type AlternativeDistributionPackageRetrieveParams as AlternativeDistributionPackageRetrieveParams,
    type AlternativeDistributionPackageListVersionsParams as AlternativeDistributionPackageListVersionsParams,
  };

  export {
    AnalyticsReportInstances as AnalyticsReportInstances,
    type AnalyticsReportInstance as AnalyticsReportInstance,
    type AnalyticsReportInstanceRetrieveResponse as AnalyticsReportInstanceRetrieveResponse,
    type AnalyticsReportInstanceListSegmentsResponse as AnalyticsReportInstanceListSegmentsResponse,
    type AnalyticsReportInstanceRetrieveParams as AnalyticsReportInstanceRetrieveParams,
    type AnalyticsReportInstanceListSegmentsParams as AnalyticsReportInstanceListSegmentsParams,
  };

  export {
    AnalyticsReportRequests as AnalyticsReportRequests,
    type AnalyticsReportRequest as AnalyticsReportRequest,
    type AnalyticsReportRequestResponse as AnalyticsReportRequestResponse,
    type AnalyticsReportRequestListReportsResponse as AnalyticsReportRequestListReportsResponse,
    type AnalyticsReportRequestCreateParams as AnalyticsReportRequestCreateParams,
    type AnalyticsReportRequestRetrieveParams as AnalyticsReportRequestRetrieveParams,
    type AnalyticsReportRequestListReportsParams as AnalyticsReportRequestListReportsParams,
  };

  export {
    AnalyticsReportSegments as AnalyticsReportSegments,
    type AnalyticsReportSegment as AnalyticsReportSegment,
    type AnalyticsReportSegmentRetrieveResponse as AnalyticsReportSegmentRetrieveResponse,
    type AnalyticsReportSegmentRetrieveParams as AnalyticsReportSegmentRetrieveParams,
  };

  export {
    AnalyticsReports as AnalyticsReports,
    type AnalyticsReport as AnalyticsReport,
    type AnalyticsReportRetrieveResponse as AnalyticsReportRetrieveResponse,
    type AnalyticsReportListInstancesResponse as AnalyticsReportListInstancesResponse,
    type AnalyticsReportRetrieveParams as AnalyticsReportRetrieveParams,
    type AnalyticsReportListInstancesParams as AnalyticsReportListInstancesParams,
  };

  export {
    AppAvailabilities as AppAvailabilities,
    type AppAvailability as AppAvailability,
    type AppAvailabilityListTerritoryAvailabilitiesResponse as AppAvailabilityListTerritoryAvailabilitiesResponse,
    type AppAvailabilityCreateParams as AppAvailabilityCreateParams,
    type AppAvailabilityRetrieveParams as AppAvailabilityRetrieveParams,
    type AppAvailabilityListTerritoryAvailabilitiesParams as AppAvailabilityListTerritoryAvailabilitiesParams,
  };

  export {
    AppCategories as AppCategories,
    type AppCategory as AppCategory,
    type AppCategoryResponse as AppCategoryResponse,
    type AppCategoryListResponse as AppCategoryListResponse,
    type AppCategoryListSubcategoriesResponse as AppCategoryListSubcategoriesResponse,
    type AppCategoryRetrieveParentResponse as AppCategoryRetrieveParentResponse,
    type AppCategoryRetrieveParams as AppCategoryRetrieveParams,
    type AppCategoryListParams as AppCategoryListParams,
    type AppCategoryListSubcategoriesParams as AppCategoryListSubcategoriesParams,
    type AppCategoryRetrieveParentParams as AppCategoryRetrieveParentParams,
  };

  export {
    AppClipAdvancedExperienceImages as AppClipAdvancedExperienceImages,
    type AppClipAdvancedExperienceImage as AppClipAdvancedExperienceImage,
    type AppClipAdvancedExperienceImageResponse as AppClipAdvancedExperienceImageResponse,
    type AppMediaAssetState as AppMediaAssetState,
    type AppMediaStateError as AppMediaStateError,
    type HTTPHeader as HTTPHeader,
    type ImageAsset as ImageAsset,
    type UploadOperation as UploadOperation,
    type AppClipAdvancedExperienceImageCreateParams as AppClipAdvancedExperienceImageCreateParams,
    type AppClipAdvancedExperienceImageRetrieveParams as AppClipAdvancedExperienceImageRetrieveParams,
    type AppClipAdvancedExperienceImageUpdateParams as AppClipAdvancedExperienceImageUpdateParams,
  };

  export {
    AppClipAdvancedExperiences as AppClipAdvancedExperiences,
    type AppClipAction as AppClipAction,
    type AppClipAdvancedExperience as AppClipAdvancedExperience,
    type AppClipAdvancedExperienceLanguage as AppClipAdvancedExperienceLanguage,
    type AppClipAdvancedExperienceLocalization as AppClipAdvancedExperienceLocalization,
    type AppClipAdvancedExperienceLocalizationInlineCreate as AppClipAdvancedExperienceLocalizationInlineCreate,
    type AppClipAdvancedExperienceResponse as AppClipAdvancedExperienceResponse,
    type AppClipAdvancedExperienceCreateParams as AppClipAdvancedExperienceCreateParams,
    type AppClipAdvancedExperienceRetrieveParams as AppClipAdvancedExperienceRetrieveParams,
    type AppClipAdvancedExperienceUpdateParams as AppClipAdvancedExperienceUpdateParams,
  };

  export {
    AppClipAppStoreReviewDetails as AppClipAppStoreReviewDetails,
    type AppClipAppStoreReviewDetail as AppClipAppStoreReviewDetail,
    type AppClipAppStoreReviewDetailResponse as AppClipAppStoreReviewDetailResponse,
    type AppClipAppStoreReviewDetailCreateParams as AppClipAppStoreReviewDetailCreateParams,
    type AppClipAppStoreReviewDetailRetrieveParams as AppClipAppStoreReviewDetailRetrieveParams,
    type AppClipAppStoreReviewDetailUpdateParams as AppClipAppStoreReviewDetailUpdateParams,
  };

  export {
    AppClipDefaultExperienceLocalizations as AppClipDefaultExperienceLocalizations,
    type AppClipDefaultExperienceLocalization as AppClipDefaultExperienceLocalization,
    type AppClipDefaultExperienceLocalizationResponse as AppClipDefaultExperienceLocalizationResponse,
    type AppClipDefaultExperienceLocalizationCreateParams as AppClipDefaultExperienceLocalizationCreateParams,
    type AppClipDefaultExperienceLocalizationRetrieveParams as AppClipDefaultExperienceLocalizationRetrieveParams,
    type AppClipDefaultExperienceLocalizationUpdateParams as AppClipDefaultExperienceLocalizationUpdateParams,
    type AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams as AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams,
  };

  export {
    AppClipDefaultExperiences as AppClipDefaultExperiences,
    type AppClipDefaultExperience as AppClipDefaultExperience,
    type AppClipDefaultExperienceResponse as AppClipDefaultExperienceResponse,
    type AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse as AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsResponse,
    type AppClipDefaultExperienceCreateParams as AppClipDefaultExperienceCreateParams,
    type AppClipDefaultExperienceRetrieveParams as AppClipDefaultExperienceRetrieveParams,
    type AppClipDefaultExperienceUpdateParams as AppClipDefaultExperienceUpdateParams,
    type AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams as AppClipDefaultExperienceListAppClipDefaultExperienceLocalizationsParams,
    type AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams as AppClipDefaultExperienceRetrieveAppClipAppStoreReviewDetailParams,
    type AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams as AppClipDefaultExperienceRetrieveReleaseWithAppStoreVersionParams,
  };

  export {
    AppClipHeaderImages as AppClipHeaderImages,
    type AppClipHeaderImage as AppClipHeaderImage,
    type AppClipHeaderImageResponse as AppClipHeaderImageResponse,
    type AppClipHeaderImageCreateParams as AppClipHeaderImageCreateParams,
    type AppClipHeaderImageRetrieveParams as AppClipHeaderImageRetrieveParams,
    type AppClipHeaderImageUpdateParams as AppClipHeaderImageUpdateParams,
  };

  export {
    AppClips as AppClips,
    type AppClip as AppClip,
    type AppClipRetrieveResponse as AppClipRetrieveResponse,
    type AppClipListAdvancedExperiencesResponse as AppClipListAdvancedExperiencesResponse,
    type AppClipListDefaultExperiencesResponse as AppClipListDefaultExperiencesResponse,
    type AppClipRetrieveParams as AppClipRetrieveParams,
    type AppClipListAdvancedExperiencesParams as AppClipListAdvancedExperiencesParams,
    type AppClipListDefaultExperiencesParams as AppClipListDefaultExperiencesParams,
  };

  export {
    AppCustomProductPageLocalizations as AppCustomProductPageLocalizations,
    type Localization as Localization,
    type LocalizationResponse as LocalizationResponse,
    type PreviewSetsResponse as PreviewSetsResponse,
    type ScreenshotSetsResponse as ScreenshotSetsResponse,
    type AppCustomProductPageLocalizationCreateParams as AppCustomProductPageLocalizationCreateParams,
    type AppCustomProductPageLocalizationRetrieveParams as AppCustomProductPageLocalizationRetrieveParams,
    type AppCustomProductPageLocalizationUpdateParams as AppCustomProductPageLocalizationUpdateParams,
    type AppCustomProductPageLocalizationListAppPreviewSetsParams as AppCustomProductPageLocalizationListAppPreviewSetsParams,
    type AppCustomProductPageLocalizationListAppScreenshotSetsParams as AppCustomProductPageLocalizationListAppScreenshotSetsParams,
  };

  export {
    AppCustomProductPageVersions as AppCustomProductPageVersions,
    type AppCustomProductPageVersion as AppCustomProductPageVersion,
    type AppCustomProductPageVersionResponse as AppCustomProductPageVersionResponse,
    type AppCustomProductPageVersionListLocalizationsResponse as AppCustomProductPageVersionListLocalizationsResponse,
    type AppCustomProductPageVersionCreateParams as AppCustomProductPageVersionCreateParams,
    type AppCustomProductPageVersionRetrieveParams as AppCustomProductPageVersionRetrieveParams,
    type AppCustomProductPageVersionUpdateParams as AppCustomProductPageVersionUpdateParams,
    type AppCustomProductPageVersionListLocalizationsParams as AppCustomProductPageVersionListLocalizationsParams,
  };

  export {
    AppCustomProductPages as AppCustomProductPages,
    type AppCustomProductPage as AppCustomProductPage,
    type AppCustomProductPageResponse as AppCustomProductPageResponse,
    type AppCustomProductPageListVersionsResponse as AppCustomProductPageListVersionsResponse,
    type AppCustomProductPageCreateParams as AppCustomProductPageCreateParams,
    type AppCustomProductPageRetrieveParams as AppCustomProductPageRetrieveParams,
    type AppCustomProductPageUpdateParams as AppCustomProductPageUpdateParams,
    type AppCustomProductPageListVersionsParams as AppCustomProductPageListVersionsParams,
  };

  export {
    AppEncryptionDeclarationDocuments as AppEncryptionDeclarationDocuments,
    type AppEncryptionDeclarationDocument as AppEncryptionDeclarationDocument,
    type AppEncryptionDeclarationDocumentResponse as AppEncryptionDeclarationDocumentResponse,
    type AppEncryptionDeclarationDocumentCreateParams as AppEncryptionDeclarationDocumentCreateParams,
    type AppEncryptionDeclarationDocumentRetrieveParams as AppEncryptionDeclarationDocumentRetrieveParams,
    type AppEncryptionDeclarationDocumentUpdateParams as AppEncryptionDeclarationDocumentUpdateParams,
  };

  export {
    type AppEncryptionDeclarations as AppEncryptionDeclarations,
    type AppEncryptionDeclarationDeclaration as AppEncryptionDeclarationDeclaration,
    type AppEncryptionDeclarationResponse as AppEncryptionDeclarationResponse,
    type AppWithoutIncludes as AppWithoutIncludes,
    type AppEncryptionDeclarationCreateParams as AppEncryptionDeclarationCreateParams,
    type AppEncryptionDeclarationRetrieveParams as AppEncryptionDeclarationRetrieveParams,
    type AppEncryptionDeclarationListParams as AppEncryptionDeclarationListParams,
    type AppEncryptionDeclarationRetrieveAppParams as AppEncryptionDeclarationRetrieveAppParams,
    type AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams as AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams,
  };

  export {
    AppEventLocalizations as AppEventLocalizations,
    type AppEventLocalization as AppEventLocalization,
    type AppEventLocalizationResponse as AppEventLocalizationResponse,
    type AppEventLocalizationListScreenshotsResponse as AppEventLocalizationListScreenshotsResponse,
    type AppEventLocalizationListVideoClipsResponse as AppEventLocalizationListVideoClipsResponse,
    type AppEventLocalizationCreateParams as AppEventLocalizationCreateParams,
    type AppEventLocalizationRetrieveParams as AppEventLocalizationRetrieveParams,
    type AppEventLocalizationUpdateParams as AppEventLocalizationUpdateParams,
    type AppEventLocalizationListScreenshotsParams as AppEventLocalizationListScreenshotsParams,
    type AppEventLocalizationListVideoClipsParams as AppEventLocalizationListVideoClipsParams,
  };

  export {
    AppEventScreenshots as AppEventScreenshots,
    type AppEventAssetType as AppEventAssetType,
    type AppEventScreenshot as AppEventScreenshot,
    type AppEventScreenshotResponse as AppEventScreenshotResponse,
    type AppEventScreenshotCreateParams as AppEventScreenshotCreateParams,
    type AppEventScreenshotRetrieveParams as AppEventScreenshotRetrieveParams,
    type AppEventScreenshotUpdateParams as AppEventScreenshotUpdateParams,
  };

  export {
    AppEventVideoClips as AppEventVideoClips,
    type AppEventVideoClip as AppEventVideoClip,
    type AppEventVideoClipResponse as AppEventVideoClipResponse,
    type AppMediaVideoState as AppMediaVideoState,
    type PreviewFrameImage as PreviewFrameImage,
    type AppEventVideoClipCreateParams as AppEventVideoClipCreateParams,
    type AppEventVideoClipRetrieveParams as AppEventVideoClipRetrieveParams,
    type AppEventVideoClipUpdateParams as AppEventVideoClipUpdateParams,
  };

  export {
    AppEvents as AppEvents,
    type AppEvent as AppEvent,
    type AppEventResponse as AppEventResponse,
    type AppEventListLocalizationsResponse as AppEventListLocalizationsResponse,
    type AppEventCreateParams as AppEventCreateParams,
    type AppEventRetrieveParams as AppEventRetrieveParams,
    type AppEventUpdateParams as AppEventUpdateParams,
    type AppEventListLocalizationsParams as AppEventListLocalizationsParams,
  };

  export {
    AppInfoLocalizations as AppInfoLocalizations,
    type AppInfoLocalization as AppInfoLocalization,
    type AppInfoLocalizationResponse as AppInfoLocalizationResponse,
    type AppInfoLocalizationCreateParams as AppInfoLocalizationCreateParams,
    type AppInfoLocalizationRetrieveParams as AppInfoLocalizationRetrieveParams,
    type AppInfoLocalizationUpdateParams as AppInfoLocalizationUpdateParams,
  };

  export {
    AppInfos as AppInfos,
    type AppInfo as AppInfo,
    type AppInfoResponse as AppInfoResponse,
    type AppStoreVersionState as AppStoreVersionState,
    type AppInfoListAppInfoLocalizationsResponse as AppInfoListAppInfoLocalizationsResponse,
    type AppInfoRetrieveParams as AppInfoRetrieveParams,
    type AppInfoUpdateParams as AppInfoUpdateParams,
    type AppInfoListAppInfoLocalizationsParams as AppInfoListAppInfoLocalizationsParams,
    type AppInfoRetrieveAgeRatingDeclarationParams as AppInfoRetrieveAgeRatingDeclarationParams,
    type AppInfoRetrievePrimaryCategoryParams as AppInfoRetrievePrimaryCategoryParams,
    type AppInfoRetrievePrimarySubcategoryOneParams as AppInfoRetrievePrimarySubcategoryOneParams,
    type AppInfoRetrievePrimarySubcategoryTwoParams as AppInfoRetrievePrimarySubcategoryTwoParams,
    type AppInfoRetrieveSecondaryCategoryParams as AppInfoRetrieveSecondaryCategoryParams,
    type AppInfoRetrieveSecondarySubcategoryOneParams as AppInfoRetrieveSecondarySubcategoryOneParams,
    type AppInfoRetrieveSecondarySubcategoryTwoParams as AppInfoRetrieveSecondarySubcategoryTwoParams,
  };

  export {
    AppPreviewSets as AppPreviewSets,
    type AppPreviewSet as AppPreviewSet,
    type AppPreviewSetResponse as AppPreviewSetResponse,
    type PreviewType as PreviewType,
    type AppPreviewSetListAppPreviewsResponse as AppPreviewSetListAppPreviewsResponse,
    type AppPreviewSetCreateParams as AppPreviewSetCreateParams,
    type AppPreviewSetRetrieveParams as AppPreviewSetRetrieveParams,
    type AppPreviewSetListAppPreviewsParams as AppPreviewSetListAppPreviewsParams,
  };

  export {
    AppPreviews as AppPreviews,
    type AppPreview as AppPreview,
    type AppPreviewResponse as AppPreviewResponse,
    type AppPreviewCreateParams as AppPreviewCreateParams,
    type AppPreviewRetrieveParams as AppPreviewRetrieveParams,
    type AppPreviewUpdateParams as AppPreviewUpdateParams,
  };

  export {
    type AppPricePoints as AppPricePoints,
    type AppPricePoint as AppPricePoint,
    type AppPricePointRetrieveResponse as AppPricePointRetrieveResponse,
    type AppPricePointRetrieveParams as AppPricePointRetrieveParams,
    type AppPricePointListEqualizationsParams as AppPricePointListEqualizationsParams,
  };

  export {
    AppPriceSchedules as AppPriceSchedules,
    type AppPriceSchedule as AppPriceSchedule,
    type AppPriceV2 as AppPriceV2,
    type AppPricesV2 as AppPricesV2,
    type Territory as Territory,
    type TerritoryInlineCreate as TerritoryInlineCreate,
    type TerritoryResponse as TerritoryResponse,
    type AppPriceScheduleCreateParams as AppPriceScheduleCreateParams,
    type AppPriceScheduleRetrieveParams as AppPriceScheduleRetrieveParams,
    type AppPriceScheduleListAutomaticPricesParams as AppPriceScheduleListAutomaticPricesParams,
    type AppPriceScheduleListManualPricesParams as AppPriceScheduleListManualPricesParams,
    type AppPriceScheduleRetrieveBaseTerritoryParams as AppPriceScheduleRetrieveBaseTerritoryParams,
  };

  export {
    AppScreenshotSets as AppScreenshotSets,
    type AppScreenshotSet as AppScreenshotSet,
    type AppScreenshotSetResponse as AppScreenshotSetResponse,
    type ScreenshotDisplayType as ScreenshotDisplayType,
    type AppScreenshotSetListAppScreenshotsResponse as AppScreenshotSetListAppScreenshotsResponse,
    type AppScreenshotSetCreateParams as AppScreenshotSetCreateParams,
    type AppScreenshotSetRetrieveParams as AppScreenshotSetRetrieveParams,
    type AppScreenshotSetListAppScreenshotsParams as AppScreenshotSetListAppScreenshotsParams,
  };

  export {
    AppScreenshots as AppScreenshots,
    type AppScreenshot as AppScreenshot,
    type AppScreenshotResponse as AppScreenshotResponse,
    type AppScreenshotCreateParams as AppScreenshotCreateParams,
    type AppScreenshotRetrieveParams as AppScreenshotRetrieveParams,
    type AppScreenshotUpdateParams as AppScreenshotUpdateParams,
  };

  export {
    AppStoreReviewAttachments as AppStoreReviewAttachments,
    type AppStoreReviewAttachment as AppStoreReviewAttachment,
    type AppStoreReviewAttachmentResponse as AppStoreReviewAttachmentResponse,
    type AppStoreReviewAttachmentCreateParams as AppStoreReviewAttachmentCreateParams,
    type AppStoreReviewAttachmentRetrieveParams as AppStoreReviewAttachmentRetrieveParams,
    type AppStoreReviewAttachmentUpdateParams as AppStoreReviewAttachmentUpdateParams,
  };

  export {
    AppStoreReviewDetails as AppStoreReviewDetails,
    type AppStoreReviewDetail as AppStoreReviewDetail,
    type AppStoreReviewDetailResponse as AppStoreReviewDetailResponse,
    type AppStoreReviewDetailListAttachmentsResponse as AppStoreReviewDetailListAttachmentsResponse,
    type AppStoreReviewDetailCreateParams as AppStoreReviewDetailCreateParams,
    type AppStoreReviewDetailRetrieveParams as AppStoreReviewDetailRetrieveParams,
    type AppStoreReviewDetailUpdateParams as AppStoreReviewDetailUpdateParams,
    type AppStoreReviewDetailListAttachmentsParams as AppStoreReviewDetailListAttachmentsParams,
  };

  export {
    AppStoreVersionExperimentTreatmentLocalizations as AppStoreVersionExperimentTreatmentLocalizations,
    type AppStoreVersionExperimentTreatmentLocalization as AppStoreVersionExperimentTreatmentLocalization,
    type AppStoreVersionExperimentTreatmentLocalizationResponse as AppStoreVersionExperimentTreatmentLocalizationResponse,
    type AppStoreVersionExperimentTreatmentLocalizationCreateParams as AppStoreVersionExperimentTreatmentLocalizationCreateParams,
    type AppStoreVersionExperimentTreatmentLocalizationRetrieveParams as AppStoreVersionExperimentTreatmentLocalizationRetrieveParams,
    type AppStoreVersionExperimentTreatmentLocalizationListAppPreviewSetsParams as AppStoreVersionExperimentTreatmentLocalizationListAppPreviewSetsParams,
    type AppStoreVersionExperimentTreatmentLocalizationListAppScreenshotSetsParams as AppStoreVersionExperimentTreatmentLocalizationListAppScreenshotSetsParams,
  };

  export {
    AppStoreVersionExperimentTreatments as AppStoreVersionExperimentTreatments,
    type AppStoreVersionExperimentTreatment as AppStoreVersionExperimentTreatment,
    type AppStoreVersionExperimentTreatmentResponse as AppStoreVersionExperimentTreatmentResponse,
    type AppStoreVersionExperimentTreatmentListLocalizationsResponse as AppStoreVersionExperimentTreatmentListLocalizationsResponse,
    type AppStoreVersionExperimentTreatmentCreateParams as AppStoreVersionExperimentTreatmentCreateParams,
    type AppStoreVersionExperimentTreatmentRetrieveParams as AppStoreVersionExperimentTreatmentRetrieveParams,
    type AppStoreVersionExperimentTreatmentUpdateParams as AppStoreVersionExperimentTreatmentUpdateParams,
    type AppStoreVersionExperimentTreatmentListLocalizationsParams as AppStoreVersionExperimentTreatmentListLocalizationsParams,
  };

  export {
    AppStoreVersionExperiments as AppStoreVersionExperiments,
    type AppStoreVersionExperiment as AppStoreVersionExperiment,
    type AppStoreVersionExperimentResponse as AppStoreVersionExperimentResponse,
    type AppStoreVersionExperimentV2 as AppStoreVersionExperimentV2,
    type AppStoreVersionExperimentV2Response as AppStoreVersionExperimentV2Response,
    type Platform as Platform,
    type AppStoreVersionExperimentCreateParams as AppStoreVersionExperimentCreateParams,
    type AppStoreVersionExperimentRetrieveParams as AppStoreVersionExperimentRetrieveParams,
    type AppStoreVersionExperimentUpdateParams as AppStoreVersionExperimentUpdateParams,
  };

  export {
    AppStoreVersionLocalizations as AppStoreVersionLocalizations,
    type AppStoreVersionLocalization as AppStoreVersionLocalization,
    type AppStoreVersionLocalizationResponse as AppStoreVersionLocalizationResponse,
    type AppStoreVersionLocalizationCreateParams as AppStoreVersionLocalizationCreateParams,
    type AppStoreVersionLocalizationRetrieveParams as AppStoreVersionLocalizationRetrieveParams,
    type AppStoreVersionLocalizationUpdateParams as AppStoreVersionLocalizationUpdateParams,
    type AppStoreVersionLocalizationListAppPreviewSetsParams as AppStoreVersionLocalizationListAppPreviewSetsParams,
    type AppStoreVersionLocalizationListAppScreenshotSetsParams as AppStoreVersionLocalizationListAppScreenshotSetsParams,
  };

  export {
    AppStoreVersionPhasedReleases as AppStoreVersionPhasedReleases,
    type AppStoreVersionPhasedRelease as AppStoreVersionPhasedRelease,
    type AppStoreVersionPhasedReleaseResponse as AppStoreVersionPhasedReleaseResponse,
    type PhasedReleaseState as PhasedReleaseState,
    type AppStoreVersionPhasedReleaseCreateParams as AppStoreVersionPhasedReleaseCreateParams,
    type AppStoreVersionPhasedReleaseUpdateParams as AppStoreVersionPhasedReleaseUpdateParams,
  };

  export {
    AppStoreVersionPromotions as AppStoreVersionPromotions,
    type AppStoreVersionPromotionCreateResponse as AppStoreVersionPromotionCreateResponse,
    type AppStoreVersionPromotionCreateParams as AppStoreVersionPromotionCreateParams,
  };

  export {
    AppStoreVersionReleaseRequests as AppStoreVersionReleaseRequests,
    type AppStoreVersionReleaseRequestCreateResponse as AppStoreVersionReleaseRequestCreateResponse,
    type AppStoreVersionReleaseRequestCreateParams as AppStoreVersionReleaseRequestCreateParams,
  };

  export { AppStoreVersionSubmissions as AppStoreVersionSubmissions };

  export {
    AppStoreVersions as AppStoreVersions,
    type AppStoreVersionDetails as AppStoreVersionDetails,
    type AppStoreVersionExperimentsV2 as AppStoreVersionExperimentsV2,
    type AppStoreVersionResponse as AppStoreVersionResponse,
    type AppStoreVersionSubmission as AppStoreVersionSubmission,
    type BuildWithoutIncludes as BuildWithoutIncludes,
    type CustomerReviews as CustomerReviews,
    type AppStoreVersionRetrieveAgeRatingDeclarationResponse as AppStoreVersionRetrieveAgeRatingDeclarationResponse,
    type AppStoreVersionRetrieveAppStoreVersionExperimentsResponse as AppStoreVersionRetrieveAppStoreVersionExperimentsResponse,
    type AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse as AppStoreVersionRetrieveAppStoreVersionLocalizationsResponse,
    type AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse as AppStoreVersionRetrieveAppStoreVersionPhasedReleaseResponse,
    type AppStoreVersionRetrieveAppStoreVersionSubmissionResponse as AppStoreVersionRetrieveAppStoreVersionSubmissionResponse,
    type AppStoreVersionRetrieveRoutingAppCoverageResponse as AppStoreVersionRetrieveRoutingAppCoverageResponse,
    type AppStoreVersionCreateParams as AppStoreVersionCreateParams,
    type AppStoreVersionRetrieveParams as AppStoreVersionRetrieveParams,
    type AppStoreVersionUpdateParams as AppStoreVersionUpdateParams,
    type AppStoreVersionRetrieveAgeRatingDeclarationParams as AppStoreVersionRetrieveAgeRatingDeclarationParams,
    type AppStoreVersionRetrieveAlternativeDistributionPackageParams as AppStoreVersionRetrieveAlternativeDistributionPackageParams,
    type AppStoreVersionRetrieveAppClipDefaultExperienceParams as AppStoreVersionRetrieveAppClipDefaultExperienceParams,
    type AppStoreVersionRetrieveAppStoreReviewDetailParams as AppStoreVersionRetrieveAppStoreReviewDetailParams,
    type AppStoreVersionRetrieveAppStoreVersionExperimentsParams as AppStoreVersionRetrieveAppStoreVersionExperimentsParams,
    type AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params as AppStoreVersionRetrieveAppStoreVersionExperimentsV2Params,
    type AppStoreVersionRetrieveAppStoreVersionLocalizationsParams as AppStoreVersionRetrieveAppStoreVersionLocalizationsParams,
    type AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams as AppStoreVersionRetrieveAppStoreVersionPhasedReleaseParams,
    type AppStoreVersionRetrieveAppStoreVersionSubmissionParams as AppStoreVersionRetrieveAppStoreVersionSubmissionParams,
    type AppStoreVersionRetrieveBuildParams as AppStoreVersionRetrieveBuildParams,
    type AppStoreVersionRetrieveCustomerReviewsParams as AppStoreVersionRetrieveCustomerReviewsParams,
    type AppStoreVersionRetrieveGameCenterAppVersionParams as AppStoreVersionRetrieveGameCenterAppVersionParams,
    type AppStoreVersionRetrieveRoutingAppCoverageParams as AppStoreVersionRetrieveRoutingAppCoverageParams,
  };

  export {
    Apps as Apps,
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
    BackgroundAssetUploadFiles as BackgroundAssetUploadFiles,
    type BackgroundAssetUploadFile as BackgroundAssetUploadFile,
    type BackgroundAssetUploadFileResponse as BackgroundAssetUploadFileResponse,
    type BackgroundAssetUploadFileCreateParams as BackgroundAssetUploadFileCreateParams,
    type BackgroundAssetUploadFileRetrieveParams as BackgroundAssetUploadFileRetrieveParams,
    type BackgroundAssetUploadFileUpdateParams as BackgroundAssetUploadFileUpdateParams,
  };

  export {
    BackgroundAssetVersionInternalBetaReleases as BackgroundAssetVersionInternalBetaReleases,
    type BackgroundAssetVersionInternalBetaRelease as BackgroundAssetVersionInternalBetaRelease,
    type BackgroundAssetVersionInternalBetaReleaseRetrieveResponse as BackgroundAssetVersionInternalBetaReleaseRetrieveResponse,
    type BackgroundAssetVersionInternalBetaReleaseRetrieveParams as BackgroundAssetVersionInternalBetaReleaseRetrieveParams,
  };

  export {
    BackgroundAssetVersions as BackgroundAssetVersions,
    type BackgroundAssetVersion as BackgroundAssetVersion,
    type BackgroundAssetVersionResponse as BackgroundAssetVersionResponse,
    type BackgroundAssetVersionListUploadFilesResponse as BackgroundAssetVersionListUploadFilesResponse,
    type BackgroundAssetVersionCreateParams as BackgroundAssetVersionCreateParams,
    type BackgroundAssetVersionRetrieveParams as BackgroundAssetVersionRetrieveParams,
    type BackgroundAssetVersionListUploadFilesParams as BackgroundAssetVersionListUploadFilesParams,
  };

  export {
    BackgroundAssets as BackgroundAssets,
    type BackgroundAsset as BackgroundAsset,
    type BackgroundAssetResponse as BackgroundAssetResponse,
    type BackgroundAssetListVersionsResponse as BackgroundAssetListVersionsResponse,
    type BackgroundAssetCreateParams as BackgroundAssetCreateParams,
    type BackgroundAssetRetrieveParams as BackgroundAssetRetrieveParams,
    type BackgroundAssetListVersionsParams as BackgroundAssetListVersionsParams,
  };

  export {
    BetaAppClipInvocationLocalizations as BetaAppClipInvocationLocalizations,
    type BetaAppClipInvocationLocalization as BetaAppClipInvocationLocalization,
    type BetaAppClipInvocationLocalizationResponse as BetaAppClipInvocationLocalizationResponse,
    type BetaAppClipInvocationLocalizationCreateParams as BetaAppClipInvocationLocalizationCreateParams,
    type BetaAppClipInvocationLocalizationUpdateParams as BetaAppClipInvocationLocalizationUpdateParams,
  };

  export {
    BetaAppClipInvocations as BetaAppClipInvocations,
    type BetaAppClipInvocation as BetaAppClipInvocation,
    type BetaAppClipInvocationResponse as BetaAppClipInvocationResponse,
    type BetaAppClipInvocationCreateParams as BetaAppClipInvocationCreateParams,
    type BetaAppClipInvocationRetrieveParams as BetaAppClipInvocationRetrieveParams,
    type BetaAppClipInvocationUpdateParams as BetaAppClipInvocationUpdateParams,
  };

  export {
    BetaAppLocalizations as BetaAppLocalizations,
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
    BetaAppReviewDetails as BetaAppReviewDetails,
    type BetaAppReviewDetail as BetaAppReviewDetail,
    type BetaAppReviewDetailResponse as BetaAppReviewDetailResponse,
    type BetaAppReviewDetailListResponse as BetaAppReviewDetailListResponse,
    type BetaAppReviewDetailRetrieveParams as BetaAppReviewDetailRetrieveParams,
    type BetaAppReviewDetailUpdateParams as BetaAppReviewDetailUpdateParams,
    type BetaAppReviewDetailListParams as BetaAppReviewDetailListParams,
    type BetaAppReviewDetailRetrieveAppParams as BetaAppReviewDetailRetrieveAppParams,
  };

  export {
    BetaAppReviewSubmissions as BetaAppReviewSubmissions,
    type BetaAppReviewSubmission as BetaAppReviewSubmission,
    type BetaAppReviewSubmissionResponse as BetaAppReviewSubmissionResponse,
    type BetaAppReviewSubmissionListResponse as BetaAppReviewSubmissionListResponse,
    type BetaAppReviewSubmissionCreateParams as BetaAppReviewSubmissionCreateParams,
    type BetaAppReviewSubmissionRetrieveParams as BetaAppReviewSubmissionRetrieveParams,
    type BetaAppReviewSubmissionListParams as BetaAppReviewSubmissionListParams,
    type BetaAppReviewSubmissionRetrieveBuildParams as BetaAppReviewSubmissionRetrieveBuildParams,
  };

  export {
    BetaBuildLocalizations as BetaBuildLocalizations,
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
    BetaCrashLogs as BetaCrashLogs,
    type BetaCrashLog as BetaCrashLog,
    type BetaCrashLogRetrieveParams as BetaCrashLogRetrieveParams,
  };

  export {
    BetaFeedbackCrashSubmissions as BetaFeedbackCrashSubmissions,
    type BetaFeedbackCrashSubmission as BetaFeedbackCrashSubmission,
    type DeviceConnectionType as DeviceConnectionType,
    type BetaFeedbackCrashSubmissionRetrieveResponse as BetaFeedbackCrashSubmissionRetrieveResponse,
    type BetaFeedbackCrashSubmissionRetrieveParams as BetaFeedbackCrashSubmissionRetrieveParams,
    type BetaFeedbackCrashSubmissionGetCrashLogParams as BetaFeedbackCrashSubmissionGetCrashLogParams,
  };

  export {
    BetaFeedbackScreenshotSubmissions as BetaFeedbackScreenshotSubmissions,
    type BetaFeedbackScreenshotSubmission as BetaFeedbackScreenshotSubmission,
    type BetaFeedbackScreenshotSubmissionRetrieveResponse as BetaFeedbackScreenshotSubmissionRetrieveResponse,
    type BetaFeedbackScreenshotSubmissionRetrieveParams as BetaFeedbackScreenshotSubmissionRetrieveParams,
  };

  export {
    BetaGroups as BetaGroups,
    type BetaGroup as BetaGroup,
    type BetaGroupResponse as BetaGroupResponse,
    type BetaTestersWithoutIncludesResponse as BetaTestersWithoutIncludesResponse,
    type BetaGroupListResponse as BetaGroupListResponse,
    type BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse as BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse,
    type BetaGroupCreateParams as BetaGroupCreateParams,
    type BetaGroupRetrieveParams as BetaGroupRetrieveParams,
    type BetaGroupUpdateParams as BetaGroupUpdateParams,
    type BetaGroupListParams as BetaGroupListParams,
    type BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildParams as BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildParams,
    type BetaGroupListBetaRecruitmentCriteriaParams as BetaGroupListBetaRecruitmentCriteriaParams,
    type BetaGroupRetrieveAppParams as BetaGroupRetrieveAppParams,
  };

  export {
    BetaLicenseAgreements as BetaLicenseAgreements,
    type BetaLicenseAgreement as BetaLicenseAgreement,
    type BetaLicenseAgreementResponse as BetaLicenseAgreementResponse,
    type BetaLicenseAgreementListResponse as BetaLicenseAgreementListResponse,
    type BetaLicenseAgreementRetrieveParams as BetaLicenseAgreementRetrieveParams,
    type BetaLicenseAgreementUpdateParams as BetaLicenseAgreementUpdateParams,
    type BetaLicenseAgreementListParams as BetaLicenseAgreementListParams,
    type BetaLicenseAgreementRetrieveAppParams as BetaLicenseAgreementRetrieveAppParams,
  };

  export {
    BetaRecruitmentCriteria as BetaRecruitmentCriteria,
    type BetaRecruitmentCriterion as BetaRecruitmentCriterion,
    type BetaRecruitmentCriterionResponse as BetaRecruitmentCriterionResponse,
    type DeviceFamilyOsVersionFilter as DeviceFamilyOsVersionFilter,
    type BetaRecruitmentCriterionCreateParams as BetaRecruitmentCriterionCreateParams,
    type BetaRecruitmentCriterionUpdateParams as BetaRecruitmentCriterionUpdateParams,
  };

  export {
    BetaRecruitmentCriterionOptions as BetaRecruitmentCriterionOptions,
    type BetaRecruitmentCriterionOptionListResponse as BetaRecruitmentCriterionOptionListResponse,
    type BetaRecruitmentCriterionOptionListParams as BetaRecruitmentCriterionOptionListParams,
  };

  export {
    BetaTesterInvitations as BetaTesterInvitations,
    type BetaTesterInvitationCreateResponse as BetaTesterInvitationCreateResponse,
    type BetaTesterInvitationCreateParams as BetaTesterInvitationCreateParams,
  };

  export {
    BetaTesters as BetaTesters,
    type AppsWithoutIncludesResponse as AppsWithoutIncludesResponse,
    type BetaTester as BetaTester,
    type BetaTesterResponse as BetaTesterResponse,
    type BetaTesterListResponse as BetaTesterListResponse,
    type BetaTesterCreateParams as BetaTesterCreateParams,
    type BetaTesterRetrieveParams as BetaTesterRetrieveParams,
    type BetaTesterListParams as BetaTesterListParams,
    type BetaTesterListAppsParams as BetaTesterListAppsParams,
    type BetaTesterListBetaGroupsParams as BetaTesterListBetaGroupsParams,
    type BetaTesterListBuildsParams as BetaTesterListBuildsParams,
  };

  export {
    BuildBetaDetails as BuildBetaDetails,
    type BuildBetaDetail as BuildBetaDetail,
    type BuildBetaDetailResponse as BuildBetaDetailResponse,
    type BuildBetaDetailListResponse as BuildBetaDetailListResponse,
    type BuildBetaDetailRetrieveParams as BuildBetaDetailRetrieveParams,
    type BuildBetaDetailUpdateParams as BuildBetaDetailUpdateParams,
    type BuildBetaDetailListParams as BuildBetaDetailListParams,
    type BuildBetaDetailRetrieveBuildParams as BuildBetaDetailRetrieveBuildParams,
  };

  export {
    BuildBetaNotifications as BuildBetaNotifications,
    type BuildBetaNotificationCreateResponse as BuildBetaNotificationCreateResponse,
    type BuildBetaNotificationCreateParams as BuildBetaNotificationCreateParams,
  };

  export {
    Builds as Builds,
    type Build as Build,
    type BuildBundle as BuildBundle,
    type BuildIcon as BuildIcon,
    type BuildResponse as BuildResponse,
    type BuildsResponse as BuildsResponse,
    type BuildRetrieveBetaAppReviewSubmissionResponse as BuildRetrieveBetaAppReviewSubmissionResponse,
    type BuildRetrieveBetaBuildLocalizationsResponse as BuildRetrieveBetaBuildLocalizationsResponse,
    type BuildRetrieveDiagnosticSignaturesResponse as BuildRetrieveDiagnosticSignaturesResponse,
    type BuildRetrieveIconsResponse as BuildRetrieveIconsResponse,
    type BuildRetrievePreReleaseVersionResponse as BuildRetrievePreReleaseVersionResponse,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildUpdateParams as BuildUpdateParams,
    type BuildListParams as BuildListParams,
    type BuildRetrieveAppParams as BuildRetrieveAppParams,
    type BuildRetrieveAppStoreVersionParams as BuildRetrieveAppStoreVersionParams,
    type BuildRetrieveBetaAppReviewSubmissionParams as BuildRetrieveBetaAppReviewSubmissionParams,
    type BuildRetrieveBetaBuildLocalizationsParams as BuildRetrieveBetaBuildLocalizationsParams,
    type BuildRetrieveBuildBetaDetailParams as BuildRetrieveBuildBetaDetailParams,
    type BuildRetrieveDiagnosticSignaturesParams as BuildRetrieveDiagnosticSignaturesParams,
    type BuildRetrieveIconsParams as BuildRetrieveIconsParams,
    type BuildRetrieveIndividualTestersParams as BuildRetrieveIndividualTestersParams,
    type BuildRetrievePerfPowerMetricsParams as BuildRetrievePerfPowerMetricsParams,
    type BuildRetrievePreReleaseVersionParams as BuildRetrievePreReleaseVersionParams,
  };

  export {
    BundleIDCapabilities as BundleIDCapabilities,
    type BundleIDCapability as BundleIDCapability,
    type BundleIDCapabilityResponse as BundleIDCapabilityResponse,
    type CapabilitySetting as CapabilitySetting,
    type CapabilityType as CapabilityType,
    type BundleIDCapabilityCreateParams as BundleIDCapabilityCreateParams,
    type BundleIDCapabilityUpdateParams as BundleIDCapabilityUpdateParams,
  };

  export {
    BundleIDs as BundleIDs,
    type BundleID as BundleID,
    type BundleIDPlatform as BundleIDPlatform,
    type BundleIDResponse as BundleIDResponse,
    type BundleIDListResponse as BundleIDListResponse,
    type BundleIDRetrieveBundleIDCapabilitiesResponse as BundleIDRetrieveBundleIDCapabilitiesResponse,
    type BundleIDRetrieveProfilesResponse as BundleIDRetrieveProfilesResponse,
    type BundleIDCreateParams as BundleIDCreateParams,
    type BundleIDRetrieveParams as BundleIDRetrieveParams,
    type BundleIDUpdateParams as BundleIDUpdateParams,
    type BundleIDListParams as BundleIDListParams,
    type BundleIDRetrieveAppParams as BundleIDRetrieveAppParams,
    type BundleIDRetrieveBundleIDCapabilitiesParams as BundleIDRetrieveBundleIDCapabilitiesParams,
    type BundleIDRetrieveProfilesParams as BundleIDRetrieveProfilesParams,
  };

  export {
    Certificates as Certificates,
    type Certificate as Certificate,
    type CertificateResponse as CertificateResponse,
    type CertificateType as CertificateType,
    type CertificatesResponse as CertificatesResponse,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateRetrieveParams as CertificateRetrieveParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateRetrievePassTypeIDParams as CertificateRetrievePassTypeIDParams,
  };

  export {
    CiArtifacts as CiArtifacts,
    type CiArtifact as CiArtifact,
    type CiArtifactRetrieveResponse as CiArtifactRetrieveResponse,
    type CiArtifactRetrieveParams as CiArtifactRetrieveParams,
  };

  export {
    CiBuildActions as CiBuildActions,
    type CiBuildAction as CiBuildAction,
    type CiCompletionStatus as CiCompletionStatus,
    type CiExecutionProgress as CiExecutionProgress,
    type CiIssueCounts as CiIssueCounts,
    type CiBuildActionRetrieveResponse as CiBuildActionRetrieveResponse,
    type CiBuildActionListArtifactsResponse as CiBuildActionListArtifactsResponse,
    type CiBuildActionListIssuesResponse as CiBuildActionListIssuesResponse,
    type CiBuildActionListTestResultsResponse as CiBuildActionListTestResultsResponse,
    type CiBuildActionRetrieveParams as CiBuildActionRetrieveParams,
    type CiBuildActionListArtifactsParams as CiBuildActionListArtifactsParams,
    type CiBuildActionListIssuesParams as CiBuildActionListIssuesParams,
    type CiBuildActionListTestResultsParams as CiBuildActionListTestResultsParams,
    type CiBuildActionRetrieveBuildRunParams as CiBuildActionRetrieveBuildRunParams,
  };

  export {
    CiBuildRuns as CiBuildRuns,
    type CiBuildRun as CiBuildRun,
    type CiBuildRunResponse as CiBuildRunResponse,
    type CiGitUser as CiGitUser,
    type CiBuildRunListActionsResponse as CiBuildRunListActionsResponse,
    type CiBuildRunCreateParams as CiBuildRunCreateParams,
    type CiBuildRunRetrieveParams as CiBuildRunRetrieveParams,
    type CiBuildRunListActionsParams as CiBuildRunListActionsParams,
    type CiBuildRunListBuildsParams as CiBuildRunListBuildsParams,
  };

  export {
    CiIssues as CiIssues,
    type CiIssue as CiIssue,
    type FileLocation as FileLocation,
    type CiIssueRetrieveResponse as CiIssueRetrieveResponse,
    type CiIssueRetrieveParams as CiIssueRetrieveParams,
  };

  export {
    CiMacOsVersions as CiMacOsVersions,
    type CiMacOsVersion as CiMacOsVersion,
    type CiMacOsVersionsResponse as CiMacOsVersionsResponse,
    type CiMacOsVersionRetrieveResponse as CiMacOsVersionRetrieveResponse,
    type CiMacOsVersionRetrieveParams as CiMacOsVersionRetrieveParams,
    type CiMacOsVersionListParams as CiMacOsVersionListParams,
    type CiMacOsVersionListXcodeVersionsParams as CiMacOsVersionListXcodeVersionsParams,
  };

  export {
    CiProducts as CiProducts,
    type CiProductsAPICiBuildRuns as CiBuildRuns,
    type CiProductDetails as CiProductDetails,
    type CiProductResponse as CiProductResponse,
    type CiProductListResponse as CiProductListResponse,
    type CiProductListWorkflowsResponse as CiProductListWorkflowsResponse,
    type CiProductRetrieveParams as CiProductRetrieveParams,
    type CiProductListParams as CiProductListParams,
    type CiProductListBuildRunsParams as CiProductListBuildRunsParams,
    type CiProductListWorkflowsParams as CiProductListWorkflowsParams,
    type CiProductRetrieveAdditionalRepositoriesParams as CiProductRetrieveAdditionalRepositoriesParams,
    type CiProductRetrieveAppParams as CiProductRetrieveAppParams,
    type CiProductRetrievePrimaryRepositoriesParams as CiProductRetrievePrimaryRepositoriesParams,
  };

  export {
    CiTestResults as CiTestResults,
    type CiTestResult as CiTestResult,
    type CiTestStatus as CiTestStatus,
    type CiTestResultRetrieveResponse as CiTestResultRetrieveResponse,
    type CiTestResultRetrieveParams as CiTestResultRetrieveParams,
  };

  export {
    CiWorkflows as CiWorkflows,
    type BuildAudienceType as BuildAudienceType,
    type CiAction as CiAction,
    type CiActionType as CiActionType,
    type CiBranchPatterns as CiBranchPatterns,
    type CiBranchStartCondition as CiBranchStartCondition,
    type CiFilesAndFoldersRule as CiFilesAndFoldersRule,
    type CiManualBranchStartCondition as CiManualBranchStartCondition,
    type CiManualPullRequestStartCondition as CiManualPullRequestStartCondition,
    type CiManualTagStartCondition as CiManualTagStartCondition,
    type CiPullRequestStartCondition as CiPullRequestStartCondition,
    type CiScheduledStartCondition as CiScheduledStartCondition,
    type CiTagPatterns as CiTagPatterns,
    type CiTagStartCondition as CiTagStartCondition,
    type CiWorkflow as CiWorkflow,
    type CiWorkflowResponse as CiWorkflowResponse,
    type CiWorkflowCreateParams as CiWorkflowCreateParams,
    type CiWorkflowRetrieveParams as CiWorkflowRetrieveParams,
    type CiWorkflowUpdateParams as CiWorkflowUpdateParams,
    type CiWorkflowListBuildRunsParams as CiWorkflowListBuildRunsParams,
    type CiWorkflowRetrieveRepositoryParams as CiWorkflowRetrieveRepositoryParams,
  };

  export {
    type CiXcodeVersions as CiXcodeVersions,
    type CiTestDestinationKind as CiTestDestinationKind,
    type CiXcodeVersion as CiXcodeVersion,
    type CiXcodeVersionRetrieveResponse as CiXcodeVersionRetrieveResponse,
    type CiXcodeVersionRetrieveParams as CiXcodeVersionRetrieveParams,
    type CiXcodeVersionListParams as CiXcodeVersionListParams,
    type CiXcodeVersionListMacOsVersionsParams as CiXcodeVersionListMacOsVersionsParams,
  };

  export {
    CustomerReviewResponses as CustomerReviewResponses,
    type CustomerReviewResponseV1 as CustomerReviewResponseV1,
    type CustomerReviewResponseV1Response as CustomerReviewResponseV1Response,
    type CustomerReviewResponseCreateParams as CustomerReviewResponseCreateParams,
    type CustomerReviewResponseRetrieveParams as CustomerReviewResponseRetrieveParams,
  };

  export {
    CustomerReviewsAPICustomerReviews as CustomerReviews,
    type CustomerReview as CustomerReview,
    type CustomerReviewRetrieveResponse as CustomerReviewRetrieveResponse,
    type CustomerReviewRetrieveParams as CustomerReviewRetrieveParams,
    type CustomerReviewRetrieveResponseParams as CustomerReviewRetrieveResponseParams,
  };

  export {
    Devices as Devices,
    type Device as Device,
    type DeviceResponse as DeviceResponse,
    type DeviceListResponse as DeviceListResponse,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceRetrieveParams as DeviceRetrieveParams,
    type DeviceUpdateParams as DeviceUpdateParams,
    type DeviceListParams as DeviceListParams,
  };

  export {
    EndAppAvailabilityPreOrders as EndAppAvailabilityPreOrders,
    type EndAppAvailabilityPreOrderCreateResponse as EndAppAvailabilityPreOrderCreateResponse,
    type EndAppAvailabilityPreOrderCreateParams as EndAppAvailabilityPreOrderCreateParams,
  };

  export {
    EndUserLicenseAgreements as EndUserLicenseAgreements,
    type EndUserLicenseAgreement as EndUserLicenseAgreement,
    type EndUserLicenseAgreementResponse as EndUserLicenseAgreementResponse,
    type EndUserLicenseAgreementListTerritoriesResponse as EndUserLicenseAgreementListTerritoriesResponse,
    type EndUserLicenseAgreementCreateParams as EndUserLicenseAgreementCreateParams,
    type EndUserLicenseAgreementRetrieveParams as EndUserLicenseAgreementRetrieveParams,
    type EndUserLicenseAgreementUpdateParams as EndUserLicenseAgreementUpdateParams,
    type EndUserLicenseAgreementListTerritoriesParams as EndUserLicenseAgreementListTerritoriesParams,
  };

  export { FinanceReports as FinanceReports, type FinanceReportListParams as FinanceReportListParams };

  export {
    GameCenterAchievementImages as GameCenterAchievementImages,
    type GameCenterAchievementImage as GameCenterAchievementImage,
    type GameCenterAchievementImageResponse as GameCenterAchievementImageResponse,
    type GameCenterAchievementImageCreateParams as GameCenterAchievementImageCreateParams,
    type GameCenterAchievementImageRetrieveParams as GameCenterAchievementImageRetrieveParams,
    type GameCenterAchievementImageUpdateParams as GameCenterAchievementImageUpdateParams,
  };

  export {
    GameCenterAchievementLocalizations as GameCenterAchievementLocalizations,
    type AchievementLocalization as AchievementLocalization,
    type AchievementLocalizationResponse as AchievementLocalizationResponse,
    type GameCenterAchievementLocalizationCreateParams as GameCenterAchievementLocalizationCreateParams,
    type GameCenterAchievementLocalizationRetrieveParams as GameCenterAchievementLocalizationRetrieveParams,
    type GameCenterAchievementLocalizationUpdateParams as GameCenterAchievementLocalizationUpdateParams,
    type GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams as GameCenterAchievementLocalizationRetrieveGameCenterAchievementParams,
    type GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams as GameCenterAchievementLocalizationRetrieveGameCenterAchievementImageParams,
  };

  export {
    GameCenterAchievementReleases as GameCenterAchievementReleases,
    type GameCenterAchievementRelease as GameCenterAchievementRelease,
    type GameCenterAchievementReleaseResponse as GameCenterAchievementReleaseResponse,
    type GameCenterAchievementReleaseCreateParams as GameCenterAchievementReleaseCreateParams,
    type GameCenterAchievementReleaseRetrieveParams as GameCenterAchievementReleaseRetrieveParams,
  };

  export {
    GameCenterAchievements as GameCenterAchievements,
    type AchievementRecord as AchievementRecord,
    type AchievementReleases as AchievementReleases,
    type AchievementResponse as AchievementResponse,
    type GameCenterAchievementListLocalizationsResponse as GameCenterAchievementListLocalizationsResponse,
    type GameCenterAchievementCreateParams as GameCenterAchievementCreateParams,
    type GameCenterAchievementRetrieveParams as GameCenterAchievementRetrieveParams,
    type GameCenterAchievementUpdateParams as GameCenterAchievementUpdateParams,
    type GameCenterAchievementListLocalizationsParams as GameCenterAchievementListLocalizationsParams,
    type GameCenterAchievementListReleasesParams as GameCenterAchievementListReleasesParams,
  };

  export {
    GameCenterActivities as GameCenterActivities,
    type GameCenterActivity as GameCenterActivity,
    type GameCenterActivityResponse as GameCenterActivityResponse,
    type GameCenterActivityListVersionsResponse as GameCenterActivityListVersionsResponse,
    type GameCenterActivityCreateParams as GameCenterActivityCreateParams,
    type GameCenterActivityRetrieveParams as GameCenterActivityRetrieveParams,
    type GameCenterActivityUpdateParams as GameCenterActivityUpdateParams,
    type GameCenterActivityListVersionsParams as GameCenterActivityListVersionsParams,
  };

  export {
    GameCenterActivityImages as GameCenterActivityImages,
    type GameCenterActivityImage as GameCenterActivityImage,
    type GameCenterActivityImageResponse as GameCenterActivityImageResponse,
    type GameCenterActivityImageCreateParams as GameCenterActivityImageCreateParams,
    type GameCenterActivityImageRetrieveParams as GameCenterActivityImageRetrieveParams,
    type GameCenterActivityImageUpdateParams as GameCenterActivityImageUpdateParams,
  };

  export {
    GameCenterActivityLocalizations as GameCenterActivityLocalizations,
    type GameCenterActivityLocalization as GameCenterActivityLocalization,
    type GameCenterActivityLocalizationResponse as GameCenterActivityLocalizationResponse,
    type GameCenterActivityLocalizationCreateParams as GameCenterActivityLocalizationCreateParams,
    type GameCenterActivityLocalizationRetrieveParams as GameCenterActivityLocalizationRetrieveParams,
    type GameCenterActivityLocalizationUpdateParams as GameCenterActivityLocalizationUpdateParams,
    type GameCenterActivityLocalizationRetrieveImageParams as GameCenterActivityLocalizationRetrieveImageParams,
  };

  export {
    GameCenterActivityVersionReleases as GameCenterActivityVersionReleases,
    type GameCenterActivityVersionRelease as GameCenterActivityVersionRelease,
    type GameCenterActivityVersionReleaseResponse as GameCenterActivityVersionReleaseResponse,
    type GameCenterActivityVersionReleaseCreateParams as GameCenterActivityVersionReleaseCreateParams,
    type GameCenterActivityVersionReleaseRetrieveParams as GameCenterActivityVersionReleaseRetrieveParams,
  };

  export {
    GameCenterActivityVersions as GameCenterActivityVersions,
    type GameCenterActivityVersion as GameCenterActivityVersion,
    type GameCenterActivityVersionResponse as GameCenterActivityVersionResponse,
    type GameCenterVersionState as GameCenterVersionState,
    type GameCenterActivityVersionListLocalizationsResponse as GameCenterActivityVersionListLocalizationsResponse,
    type GameCenterActivityVersionCreateParams as GameCenterActivityVersionCreateParams,
    type GameCenterActivityVersionRetrieveParams as GameCenterActivityVersionRetrieveParams,
    type GameCenterActivityVersionUpdateParams as GameCenterActivityVersionUpdateParams,
    type GameCenterActivityVersionListLocalizationsParams as GameCenterActivityVersionListLocalizationsParams,
    type GameCenterActivityVersionRetrieveDefaultImageParams as GameCenterActivityVersionRetrieveDefaultImageParams,
  };

  export {
    GameCenterAppVersions as GameCenterAppVersions,
    type GameCenterAppVersion as GameCenterAppVersion,
    type GameCenterAppVersionResponse as GameCenterAppVersionResponse,
    type GameCenterAppVersionsResponse as GameCenterAppVersionsResponse,
    type GameCenterAppVersionCreateParams as GameCenterAppVersionCreateParams,
    type GameCenterAppVersionRetrieveParams as GameCenterAppVersionRetrieveParams,
    type GameCenterAppVersionUpdateParams as GameCenterAppVersionUpdateParams,
    type GameCenterAppVersionListCompatibilityVersionsParams as GameCenterAppVersionListCompatibilityVersionsParams,
    type GameCenterAppVersionRetrieveAppStoreVersionParams as GameCenterAppVersionRetrieveAppStoreVersionParams,
  };

  export {
    GameCenterChallengeImages as GameCenterChallengeImages,
    type GameCenterChallengeImage as GameCenterChallengeImage,
    type GameCenterChallengeImageResponse as GameCenterChallengeImageResponse,
    type GameCenterChallengeImageCreateParams as GameCenterChallengeImageCreateParams,
    type GameCenterChallengeImageRetrieveParams as GameCenterChallengeImageRetrieveParams,
    type GameCenterChallengeImageUpdateParams as GameCenterChallengeImageUpdateParams,
  };

  export {
    GameCenterChallengeLocalizations as GameCenterChallengeLocalizations,
    type GameCenterChallengeLocalization as GameCenterChallengeLocalization,
    type GameCenterChallengeLocalizationResponse as GameCenterChallengeLocalizationResponse,
    type GameCenterChallengeLocalizationCreateParams as GameCenterChallengeLocalizationCreateParams,
    type GameCenterChallengeLocalizationRetrieveParams as GameCenterChallengeLocalizationRetrieveParams,
    type GameCenterChallengeLocalizationUpdateParams as GameCenterChallengeLocalizationUpdateParams,
    type GameCenterChallengeLocalizationRetrieveImageParams as GameCenterChallengeLocalizationRetrieveImageParams,
  };

  export {
    GameCenterChallengeVersionReleases as GameCenterChallengeVersionReleases,
    type GameCenterChallengeVersionRelease as GameCenterChallengeVersionRelease,
    type GameCenterChallengeVersionReleaseResponse as GameCenterChallengeVersionReleaseResponse,
    type GameCenterChallengeVersionReleaseCreateParams as GameCenterChallengeVersionReleaseCreateParams,
    type GameCenterChallengeVersionReleaseRetrieveParams as GameCenterChallengeVersionReleaseRetrieveParams,
  };

  export {
    GameCenterChallengeVersions as GameCenterChallengeVersions,
    type GameCenterChallengeVersion as GameCenterChallengeVersion,
    type GameCenterChallengeVersionResponse as GameCenterChallengeVersionResponse,
    type GameCenterChallengeVersionListLocalizationsResponse as GameCenterChallengeVersionListLocalizationsResponse,
    type GameCenterChallengeVersionCreateParams as GameCenterChallengeVersionCreateParams,
    type GameCenterChallengeVersionRetrieveParams as GameCenterChallengeVersionRetrieveParams,
    type GameCenterChallengeVersionListLocalizationsParams as GameCenterChallengeVersionListLocalizationsParams,
    type GameCenterChallengeVersionRetrieveDefaultImageParams as GameCenterChallengeVersionRetrieveDefaultImageParams,
  };

  export {
    GameCenterChallenges as GameCenterChallenges,
    type GameCenterChallenge as GameCenterChallenge,
    type GameCenterChallengeResponse as GameCenterChallengeResponse,
    type GameCenterChallengeListVersionsResponse as GameCenterChallengeListVersionsResponse,
    type GameCenterChallengeCreateParams as GameCenterChallengeCreateParams,
    type GameCenterChallengeRetrieveParams as GameCenterChallengeRetrieveParams,
    type GameCenterChallengeUpdateParams as GameCenterChallengeUpdateParams,
    type GameCenterChallengeListVersionsParams as GameCenterChallengeListVersionsParams,
  };

  export {
    GameCenterDetails as GameCenterDetails,
    type GameCenterDetailsAPIGameCenterAchievements as GameCenterAchievements,
    type GameCenterDetailsAPIGameCenterActivities as GameCenterActivities,
    type GameCenterDetailsAPIGameCenterChallenges as GameCenterChallenges,
    type GameCenterDetailDetail as GameCenterDetailDetail,
    type GameCenterDetailResponse as GameCenterDetailResponse,
    type GameCenterDetailsAPIGameCenterLeaderboardReleases as GameCenterLeaderboardReleases,
    type GameCenterDetailsAPIGameCenterLeaderboardSetReleases as GameCenterLeaderboardSetReleases,
    type GameCenterLeaderboardSets as GameCenterLeaderboardSets,
    type GameCenterLeaderboards as GameCenterLeaderboards,
    type GameCenterDetailRetrieveActivityReleasesResponse as GameCenterDetailRetrieveActivityReleasesResponse,
    type GameCenterDetailRetrieveChallengeReleasesResponse as GameCenterDetailRetrieveChallengeReleasesResponse,
    type GameCenterDetailRetrieveParams as GameCenterDetailRetrieveParams,
    type GameCenterDetailUpdateParams as GameCenterDetailUpdateParams,
    type GameCenterDetailGameCenterDetailsParams as GameCenterDetailGameCenterDetailsParams,
    type GameCenterDetailRetrieveAchievementReleasesParams as GameCenterDetailRetrieveAchievementReleasesParams,
    type GameCenterDetailRetrieveActivityReleasesParams as GameCenterDetailRetrieveActivityReleasesParams,
    type GameCenterDetailRetrieveChallengeReleasesParams as GameCenterDetailRetrieveChallengeReleasesParams,
    type GameCenterDetailRetrieveGameCenterAchievementsParams as GameCenterDetailRetrieveGameCenterAchievementsParams,
    type GameCenterDetailRetrieveGameCenterActivitiesParams as GameCenterDetailRetrieveGameCenterActivitiesParams,
    type GameCenterDetailRetrieveGameCenterAppVersionsParams as GameCenterDetailRetrieveGameCenterAppVersionsParams,
    type GameCenterDetailRetrieveGameCenterChallengesParams as GameCenterDetailRetrieveGameCenterChallengesParams,
    type GameCenterDetailRetrieveGameCenterGroupParams as GameCenterDetailRetrieveGameCenterGroupParams,
    type GameCenterDetailRetrieveGameCenterLeaderboardSetsParams as GameCenterDetailRetrieveGameCenterLeaderboardSetsParams,
    type GameCenterDetailRetrieveGameCenterLeaderboardsParams as GameCenterDetailRetrieveGameCenterLeaderboardsParams,
    type GameCenterDetailRetrieveLeaderboardReleasesParams as GameCenterDetailRetrieveLeaderboardReleasesParams,
    type GameCenterDetailRetrieveLeaderboardSetReleasesParams as GameCenterDetailRetrieveLeaderboardSetReleasesParams,
  };

  export {
    GameCenterGroups as GameCenterGroups,
    type GameCenterGroup as GameCenterGroup,
    type GameCenterGroupResponse as GameCenterGroupResponse,
    type GameCenterGroupListResponse as GameCenterGroupListResponse,
    type GameCenterGroupRetrieveGameCenterDetailsResponse as GameCenterGroupRetrieveGameCenterDetailsResponse,
    type GameCenterGroupCreateParams as GameCenterGroupCreateParams,
    type GameCenterGroupRetrieveParams as GameCenterGroupRetrieveParams,
    type GameCenterGroupUpdateParams as GameCenterGroupUpdateParams,
    type GameCenterGroupListParams as GameCenterGroupListParams,
    type GameCenterGroupListGameCenterAchievementsParams as GameCenterGroupListGameCenterAchievementsParams,
    type GameCenterGroupListGameCenterActivitiesParams as GameCenterGroupListGameCenterActivitiesParams,
    type GameCenterGroupListGameCenterChallengesParams as GameCenterGroupListGameCenterChallengesParams,
    type GameCenterGroupListGameCenterLeaderboardSetsParams as GameCenterGroupListGameCenterLeaderboardSetsParams,
    type GameCenterGroupListGameCenterLeaderboardsParams as GameCenterGroupListGameCenterLeaderboardsParams,
    type GameCenterGroupRetrieveGameCenterDetailsParams as GameCenterGroupRetrieveGameCenterDetailsParams,
  };

  export {
    GameCenterLeaderboardEntrySubmissions as GameCenterLeaderboardEntrySubmissions,
    type GameCenterLeaderboardEntrySubmissionCreateResponse as GameCenterLeaderboardEntrySubmissionCreateResponse,
    type GameCenterLeaderboardEntrySubmissionCreateParams as GameCenterLeaderboardEntrySubmissionCreateParams,
  };

  export {
    GameCenterLeaderboardImages as GameCenterLeaderboardImages,
    type GameCenterLeaderboardImage as GameCenterLeaderboardImage,
    type GameCenterLeaderboardImageResponse as GameCenterLeaderboardImageResponse,
    type GameCenterLeaderboardImageCreateParams as GameCenterLeaderboardImageCreateParams,
    type GameCenterLeaderboardImageRetrieveParams as GameCenterLeaderboardImageRetrieveParams,
    type GameCenterLeaderboardImageUpdateParams as GameCenterLeaderboardImageUpdateParams,
  };

  export {
    GameCenterLeaderboardLocalizations as GameCenterLeaderboardLocalizations,
    type LeaderboardFormatter as LeaderboardFormatter,
    type LeaderboardLocalization as LeaderboardLocalization,
    type LeaderboardLocalizationResponse as LeaderboardLocalizationResponse,
    type GameCenterLeaderboardLocalizationCreateParams as GameCenterLeaderboardLocalizationCreateParams,
    type GameCenterLeaderboardLocalizationRetrieveParams as GameCenterLeaderboardLocalizationRetrieveParams,
    type GameCenterLeaderboardLocalizationUpdateParams as GameCenterLeaderboardLocalizationUpdateParams,
    type GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams as GameCenterLeaderboardLocalizationRetrieveGameCenterLeaderboardImageParams,
  };

  export {
    GameCenterLeaderboardReleases as GameCenterLeaderboardReleases,
    type GameCenterLeaderboardRelease as GameCenterLeaderboardRelease,
    type GameCenterLeaderboardReleaseResponse as GameCenterLeaderboardReleaseResponse,
    type GameCenterLeaderboardReleaseCreateParams as GameCenterLeaderboardReleaseCreateParams,
    type GameCenterLeaderboardReleaseRetrieveParams as GameCenterLeaderboardReleaseRetrieveParams,
  };

  export {
    GameCenterLeaderboardSetImages as GameCenterLeaderboardSetImages,
    type GameCenterLeaderboardSetImage as GameCenterLeaderboardSetImage,
    type GameCenterLeaderboardSetImageResponse as GameCenterLeaderboardSetImageResponse,
    type GameCenterLeaderboardSetImageCreateParams as GameCenterLeaderboardSetImageCreateParams,
    type GameCenterLeaderboardSetImageRetrieveParams as GameCenterLeaderboardSetImageRetrieveParams,
    type GameCenterLeaderboardSetImageUpdateParams as GameCenterLeaderboardSetImageUpdateParams,
  };

  export {
    GameCenterLeaderboardSetLocalizations as GameCenterLeaderboardSetLocalizations,
    type LeaderboardSetLocalization as LeaderboardSetLocalization,
    type LeaderboardSetLocalizationResponse as LeaderboardSetLocalizationResponse,
    type GameCenterLeaderboardSetLocalizationCreateParams as GameCenterLeaderboardSetLocalizationCreateParams,
    type GameCenterLeaderboardSetLocalizationRetrieveParams as GameCenterLeaderboardSetLocalizationRetrieveParams,
    type GameCenterLeaderboardSetLocalizationUpdateParams as GameCenterLeaderboardSetLocalizationUpdateParams,
    type GameCenterLeaderboardSetLocalizationRetrieveImageParams as GameCenterLeaderboardSetLocalizationRetrieveImageParams,
  };

  export {
    GameCenterLeaderboardSetMemberLocalizations as GameCenterLeaderboardSetMemberLocalizations,
    type LeaderboardSetMemberLocalization as LeaderboardSetMemberLocalization,
    type LeaderboardSetMemberLocalizationResponse as LeaderboardSetMemberLocalizationResponse,
    type GameCenterLeaderboardSetMemberLocalizationListResponse as GameCenterLeaderboardSetMemberLocalizationListResponse,
    type GameCenterLeaderboardSetMemberLocalizationCreateParams as GameCenterLeaderboardSetMemberLocalizationCreateParams,
    type GameCenterLeaderboardSetMemberLocalizationUpdateParams as GameCenterLeaderboardSetMemberLocalizationUpdateParams,
    type GameCenterLeaderboardSetMemberLocalizationListParams as GameCenterLeaderboardSetMemberLocalizationListParams,
    type GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams as GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardParams,
    type GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams as GameCenterLeaderboardSetMemberLocalizationRetrieveGameCenterLeaderboardSetParams,
  };

  export {
    GameCenterLeaderboardSetReleases as GameCenterLeaderboardSetReleases,
    type GameCenterLeaderboardSetRelease as GameCenterLeaderboardSetRelease,
    type GameCenterLeaderboardSetReleaseResponse as GameCenterLeaderboardSetReleaseResponse,
    type GameCenterLeaderboardSetReleaseCreateParams as GameCenterLeaderboardSetReleaseCreateParams,
    type GameCenterLeaderboardSetReleaseRetrieveParams as GameCenterLeaderboardSetReleaseRetrieveParams,
  };

  export {
    GameCenterLeaderboardSetsAPIGameCenterLeaderboardSets as GameCenterLeaderboardSets,
    type GameCenterLeaderboardSet as GameCenterLeaderboardSet,
    type GameCenterLeaderboardSetResponse as GameCenterLeaderboardSetResponse,
    type GameCenterLeaderboardSetListLocalizationsResponse as GameCenterLeaderboardSetListLocalizationsResponse,
    type GameCenterLeaderboardSetCreateParams as GameCenterLeaderboardSetCreateParams,
    type GameCenterLeaderboardSetRetrieveParams as GameCenterLeaderboardSetRetrieveParams,
    type GameCenterLeaderboardSetUpdateParams as GameCenterLeaderboardSetUpdateParams,
    type GameCenterLeaderboardSetListGameCenterLeaderboardsParams as GameCenterLeaderboardSetListGameCenterLeaderboardsParams,
    type GameCenterLeaderboardSetListLocalizationsParams as GameCenterLeaderboardSetListLocalizationsParams,
    type GameCenterLeaderboardSetListReleasesParams as GameCenterLeaderboardSetListReleasesParams,
    type GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams as GameCenterLeaderboardSetRetrieveGroupLeaderboardSetParams,
  };

  export {
    GameCenterLeaderboardsAPIGameCenterLeaderboards as GameCenterLeaderboards,
    type GameCenterLeaderboard as GameCenterLeaderboard,
    type GameCenterLeaderboardResponse as GameCenterLeaderboardResponse,
    type GameCenterLeaderboardListLocalizationsResponse as GameCenterLeaderboardListLocalizationsResponse,
    type GameCenterLeaderboardCreateParams as GameCenterLeaderboardCreateParams,
    type GameCenterLeaderboardRetrieveParams as GameCenterLeaderboardRetrieveParams,
    type GameCenterLeaderboardUpdateParams as GameCenterLeaderboardUpdateParams,
    type GameCenterLeaderboardListLocalizationsParams as GameCenterLeaderboardListLocalizationsParams,
    type GameCenterLeaderboardListReleasesParams as GameCenterLeaderboardListReleasesParams,
  };

  export {
    GameCenterMatchmakingQueues as GameCenterMatchmakingQueues,
    type MatchmakingQueue as MatchmakingQueue,
    type MatchmakingQueueResponse as MatchmakingQueueResponse,
    type MatchmakingQueuesResponse as MatchmakingQueuesResponse,
    type GameCenterMatchmakingQueueCreateParams as GameCenterMatchmakingQueueCreateParams,
    type GameCenterMatchmakingQueueRetrieveParams as GameCenterMatchmakingQueueRetrieveParams,
    type GameCenterMatchmakingQueueUpdateParams as GameCenterMatchmakingQueueUpdateParams,
    type GameCenterMatchmakingQueueListParams as GameCenterMatchmakingQueueListParams,
  };

  export {
    GameCenterMatchmakingRuleSetTests as GameCenterMatchmakingRuleSetTests,
    type GameCenterMatchmakingRuleSetTestCreateResponse as GameCenterMatchmakingRuleSetTestCreateResponse,
    type GameCenterMatchmakingRuleSetTestCreateParams as GameCenterMatchmakingRuleSetTestCreateParams,
  };

  export {
    GameCenterMatchmakingRuleSets as GameCenterMatchmakingRuleSets,
    type RuleSet as RuleSet,
    type RuleSetResponse as RuleSetResponse,
    type GameCenterMatchmakingRuleSetListResponse as GameCenterMatchmakingRuleSetListResponse,
    type GameCenterMatchmakingRuleSetListRulesResponse as GameCenterMatchmakingRuleSetListRulesResponse,
    type GameCenterMatchmakingRuleSetListTeamsResponse as GameCenterMatchmakingRuleSetListTeamsResponse,
    type GameCenterMatchmakingRuleSetCreateParams as GameCenterMatchmakingRuleSetCreateParams,
    type GameCenterMatchmakingRuleSetRetrieveParams as GameCenterMatchmakingRuleSetRetrieveParams,
    type GameCenterMatchmakingRuleSetUpdateParams as GameCenterMatchmakingRuleSetUpdateParams,
    type GameCenterMatchmakingRuleSetListParams as GameCenterMatchmakingRuleSetListParams,
    type GameCenterMatchmakingRuleSetListMatchmakingQueuesParams as GameCenterMatchmakingRuleSetListMatchmakingQueuesParams,
    type GameCenterMatchmakingRuleSetListRulesParams as GameCenterMatchmakingRuleSetListRulesParams,
    type GameCenterMatchmakingRuleSetListTeamsParams as GameCenterMatchmakingRuleSetListTeamsParams,
  };

  export {
    GameCenterMatchmakingRules as GameCenterMatchmakingRules,
    type MatchmakingRule as MatchmakingRule,
    type MatchmakingRuleResponse as MatchmakingRuleResponse,
    type GameCenterMatchmakingRuleCreateParams as GameCenterMatchmakingRuleCreateParams,
    type GameCenterMatchmakingRuleUpdateParams as GameCenterMatchmakingRuleUpdateParams,
  };

  export {
    GameCenterMatchmakingTeams as GameCenterMatchmakingTeams,
    type GameCenterMatchmakingTeam as GameCenterMatchmakingTeam,
    type GameCenterMatchmakingTeamResponse as GameCenterMatchmakingTeamResponse,
    type GameCenterMatchmakingTeamCreateParams as GameCenterMatchmakingTeamCreateParams,
    type GameCenterMatchmakingTeamUpdateParams as GameCenterMatchmakingTeamUpdateParams,
  };

  export {
    GameCenterPlayerAchievementSubmissions as GameCenterPlayerAchievementSubmissions,
    type GameCenterPlayerAchievementSubmissionCreateResponse as GameCenterPlayerAchievementSubmissionCreateResponse,
    type GameCenterPlayerAchievementSubmissionCreateParams as GameCenterPlayerAchievementSubmissionCreateParams,
  };

  export {
    InAppPurchaseAppStoreReviewScreenshots as InAppPurchaseAppStoreReviewScreenshots,
    type InAppPurchaseAppStoreReviewScreenshot as InAppPurchaseAppStoreReviewScreenshot,
    type InAppPurchaseAppStoreReviewScreenshotResponse as InAppPurchaseAppStoreReviewScreenshotResponse,
    type InAppPurchaseAppStoreReviewScreenshotCreateParams as InAppPurchaseAppStoreReviewScreenshotCreateParams,
    type InAppPurchaseAppStoreReviewScreenshotRetrieveParams as InAppPurchaseAppStoreReviewScreenshotRetrieveParams,
    type InAppPurchaseAppStoreReviewScreenshotUpdateParams as InAppPurchaseAppStoreReviewScreenshotUpdateParams,
  };

  export {
    InAppPurchaseAvailabilities as InAppPurchaseAvailabilities,
    type InAppPurchaseAvailability as InAppPurchaseAvailability,
    type InAppPurchaseAvailabilityResponse as InAppPurchaseAvailabilityResponse,
    type InAppPurchaseAvailabilityCreateParams as InAppPurchaseAvailabilityCreateParams,
    type InAppPurchaseAvailabilityRetrieveParams as InAppPurchaseAvailabilityRetrieveParams,
    type InAppPurchaseAvailabilityListAvailableTerritoriesParams as InAppPurchaseAvailabilityListAvailableTerritoriesParams,
  };

  export {
    InAppPurchaseContents as InAppPurchaseContents,
    type InAppPurchaseContent as InAppPurchaseContent,
    type InAppPurchaseContentResponse as InAppPurchaseContentResponse,
    type InAppPurchaseContentRetrieveParams as InAppPurchaseContentRetrieveParams,
  };

  export {
    InAppPurchaseImages as InAppPurchaseImages,
    type InAppPurchaseImage as InAppPurchaseImage,
    type InAppPurchaseImageResponse as InAppPurchaseImageResponse,
    type InAppPurchaseImageCreateParams as InAppPurchaseImageCreateParams,
    type InAppPurchaseImageRetrieveParams as InAppPurchaseImageRetrieveParams,
    type InAppPurchaseImageUpdateParams as InAppPurchaseImageUpdateParams,
  };

  export {
    InAppPurchaseLocalizations as InAppPurchaseLocalizations,
    type InAppPurchaseLocalization as InAppPurchaseLocalization,
    type InAppPurchaseLocalizationResponse as InAppPurchaseLocalizationResponse,
    type InAppPurchaseLocalizationCreateParams as InAppPurchaseLocalizationCreateParams,
    type InAppPurchaseLocalizationRetrieveParams as InAppPurchaseLocalizationRetrieveParams,
    type InAppPurchaseLocalizationUpdateParams as InAppPurchaseLocalizationUpdateParams,
  };

  export {
    InAppPurchasePriceSchedules as InAppPurchasePriceSchedules,
    type Price as Price,
    type PriceSchedule as PriceSchedule,
    type PriceScheduleResponse as PriceScheduleResponse,
    type PricesResponse as PricesResponse,
    type InAppPurchasePriceScheduleCreateParams as InAppPurchasePriceScheduleCreateParams,
    type InAppPurchasePriceScheduleRetrieveParams as InAppPurchasePriceScheduleRetrieveParams,
    type InAppPurchasePriceScheduleListAutomaticPricesParams as InAppPurchasePriceScheduleListAutomaticPricesParams,
    type InAppPurchasePriceScheduleListManualPricesParams as InAppPurchasePriceScheduleListManualPricesParams,
    type InAppPurchasePriceScheduleRetrieveBaseTerritoryParams as InAppPurchasePriceScheduleRetrieveBaseTerritoryParams,
  };

  export {
    InAppPurchaseSubmissions as InAppPurchaseSubmissions,
    type InAppPurchaseSubmissionCreateResponse as InAppPurchaseSubmissionCreateResponse,
    type InAppPurchaseSubmissionCreateParams as InAppPurchaseSubmissionCreateParams,
  };

  export {
    InAppPurchases as InAppPurchases,
    type InAppPurchase as InAppPurchase,
    type InAppPurchaseType as InAppPurchaseType,
    type InAppPurchaseV2 as InAppPurchaseV2,
    type InAppPurchaseV2Response as InAppPurchaseV2Response,
    type InAppPurchaseRetrieveImagesResponse as InAppPurchaseRetrieveImagesResponse,
    type InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse as InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse,
    type InAppPurchaseRetrieveParams as InAppPurchaseRetrieveParams,
    type InAppPurchaseUpdateParams as InAppPurchaseUpdateParams,
    type InAppPurchaseInAppPurchasesParams as InAppPurchaseInAppPurchasesParams,
    type InAppPurchaseRetrieveAppStoreReviewScreenshotParams as InAppPurchaseRetrieveAppStoreReviewScreenshotParams,
    type InAppPurchaseRetrieveContentParams as InAppPurchaseRetrieveContentParams,
    type InAppPurchaseRetrieveIapPriceScheduleParams as InAppPurchaseRetrieveIapPriceScheduleParams,
    type InAppPurchaseRetrieveImagesParams as InAppPurchaseRetrieveImagesParams,
    type InAppPurchaseRetrieveInAppPurchaseAvailabilityParams as InAppPurchaseRetrieveInAppPurchaseAvailabilityParams,
    type InAppPurchaseRetrieveInAppPurchaseLocalizationsParams as InAppPurchaseRetrieveInAppPurchaseLocalizationsParams,
    type InAppPurchaseRetrievePricePointsParams as InAppPurchaseRetrievePricePointsParams,
    type InAppPurchaseRetrievePromotedPurchaseParams as InAppPurchaseRetrievePromotedPurchaseParams,
  };

  export {
    MarketplaceSearchDetails as MarketplaceSearchDetails,
    type MarketplaceSearchDetail as MarketplaceSearchDetail,
    type MarketplaceSearchDetailCreateParams as MarketplaceSearchDetailCreateParams,
    type MarketplaceSearchDetailUpdateParams as MarketplaceSearchDetailUpdateParams,
  };

  export {
    MarketplaceWebhooks as MarketplaceWebhooks,
    type MarketplaceWebhook as MarketplaceWebhook,
    type MarketplaceWebhookResponse as MarketplaceWebhookResponse,
    type MarketplaceWebhookListResponse as MarketplaceWebhookListResponse,
    type MarketplaceWebhookCreateParams as MarketplaceWebhookCreateParams,
    type MarketplaceWebhookUpdateParams as MarketplaceWebhookUpdateParams,
    type MarketplaceWebhookListParams as MarketplaceWebhookListParams,
  };

  export {
    MerchantIDs as MerchantIDs,
    type MerchantID as MerchantID,
    type MerchantIDResponse as MerchantIDResponse,
    type MerchantIDListResponse as MerchantIDListResponse,
    type MerchantIDCreateParams as MerchantIDCreateParams,
    type MerchantIDRetrieveParams as MerchantIDRetrieveParams,
    type MerchantIDUpdateParams as MerchantIDUpdateParams,
    type MerchantIDListParams as MerchantIDListParams,
    type MerchantIDListCertificatesParams as MerchantIDListCertificatesParams,
  };

  export {
    Nominations as Nominations,
    type Nomination as Nomination,
    type NominationResponse as NominationResponse,
    type NominationListResponse as NominationListResponse,
    type NominationCreateParams as NominationCreateParams,
    type NominationRetrieveParams as NominationRetrieveParams,
    type NominationUpdateParams as NominationUpdateParams,
    type NominationListParams as NominationListParams,
  };

  export {
    PassTypeIDs as PassTypeIDs,
    type PassTypeID as PassTypeID,
    type PassTypeIDResponse as PassTypeIDResponse,
    type PassTypeIDListResponse as PassTypeIDListResponse,
    type PassTypeIDCreateParams as PassTypeIDCreateParams,
    type PassTypeIDRetrieveParams as PassTypeIDRetrieveParams,
    type PassTypeIDUpdateParams as PassTypeIDUpdateParams,
    type PassTypeIDListParams as PassTypeIDListParams,
    type PassTypeIDListCertificatesParams as PassTypeIDListCertificatesParams,
  };

  export {
    PreReleaseVersions as PreReleaseVersions,
    type PrereleaseVersion as PrereleaseVersion,
    type PreReleaseVersionRetrieveResponse as PreReleaseVersionRetrieveResponse,
    type PreReleaseVersionListResponse as PreReleaseVersionListResponse,
    type PreReleaseVersionRetrieveParams as PreReleaseVersionRetrieveParams,
    type PreReleaseVersionListParams as PreReleaseVersionListParams,
    type PreReleaseVersionListBuildsParams as PreReleaseVersionListBuildsParams,
    type PreReleaseVersionRetrieveAppParams as PreReleaseVersionRetrieveAppParams,
  };

  export {
    Profiles as Profiles,
    type Profile as Profile,
    type ProfileResponse as ProfileResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileListCertificatesResponse as ProfileListCertificatesResponse,
    type ProfileListDevicesResponse as ProfileListDevicesResponse,
    type ProfileRetrieveBundleIDResponse as ProfileRetrieveBundleIDResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileRetrieveParams as ProfileRetrieveParams,
    type ProfileListParams as ProfileListParams,
    type ProfileListCertificatesParams as ProfileListCertificatesParams,
    type ProfileListDevicesParams as ProfileListDevicesParams,
    type ProfileRetrieveBundleIDParams as ProfileRetrieveBundleIDParams,
  };

  export {
    PromotedPurchases as PromotedPurchases,
    type PromotedPurchase as PromotedPurchase,
    type PromotedPurchaseResponse as PromotedPurchaseResponse,
    type PromotedPurchaseCreateParams as PromotedPurchaseCreateParams,
    type PromotedPurchaseRetrieveParams as PromotedPurchaseRetrieveParams,
    type PromotedPurchaseUpdateParams as PromotedPurchaseUpdateParams,
  };

  export {
    ReviewSubmissionItems as ReviewSubmissionItems,
    type ReviewSubmissionItem as ReviewSubmissionItem,
    type ReviewSubmissionItemResponse as ReviewSubmissionItemResponse,
    type ReviewSubmissionItemCreateParams as ReviewSubmissionItemCreateParams,
    type ReviewSubmissionItemUpdateParams as ReviewSubmissionItemUpdateParams,
  };

  export {
    ReviewSubmissions as ReviewSubmissions,
    type ReviewSubmission as ReviewSubmission,
    type ReviewSubmissionResponse as ReviewSubmissionResponse,
    type ReviewSubmissionsResponse as ReviewSubmissionsResponse,
    type ReviewSubmissionListItemsResponse as ReviewSubmissionListItemsResponse,
    type ReviewSubmissionCreateParams as ReviewSubmissionCreateParams,
    type ReviewSubmissionRetrieveParams as ReviewSubmissionRetrieveParams,
    type ReviewSubmissionUpdateParams as ReviewSubmissionUpdateParams,
    type ReviewSubmissionListParams as ReviewSubmissionListParams,
    type ReviewSubmissionListItemsParams as ReviewSubmissionListItemsParams,
  };

  export {
    RoutingAppCoverages as RoutingAppCoverages,
    type RoutingAppCoverage as RoutingAppCoverage,
    type RoutingAppCoverageResponse as RoutingAppCoverageResponse,
    type RoutingAppCoverageCreateParams as RoutingAppCoverageCreateParams,
    type RoutingAppCoverageRetrieveParams as RoutingAppCoverageRetrieveParams,
    type RoutingAppCoverageUpdateParams as RoutingAppCoverageUpdateParams,
  };

  export { SalesReports as SalesReports, type SalesReportListParams as SalesReportListParams };

  export {
    SandboxTesters as SandboxTesters,
    type SandboxTesterV2 as SandboxTesterV2,
    type TerritoryCode as TerritoryCode,
    type SandboxTesterUpdateResponse as SandboxTesterUpdateResponse,
    type SandboxTesterListResponse as SandboxTesterListResponse,
    type SandboxTesterUpdateParams as SandboxTesterUpdateParams,
    type SandboxTesterListParams as SandboxTesterListParams,
  };

  export {
    SandboxTestersClearPurchaseHistoryRequest as SandboxTestersClearPurchaseHistoryRequest,
    type SandboxTestersClearPurchaseHistoryRequestCreateResponse as SandboxTestersClearPurchaseHistoryRequestCreateResponse,
    type SandboxTestersClearPurchaseHistoryRequestCreateParams as SandboxTestersClearPurchaseHistoryRequestCreateParams,
  };

  export {
    ScmGitReferences as ScmGitReferences,
    type ScmGitReference as ScmGitReference,
    type ScmGitReferenceRetrieveResponse as ScmGitReferenceRetrieveResponse,
    type ScmGitReferenceRetrieveParams as ScmGitReferenceRetrieveParams,
  };

  export {
    ScmProviders as ScmProviders,
    type ScmProvider as ScmProvider,
    type ScmProviderRetrieveResponse as ScmProviderRetrieveResponse,
    type ScmProviderListResponse as ScmProviderListResponse,
    type ScmProviderRetrieveParams as ScmProviderRetrieveParams,
    type ScmProviderListParams as ScmProviderListParams,
    type ScmProviderListRepositoriesParams as ScmProviderListRepositoriesParams,
  };

  export {
    ScmPullRequests as ScmPullRequests,
    type ScmPullRequest as ScmPullRequest,
    type ScmPullRequestRetrieveResponse as ScmPullRequestRetrieveResponse,
    type ScmPullRequestRetrieveParams as ScmPullRequestRetrieveParams,
  };

  export {
    type ScmRepositories as ScmRepositories,
    type ScmRepositoryDetails as ScmRepositoryDetails,
    type ScmRepositoryResponse as ScmRepositoryResponse,
    type ScmRepositoryListGitReferencesResponse as ScmRepositoryListGitReferencesResponse,
    type ScmRepositoryListPullRequestsResponse as ScmRepositoryListPullRequestsResponse,
    type ScmRepositoryRetrieveParams as ScmRepositoryRetrieveParams,
    type ScmRepositoryListParams as ScmRepositoryListParams,
    type ScmRepositoryListGitReferencesParams as ScmRepositoryListGitReferencesParams,
    type ScmRepositoryListPullRequestsParams as ScmRepositoryListPullRequestsParams,
  };

  export {
    SubscriptionAppStoreReviewScreenshots as SubscriptionAppStoreReviewScreenshots,
    type SubscriptionAppStoreReviewScreenshot as SubscriptionAppStoreReviewScreenshot,
    type SubscriptionAppStoreReviewScreenshotResponse as SubscriptionAppStoreReviewScreenshotResponse,
    type SubscriptionAppStoreReviewScreenshotCreateParams as SubscriptionAppStoreReviewScreenshotCreateParams,
    type SubscriptionAppStoreReviewScreenshotRetrieveParams as SubscriptionAppStoreReviewScreenshotRetrieveParams,
    type SubscriptionAppStoreReviewScreenshotUpdateParams as SubscriptionAppStoreReviewScreenshotUpdateParams,
  };

  export {
    SubscriptionAvailabilities as SubscriptionAvailabilities,
    type SubscriptionAvailability as SubscriptionAvailability,
    type SubscriptionAvailabilityResponse as SubscriptionAvailabilityResponse,
    type SubscriptionAvailabilityCreateParams as SubscriptionAvailabilityCreateParams,
    type SubscriptionAvailabilityRetrieveParams as SubscriptionAvailabilityRetrieveParams,
    type SubscriptionAvailabilityListAvailableTerritoriesParams as SubscriptionAvailabilityListAvailableTerritoriesParams,
  };

  export {
    SubscriptionGracePeriods as SubscriptionGracePeriods,
    type SubscriptionGracePeriodDetails as SubscriptionGracePeriodDetails,
    type SubscriptionGracePeriodDuration as SubscriptionGracePeriodDuration,
    type SubscriptionGracePeriodResponse as SubscriptionGracePeriodResponse,
    type SubscriptionGracePeriodRetrieveParams as SubscriptionGracePeriodRetrieveParams,
    type SubscriptionGracePeriodUpdateParams as SubscriptionGracePeriodUpdateParams,
  };

  export {
    SubscriptionGroupLocalizations as SubscriptionGroupLocalizations,
    type SubscriptionGroupLocalization as SubscriptionGroupLocalization,
    type SubscriptionGroupLocalizationResponse as SubscriptionGroupLocalizationResponse,
    type SubscriptionGroupLocalizationCreateParams as SubscriptionGroupLocalizationCreateParams,
    type SubscriptionGroupLocalizationRetrieveParams as SubscriptionGroupLocalizationRetrieveParams,
    type SubscriptionGroupLocalizationUpdateParams as SubscriptionGroupLocalizationUpdateParams,
  };

  export {
    SubscriptionGroupSubmissions as SubscriptionGroupSubmissions,
    type SubscriptionGroupSubmissionCreateResponse as SubscriptionGroupSubmissionCreateResponse,
    type SubscriptionGroupSubmissionCreateParams as SubscriptionGroupSubmissionCreateParams,
  };

  export {
    SubscriptionGroups as SubscriptionGroups,
    type SubscriptionGroup as SubscriptionGroup,
    type SubscriptionGroupResponse as SubscriptionGroupResponse,
    type SubscriptionGroupListLocalizationsResponse as SubscriptionGroupListLocalizationsResponse,
    type SubscriptionGroupListSubscriptionsResponse as SubscriptionGroupListSubscriptionsResponse,
    type SubscriptionGroupCreateParams as SubscriptionGroupCreateParams,
    type SubscriptionGroupRetrieveParams as SubscriptionGroupRetrieveParams,
    type SubscriptionGroupUpdateParams as SubscriptionGroupUpdateParams,
    type SubscriptionGroupListLocalizationsParams as SubscriptionGroupListLocalizationsParams,
    type SubscriptionGroupListSubscriptionsParams as SubscriptionGroupListSubscriptionsParams,
  };

  export {
    SubscriptionImages as SubscriptionImages,
    type SubscriptionImage as SubscriptionImage,
    type SubscriptionImageResponse as SubscriptionImageResponse,
    type SubscriptionImageCreateParams as SubscriptionImageCreateParams,
    type SubscriptionImageRetrieveParams as SubscriptionImageRetrieveParams,
    type SubscriptionImageUpdateParams as SubscriptionImageUpdateParams,
  };

  export {
    SubscriptionIntroductoryOffers as SubscriptionIntroductoryOffers,
    type SubscriptionIntroductoryOffer as SubscriptionIntroductoryOffer,
    type SubscriptionIntroductoryOfferResponse as SubscriptionIntroductoryOfferResponse,
    type SubscriptionOfferDuration as SubscriptionOfferDuration,
    type SubscriptionOfferMode as SubscriptionOfferMode,
    type SubscriptionIntroductoryOfferCreateParams as SubscriptionIntroductoryOfferCreateParams,
    type SubscriptionIntroductoryOfferUpdateParams as SubscriptionIntroductoryOfferUpdateParams,
  };

  export {
    SubscriptionLocalizations as SubscriptionLocalizations,
    type SubscriptionLocalization as SubscriptionLocalization,
    type SubscriptionLocalizationResponse as SubscriptionLocalizationResponse,
    type SubscriptionLocalizationCreateParams as SubscriptionLocalizationCreateParams,
    type SubscriptionLocalizationRetrieveParams as SubscriptionLocalizationRetrieveParams,
    type SubscriptionLocalizationUpdateParams as SubscriptionLocalizationUpdateParams,
  };

  export {
    SubscriptionOfferCodeCustomCodes as SubscriptionOfferCodeCustomCodes,
    type SubscriptionOfferCodeCustomCode as SubscriptionOfferCodeCustomCode,
    type SubscriptionOfferCodeCustomCodeResponse as SubscriptionOfferCodeCustomCodeResponse,
    type SubscriptionOfferCodeCustomCodeCreateParams as SubscriptionOfferCodeCustomCodeCreateParams,
    type SubscriptionOfferCodeCustomCodeRetrieveParams as SubscriptionOfferCodeCustomCodeRetrieveParams,
    type SubscriptionOfferCodeCustomCodeUpdateParams as SubscriptionOfferCodeCustomCodeUpdateParams,
  };

  export {
    SubscriptionOfferCodeOneTimeUseCodes as SubscriptionOfferCodeOneTimeUseCodes,
    type SubscriptionOfferCodeOneTimeUseCode as SubscriptionOfferCodeOneTimeUseCode,
    type SubscriptionOfferCodeOneTimeUseCodeResponse as SubscriptionOfferCodeOneTimeUseCodeResponse,
    type SubscriptionOfferCodeOneTimeUseCodeListValuesResponse as SubscriptionOfferCodeOneTimeUseCodeListValuesResponse,
    type SubscriptionOfferCodeOneTimeUseCodeCreateParams as SubscriptionOfferCodeOneTimeUseCodeCreateParams,
    type SubscriptionOfferCodeOneTimeUseCodeRetrieveParams as SubscriptionOfferCodeOneTimeUseCodeRetrieveParams,
    type SubscriptionOfferCodeOneTimeUseCodeUpdateParams as SubscriptionOfferCodeOneTimeUseCodeUpdateParams,
  };

  export {
    SubscriptionOfferCodes as SubscriptionOfferCodes,
    type SubscriptionCustomerEligibility as SubscriptionCustomerEligibility,
    type SubscriptionOfferCode as SubscriptionOfferCode,
    type SubscriptionOfferCodePrice as SubscriptionOfferCodePrice,
    type SubscriptionOfferCodeResponse as SubscriptionOfferCodeResponse,
    type SubscriptionOfferEligibility as SubscriptionOfferEligibility,
    type SubscriptionOfferCodeListCustomCodesResponse as SubscriptionOfferCodeListCustomCodesResponse,
    type SubscriptionOfferCodeListOneTimeUseCodesResponse as SubscriptionOfferCodeListOneTimeUseCodesResponse,
    type SubscriptionOfferCodeListPricesResponse as SubscriptionOfferCodeListPricesResponse,
    type SubscriptionOfferCodeCreateParams as SubscriptionOfferCodeCreateParams,
    type SubscriptionOfferCodeRetrieveParams as SubscriptionOfferCodeRetrieveParams,
    type SubscriptionOfferCodeUpdateParams as SubscriptionOfferCodeUpdateParams,
    type SubscriptionOfferCodeListCustomCodesParams as SubscriptionOfferCodeListCustomCodesParams,
    type SubscriptionOfferCodeListOneTimeUseCodesParams as SubscriptionOfferCodeListOneTimeUseCodesParams,
    type SubscriptionOfferCodeListPricesParams as SubscriptionOfferCodeListPricesParams,
  };

  export {
    SubscriptionPricePoints as SubscriptionPricePoints,
    type SubscriptionPricePoint as SubscriptionPricePoint,
    type SubscriptionPricePointsResponse as SubscriptionPricePointsResponse,
    type SubscriptionPricePointRetrieveResponse as SubscriptionPricePointRetrieveResponse,
    type SubscriptionPricePointRetrieveParams as SubscriptionPricePointRetrieveParams,
    type SubscriptionPricePointListEqualizationsParams as SubscriptionPricePointListEqualizationsParams,
  };

  export {
    SubscriptionPrices as SubscriptionPrices,
    type SubscriptionPrice as SubscriptionPrice,
    type SubscriptionPriceCreateResponse as SubscriptionPriceCreateResponse,
    type SubscriptionPriceCreateParams as SubscriptionPriceCreateParams,
  };

  export {
    SubscriptionPromotionalOffers as SubscriptionPromotionalOffers,
    type SubscriptionPromotionalOffer as SubscriptionPromotionalOffer,
    type SubscriptionPromotionalOfferPrice as SubscriptionPromotionalOfferPrice,
    type SubscriptionPromotionalOfferPriceInlineCreate as SubscriptionPromotionalOfferPriceInlineCreate,
    type SubscriptionPromotionalOfferResponse as SubscriptionPromotionalOfferResponse,
    type SubscriptionPromotionalOfferListPricesResponse as SubscriptionPromotionalOfferListPricesResponse,
    type SubscriptionPromotionalOfferCreateParams as SubscriptionPromotionalOfferCreateParams,
    type SubscriptionPromotionalOfferRetrieveParams as SubscriptionPromotionalOfferRetrieveParams,
    type SubscriptionPromotionalOfferUpdateParams as SubscriptionPromotionalOfferUpdateParams,
    type SubscriptionPromotionalOfferListPricesParams as SubscriptionPromotionalOfferListPricesParams,
  };

  export {
    SubscriptionSubmissions as SubscriptionSubmissions,
    type SubscriptionSubmissionCreateResponse as SubscriptionSubmissionCreateResponse,
    type SubscriptionSubmissionCreateParams as SubscriptionSubmissionCreateParams,
  };

  export {
    Subscriptions as Subscriptions,
    type Subscription as Subscription,
    type SubscriptionResponse as SubscriptionResponse,
    type SubscriptionListImagesResponse as SubscriptionListImagesResponse,
    type SubscriptionListIntroductoryOffersResponse as SubscriptionListIntroductoryOffersResponse,
    type SubscriptionListOfferCodesResponse as SubscriptionListOfferCodesResponse,
    type SubscriptionListPricesResponse as SubscriptionListPricesResponse,
    type SubscriptionListPromotionalOffersResponse as SubscriptionListPromotionalOffersResponse,
    type SubscriptionListSubscriptionLocalizationsResponse as SubscriptionListSubscriptionLocalizationsResponse,
    type SubscriptionListWinBackOffersResponse as SubscriptionListWinBackOffersResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionCheckSubscriptionAvailabilityParams as SubscriptionCheckSubscriptionAvailabilityParams,
    type SubscriptionListImagesParams as SubscriptionListImagesParams,
    type SubscriptionListIntroductoryOffersParams as SubscriptionListIntroductoryOffersParams,
    type SubscriptionListOfferCodesParams as SubscriptionListOfferCodesParams,
    type SubscriptionListPricePointsParams as SubscriptionListPricePointsParams,
    type SubscriptionListPricesParams as SubscriptionListPricesParams,
    type SubscriptionListPromotionalOffersParams as SubscriptionListPromotionalOffersParams,
    type SubscriptionListSubscriptionLocalizationsParams as SubscriptionListSubscriptionLocalizationsParams,
    type SubscriptionListWinBackOffersParams as SubscriptionListWinBackOffersParams,
    type SubscriptionRetrieveAppStoreReviewScreenshotParams as SubscriptionRetrieveAppStoreReviewScreenshotParams,
    type SubscriptionRetrievePromotedPurchaseParams as SubscriptionRetrievePromotedPurchaseParams,
  };

  export {
    Territories as Territories,
    type TerritoriesResponse as TerritoriesResponse,
    type TerritoryListParams as TerritoryListParams,
  };

  export {
    TerritoryAvailabilities as TerritoryAvailabilities,
    type TerritoryAvailability as TerritoryAvailability,
    type TerritoryAvailabilityUpdateResponse as TerritoryAvailabilityUpdateResponse,
    type TerritoryAvailabilityUpdateParams as TerritoryAvailabilityUpdateParams,
  };

  export {
    UserInvitations as UserInvitations,
    type UserInvitation as UserInvitation,
    type UserInvitationResponse as UserInvitationResponse,
    type UserRole as UserRole,
    type UserInvitationListResponse as UserInvitationListResponse,
    type UserInvitationCreateParams as UserInvitationCreateParams,
    type UserInvitationRetrieveParams as UserInvitationRetrieveParams,
    type UserInvitationListParams as UserInvitationListParams,
    type UserInvitationRetrieveVisibleAppsParams as UserInvitationRetrieveVisibleAppsParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserResponse as UserResponse,
    type UserListResponse as UserListResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetVisibleAppsParams as UserGetVisibleAppsParams,
  };

  export {
    WebhookDeliveries as WebhookDeliveries,
    type WebhookDelivery as WebhookDelivery,
    type WebhookEvent as WebhookEvent,
    type WebhookDeliveryCreateResponse as WebhookDeliveryCreateResponse,
    type WebhookDeliveryCreateParams as WebhookDeliveryCreateParams,
  };

  export {
    WebhookPings as WebhookPings,
    type WebhookPingCreateResponse as WebhookPingCreateResponse,
    type WebhookPingCreateParams as WebhookPingCreateParams,
  };

  export {
    Webhooks as Webhooks,
    type Webhook as Webhook,
    type WebhookEventType as WebhookEventType,
    type WebhookResponse as WebhookResponse,
    type WebhookListDeliveriesResponse as WebhookListDeliveriesResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListDeliveriesParams as WebhookListDeliveriesParams,
  };

  export {
    WinBackOffers as WinBackOffers,
    type IntegerRange as IntegerRange,
    type WinBackOffer as WinBackOffer,
    type WinBackOfferPrice as WinBackOfferPrice,
    type WinBackOfferResponse as WinBackOfferResponse,
    type WinBackOfferListPricesResponse as WinBackOfferListPricesResponse,
    type WinBackOfferCreateParams as WinBackOfferCreateParams,
    type WinBackOfferRetrieveParams as WinBackOfferRetrieveParams,
    type WinBackOfferUpdateParams as WinBackOfferUpdateParams,
    type WinBackOfferListPricesParams as WinBackOfferListPricesParams,
  };

  export {
    BuildBundles as BuildBundles,
    type AppClipDomainStatus as AppClipDomainStatus,
    type BuildBundleRetrieveBetaAppClipInvocationsResponse as BuildBundleRetrieveBetaAppClipInvocationsResponse,
    type BuildBundleRetrieveBuildBundleFileSizesResponse as BuildBundleRetrieveBuildBundleFileSizesResponse,
    type BuildBundleRetrieveAppClipDomainCacheStatusParams as BuildBundleRetrieveAppClipDomainCacheStatusParams,
    type BuildBundleRetrieveAppClipDomainDebugStatusParams as BuildBundleRetrieveAppClipDomainDebugStatusParams,
    type BuildBundleRetrieveBetaAppClipInvocationsParams as BuildBundleRetrieveBetaAppClipInvocationsParams,
    type BuildBundleRetrieveBuildBundleFileSizesParams as BuildBundleRetrieveBuildBundleFileSizesParams,
  };

  export {
    DiagnosticSignatures as DiagnosticSignatures,
    type DiagnosticLogCallStackNode as DiagnosticLogCallStackNode,
    type DiagnosticSignatureRetrieveLogsResponse as DiagnosticSignatureRetrieveLogsResponse,
    type DiagnosticSignatureRetrieveLogsParams as DiagnosticSignatureRetrieveLogsParams,
  };

  export {
    GameCenterEnabledVersions as GameCenterEnabledVersions,
    type GameCenterEnabledVersionListCompatibleVersionsParams as GameCenterEnabledVersionListCompatibleVersionsParams,
  };

  export {
    InAppPurchasePricePoints as InAppPurchasePricePoints,
    type PricePoint as PricePoint,
    type PricePointsResponse as PricePointsResponse,
    type InAppPurchasePricePointListEqualizationsParams as InAppPurchasePricePointListEqualizationsParams,
  };
}
