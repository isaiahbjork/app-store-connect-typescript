// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CiBuildActionsAPI from './ci-build-actions';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as CiArtifactsAPI from '../ci-artifacts';
import * as CiIssuesAPI from '../ci-issues';
import * as CiTestResultsAPI from '../ci-test-results';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListArtifactsParams,
  RelationshipListArtifactsResponse,
  RelationshipListIssuesParams,
  RelationshipListIssuesResponse,
  RelationshipListTestResultsParams,
  RelationshipListTestResultsResponse,
  RelationshipRetrieveBuildRunResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as CiBuildRunsAPI from '../ci-build-runs/ci-build-runs';
import * as CiWorkflowsAPI from '../ci-workflows/ci-workflows';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CiBuildActions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: CiBuildActionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildActionRetrieveResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}`, { query, ...options });
  }

  listArtifacts(
    id: string,
    query: CiBuildActionListArtifactsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildActionListArtifactsResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/artifacts`, { query, ...options });
  }

  listIssues(
    id: string,
    query: CiBuildActionListIssuesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildActionListIssuesResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/issues`, { query, ...options });
  }

  listTestResults(
    id: string,
    query: CiBuildActionListTestResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildActionListTestResultsResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/testResults`, { query, ...options });
  }

  retrieveBuildRun(
    id: string,
    query: CiBuildActionRetrieveBuildRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiBuildRunsAPI.CiBuildRunResponse> {
    return this._client.get(path`/v1/ciBuildActions/${id}/buildRun`, { query, ...options });
  }
}

export interface CiBuildAction {
  id: string;

  type: 'ciBuildActions';

  attributes?: CiBuildAction.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CiBuildAction.Relationships;
}

export namespace CiBuildAction {
  export interface Attributes {
    actionType?: CiWorkflowsAPI.CiActionType;

    completionStatus?: CiBuildActionsAPI.CiCompletionStatus;

    executionProgress?: CiBuildActionsAPI.CiExecutionProgress;

    finishedDate?: string;

    isRequiredToPass?: boolean;

    issueCounts?: CiBuildActionsAPI.CiIssueCounts;

    name?: string;

    startedDate?: string;
  }

  export interface Relationships {
    artifacts?: Relationships.Artifacts;

    buildRun?: Relationships.BuildRun;

    issues?: Relationships.Issues;

    testResults?: Relationships.TestResults;
  }

  export namespace Relationships {
    export interface Artifacts {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface BuildRun {
      data?: BuildRun.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BuildRun {
      export interface Data {
        id: string;

        type: 'ciBuildRuns';
      }
    }

    export interface Issues {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface TestResults {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export type CiCompletionStatus = 'SUCCEEDED' | 'FAILED' | 'ERRORED' | 'CANCELED' | 'SKIPPED';

export type CiExecutionProgress = 'PENDING' | 'RUNNING' | 'COMPLETE';

export interface CiIssueCounts {
  analyzerWarnings?: number;

  errors?: number;

  testFailures?: number;

  warnings?: number;
}

export interface CiBuildActionRetrieveResponse {
  data: CiBuildAction;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<CiBuildRunsAPI.CiBuildRun>;
}

export interface CiBuildActionListArtifactsResponse {
  data: Array<CiArtifactsAPI.CiArtifact>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiBuildActionListIssuesResponse {
  data: Array<CiIssuesAPI.CiIssue>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiBuildActionListTestResultsResponse {
  data: Array<CiTestResultsAPI.CiTestResult>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface CiBuildActionRetrieveParams {
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
}

export interface CiBuildActionListArtifactsParams {
  /**
   * the fields to include for returned resources of type ciArtifacts
   */
  'fields[ciArtifacts]'?: Array<'fileType' | 'fileName' | 'fileSize' | 'downloadUrl'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CiBuildActionListIssuesParams {
  /**
   * the fields to include for returned resources of type ciIssues
   */
  'fields[ciIssues]'?: Array<'issueType' | 'message' | 'fileSource' | 'category'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CiBuildActionListTestResultsParams {
  /**
   * the fields to include for returned resources of type ciTestResults
   */
  'fields[ciTestResults]'?: Array<
    'className' | 'name' | 'status' | 'fileSource' | 'message' | 'destinationTestResults'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface CiBuildActionRetrieveBuildRunParams {
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

CiBuildActions.Relationships = RelationshipsAPIRelationships;

export declare namespace CiBuildActions {
  export {
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
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListArtifactsResponse as RelationshipListArtifactsResponse,
    type RelationshipListIssuesResponse as RelationshipListIssuesResponse,
    type RelationshipListTestResultsResponse as RelationshipListTestResultsResponse,
    type RelationshipRetrieveBuildRunResponse as RelationshipRetrieveBuildRunResponse,
    type RelationshipListArtifactsParams as RelationshipListArtifactsParams,
    type RelationshipListIssuesParams as RelationshipListIssuesParams,
    type RelationshipListTestResultsParams as RelationshipListTestResultsParams,
  };
}
