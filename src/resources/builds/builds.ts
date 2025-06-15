// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppClipAdvancedExperienceImagesAPI from '../app-clip-advanced-experience-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppEncryptionDeclarationsAPI from '../app-encryption-declarations/app-encryption-declarations';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as AppsAPI from '../apps/apps';
import * as BetaAppReviewSubmissionsAPI from '../beta-app-review-submissions/beta-app-review-submissions';
import * as BetaBuildLocalizationsAPI from '../beta-build-localizations/beta-build-localizations';
import * as BetaGroupsAPI from '../beta-groups/beta-groups';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import * as BuildBetaDetailsAPI from '../build-beta-details/build-beta-details';
import * as MetricsAPI from './metrics';
import {
  MetricRetrieveBetaBuildUsagesParams,
  MetricRetrieveBetaBuildUsagesResponse,
  Metrics,
} from './metrics';
import * as CiWorkflowsAPI from '../ci-workflows/ci-workflows';
import * as PreReleaseVersionsAPI from '../pre-release-versions/pre-release-versions';
import * as RelationshipsAPI from './relationships/relationships';
import {
  RelationshipRetrieveAppEncryptionDeclarationResponse,
  RelationshipRetrieveAppResponse,
  RelationshipRetrieveAppStoreVersionResponse,
  RelationshipRetrieveBetaAppReviewSubmissionResponse,
  RelationshipRetrieveBetaBuildLocalizationsParams,
  RelationshipRetrieveBetaBuildLocalizationsResponse,
  RelationshipRetrieveBuildBetaDetailResponse,
  RelationshipRetrieveDiagnosticSignaturesParams,
  RelationshipRetrieveDiagnosticSignaturesResponse,
  RelationshipRetrieveIconsParams,
  RelationshipRetrieveIconsResponse,
  RelationshipRetrievePreReleaseVersionResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Builds extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  retrieve(
    id: string,
    query: BuildRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildResponse> {
    return this._client.get(path`/v1/builds/${id}`, { query, ...options });
  }

  update(id: string, body: BuildUpdateParams, options?: RequestOptions): APIPromise<BuildResponse> {
    return this._client.patch(path`/v1/builds/${id}`, { body, ...options });
  }

  list(query: BuildListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BuildsResponse> {
    return this._client.get('/v1/builds', { query, ...options });
  }

  retrieveApp(
    id: string,
    query: BuildRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/builds/${id}/app`, { query, ...options });
  }

  retrieveAppStoreVersion(
    id: string,
    query: BuildRetrieveAppStoreVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionsAPI.AppStoreVersionResponse> {
    return this._client.get(path`/v1/builds/${id}/appStoreVersion`, { query, ...options });
  }

  retrieveBetaAppReviewSubmission(
    id: string,
    query: BuildRetrieveBetaAppReviewSubmissionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildRetrieveBetaAppReviewSubmissionResponse> {
    return this._client.get(path`/v1/builds/${id}/betaAppReviewSubmission`, { query, ...options });
  }

  retrieveBetaBuildLocalizations(
    id: string,
    query: BuildRetrieveBetaBuildLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildRetrieveBetaBuildLocalizationsResponse> {
    return this._client.get(path`/v1/builds/${id}/betaBuildLocalizations`, { query, ...options });
  }

  retrieveBuildBetaDetail(
    id: string,
    query: BuildRetrieveBuildBetaDetailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildBetaDetailsAPI.BuildBetaDetailResponse> {
    return this._client.get(path`/v1/builds/${id}/buildBetaDetail`, { query, ...options });
  }

  retrieveDiagnosticSignatures(
    id: string,
    query: BuildRetrieveDiagnosticSignaturesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildRetrieveDiagnosticSignaturesResponse> {
    return this._client.get(path`/v1/builds/${id}/diagnosticSignatures`, { query, ...options });
  }

  retrieveIcons(
    id: string,
    query: BuildRetrieveIconsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildRetrieveIconsResponse> {
    return this._client.get(path`/v1/builds/${id}/icons`, { query, ...options });
  }

  retrieveIndividualTesters(
    id: string,
    query: BuildRetrieveIndividualTestersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaGroupsAPI.BetaTestersWithoutIncludesResponse> {
    return this._client.get(path`/v1/builds/${id}/individualTesters`, { query, ...options });
  }

  retrievePerfPowerMetrics(
    id: string,
    query: BuildRetrievePerfPowerMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.XcodeMetrics> {
    return this._client.get(path`/v1/builds/${id}/perfPowerMetrics`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.apple.xcode-metrics+json' }, options?.headers]),
    });
  }

  retrievePreReleaseVersion(
    id: string,
    query: BuildRetrievePreReleaseVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildRetrievePreReleaseVersionResponse> {
    return this._client.get(path`/v1/builds/${id}/preReleaseVersion`, { query, ...options });
  }
}

export interface Build {
  id: string;

  type: 'builds';

  attributes?: Build.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Build.Relationships;
}

export namespace Build {
  export interface Attributes {
    buildAudienceType?: CiWorkflowsAPI.BuildAudienceType;

    computedMinMacOsVersion?: string;

    computedMinVisionOsVersion?: string;

    expirationDate?: string;

    expired?: boolean;

    iconAssetToken?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    lsMinimumSystemVersion?: string;

    minOsVersion?: string;

    processingState?: 'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID';

    uploadedDate?: string;

    usesNonExemptEncryption?: boolean;

    version?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    appEncryptionDeclaration?: Relationships.AppEncryptionDeclaration;

    appStoreVersion?: Relationships.AppStoreVersion;

    betaAppReviewSubmission?: Relationships.BetaAppReviewSubmission;

    betaBuildLocalizations?: Relationships.BetaBuildLocalizations;

    betaGroups?: Relationships.BetaGroups;

    buildBetaDetail?: Relationships.BuildBetaDetail;

    buildBundles?: Relationships.BuildBundles;

    diagnosticSignatures?: Relationships.DiagnosticSignatures;

    icons?: Relationships.Icons;

    individualTesters?: Relationships.IndividualTesters;

    perfPowerMetrics?: Relationships.PerfPowerMetrics;

    preReleaseVersion?: Relationships.PreReleaseVersion;
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

    export interface AppEncryptionDeclaration {
      data?: AppEncryptionDeclaration.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppEncryptionDeclaration {
      export interface Data {
        id: string;

        type: 'appEncryptionDeclarations';
      }
    }

    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface BetaAppReviewSubmission {
      data?: BetaAppReviewSubmission.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BetaAppReviewSubmission {
      export interface Data {
        id: string;

        type: 'betaAppReviewSubmissions';
      }
    }

    export interface BetaBuildLocalizations {
      data?: Array<BetaBuildLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BetaBuildLocalizations {
      export interface Data {
        id: string;

        type: 'betaBuildLocalizations';
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

    export interface BuildBetaDetail {
      data?: BuildBetaDetail.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BuildBetaDetail {
      export interface Data {
        id: string;

        type: 'buildBetaDetails';
      }
    }

    export interface BuildBundles {
      data?: Array<BuildBundles.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BuildBundles {
      export interface Data {
        id: string;

        type: 'buildBundles';
      }
    }

    export interface DiagnosticSignatures {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface Icons {
      data?: Array<Icons.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Icons {
      export interface Data {
        id: string;

        type: 'buildIcons';
      }
    }

    export interface IndividualTesters {
      data?: Array<IndividualTesters.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace IndividualTesters {
      export interface Data {
        id: string;

        type: 'betaTesters';
      }
    }

    export interface PerfPowerMetrics {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface PreReleaseVersion {
      data?: PreReleaseVersion.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PreReleaseVersion {
      export interface Data {
        id: string;

        type: 'preReleaseVersions';
      }
    }
  }
}

export interface BuildBundle {
  id: string;

  type: 'buildBundles';

  attributes?: BuildBundle.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BuildBundle.Relationships;
}

export namespace BuildBundle {
  export interface Attributes {
    baDownloadAllowance?: number;

    baMaxInstallSize?: number;

    bundleId?: string;

    bundleType?: 'APP' | 'APP_CLIP';

    deviceProtocols?: Array<string>;

    dSYMUrl?: string;

    entitlements?: Record<string, Record<string, string>>;

    fileName?: string;

    hasOnDemandResources?: boolean;

    hasPrerenderedIcon?: boolean;

    hasSirikit?: boolean;

    includesSymbols?: boolean;

    isIosBuildMacAppStoreCompatible?: boolean;

    locales?: Array<string>;

    platformBuild?: string;

    requiredCapabilities?: Array<string>;

    sdkBuild?: string;

    supportedArchitectures?: Array<string>;

    usesLocationServices?: boolean;
  }

  export interface Relationships {
    appClipDomainCacheStatus?: Relationships.AppClipDomainCacheStatus;

    appClipDomainDebugStatus?: Relationships.AppClipDomainDebugStatus;

    betaAppClipInvocations?: Relationships.BetaAppClipInvocations;

    buildBundleFileSizes?: Relationships.BuildBundleFileSizes;
  }

  export namespace Relationships {
    export interface AppClipDomainCacheStatus {
      data?: AppClipDomainCacheStatus.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppClipDomainCacheStatus {
      export interface Data {
        id: string;

        type: 'appClipDomainStatuses';
      }
    }

    export interface AppClipDomainDebugStatus {
      data?: AppClipDomainDebugStatus.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppClipDomainDebugStatus {
      export interface Data {
        id: string;

        type: 'appClipDomainStatuses';
      }
    }

    export interface BetaAppClipInvocations {
      data?: Array<BetaAppClipInvocations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BetaAppClipInvocations {
      export interface Data {
        id: string;

        type: 'betaAppClipInvocations';
      }
    }

    export interface BuildBundleFileSizes {
      data?: Array<BuildBundleFileSizes.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BuildBundleFileSizes {
      export interface Data {
        id: string;

        type: 'buildBundleFileSizes';
      }
    }
  }
}

export interface BuildIcon {
  id: string;

  type: 'buildIcons';

  attributes?: BuildIcon.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace BuildIcon {
  export interface Attributes {
    iconAsset?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    iconType?:
      | 'APP_STORE'
      | 'MESSAGES_APP_STORE'
      | 'WATCH_APP_STORE'
      | 'TV_OS_HOME_SCREEN'
      | 'TV_OS_TOP_SHELF'
      | 'ALTERNATE_EXPERIMENT';

    name?: string;
  }
}

export interface BuildResponse {
  data: Build;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | PreReleaseVersionsAPI.PrereleaseVersion
    | BetaTestersAPI.BetaTester
    | BetaGroupsAPI.BetaGroup
    | BetaBuildLocalizationsAPI.BetaBuildLocalization
    | AppEncryptionDeclarationsAPI.AppEncryptionDeclarationDeclaration
    | BetaAppReviewSubmissionsAPI.BetaAppReviewSubmission
    | AppsAPI.App
    | BuildBetaDetailsAPI.BuildBetaDetail
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | BuildIcon
    | BuildBundle
  >;
}

export interface BuildsResponse {
  data: Array<Build>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | PreReleaseVersionsAPI.PrereleaseVersion
    | BetaTestersAPI.BetaTester
    | BetaGroupsAPI.BetaGroup
    | BetaBuildLocalizationsAPI.BetaBuildLocalization
    | AppEncryptionDeclarationsAPI.AppEncryptionDeclarationDeclaration
    | BetaAppReviewSubmissionsAPI.BetaAppReviewSubmission
    | AppsAPI.App
    | BuildBetaDetailsAPI.BuildBetaDetail
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | BuildIcon
    | BuildBundle
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface BuildRetrieveBetaAppReviewSubmissionResponse {
  data: BetaAppReviewSubmissionsAPI.BetaAppReviewSubmission;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface BuildRetrieveBetaBuildLocalizationsResponse {
  data: Array<BetaBuildLocalizationsAPI.BetaBuildLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BuildRetrieveDiagnosticSignaturesResponse {
  data: Array<BuildRetrieveDiagnosticSignaturesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace BuildRetrieveDiagnosticSignaturesResponse {
  export interface Data {
    id: string;

    type: 'diagnosticSignatures';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      diagnosticType?: 'DISK_WRITES' | 'HANGS' | 'LAUNCHES';

      insight?: Attributes.Insight;

      signature?: string;

      weight?: number;
    }

    export namespace Attributes {
      export interface Insight {
        direction?: 'UP' | 'DOWN' | 'UNDEFINED';

        insightType?: 'TREND';

        referenceVersions?: Array<Insight.ReferenceVersion>;
      }

      export namespace Insight {
        export interface ReferenceVersion {
          value?: number;

          version?: string;
        }
      }
    }

    export interface Relationships {
      logs?: Relationships.Logs;
    }

    export namespace Relationships {
      export interface Logs {
        links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
      }
    }
  }
}

export interface BuildRetrieveIconsResponse {
  data: Array<BuildIcon>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BuildRetrievePreReleaseVersionResponse {
  data: PreReleaseVersionsAPI.PrereleaseVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface BuildRetrieveParams {
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
   * the fields to include for returned resources of type betaAppReviewSubmissions
   */
  'fields[betaAppReviewSubmissions]'?: Array<'betaReviewState' | 'submittedDate' | 'build'>;

  /**
   * the fields to include for returned resources of type betaBuildLocalizations
   */
  'fields[betaBuildLocalizations]'?: Array<'whatsNew' | 'locale' | 'build'>;

  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

  /**
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
  >;

  /**
   * the fields to include for returned resources of type buildIcons
   */
  'fields[buildIcons]'?: Array<'iconAsset' | 'iconType' | 'name'>;

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
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
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
  >;

  /**
   * maximum number of related betaBuildLocalizations returned (when they are
   * included)
   */
  'limit[betaBuildLocalizations]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related buildBundles returned (when they are included)
   */
  'limit[buildBundles]'?: number;

  /**
   * maximum number of related icons returned (when they are included)
   */
  'limit[icons]'?: number;

  /**
   * maximum number of related individualTesters returned (when they are included)
   */
  'limit[individualTesters]'?: number;
}

export interface BuildUpdateParams {
  data: BuildUpdateParams.Data;
}

export namespace BuildUpdateParams {
  export interface Data {
    id: string;

    type: 'builds';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      expired?: boolean;

      usesNonExemptEncryption?: boolean;
    }

    export interface Relationships {
      appEncryptionDeclaration?: Relationships.AppEncryptionDeclaration;
    }

    export namespace Relationships {
      export interface AppEncryptionDeclaration {
        data?: AppEncryptionDeclaration.Data;
      }

      export namespace AppEncryptionDeclaration {
        export interface Data {
          id: string;

          type: 'appEncryptionDeclarations';
        }
      }
    }
  }
}

export interface BuildListParams {
  /**
   * filter by attribute 'usesNonExemptEncryption'
   */
  'exists[usesNonExemptEncryption]'?: boolean;

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
   * the fields to include for returned resources of type betaAppReviewSubmissions
   */
  'fields[betaAppReviewSubmissions]'?: Array<'betaReviewState' | 'submittedDate' | 'build'>;

  /**
   * the fields to include for returned resources of type betaBuildLocalizations
   */
  'fields[betaBuildLocalizations]'?: Array<'whatsNew' | 'locale' | 'build'>;

  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

  /**
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
  >;

  /**
   * the fields to include for returned resources of type buildIcons
   */
  'fields[buildIcons]'?: Array<'iconAsset' | 'iconType' | 'name'>;

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
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;

  /**
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * filter by id(s) of related 'appStoreVersion'
   */
  'filter[appStoreVersion]'?: Array<string>;

  'filter[betaAppReviewSubmission'?: BuildListParams.FilterBetaAppReviewSubmission;

  /**
   * filter by id(s) of related 'betaGroups'
   */
  'filter[betaGroups]'?: Array<string>;

  /**
   * filter by attribute 'buildAudienceType'
   */
  'filter[buildAudienceType]'?: Array<'INTERNAL_ONLY' | 'APP_STORE_ELIGIBLE'>;

  /**
   * filter by attribute 'expired'
   */
  'filter[expired]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  'filter[preReleaseVersion'?: BuildListParams.FilterPreReleaseVersion;

  /**
   * filter by id(s) of related 'preReleaseVersion'
   */
  'filter[preReleaseVersion]'?: Array<string>;

  /**
   * filter by attribute 'processingState'
   */
  'filter[processingState]'?: Array<'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID'>;

  /**
   * filter by attribute 'usesNonExemptEncryption'
   */
  'filter[usesNonExemptEncryption]'?: Array<string>;

  /**
   * filter by attribute 'version'
   */
  'filter[version]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
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
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related betaBuildLocalizations returned (when they are
   * included)
   */
  'limit[betaBuildLocalizations]'?: number;

  /**
   * maximum number of related betaGroups returned (when they are included)
   */
  'limit[betaGroups]'?: number;

  /**
   * maximum number of related buildBundles returned (when they are included)
   */
  'limit[buildBundles]'?: number;

  /**
   * maximum number of related icons returned (when they are included)
   */
  'limit[icons]'?: number;

  /**
   * maximum number of related individualTesters returned (when they are included)
   */
  'limit[individualTesters]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    'version' | '-version' | 'uploadedDate' | '-uploadedDate' | 'preReleaseVersion' | '-preReleaseVersion'
  >;
}

export namespace BuildListParams {
  export interface FilterBetaAppReviewSubmission {
    /**
     * filter by attribute 'betaAppReviewSubmission.betaReviewState'
     */
    'betaReviewState]'?: Array<'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED'>;
  }

  export interface FilterPreReleaseVersion {
    /**
     * filter by attribute 'preReleaseVersion.platform'
     */
    'platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

    /**
     * filter by attribute 'preReleaseVersion.version'
     */
    'version]'?: Array<string>;
  }
}

export interface BuildRetrieveAppParams {
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

export interface BuildRetrieveAppStoreVersionParams {
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

export interface BuildRetrieveBetaAppReviewSubmissionParams {
  /**
   * the fields to include for returned resources of type betaAppReviewSubmissions
   */
  'fields[betaAppReviewSubmissions]'?: Array<'betaReviewState' | 'submittedDate' | 'build'>;
}

export interface BuildRetrieveBetaBuildLocalizationsParams {
  /**
   * the fields to include for returned resources of type betaBuildLocalizations
   */
  'fields[betaBuildLocalizations]'?: Array<'whatsNew' | 'locale' | 'build'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildRetrieveBuildBetaDetailParams {
  /**
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
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
  include?: Array<'build'>;
}

export interface BuildRetrieveDiagnosticSignaturesParams {
  /**
   * the fields to include for returned resources of type diagnosticSignatures
   */
  'fields[diagnosticSignatures]'?: Array<'diagnosticType' | 'signature' | 'weight' | 'insight' | 'logs'>;

  /**
   * filter by attribute 'diagnosticType'
   */
  'filter[diagnosticType]'?: Array<'DISK_WRITES' | 'HANGS' | 'LAUNCHES'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildRetrieveIconsParams {
  /**
   * the fields to include for returned resources of type buildIcons
   */
  'fields[buildIcons]'?: Array<'iconAsset' | 'iconType' | 'name'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildRetrieveIndividualTestersParams {
  /**
   * the fields to include for returned resources of type betaTesters
   */
  'fields[betaTesters]'?: Array<
    'firstName' | 'lastName' | 'email' | 'inviteType' | 'state' | 'apps' | 'betaGroups' | 'builds'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildRetrievePerfPowerMetricsParams {
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

export interface BuildRetrievePreReleaseVersionParams {
  /**
   * the fields to include for returned resources of type preReleaseVersions
   */
  'fields[preReleaseVersions]'?: Array<'version' | 'platform' | 'builds' | 'app'>;
}

Builds.Relationships = RelationshipsAPIRelationships;
Builds.Metrics = Metrics;

export declare namespace Builds {
  export {
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
    RelationshipsAPIRelationships as Relationships,
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
    Metrics as Metrics,
    type MetricRetrieveBetaBuildUsagesResponse as MetricRetrieveBetaBuildUsagesResponse,
    type MetricRetrieveBetaBuildUsagesParams as MetricRetrieveBetaBuildUsagesParams,
  };
}
