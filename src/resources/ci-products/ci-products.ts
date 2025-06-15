// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as ScmGitReferencesAPI from '../scm-git-references';
import * as ScmPullRequestsAPI from '../scm-pull-requests';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppsAPI from '../apps/apps';
import * as BuildsAPI from '../builds/builds';
import * as BundleIDsAPI from '../bundle-ids/bundle-ids';
import * as CiBuildRunsAPI from '../ci-build-runs/ci-build-runs';
import * as CiMacOsVersionsAPI from '../ci-mac-os-versions/ci-mac-os-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListBuildRunsParams,
  RelationshipListBuildRunsResponse,
  RelationshipListWorkflowsParams,
  RelationshipListWorkflowsResponse,
  RelationshipRetrieveAdditionalRepositoriesParams,
  RelationshipRetrieveAdditionalRepositoriesResponse,
  RelationshipRetrieveAppResponse,
  RelationshipRetrievePrimaryRepositoriesParams,
  RelationshipRetrievePrimaryRepositoriesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as CiWorkflowsAPI from '../ci-workflows/ci-workflows';
import * as CiXcodeVersionsAPI from '../ci-xcode-versions/ci-xcode-versions';
import * as ScmRepositoriesAPI from '../scm-repositories/scm-repositories';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CiProducts extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: CiProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiProductResponse> {
    return this._client.get(path`/v1/ciProducts/${id}`, { query, ...options });
  }

  list(
    query: CiProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiProductListResponse> {
    return this._client.get('/v1/ciProducts', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/ciProducts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listBuildRuns(
    id: string,
    query: CiProductListBuildRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildRuns> {
    return this._client.get(path`/v1/ciProducts/${id}/buildRuns`, { query, ...options });
  }

  listWorkflows(
    id: string,
    query: CiProductListWorkflowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiProductListWorkflowsResponse> {
    return this._client.get(path`/v1/ciProducts/${id}/workflows`, { query, ...options });
  }

  retrieveAdditionalRepositories(
    id: string,
    query: CiProductRetrieveAdditionalRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoriesAPI.ScmRepositories> {
    return this._client.get(path`/v1/ciProducts/${id}/additionalRepositories`, { query, ...options });
  }

  retrieveApp(
    id: string,
    query: CiProductRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.AppResponse> {
    return this._client.get(path`/v1/ciProducts/${id}/app`, { query, ...options });
  }

  retrievePrimaryRepositories(
    id: string,
    query: CiProductRetrievePrimaryRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoriesAPI.ScmRepositories> {
    return this._client.get(path`/v1/ciProducts/${id}/primaryRepositories`, { query, ...options });
  }
}

export interface CiBuildRuns {
  data: Array<CiBuildRunsAPI.CiBuildRun>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | BuildsAPI.Build
    | CiWorkflowsAPI.CiWorkflow
    | CiProductDetails
    | ScmGitReferencesAPI.ScmGitReference
    | ScmPullRequestsAPI.ScmPullRequest
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiProductDetails {
  id: string;

  type: 'ciProducts';

  attributes?: CiProductDetails.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CiProductDetails.Relationships;
}

export namespace CiProductDetails {
  export interface Attributes {
    createdDate?: string;

    name?: string;

    productType?: 'APP' | 'FRAMEWORK';
  }

  export interface Relationships {
    additionalRepositories?: Relationships.AdditionalRepositories;

    app?: Relationships.App;

    buildRuns?: Relationships.BuildRuns;

    bundleId?: Relationships.BundleID;

    primaryRepositories?: Relationships.PrimaryRepositories;

    workflows?: Relationships.Workflows;
  }

  export namespace Relationships {
    export interface AdditionalRepositories {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

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

    export interface BuildRuns {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface BundleID {
      data?: BundleID.Data;
    }

    export namespace BundleID {
      export interface Data {
        id: string;

        type: 'bundleIds';
      }
    }

    export interface PrimaryRepositories {
      data?: Array<PrimaryRepositories.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace PrimaryRepositories {
      export interface Data {
        id: string;

        type: 'scmRepositories';
      }
    }

    export interface Workflows {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface CiProductResponse {
  data: CiProductDetails;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | BundleIDsAPI.BundleID | ScmRepositoriesAPI.ScmRepositoryDetails>;
}

export interface CiProductListResponse {
  data: Array<CiProductDetails>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App | BundleIDsAPI.BundleID | ScmRepositoriesAPI.ScmRepositoryDetails>;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiProductListWorkflowsResponse {
  data: Array<CiWorkflowsAPI.CiWorkflow>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | CiProductDetails
    | ScmRepositoriesAPI.ScmRepositoryDetails
    | CiXcodeVersionsAPI.CiXcodeVersion
    | CiMacOsVersionsAPI.CiMacOsVersion
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiProductRetrieveParams {
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

export interface CiProductListParams {
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
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * filter by attribute 'productType'
   */
  'filter[productType]'?: Array<'APP' | 'FRAMEWORK'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'bundleId' | 'primaryRepositories'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related primaryRepositories returned (when they are included)
   */
  'limit[primaryRepositories]'?: number;
}

export interface CiProductListBuildRunsParams {
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
   * the fields to include for returned resources of type ciWorkflows
   */
  'fields[ciWorkflows]'?: Array<
    | 'name'
    | 'description'
    | 'branchStartCondition'
    | 'tagStartCondition'
    | 'pullRequestStartCondition'
    | 'scheduledStartCondition'
    | 'manualBranchStartCondition'
    | 'manualTagStartCondition'
    | 'manualPullRequestStartCondition'
    | 'actions'
    | 'isEnabled'
    | 'isLockedForEditing'
    | 'clean'
    | 'containerFilePath'
    | 'lastModifiedDate'
    | 'product'
    | 'repository'
    | 'xcodeVersion'
    | 'macOsVersion'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

  /**
   * the fields to include for returned resources of type scmPullRequests
   */
  'fields[scmPullRequests]'?: Array<
    | 'title'
    | 'number'
    | 'webUrl'
    | 'sourceRepositoryOwner'
    | 'sourceRepositoryName'
    | 'sourceBranchName'
    | 'destinationRepositoryOwner'
    | 'destinationRepositoryName'
    | 'destinationBranchName'
    | 'isClosed'
    | 'isCrossRepository'
    | 'repository'
  >;

  /**
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    'builds' | 'workflow' | 'product' | 'sourceBranchOrTag' | 'destinationBranch' | 'pullRequest'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'number' | '-number'>;
}

export interface CiProductListWorkflowsParams {
  /**
   * the fields to include for returned resources of type ciMacOsVersions
   */
  'fields[ciMacOsVersions]'?: Array<'version' | 'name' | 'xcodeVersions'>;

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
   * the fields to include for returned resources of type ciWorkflows
   */
  'fields[ciWorkflows]'?: Array<
    | 'name'
    | 'description'
    | 'branchStartCondition'
    | 'tagStartCondition'
    | 'pullRequestStartCondition'
    | 'scheduledStartCondition'
    | 'manualBranchStartCondition'
    | 'manualTagStartCondition'
    | 'manualPullRequestStartCondition'
    | 'actions'
    | 'isEnabled'
    | 'isLockedForEditing'
    | 'clean'
    | 'containerFilePath'
    | 'lastModifiedDate'
    | 'product'
    | 'repository'
    | 'xcodeVersion'
    | 'macOsVersion'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type ciXcodeVersions
   */
  'fields[ciXcodeVersions]'?: Array<'version' | 'name' | 'testDestinations' | 'macOsVersions'>;

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
  include?: Array<'product' | 'repository' | 'xcodeVersion' | 'macOsVersion'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CiProductRetrieveAdditionalRepositoriesParams {
  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

  /**
   * the fields to include for returned resources of type scmProviders
   */
  'fields[scmProviders]'?: Array<'scmProviderType' | 'url' | 'repositories'>;

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
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'scmProvider' | 'defaultBranch'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CiProductRetrieveAppParams {
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

export interface CiProductRetrievePrimaryRepositoriesParams {
  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

  /**
   * the fields to include for returned resources of type scmProviders
   */
  'fields[scmProviders]'?: Array<'scmProviderType' | 'url' | 'repositories'>;

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
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'scmProvider' | 'defaultBranch'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

CiProducts.Relationships = RelationshipsAPIRelationships;

export declare namespace CiProducts {
  export {
    type CiBuildRuns as CiBuildRuns,
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
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListBuildRunsResponse as RelationshipListBuildRunsResponse,
    type RelationshipListWorkflowsResponse as RelationshipListWorkflowsResponse,
    type RelationshipRetrieveAdditionalRepositoriesResponse as RelationshipRetrieveAdditionalRepositoriesResponse,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrievePrimaryRepositoriesResponse as RelationshipRetrievePrimaryRepositoriesResponse,
    type RelationshipListBuildRunsParams as RelationshipListBuildRunsParams,
    type RelationshipListWorkflowsParams as RelationshipListWorkflowsParams,
    type RelationshipRetrieveAdditionalRepositoriesParams as RelationshipRetrieveAdditionalRepositoriesParams,
    type RelationshipRetrievePrimaryRepositoriesParams as RelationshipRetrievePrimaryRepositoriesParams,
  };
}
