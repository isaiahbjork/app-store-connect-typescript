// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppsAPI from '../apps/apps';
import * as BetaGroupsAPI from '../beta-groups/beta-groups';
import * as MetricsAPI from './metrics';
import { MetricGetBetaTesterUsagesParams, MetricGetBetaTesterUsagesResponse, Metrics } from './metrics';
import * as BuildsAPI from '../builds/builds';
import * as RelationshipsAPI from './relationships/relationships';
import { Relationships as RelationshipsAPIRelationships } from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaTesters extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  create(body: BetaTesterCreateParams, options?: RequestOptions): APIPromise<BetaTesterResponse> {
    return this._client.post('/v1/betaTesters', { body, ...options });
  }

  retrieve(
    id: string,
    query: BetaTesterRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaTesterResponse> {
    return this._client.get(path`/v1/betaTesters/${id}`, { query, ...options });
  }

  list(
    query: BetaTesterListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaTesterListResponse> {
    return this._client.get('/v1/betaTesters', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaTesters/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listApps(
    id: string,
    query: BetaTesterListAppsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsWithoutIncludesResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/apps`, { query, ...options });
  }

  listBetaGroups(
    id: string,
    query: BetaTesterListBetaGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.BetaGroupsWithoutIncludesResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/betaGroups`, { query, ...options });
  }

  listBuilds(
    id: string,
    query: BetaTesterListBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.BuildsWithoutIncludesResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/builds`, { query, ...options });
  }
}

export interface AppsWithoutIncludesResponse {
  data: Array<AppsAPI.App>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaTester {
  id: string;

  type: 'betaTesters';

  attributes?: BetaTester.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaTester.Relationships;
}

export namespace BetaTester {
  export interface Attributes {
    email?: string;

    firstName?: string;

    inviteType?: 'EMAIL' | 'PUBLIC_LINK';

    lastName?: string;

    state?: 'NOT_INVITED' | 'INVITED' | 'ACCEPTED' | 'INSTALLED' | 'REVOKED';
  }

  export interface Relationships {
    apps?: Relationships.Apps;

    betaGroups?: Relationships.BetaGroups;

    builds?: Relationships.Builds;
  }

  export namespace Relationships {
    export interface Apps {
      data?: Array<Apps.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Apps {
      export interface Data {
        id: string;

        type: 'apps';
      }
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
  }
}

export interface BetaTesterResponse {
  data: BetaTester;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | BetaGroupsAPI.BetaGroup | BuildsAPI.Build>;
}

export interface BetaTesterListResponse {
  data: Array<BetaTester>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App | BetaGroupsAPI.BetaGroup | BuildsAPI.Build>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaTesterCreateParams {
  data: BetaTesterCreateParams.Data;
}

export namespace BetaTesterCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'betaTesters';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      email: string;

      firstName?: string;

      lastName?: string;
    }

    export interface Relationships {
      betaGroups?: Relationships.BetaGroups;

      builds?: Relationships.Builds;
    }

    export namespace Relationships {
      export interface BetaGroups {
        data?: Array<BetaGroups.Data>;
      }

      export namespace BetaGroups {
        export interface Data {
          id: string;

          type: 'betaGroups';
        }
      }

      export interface Builds {
        data?: Array<Builds.Data>;
      }

      export namespace Builds {
        export interface Data {
          id: string;

          type: 'builds';
        }
      }
    }
  }
}

export interface BetaTesterRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'apps' | 'betaGroups' | 'builds'>;

  /**
   * maximum number of related apps returned (when they are included)
   */
  'limit[apps]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface BetaTesterListParams {
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
   * filter by id(s) of related 'apps'
   */
  'filter[apps]'?: Array<string>;

  /**
   * filter by id(s) of related 'betaGroups'
   */
  'filter[betaGroups]'?: Array<string>;

  /**
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * filter by attribute 'email'
   */
  'filter[email]'?: Array<string>;

  /**
   * filter by attribute 'firstName'
   */
  'filter[firstName]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'inviteType'
   */
  'filter[inviteType]'?: Array<'EMAIL' | 'PUBLIC_LINK'>;

  /**
   * filter by attribute 'lastName'
   */
  'filter[lastName]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'apps' | 'betaGroups' | 'builds'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related apps returned (when they are included)
   */
  'limit[apps]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    | 'firstName'
    | '-firstName'
    | 'lastName'
    | '-lastName'
    | 'email'
    | '-email'
    | 'inviteType'
    | '-inviteType'
    | 'state'
    | '-state'
  >;
}

export interface BetaTesterListAppsParams {
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
   * maximum resources per page
   */
  limit?: number;
}

export interface BetaTesterListBetaGroupsParams {
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

export interface BetaTesterListBuildsParams {
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

BetaTesters.Relationships = RelationshipsAPIRelationships;
BetaTesters.Metrics = Metrics;

export declare namespace BetaTesters {
  export {
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

  export { RelationshipsAPIRelationships as Relationships };

  export {
    Metrics as Metrics,
    type MetricGetBetaTesterUsagesResponse as MetricGetBetaTesterUsagesResponse,
    type MetricGetBetaTesterUsagesParams as MetricGetBetaTesterUsagesParams,
  };
}
