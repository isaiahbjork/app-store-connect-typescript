// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CiBuildRunsAPI from './ci-build-runs';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as ScmGitReferencesAPI from '../scm-git-references';
import * as ScmPullRequestsAPI from '../scm-pull-requests';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as BuildsAPI from '../builds/builds';
import * as CiBuildActionsAPI from '../ci-build-actions/ci-build-actions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListActionsParams,
  RelationshipListActionsResponse,
  RelationshipListBuildsParams,
  RelationshipListBuildsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as CiProductsAPI from '../ci-products/ci-products';
import * as CiWorkflowsAPI from '../ci-workflows/ci-workflows';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CiBuildRuns extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: CiBuildRunCreateParams, options?: RequestOptions): APIPromise<CiBuildRunResponse> {
    return this._client.post('/v1/ciBuildRuns', { body, ...options });
  }

  retrieve(
    id: string,
    query: CiBuildRunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildRunResponse> {
    return this._client.get(path`/v1/ciBuildRuns/${id}`, { query, ...options });
  }

  listActions(
    id: string,
    query: CiBuildRunListActionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildRunListActionsResponse> {
    return this._client.get(path`/v1/ciBuildRuns/${id}/actions`, { query, ...options });
  }

  listBuilds(
    id: string,
    query: CiBuildRunListBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildsAPI.BuildsResponse> {
    return this._client.get(path`/v1/ciBuildRuns/${id}/builds`, { query, ...options });
  }
}

export interface CiBuildRun {
  id: string;

  type: 'ciBuildRuns';

  attributes?: CiBuildRun.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CiBuildRun.Relationships;
}

export namespace CiBuildRun {
  export interface Attributes {
    cancelReason?: 'AUTOMATICALLY_BY_NEWER_BUILD' | 'MANUALLY_BY_USER';

    completionStatus?: CiBuildActionsAPI.CiCompletionStatus;

    createdDate?: string;

    destinationCommit?: Attributes.DestinationCommit;

    executionProgress?: CiBuildActionsAPI.CiExecutionProgress;

    finishedDate?: string;

    isPullRequestBuild?: boolean;

    issueCounts?: CiBuildActionsAPI.CiIssueCounts;

    number?: number;

    sourceCommit?: Attributes.SourceCommit;

    startedDate?: string;

    startReason?:
      | 'GIT_REF_CHANGE'
      | 'MANUAL'
      | 'MANUAL_REBUILD'
      | 'PULL_REQUEST_OPEN'
      | 'PULL_REQUEST_UPDATE'
      | 'SCHEDULE';
  }

  export namespace Attributes {
    export interface DestinationCommit {
      author?: CiBuildRunsAPI.CiGitUser;

      commitSha?: string;

      committer?: CiBuildRunsAPI.CiGitUser;

      message?: string;

      webUrl?: string;
    }

    export interface SourceCommit {
      author?: CiBuildRunsAPI.CiGitUser;

      commitSha?: string;

      committer?: CiBuildRunsAPI.CiGitUser;

      message?: string;

      webUrl?: string;
    }
  }

  export interface Relationships {
    actions?: Relationships.Actions;

    builds?: Relationships.Builds;

    destinationBranch?: Relationships.DestinationBranch;

    product?: Relationships.Product;

    pullRequest?: Relationships.PullRequest;

    sourceBranchOrTag?: Relationships.SourceBranchOrTag;

    workflow?: Relationships.Workflow;
  }

  export namespace Relationships {
    export interface Actions {
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

    export interface DestinationBranch {
      data?: DestinationBranch.Data;
    }

    export namespace DestinationBranch {
      export interface Data {
        id: string;

        type: 'scmGitReferences';
      }
    }

    export interface Product {
      data?: Product.Data;
    }

    export namespace Product {
      export interface Data {
        id: string;

        type: 'ciProducts';
      }
    }

    export interface PullRequest {
      data?: PullRequest.Data;
    }

    export namespace PullRequest {
      export interface Data {
        id: string;

        type: 'scmPullRequests';
      }
    }

    export interface SourceBranchOrTag {
      data?: SourceBranchOrTag.Data;
    }

    export namespace SourceBranchOrTag {
      export interface Data {
        id: string;

        type: 'scmGitReferences';
      }
    }

    export interface Workflow {
      data?: Workflow.Data;
    }

    export namespace Workflow {
      export interface Data {
        id: string;

        type: 'ciWorkflows';
      }
    }
  }
}

export interface CiBuildRunResponse {
  data: CiBuildRun;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | BuildsAPI.Build
    | CiWorkflowsAPI.CiWorkflow
    | CiProductsAPI.CiProductDetails
    | ScmGitReferencesAPI.ScmGitReference
    | ScmPullRequestsAPI.ScmPullRequest
  >;
}

export interface CiGitUser {
  avatarUrl?: string;

  displayName?: string;
}

export interface CiBuildRunListActionsResponse {
  data: Array<CiBuildActionsAPI.CiBuildAction>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<CiBuildRun>;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiBuildRunCreateParams {
  data: CiBuildRunCreateParams.Data;
}

export namespace CiBuildRunCreateParams {
  export interface Data {
    type: 'ciBuildRuns';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      clean?: boolean;
    }

    export interface Relationships {
      buildRun?: Relationships.BuildRun;

      pullRequest?: Relationships.PullRequest;

      sourceBranchOrTag?: Relationships.SourceBranchOrTag;

      workflow?: Relationships.Workflow;
    }

    export namespace Relationships {
      export interface BuildRun {
        data?: BuildRun.Data;
      }

      export namespace BuildRun {
        export interface Data {
          id: string;

          type: 'ciBuildRuns';
        }
      }

      export interface PullRequest {
        data?: PullRequest.Data;
      }

      export namespace PullRequest {
        export interface Data {
          id: string;

          type: 'scmPullRequests';
        }
      }

      export interface SourceBranchOrTag {
        data?: SourceBranchOrTag.Data;
      }

      export namespace SourceBranchOrTag {
        export interface Data {
          id: string;

          type: 'scmGitReferences';
        }
      }

      export interface Workflow {
        data?: Workflow.Data;
      }

      export namespace Workflow {
        export interface Data {
          id: string;

          type: 'ciWorkflows';
        }
      }
    }
  }
}

export interface CiBuildRunRetrieveParams {
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
   * the fields to include for returned resources of type ciBuildRuns
   */
  'fields[ciBuildRuns]'?: Array<
    | 'number'
    | 'createdDate'
    | 'startedDate'
    | 'finishedDate'
    | 'sourceCommit'
    | 'destinationCommit'
    | 'isPullRequestBuild'
    | 'issueCounts'
    | 'executionProgress'
    | 'completionStatus'
    | 'startReason'
    | 'cancelReason'
    | 'builds'
    | 'workflow'
    | 'product'
    | 'sourceBranchOrTag'
    | 'destinationBranch'
    | 'actions'
    | 'pullRequest'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    'builds' | 'workflow' | 'product' | 'sourceBranchOrTag' | 'destinationBranch' | 'pullRequest'
  >;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface CiBuildRunListActionsParams {
  /**
   * the fields to include for returned resources of type ciBuildActions
   */
  'fields[ciBuildActions]'?: Array<
    | 'name'
    | 'actionType'
    | 'startedDate'
    | 'finishedDate'
    | 'issueCounts'
    | 'executionProgress'
    | 'completionStatus'
    | 'isRequiredToPass'
    | 'buildRun'
    | 'artifacts'
    | 'issues'
    | 'testResults'
  >;

  /**
   * the fields to include for returned resources of type ciBuildRuns
   */
  'fields[ciBuildRuns]'?: Array<
    | 'number'
    | 'createdDate'
    | 'startedDate'
    | 'finishedDate'
    | 'sourceCommit'
    | 'destinationCommit'
    | 'isPullRequestBuild'
    | 'issueCounts'
    | 'executionProgress'
    | 'completionStatus'
    | 'startReason'
    | 'cancelReason'
    | 'builds'
    | 'workflow'
    | 'product'
    | 'sourceBranchOrTag'
    | 'destinationBranch'
    | 'actions'
    | 'pullRequest'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'buildRun'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CiBuildRunListBuildsParams {
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
   * the fields to include for returned resources of type buildBetaDetails
   */
  'fields[buildBetaDetails]'?: Array<
    'autoNotifyEnabled' | 'internalBuildState' | 'externalBuildState' | 'build'
  >;

  /**
   * the fields to include for returned resources of type buildBundles
   */
  'fields[buildBundles]'?: Array<
    | 'bundleId'
    | 'bundleType'
    | 'sdkBuild'
    | 'platformBuild'
    | 'fileName'
    | 'hasSirikit'
    | 'hasOnDemandResources'
    | 'hasPrerenderedIcon'
    | 'usesLocationServices'
    | 'isIosBuildMacAppStoreCompatible'
    | 'includesSymbols'
    | 'dSYMUrl'
    | 'supportedArchitectures'
    | 'requiredCapabilities'
    | 'deviceProtocols'
    | 'locales'
    | 'entitlements'
    | 'baDownloadAllowance'
    | 'baMaxInstallSize'
    | 'appClipDomainCacheStatus'
    | 'appClipDomainDebugStatus'
    | 'betaAppClipInvocations'
    | 'buildBundleFileSizes'
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

  'filter[betaAppReviewSubmission'?: CiBuildRunListBuildsParams.FilterBetaAppReviewSubmission;

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

  'filter[preReleaseVersion'?: CiBuildRunListBuildsParams.FilterPreReleaseVersion;

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

export namespace CiBuildRunListBuildsParams {
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

CiBuildRuns.Relationships = RelationshipsAPIRelationships;

export declare namespace CiBuildRuns {
  export {
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
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListActionsResponse as RelationshipListActionsResponse,
    type RelationshipListBuildsResponse as RelationshipListBuildsResponse,
    type RelationshipListActionsParams as RelationshipListActionsParams,
    type RelationshipListBuildsParams as RelationshipListBuildsParams,
  };
}
