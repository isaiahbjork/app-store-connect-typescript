// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as BetaRecruitmentCriteriaAPI from '../beta-recruitment-criteria';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppEncryptionDeclarationsAPI from '../app-encryption-declarations/app-encryption-declarations';
import * as AppsAPI from '../apps/apps';
import * as MetricsAPI from './metrics';
import {
  MetricListBetaTesterUsagesParams,
  MetricListPublicLinkUsagesParams,
  MetricListPublicLinkUsagesResponse,
  Metrics,
} from './metrics';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import * as BuildsAPI from '../builds/builds';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse,
  RelationshipListBetaRecruitmentCriteriaResponse,
  RelationshipListBetaTestersParams,
  RelationshipListBetaTestersResponse,
  RelationshipListBuildsParams,
  RelationshipListBuildsResponse,
  RelationshipRetrieveAppResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaGroups extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  create(body: BetaGroupCreateParams, options?: RequestOptions): APIPromise<BetaGroupResponse> {
    return this._client.post('/v1/betaGroups', { body, ...options });
  }

  retrieve(
    id: string,
    query: BetaGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupResponse> {
    return this._client.get(path`/v1/betaGroups/${id}`, { query, ...options });
  }

  update(id: string, body: BetaGroupUpdateParams, options?: RequestOptions): APIPromise<BetaGroupResponse> {
    return this._client.patch(path`/v1/betaGroups/${id}`, { body, ...options });
  }

  list(
    query: BetaGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupListResponse> {
    return this._client.get('/v1/betaGroups', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaGroups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  checkBetaRecruitmentCriterionCompatibleBuild(
    id: string,
    query: BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/betaRecruitmentCriterionCompatibleBuildCheck`, {
      query,
      ...options,
    });
  }

  listBetaRecruitmentCriteria(
    id: string,
    query: BetaGroupListBetaRecruitmentCriteriaParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaRecruitmentCriteriaAPI.BetaRecruitmentCriterionResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/betaRecruitmentCriteria`, { query, ...options });
  }

  retrieveApp(
    id: string,
    query: BetaGroupRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/betaGroups/${id}/app`, { query, ...options });
  }
}

export interface BetaGroup {
  id: string;

  type: 'betaGroups';

  attributes?: BetaGroup.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaGroup.Relationships;
}

export namespace BetaGroup {
  export interface Attributes {
    createdDate?: string;

    feedbackEnabled?: boolean;

    hasAccessToAllBuilds?: boolean;

    iosBuildsAvailableForAppleSiliconMac?: boolean;

    iosBuildsAvailableForAppleVision?: boolean;

    isInternalGroup?: boolean;

    name?: string;

    publicLink?: string;

    publicLinkEnabled?: boolean;

    publicLinkId?: string;

    publicLinkLimit?: number;

    publicLinkLimitEnabled?: boolean;
  }

  export interface Relationships {
    app?: Relationships.App;

    betaRecruitmentCriteria?: Relationships.BetaRecruitmentCriteria;

    betaRecruitmentCriterionCompatibleBuildCheck?: Relationships.BetaRecruitmentCriterionCompatibleBuildCheck;

    betaTesters?: Relationships.BetaTesters;

    builds?: Relationships.Builds;
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

    export interface BetaRecruitmentCriteria {
      data?: BetaRecruitmentCriteria.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BetaRecruitmentCriteria {
      export interface Data {
        id: string;

        type: 'betaRecruitmentCriteria';
      }
    }

    export interface BetaRecruitmentCriterionCompatibleBuildCheck {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface BetaTesters {
      data?: Array<BetaTesters.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BetaTesters {
      export interface Data {
        id: string;

        type: 'betaTesters';
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

export interface BetaGroupResponse {
  data: BetaGroup;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppsAPI.App
    | BuildsAPI.Build
    | BetaTestersAPI.BetaTester
    | BetaRecruitmentCriteriaAPI.BetaRecruitmentCriterion
  >;
}

export interface BetaTestersWithoutIncludesResponse {
  data: Array<BetaTestersAPI.BetaTester>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaGroupListResponse {
  data: Array<BetaGroup>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppsAPI.App
    | BuildsAPI.Build
    | BetaTestersAPI.BetaTester
    | BetaRecruitmentCriteriaAPI.BetaRecruitmentCriterion
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse {
  data: BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildResponse {
  export interface Data {
    id: string;

    type: 'betaRecruitmentCriterionCompatibleBuildChecks';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      hasCompatibleBuild?: boolean;
    }
  }
}

export interface BetaGroupCreateParams {
  data: BetaGroupCreateParams.Data;
}

export namespace BetaGroupCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'betaGroups';
  }

  export namespace Data {
    export interface Attributes {
      name: string;

      feedbackEnabled?: boolean;

      hasAccessToAllBuilds?: boolean;

      isInternalGroup?: boolean;

      publicLinkEnabled?: boolean;

      publicLinkLimit?: number;

      publicLinkLimitEnabled?: boolean;
    }

    export interface Relationships {
      app: Relationships.App;

      betaTesters?: Relationships.BetaTesters;

      builds?: Relationships.Builds;
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

      export interface BetaTesters {
        data?: Array<BetaTesters.Data>;
      }

      export namespace BetaTesters {
        export interface Data {
          id: string;

          type: 'betaTesters';
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

export interface BetaGroupRetrieveParams {
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
   * the fields to include for returned resources of type betaRecruitmentCriteria
   */
  'fields[betaRecruitmentCriteria]'?: Array<'lastModifiedDate' | 'deviceFamilyOsVersionFilters'>;

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
  include?: Array<'app' | 'builds' | 'betaTesters' | 'betaRecruitmentCriteria'>;

  /**
   * maximum number of related betaTesters returned (when they are included)
   */
  'limit[betaTesters]'?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface BetaGroupUpdateParams {
  data: BetaGroupUpdateParams.Data;
}

export namespace BetaGroupUpdateParams {
  export interface Data {
    id: string;

    type: 'betaGroups';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      feedbackEnabled?: boolean;

      iosBuildsAvailableForAppleSiliconMac?: boolean;

      iosBuildsAvailableForAppleVision?: boolean;

      name?: string;

      publicLinkEnabled?: boolean;

      publicLinkLimit?: number;

      publicLinkLimitEnabled?: boolean;
    }
  }
}

export interface BetaGroupListParams {
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
   * the fields to include for returned resources of type betaRecruitmentCriteria
   */
  'fields[betaRecruitmentCriteria]'?: Array<'lastModifiedDate' | 'deviceFamilyOsVersionFilters'>;

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
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'isInternalGroup'
   */
  'filter[isInternalGroup]'?: Array<string>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * filter by attribute 'publicLink'
   */
  'filter[publicLink]'?: Array<string>;

  /**
   * filter by attribute 'publicLinkEnabled'
   */
  'filter[publicLinkEnabled]'?: Array<string>;

  /**
   * filter by attribute 'publicLinkLimitEnabled'
   */
  'filter[publicLinkLimitEnabled]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'builds' | 'betaTesters' | 'betaRecruitmentCriteria'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related betaTesters returned (when they are included)
   */
  'limit[betaTesters]'?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    | 'name'
    | '-name'
    | 'createdDate'
    | '-createdDate'
    | 'publicLinkEnabled'
    | '-publicLinkEnabled'
    | 'publicLinkLimit'
    | '-publicLinkLimit'
  >;
}

export interface BetaGroupCheckBetaRecruitmentCriterionCompatibleBuildParams {
  /**
   * the fields to include for returned resources of type
   * betaRecruitmentCriterionCompatibleBuildChecks
   */
  'fields[betaRecruitmentCriterionCompatibleBuildChecks]'?: Array<'hasCompatibleBuild'>;
}

export interface BetaGroupListBetaRecruitmentCriteriaParams {
  /**
   * the fields to include for returned resources of type betaRecruitmentCriteria
   */
  'fields[betaRecruitmentCriteria]'?: Array<'lastModifiedDate' | 'deviceFamilyOsVersionFilters'>;
}

export interface BetaGroupRetrieveAppParams {
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

BetaGroups.Relationships = RelationshipsAPIRelationships;
BetaGroups.Metrics = Metrics;

export declare namespace BetaGroups {
  export {
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
    RelationshipsAPIRelationships as Relationships,
    type RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse as RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse,
    type RelationshipListBetaRecruitmentCriteriaResponse as RelationshipListBetaRecruitmentCriteriaResponse,
    type RelationshipListBetaTestersResponse as RelationshipListBetaTestersResponse,
    type RelationshipListBuildsResponse as RelationshipListBuildsResponse,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipListBetaTestersParams as RelationshipListBetaTestersParams,
    type RelationshipListBuildsParams as RelationshipListBuildsParams,
  };

  export {
    Metrics as Metrics,
    type MetricListPublicLinkUsagesResponse as MetricListPublicLinkUsagesResponse,
    type MetricListBetaTesterUsagesParams as MetricListBetaTesterUsagesParams,
    type MetricListPublicLinkUsagesParams as MetricListPublicLinkUsagesParams,
  };
}
